from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import Dog, Shelter, ContactFormInquiry
from .serializers import DogSerializer, ShelterSerializer, ContactFormSerializer


class DogListCreateView(generics.ListCreateAPIView):
    queryset = Dog.objects.all()
    serializer_class = DogSerializer


class ShelterRegisterView(generics.CreateAPIView):
    queryset = Shelter.objects.all()
    serializer_class = ShelterSerializer


class ContactFormCreateView(generics.CreateAPIView):
    queryset = ContactFormInquiry.objects.all()
    serializer_class = ContactFormSerializer
