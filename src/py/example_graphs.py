import import_data
import User_Interact
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
	

class Data_To_JSON: #Passes data as a json
    def __init__(self, countries, byY):
        # Countries are the country names (should be a list)
        #byY is the comparison, be it deaths, 

        #Look familiar? Its from example_graphs.py, it should be fairly similar in concept.
        #Throws all the data for each country (and their corresponding collumn) into a couple of panda.series, which we concat
        #And then return as JSON

        x = []
        for xin in countries:
            x.append(import_data.dt.loc[import_data.dt['Name'] == xin, [byY]].values) # Locates precice data in the database for the input
            print(x)
        print("aaaaa")
        print(x)
        # At the moment it adds an extra column name for each item int he list, need to delete that
        
        temp = pd.Series(x)

        g = pd.concat([pd.Series(countries),temp], axis=1, join="inner") # Think this'll work?
        print("aaaa")
        print(g)
        #g.reset_index(drop=True, inplace=True)
        g.to_json()#Gonna need to test this
        print(g.to_json())

