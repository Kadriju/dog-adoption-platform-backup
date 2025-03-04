from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission


class Shelter(AbstractUser):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    contact_email = models.EmailField(unique=True)
    is_verified = models.BooleanField(default=False)
    groups = models.ManyToManyField(
        Group,
        related_name="shelter_groups",  # Change this to avoid conflict
        blank=True,
        help_text="The groups this user belongs to.",
        related_query_name="shelter",
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="shelter_user_permissions",  # Change this to avoid conflict
        blank=True,
        help_text="Specific permissions for this user.",
        related_query_name="shelter",
    )


class Dog(models.Model):
    name = models.CharField(max_length=255)
    age = models.IntegerField()
    breed = models.CharField(max_length=255)
    size = models.CharField(
        max_length=50,
        choices=[("Small", "Small"), ("Medium", "Medium"), ("Large", "Large")],
    )
    sex = models.CharField(
        max_length=10, choices=[("Male", "Male"), ("Female", "Female")]
    )
    medical_history = models.TextField()
    personality_traits = models.TextField()
    adoption_status = models.CharField(
        max_length=50,
        choices=[
            ("Available", "Available"),
            ("Adopted", "Adopted"),
            ("Pending", "Pending"),
        ],
        default="Available",
    )
    shelter = models.ForeignKey(Shelter, on_delete=models.CASCADE)


class ContactFormInquiry(models.Model):
    dog = models.ForeignKey(Dog, on_delete=models.CASCADE)
    user_name = models.CharField(max_length=255, blank=True, null=True)
    user_email = models.EmailField()
    message = models.TextField()
    submission_date = models.DateTimeField(auto_now_add=True)
