from django.shortcuts import render
from rest_framework import viewsets
from .models import Noticia
from .serializers import NoticiaSerializer

class NoticiaViewSet(viewsets.ModelViewSet):
  queryset = Noticia.objects.order_by('-data_publicacao', '-id')
  serializer_class = NoticiaSerializer
