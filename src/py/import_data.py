import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import import_data


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


