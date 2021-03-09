import import_data
import numpy as np
import pandas as pd

class UserInput:
	def __init__(self):

		self.Country = input("Enter a country: ")

		#if Userinput in Country_names:
			# Search for the inputed countrys data in the dataframe

	def Selected_Data():
		pass

	def Checker(self):
	#Create array that stores country names we are using then compare that with user input to see if you can find the data.
	   
		All_Countries = []
		All_Countries.append(import_data.dt["Name"].values)
		#print(type(import_data.dt["Name"]))

		tester = self.Country 
		print(tester)
		#for 
		print(import_data.dt["Name"])
		#O1 = UserInput()
		count = 0
		while count < len(import_data.dt["Name"]):
			if tester in All_Countries[count]: 
				print("woo")
				quit()
			else: 
				print("Sorry you have entered an invalid country name")
				count = count + 1
				#print(count)
			quit()
	

