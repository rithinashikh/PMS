from rest_framework.serializers import ModelSerializer
from base.models import Note, Property


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

class PropertySerializer(ModelSerializer):
    class Meta:
        model = Property
        fields = '__all__'
