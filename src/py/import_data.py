import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


class WHO_Data_Set:
    def __init__(self):
        global dt
        #Reading WHO data-set
        #series
        dt = pd.read_csv('https://covid19.who.int/WHO-COVID-19-global-table-data.csv')
        pd.set_option("display.max_rows", None, "display.max_columns", None)
        # Deletes the "total" data keeping the "in 100,000 ones - may not keep this just idea"
        del dt['Cases - newly reported in last 24 hours']
        del dt ['Cases - newly reported in last 7 days']
        del dt ['Deaths - newly reported in last 24 hours']
        del dt ['Deaths - newly reported in last 7 days']
        #  dt.columns = []

        # Prints top five rows of table
        print(dt.head(5))

    # Test/Example Graphs
    def Test_Graph():
        
        #Get index for graphs
        #print(dt[dt["Name"]=="Sweden"].index.values)s    
        #Select specfic row for use in analysis
        Data = dt["Deaths - cumulative total per 100000 population"]
        Name = dt["Name"]
        print(Data)
        
        # Plot countries 
        #xpoints = np.array(["Sweden", "United States of America"])
        xpoints = (Name[29], Name[1])
        ypoints = (Data[29], Data[1]) 

        #could potentially add a user input system for this? for example
            #X = input()
            #Name[X]
        #give the user a command that lists all the countries and their index's

        plt.bar(xpoints, ypoints)
        plt.savefig('Deaths - cumulative total per 100000 population')
        plt.show()




