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
		print(Data)
		
		# Plot countries 
		#xpoints = np.array(["Sweden", "United States of America"])
		xpoints = (Name[29], Name[1])
		ypoints = (Data[29], Data[1]) 

		#could potentially add a user input system for this? for example
			#X = input()/
			#Name[X]
		#give the user a command that lists all the countries and their index's

		plt.bar(xpoints, ypoints)
		plt.savefig('Deaths - cumulative total per 100000 population')
		plt.show()


