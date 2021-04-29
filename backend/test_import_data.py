

import unittest
from import_data import *
import numpy as np
import pandas as pd

#import User_Interact

#class testData(unittest.User_Interact)

 #   def test_data(self)
  #      self.assertTrue()

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
        f = str(temp.loc[temp['Name'] == 'Global', 'WHO Region'].values)
        #str(f)
        g = str([float("NAN")])
        self.assertEqual(f, g) # Expecting NAN as the square is blank, changed to string for simplicity in conversion
