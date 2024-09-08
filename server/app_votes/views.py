from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.contrib.contenttypes.models import ContentType
from django.views.decorators.http import require_POST
from django.urls import reverse, reverse_lazy
from .models import Vote
from app_posts.models import Post
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_POST
import json



@require_POST
@login_required
def vote(request):
    user = request.user

    try:
        data = json.loads(request.body)
        content_type_string = data.get('content_type_string')
        object_id = data.get('object_id')
        vote_type = data.get('vote_type')
    except json.JSONDecodeError:
        return JsonResponse({'success': False, 'error': 'Invalid JSON.'}, status=400)

    # Ensure that the content type string is valid
    if content_type_string not in ['answer', 'comment', 'post']:
        return JsonResponse({'success': False, 'error': 'Invalid content type.'}, status=400)

    # Get the ContentType object and the related content object
    try:
        content_type = ContentType.objects.get(model=content_type_string)
        content_object = content_type.get_object_for_this_type(id=object_id)
    except ContentType.DoesNotExist:
        return JsonResponse({'success': False, 'error': 'Invalid content type.'}, status=400)
    except content_type.model_class().DoesNotExist:
        return JsonResponse({'success': False, 'error': 'Content object not found.'}, status=404)

    # Handle the voting logic
    existing_vote = Vote.objects.filter(
        content_type=content_type,
        object_id=object_id,
        voter=user
    ).first()

    if existing_vote:
        if existing_vote.vote_type == int(vote_type):
            existing_vote.delete()
        else:
            existing_vote.vote_type = int(vote_type)
            existing_vote.save()
    else:
        Vote.objects.create(
            voter=user,
            vote_type=int(vote_type),
            content_type=content_type,
            object_id=object_id
        )

    # Calculate the total upvotes and downvotes for the content
    total_upvotes = Vote.objects.filter(
        content_type=content_type,
        object_id=object_id,
        vote_type=Vote.UPVOTE
    ).count()

    total_downvotes = Vote.objects.filter(
        content_type=content_type,
        object_id=object_id,
        vote_type=Vote.DOWNVOTE
    ).count()

    return JsonResponse({
        'success': True,
        'upvotes': total_upvotes,
        'downvotes': total_downvotes,
        'redirect': reverse_lazy('posts:post_list') 
    })

def get_votes_data(request, content_type, object_id):
    # Get the ContentType object for the content type string
    content_type = ContentType.objects.get(model=content_type)

    # Get the content object based on content type and object ID
    content_object = get_object_or_404(content_type.model_class(), id=object_id)

    # After updating the votes, calculate the total upvotes and downvotes
    total_upvotes = Vote.objects.filter(content_type=content_type, object_id=object_id, vote_type=Vote.UPVOTE).count()
    total_downvotes = Vote.objects.filter(content_type=content_type, object_id=object_id, vote_type=Vote.DOWNVOTE).count()

    # Return the vote counts as a JSON response with success, upvotes, and downvotes
    response_data = {
        'success': True,
        'upvotes': total_upvotes,
        'downvotes': total_downvotes
    }
    return JsonResponse(response_data)




