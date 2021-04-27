

import unittest
from example_graphs import *
import import_data
import numpy as np
import pandas as pd

#import User_Interact

#class testData(unittest.User_Interact)

 #   def test_data(self)
  #      self.assertTrue()


# For Import
# Test data is imported, 
# test it is accurate
# 
# For example_graphs
# Test it is collecting expected information
# Test for bogus entries (ask for data from mars or something)
class test_graph(unittest.TestCase):
    
    #def test_data(self):
        # Will have a value if it has fetched the dataset

    def test_durable(self):
        self.assertRaises(TypeError, Data_To_JSON(["India"], "Cases - cumulative total")) 
