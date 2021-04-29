

import unittest
from example_graphs import *
import example_graphs
import import_data
import numpy as np
import pandas as pd
#import User_Interact

#class testData(unittest.User_Interact)

 #   def test_data(self)
  #      self.assertTrue()

class test_graph(unittest.TestCase):
    
    def test_data(self):
        # Tests it outputs the data_to_json object, as it is turned into raw json later by other processes
        import_data.WHO_Data_Set()
        f = example_graphs.Data_To_JSON(["India"], "Cases - cumulative total")
        self.assertIsInstance(f, Data_To_JSON) #  fixxx

    def test_durable(self):
        #This should fail
        self.assertRaises(IndexError, Data_To_JSON(["Mars"], "Cases - cumulative total")) 
