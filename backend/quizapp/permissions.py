# quiz_app/permissions.py
from rest_framework import permissions

class IsQuizOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user_id == request.user
