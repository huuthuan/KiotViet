from rest_framework import serializers


class RecursiveField(serializers.Serializer):
    def to_representation(self, value):
        serializer = self.parent.parent.__class__(value, context=self.context)
        return serializer.data


def get_or_none(cls, **filter):
    try:
        return cls.objects.get(**filter)
    except Exception as e:
        return None


def get_message_from_exception(e: Exception):
    try:
        return e.detail
    except Exception as e:
        return {'error': 'An error has occurred. Please try again.'}
