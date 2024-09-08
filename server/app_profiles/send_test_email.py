# app_profiles/management/commands/send_test_email.py

from django.core.management.base import BaseCommand
from django.core.mail import send_mail

class Command(BaseCommand):
    help = 'Sends a test email to verify email sending functionality.'

    def handle(self, *args, **options):
        try:
            send_mail(
                'Test Email Subject',
                'This is a test email message.',
                'tech@revenuehive.io',
                ['albavmolinanyc@gmail.com'],
                fail_silently=False,
            )
            self.stdout.write(self.style.SUCCESS('Test email sent successfully.'))
        except Exception as e:
            self.stdout.write(self.style.ERROR(f'Error sending test email: {e}'))
