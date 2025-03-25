from rest_framework import serializers
from .models import Shelter, Dog, ContactFormInquiry


class ShelterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shelter
        fields = "__all__"  # Serialize all fields in the Shelter model


class DogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dog
        fields = "__all__"  # Serialize all fields in the Dog model


class ContactFormInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactFormInquiry
        fields = "__all__"  # Serialize all fields in the ContactFormInquiry model
