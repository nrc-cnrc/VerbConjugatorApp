from tree_builder import TreeBuilder
from csv_to_dict import CSVtoDict
from option_builder import OptionBuilder
from JSON_test import TESTS
from tooltip import *
from color_selector import ColourSelector
import sys
import json
from arg_parsing import ArgParsing
from file_read_write import FileReadWrite
from result_builder import ResultBuilder


class DataBuilder:
    
    def __init__(self) -> None:
        self.tree_order = None
        self.conjugation_order = None
        self.JSON_path = "JSON/"
        self.color_path = ""
        self.result = "text"
        self.delimiter = "_"


    def execute(self):
        arguments = ArgParsing()
        input_file, order_file = arguments.argsCheck()

        # If the files should be autoplaced, this is where they go
        if arguments.args.autoplace: 
            self.JSON_path = "../VerbApp/src/assets/JSON/"
            self.colour_path = "../VerbApp/src/theme/"

        # If the order file was provided and populated, extract that information
        if arguments.args.order:
            tree_order, conjugation_order, colour_info = self.prepareInput(order_file)
        # If a tooltips file was requested, create the template
        if arguments.args.tooltip:
            makeToolTips(tree_order, self.JSON_path)
        # If the colors were requested, create the template with default or provided colors.
        if arguments.args.colour:
            # If the colours were provided by the user
            if colour_info:
                # The name of a colour gradient from seaborn was provided
                if len(colour_info) == 1 and "#" not in colour_info[0]:
                    colour_info = colour_info[0]
                ColourSelector(tree_order, self.colour_path,colour_info)
            #otherwise the default will be used
            else:
                ColourSelector(tree_order, self.colour_path)
        self.buildFiles(input_file, tree_order, conjugation_order, self.JSON_path)
        FileReadWrite.reorderJSON(conjugation_order, self.JSON_path)

        if arguments.args.test:
            TESTS.runtests(self.JSON_path)

        print("Complete. See {} folder for output.".format(self.JSON_path))



    def prepareInput(self,order_file:str) -> list:
        """_summary_

        Args:
            order_file (str): _description_

        Returns:
            list: _description_
        """
        conjugation_order = None
        colour_info = None

        # Read the order file, which should have 1-3 entries
        # first entry is the tree order
        order_file = open(order_file, 'r')
        orders = order_file.readlines()
        tree_order = orders[0].strip().split(',')
        tree_order = [x.strip().lower() for x in tree_order]
        # second entry is the conjugation_order (optional)
        if len(orders) >= 2:
            conjugation_order = orders[1].strip().split(',')
            conjugation_order = [x.strip().lower() for x in conjugation_order]
        # Third entry is color information (option)
        if len(orders) >= 3:
            colour_info = orders[2].strip().split(',')
            colour_info = [x.strip().lower() for x in colour_info]

        return tree_order, conjugation_order, colour_info


    def buildFiles(self, input_file, tree_order, conjugation_order, JSON_path):
        '''
        
        '''

        c2d = CSVtoDict(input_file=input_file, order=tree_order)
        dict_list, attr_dict_list = c2d.execute()
        category_tree = TreeBuilder(dict_list, "category_tree.json", tree_order, JSON_path)
        information = OptionBuilder(attr_dict_list, tree_order, JSON_path)

        c2d = CSVtoDict(input_file=input_file, order=conjugation_order)
        dict_list, attr_dict_list = c2d.execute()
        rb = ResultBuilder(attr_dict_list, dict_list,self.result, self.delimiter)
        dict_list,ordered_by = rb.execute()
        print("dict_list[0]",dict_list[0])
        conjugation_order[-1] = ordered_by
        conjugation_tree = TreeBuilder(dict_list, "conjugation.json", conjugation_order, JSON_path)



    








