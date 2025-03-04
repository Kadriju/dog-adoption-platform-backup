from rest_framework import serializers
from .models import Dog, Shelter, ContactFormInquiry


class DogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dog
        fields = "__all__"


class ShelterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shelter
        fields = ["id", "username", "name", "location", "contact_email"]


class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactFormInquiry
        fields = "__all__"
