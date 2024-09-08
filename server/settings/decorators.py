from django.shortcuts import redirect
from app_profiles.models import Profile

def questionnaire_completed_required(view_func):
    def _wrapped_view(request, *args, **kwargs):
        user_profile = Profile.objects.get_or_create(user=request.user)[0]
        if not user_profile.has_completed_questionnaire:
            return redirect('profiles:questionnaire')
        return view_func(request, *args, **kwargs)

    return _wrapped_view