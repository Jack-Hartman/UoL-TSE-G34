# This class is to structure the default http get request in the 
# application
import json

class Default_JSON_Data:

    def __init__(self, inp_global, inp_home, inp_region_data):
        # self.continent_data = inp_continent
        self.home_data = inp_home
        self.global_data = inp_global
        self.region_data = inp_region_data

    
