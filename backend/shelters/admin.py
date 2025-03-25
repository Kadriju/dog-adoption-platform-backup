# Allows to register database models to the admin site
from django.contrib import admin
from .models import Shelter, Dog, ContactFormInquiry

admin.site.register(Shelter)
admin.site.register(Dog)
admin.site.register(ContactFormInquiry)
