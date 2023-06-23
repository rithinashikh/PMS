from django.contrib import admin

# Register your models here.

from .models import Note, Property


admin.site.register(Note)
admin.site.register(Property)
