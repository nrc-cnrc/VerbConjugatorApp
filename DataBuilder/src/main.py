from tree_builder import TreeBuilder
from csv_to_dict import CSVtoDict
from option_builder import OptionBuilder
from JSON_test import TESTS
from tooltip import *
from color_selector import ColourSelector
import sys
import json, argparse


def main():
    tree_order = None
    conjugation_order = None

    args = parseArgs()
    input_file, order_file = argsCheck(args)
    
    if args.autoplace:
        JSON_path = "../VerbApp/src/assets/JSON/"
        colour_path = "../VerbApp/src/theme/"
    else:
        JSON_path = "JSON/"
        colour_path = ""
    if args.order:
        tree_order, conjugation_order, colour_info = prepareInput(order_file)
    if args.tooltip:
        makeToolTips(tree_order, JSON_path)
    if args.colour:
        if colour_info:
            if len(colour_info) == 1 and "#" not in colour_info[0]:
                colour_info = colour_info[0]
            ColourSelector(tree_order, colour_path,colour_info)
        else:
            ColourSelector(tree_order, colour_path)


    buildFiles(input_file, tree_order, conjugation_order, JSON_path)
    reorderJSON(conjugation_order, JSON_path)


    print("Complete. See {} folder for output.".format(JSON_path))
    if args.test:
        TESTS.runtests(JSON_path)


def parseArgs():
    '''
    
    '''


    parser = argparse.ArgumentParser()

    parser.add_argument("-f","--file_input", dest="input_file", help="Input file containing language model", required=True)
    parser.add_argument("-o", "--order", dest="order", help="In-app category order")
    parser.add_argument("-tt", "--tooltip", dest="tooltip", default=False, help="Autogenerate tooltip json file", action="store_true")
    parser.add_argument("-c", "--colour", dest="colour", default=False, help="Autogenerate colours in scss file", action="store_true")
    parser.add_argument("--auto-place", dest="autoplace", default=False, help="Automatically places variable.scss and JSON folders in correct paths", action="store_true")
    parser.add_argument("--test", dest="test", default=False, help="Runs basic tests about the created JSON files.", action="store_true")

    args = parser.parse_args()

    return args
    

def argsCheck(args):
    '''
    
    '''

    order_file = None
    args.input_file = args.input_file.strip()


    try:
        f = open(args.input_file, 'r')
        f.close()
    except OSError:
        print("Input file '{}' not found".format(args.input_file))
        exit()
    input_file = args.input_file

    if not input_file.endswith(".csv"):
            print("Input file '{}' have comma seperated values and a .csv extension".format(input_file))
            exit()

    if args.order:
        order_file = args.order
        try:
            f = open(order_file, 'r')
            f.close()
        except OSError:
            print("Order file '{}' not found".format(order_file))
            exit()
        
        if not order_file.endswith(".csv"):
            print("Order file '{}' have comma seperated values and a .csv extension".format(order_file))
            exit()
        
    return input_file, order_file


def prepareInput(order_file):
    '''
    
    '''
    conjugation_order = None
    colour_info = None

    order_file = open(order_file, 'r')
    orders = order_file.readlines()
    tree_order = orders[0].strip().split(',')
    tree_order = [x.strip().lower() for x in tree_order]
    if len(orders) >= 2:
        conjugation_order = orders[1].strip().split(',')
        conjugation_order = [x.strip().lower() for x in conjugation_order]
    if len(orders) >= 3:
        colour_info = orders[2].strip().split(',')
        colour_info = [x.strip().lower() for x in colour_info]

    return tree_order, conjugation_order, colour_info


def buildFiles(input_file, tree_order, conjugation_order, JSON_path):
    '''
    
    '''

    c2d = CSVtoDict(input_file=input_file, order=tree_order)
    dict_list, attr_dict_list = c2d.execute()
    tb = TreeBuilder(dict_list, "category_tree.json", tree_order, JSON_path)
    ob = OptionBuilder(attr_dict_list, tree_order, JSON_path, case="l")

    c2d = CSVtoDict(input_file=input_file, order=conjugation_order)
    dict_list, attr_dict_list = c2d.execute()
    tb = TreeBuilder(dict_list, "conjugation.json", conjugation_order, JSON_path, case="l")


def reorderJSON(conjugation_order, path):
    '''
    
    '''
    with open(path+'conjugation.json', 'r') as f:
        f_str = f.read()
        d = json.loads(f_str)
        l = [conjugation_order, d]
        f.close()
    with open(path+'conjugation.json', 'w') as f:
        json.dump(l, f, indent=4)
        f.close()


if __name__ == "__main__":
    main()