
# Create a logger
# logger = logging.getLogger(__name__)

# @require_POST
# @login_required
# def vote(request):
#     user = request.user

#     # Parse JSON data from the request body
#     try:
#         data = json.loads(request.body)
#         vote_type = data.get('vote_type')
#         content_type = data.get('content_type')
#         object_id = data.get('object_id')
        
#         # Log the received JSON data for debugging
#         logger.debug("Received JSON data: %s", data)
#     except json.JSONDecodeError:
#         # Log the JSON decode error for debugging
#         logger.error("Invalid JSON data received: %s", request.body)
#         return JsonResponse({'success': False, 'error': 'Invalid JSON.'})

    # Rest of your view logic...