# Django special config file, allow Django to comminicate with the web server
"""
WSGI config for adoption_backend project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "adoption_backend.settings")

application = get_wsgi_application()
