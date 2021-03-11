import matplotlib.pyplot as plt
import numpy as np
import import_data
import User_Interact as user_interact
import pandas as pd

def plotData():
    xin = user_interact.Input.Selection() # Takes input
    yin = user_interact.Input.Selection()
    x = import_data.dt.loc[import_data.dt['Name'] == xin, ['Name','Cases - cumulative total']] # Locates precice data in the database for the input
    y = import_data.dt.loc[import_data.dt['Name'] == yin, ['Name','Cases - cumulative total']]
    g = pd.concat([x,y])
    print(g)
    g.plot(kind='bar', title="Comparison", xlabel="Country", ylabel="Cases")
    plt.show()
    #print(type(x))
    #xpoints = np.array([x , y]) # An array of the cases data
    #ypoints = np.asarray([xin, yin]) # Just the names in an array
    #ypoints(x)
    #plt.bar(ypoints, np.cumsum(ypoints)) # Something about arrays, and data types being wrong? Figure it out Joe! Check the debug output 
    #plt.show()
