from django.db import models

class City (models.Model):
    cost_of_living = models.FloatField()
    safety_index = models.FloatField()
    climate_index = models.FloatField()
    city_name = models.CharField(max_length=200)
    health_care_index = models.FloatField()
    country = models.CharField(max_length=200)
    pollution_index = models.FloatField()
    property_price_to_income_ratio = models.FloatField()
    purchasing_power_index = models.FloatField()
    region = models.CharField(max_length=200)
    traffic_commute_time_index = models.FloatField()

    @classmethod
    def create(cls, cost_of_living, safety_index, climate_index, city_name, health_care_index, country, pollution_index, property_price_to_income_ratio, purchasing_power_index, region, traffic_commute_time_index):
        city = cls(cost_of_living = cost_of_living, safety_index = safety_index, climate_index = climate_index, city_name = city_name, health_care_index = health_care_index, country = country, pollution_index = pollution_index, property_price_to_income_ratio = property_price_to_income_ratio, purchasing_power_index = purchasing_power_index, region = region, traffic_commute_time_index = traffic_commute_time_index)
        return city
    
   
    
    








