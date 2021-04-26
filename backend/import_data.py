import numpy as np
import pandas as pd
import json

class WHO_Data_Set:

   
	def __init__(self):
		#Reading WHO data-set
		#series
		global dt
		#self.dt = pd.read_csv('https://covid19.who.int/WHO-COVID-19-global-table-data.csv')

		self.dt = pd.DataFrame(pd.read_csv('https://covid19.who.int/WHO-COVID-19-global-table-data.csv'))
		self.country_list = []

		#pd.DataFrame.reset_index()
		#dt.index(drop=True)
		pd.set_option("display.max_rows", None, "display.max_columns", None)
		# Deletes the "total" data keeping the "in 100,000 ones - may not keep this just idea"
		del self.dt['Cases - newly reported in last 24 hours']
		del self.dt ['Cases - newly reported in last 7 days']
		del self.dt ['Deaths - newly reported in last 24 hours']
		del self.dt ['Deaths - newly reported in last 7 days']
		#  dt.columns = []

		# Prints top five rows of table
		#print(dt.head(5))

	def rtn_dt_json(self):
		return self.dt.to_json(orient = "records", date_format = "epoch", double_precision = 10, force_ascii = True, date_unit = "ms", default_handler = None)
		
	def sortCountries(self, json):
		for i in json:
			self.country_list.append(i["Name"])

	def find_country_index(self, input):
		# This finds the index of the country within the array of json array items.
		# i = 0
		# print('search')
		# print('input')
		# print(input)
		# for x in self.country_list:
		# 	print(x)
		for i in self.country_list:
			if input == i:
				print('yay')
				return input
			else:
				print('nay')

		return 0
			
