from django.core.mail import EmailMultiAlternatives
from django.template import loader


def send_mail(subject_template_name, email_template_name,
              context, to_emails, from_email=None):
    """
    Send a django.core.mail.EmailMultiAlternatives to `to_email`.
    """
    subject = loader.render_to_string(subject_template_name, context)
    # Email subject *must not* contain newlines
    subject = ''.join(subject.splitlines())
    body = loader.render_to_string(email_template_name, context)

    email_message = EmailMultiAlternatives(subject, body, from_email, to_emails)
    html_email = loader.render_to_string(email_template_name, context)
    email_message.attach_alternative(html_email, 'text/html')

    email_message.send()
