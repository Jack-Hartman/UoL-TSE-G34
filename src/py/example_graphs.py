import import_data
import user_interact
import matplotlib.pyplot as plt
import numpy as np


def Test_Graph():

	#Get index for graphs
	#print(dt[dt["Name"]=="Sweden"].index.values)s
	#Select specfic row for use in analysis
	Data = import_data.dt["Deaths - cumulative total per 100000 population"]
	Name =  import_data.dt["Name"]
	print(Name)
	X = input().lower()
	#Y = input()
	# Plot countries
	#xpoints = np.array(["Sweden", "United States of America"])
	count = 0
	exist = False
	
	for i in Name:
		if X == i.lower():
			#list.index()
			xpoints = (Name[count], Name[1])
			ypoints = (Data[count], Data[1])	
			exist = True
			break
		else:
			count = count + 1	
			
	if exist:
		plt.bar(xpoints, ypoints)
		plt.savefig('Deaths - cumulative total per 100000 population')
		plt.show()
	else:
		print("youve joed")
		quit()

		
def Infection_Rate_Country():

	Name =  import_data.dt["Name"]

	print("below is test")
	Out = Name.to_json()
	
	print(Out)
	
class Data_To_JSON:
	def __init__(countries, byY):
		# Countries are the country names (should be a list)
		#byY is the comparison, be it deaths, 
		O1 = user_interact.UserInput()
		O1.Checker()

		inputtest = input("Country name mate: ")
		
		#Look familiar? Its from example_graphs.py, it should be fairly similar in concept.
		#Throws all the data for each country (and their corresponding collumn) into a couple of panda.series, which we concat
		#And then return as JSON
		x = []
		xtest = []
		for xin in inputtest:
			x.append(import_data.dt.loc[import_data.dt['Name'] == xin, [byY]]) # Locates precice data in the database for the input
		
		g = pd.concat([inputtest,x]) # Think this'll work?
		g.to_json()#Gonna need to test this
