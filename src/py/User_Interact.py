import import_data
import numpy as np
import pandas as pd

class Input:
    def __init__ (self, Country):
        self.Country = Country

    # Use inheritence - base "selection" class child classes "Select single country", "Select multiple countrys"
    def Selection():

        print('Select a country') 
        Userinput = input()    
        C1 = Input(Userinput)
        print(Userinput)

        #if Userinput in Country_names:
            # Search for the inputed countrys data in the dataframe
        return Userinput




#class Check:
   #def Checker():
    #Create array that stores country names we are using then compare that with user input to see if you can find the data.
    #    global Country_names
     #   Country_names = ["United States", "United kingdom" ]
        #if user input = valid 'Country_names' then
        #pass
        # else fail

