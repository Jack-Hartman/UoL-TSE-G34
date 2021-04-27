

import unittest
from example_graphs import *
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
class test_data_return(unittest.TestCase):
    
    def test_runs(self):
        # Will have a value if it has fetched the dataset
        temp = WHO_Data_Set()
        self.assertIsNotNone(temp)

    def test_accurte1(self):
        temp = WHO_Data_Set().showDT()
        self.assertTrue(temp.size >= 239)
    
    def test_accurate2(self):
        # Find the blank value for the global who region
        temp = WHO_Data_Set().showDT()
        f = temp.loc[temp['Name'] == 'Global', 'WHO Region'].to_json
        str(f)
        g = '{"0":{"0":"Global"}},"1":{"0":[""]}}'
        self.assertEqual(f, g) 
