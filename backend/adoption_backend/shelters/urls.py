# Different url routes and connect them to the views

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ShelterViewSet, DogViewSet, ContactFormInquiryViewSet

router = DefaultRouter()
router.register(r"shelters", ShelterViewSet)
router.register(r"dogs", DogViewSet)
router.register(r"inquiries", ContactFormInquiryViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
