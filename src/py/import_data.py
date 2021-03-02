import numpy as np
import pandas as pd


class Import:
    def Read_File():
        #Reading WHO data-set
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


