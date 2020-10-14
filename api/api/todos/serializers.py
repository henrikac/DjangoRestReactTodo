from rest_framework import serializers

from .models import Todo


class TodoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'
        read_only_fields = ('completed', 'added_at', 'completed_at')

