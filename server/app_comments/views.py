from django.shortcuts import render, get_object_or_404, redirect
from django.template.loader import render_to_string
from django.http import JsonResponse, HttpResponse
from django.contrib.contenttypes.models import ContentType
from django.urls import reverse, reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from app_posts.models import Post
from app_comments.models import Comment, Answer
from .forms import CommentForm, AnswerForm
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.core.serializers import serialize


def answer_create(request, post_id):
    if request.method == 'POST':
        form = AnswerForm(request.POST)
        if form.is_valid():
            answer = form.save(commit=False)
            answer.author = request.user
            answer.post_id = post_id
            answer.save()
            return redirect('posts:post_list')
        else:
            # Render the template with the form and its errors
            return render(request, 'post_list.html', {'form': form})

    # Handle GET request or other cases
    return render(request, 'post_list.html')

class AnswerUpdate(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Answer
    form_class = AnswerForm
    template_name = 'post_list.html'

    def test_func(self):
        return self.get_object().author == self.request.user

    def handle_no_permission(self):
        print("User does not have permission to update this answer")
        return super().handle_no_permission()

    def get_success_url(self):
        # Get the answer object
        answer = self.object
        # Redirect to the post detail page with the correct post ID
        return reverse_lazy('posts:post_list')


class AnswerDelete(LoginRequiredMixin, DeleteView):
    model = Answer
    template_name = 'answer_delete.html'

    def get_success_url(self):
        # Redirect to the post list page
        return reverse('posts:post_list')

    def delete(self, request, *args, **kwargs):
        # Get the answer object before it's deleted
        answer = self.get_object()
        # Delete the answer
        success_url = self.get_success_url()
        answer.delete()
        return redirect(success_url)



def load_more_answers(request, post_id, offset):
    # Get the post
    this_post = Post.objects.filter(id=post_id).first()

    # Serialize the answers with additional fields
    serialized_answers = []

    if this_post:
        # Loop through the answers associated with the post
        for answer in this_post.answers.all()[offset:]:
            serialized_answer = {
                'post_id': this_post.id,
                'id': answer.id,
                'author': answer.author.username,
                'image': answer.author.profile.image.url if hasattr(answer.author, 'profile') and hasattr(answer.author.profile, 'image') else None,
                'content': answer.content,
                'created_at': answer.created_at,
                'updated_at': answer.updated_at,
                'comments': [{'id': comment.id,'author': comment.author.username, 'content': comment.content, 'created_at': comment.created_at, 'image': comment.author.profile.image.url, "upvote_count": comment.upvote_count(), "downvote_count": comment.downvote_count()} for comment in answer.comment_set.all()],
                'upvote_count': answer.upvote_count(),
                'downvote_count': answer.downvote_count()
            }
            serialized_answers.append(serialized_answer)

    # Pass the name of the current logged in user to the front end so we can use that in conditionals.
    current_user = request.user.username
    response_data = {'answers': serialized_answers, 'current_user': current_user}

    # Return a JsonResponse with the serialized answers and user authentication status
    return JsonResponse(response_data)


def comment_create(request, post_id, answer_id):
    # Assuming Answer model is in app_posts
    answer = get_object_or_404(Answer, id=answer_id, post_id=post_id)

    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.author = request.user
            comment.answer = answer
            comment.save()
            return redirect('posts:post_list')
    else:
        form = CommentForm()

    return render(request, 'post_list.html', {'form': form})

# def comment_create(request, post_id, answer_id):
#     post = get_object_or_404(Post, id=post_id)
#     answer = get_object_or_404(Answer, id=answer_id)

#     if request.method == 'POST':
#         form = CommentForm(request.POST)
#         if form.is_valid():
#             comment = form.save(commit=False)
#             comment.author = request.user
#             comment.answer = answer
#             comment.save()

#             if request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest':
#                 form_html = render_to_string('comment_form.html', {'post': post, 'form': CommentForm()})
#                 return JsonResponse({'form_html': form_html})
#             else:
#                 return redirect('posts:post_detail', post_id=post.id)  # Redirect to post_detail view
#     else:
#         form = AnswerForm()

#     return render(request, 'comment_form.html', {'post': post, 'form': form, 'answer': answer})

class CommentUpdate(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Comment
    form_class = CommentForm
    template_name = 'comment_update.html'

    def test_func(self):
        return self.get_object().author == self.request.user

    def handle_no_permission(self):
        print("User does not have permission to update this comment")
        return super().handle_no_permission()

    def get_success_url(self):
        # Get the answer object
        answer = self.object
        # Redirect to the post detail page with the correct post ID
        return reverse_lazy('posts:post_list')

class CommentDelete(LoginRequiredMixin, DeleteView):
    model = Comment
    template_name = 'comment_delete.html'

    def get_success_url(self):
        # Get the comment object
        comment = self.object
        # Redirect to the post detail page with the correct post ID
        # return reverse_lazy('posts:post_detail', kwargs={'post_id': comment.answer.post.id})
        return reverse_lazy('posts:post_list')


    def delete(self, request, *args, **kwargs):
        # Get the comment object before it's deleted
        comment = self.get_object()
        # Delete the comment
        self.object = comment
        success_url = self.get_success_url()
        comment.delete()
        return redirect(success_url)


# get_data View: This view is designed to fetch detailed data for a specific post, including its answers, comments, and replies, and return it in a JSON format. This is useful for AJAX calls where you want to dynamically update the frontend.
def get_data(request, post_id):
    post = get_object_or_404(post, id=post_id)

    # Fetch all answers for the post along with their comments and replies
    answers_data = []
    for answer in post.answers.all():
        comments_and_replies = Comment.objects.filter(
            content_type=ContentType.objects.get_for_model(Answer),
            object_id=answer.id,
        ).prefetch_related('replies')

        comments_data = []
        for comment in comments_and_replies:
            replies_data = [
                {
                    'content': reply.content,
                    'author': reply.author.username,
                }
                for reply in comment.replies.all()
            ]

            comments_data.append({
                'content': comment.content,
                'author': comment.author.username,
                'replies': replies_data,
            })

        answers_data.append({
            'content': answer.content,
            'author': answer.author.username,
            'comments': comments_data,
        })

    data = {
        'post': {
            'title': post.title,
            'content': post.content,
            'author': post.author.username,
            # 'tags': [tag.name for tag in post.tags.all()],
        },
        'answers': answers_data,
    }
    print(answer)
    print(comment)
    print(post)
    return JsonResponse(data)


#TODO: Create views for AnswerUpdate, AnswerDelete & CommentUpdate, CommentDelete