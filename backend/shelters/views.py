# Django viewsets for the shelters app that we can access via on website
from django.shortcuts import render
from rest_framework import viewsets
from .models import Shelter, Dog, ContactFormInquiry
from .serializers import ShelterSerializer, DogSerializer, ContactFormInquirySerializer


# ViewSet for managing Shelter objects
class ShelterViewSet(viewsets.ModelViewSet):
    queryset = Shelter.objects.all()
    serializer_class = ShelterSerializer


# ViewSet for managing Dog objects
class DogViewSet(viewsets.ModelViewSet):
    queryset = Dog.objects.all()
    serializer_class = DogSerializer


# ViewSet for managing ContactFormInquiry objects
class ContactFormInquiryViewSet(viewsets.ModelViewSet):
    queryset = ContactFormInquiry.objects.all()
    serializer_class = ContactFormInquirySerializer
