from django.template import loader

from django.http import HttpResponse, JsonResponse

from . import models

from django.shortcuts import get_object_or_404

from django.core import serializers



def home(request):
    template = loader.get_template('home.html')
    return HttpResponse(template.render({}, request))

def get_city(request, city_id):
    # requested_city = get_object_or_404(models.City, pk=city_id)
    # print(requested_city.city_name)

    # data = [{
    #    "key": 1,
    #    "city_id": 1,
    #    "indexName": 'quality_of_life_index',
    #    "value": 50,
    #  }]

    # data = models.City.objects.all()

    data = models.City.create(0.5, 0.3, 3.4, "Brest", 12, "Belarus", 2, 1.2, 0.3, "Europe", 0.1)

    city_as_dictionary = serializers.serialize("json", [data])
    return HttpResponse(city_as_dictionary)

def search(request):
    template = loader.get_template('main.html')
    return HttpResponse(template.render({}, request))






