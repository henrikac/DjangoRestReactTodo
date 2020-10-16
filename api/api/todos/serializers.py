from rest_framework import serializers

from .models import Todo


class TodoSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = Todo
        fields = '__all__'
        read_only_fields = ('id', 'added_at')

