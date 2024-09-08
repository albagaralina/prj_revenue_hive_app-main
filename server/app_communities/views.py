from django.views.generic import ListView
from app_posts.models import Post
from app_communities.models import Hive
from django.shortcuts import get_object_or_404


# TODO: pass the Post model into the hive.html view
class HivePostsView(ListView):
    model = Post
    template_name = 'hive.html'
    context_object_name = 'posts'

    def get_queryset(self):
        hive_id = self.kwargs['hive_id']
        hive = get_object_or_404(Hive, id=hive_id)

        return Post.objects.filter(hive=hive)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        hive_id = self.kwargs['hive_id']
        hive = Hive.objects.get(id=hive_id)
        context['hive'] = hive
        return context
