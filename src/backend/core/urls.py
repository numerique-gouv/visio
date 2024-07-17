"""URL configuration for the core app."""
from django.conf import settings
from django.urls import include, path

from rest_framework.routers import DefaultRouter

from core.api import viewsets
from core.authentication.urls import urlpatterns as oidc_urls

# - Main endpoints
router = DefaultRouter()
router.register("users", viewsets.UserViewSet, basename="users")
router.register("rooms", viewsets.RoomViewSet, basename="rooms")
router.register(
    "resource-accesses", viewsets.ResourceAccessViewSet, basename="resource_accesses"
)

urlpatterns = [
    path(
        f"api/{settings.API_VERSION}/",
        include(
            [
                *router.urls,
                *oidc_urls,
                path("invite/", viewsets.invite, name="invite")
            ]
        ),
    ),
]
