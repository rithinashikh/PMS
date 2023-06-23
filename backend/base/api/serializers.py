from rest_framework.serializers import ModelSerializer
from base.models import Property

class PropertySerializer(ModelSerializer):
    class Meta:
        model = Property
        fields = '__all__'
