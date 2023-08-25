# quiz_app/permissions.py
from rest_framework import permissions

class IsQuizOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user_id == request.user

class IsContentCreatorOrReadOnly(permissions.BasePermission):
     def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.user_type == 'content_creator'
