from tree_builder import TreeBuilder
from csv_to_dict import CSVtoDict
from option_builder import OptionBuilder
import sys
import json


def main():
    tree_order = None
    app_order = None
    conjugation_order = None

    if len(sys.argv) == 1:
        print("Please include required input file")
        exit()
    if len(sys.argv) >= 2:
        try:
            f = open(sys.argv[1], 'r')
            f.close()
        except OSError:
            print("Input file '", sys.argv[1], "' not found")
            exit()
        input_file = sys.argv[1]
        if not input_file.endswith(".csv"):
            print("Input file must be a comma separated file and have the .csv extension")
            exit()
    if len(sys.argv) >= 3:
        tree_order = sys.argv[2]
        if not tree_order.endswith(".csv"):
            print("Selected tree order file must be a csv file (i.e. must have the .csv extension)")
            exit()
        try:
            f = open(tree_order, 'r')
            f.close()
        except OSError:
            print("Order file '", tree_order, "' not found")
            exit()
    
        tree_order_file = open(tree_order, 'r')
        orders = tree_order_file.readlines()
        tree_order = orders[0].strip().split(',')
        if len(orders) >= 2:
            conjugation_order = orders[1].strip().split(',')

    print("Progress [      ]",end='\r')
    c2d = CSVtoDict(input_file=input_file, order=tree_order, app_order=app_order)
    dict_list, attr_dict_list = c2d.execute()
    print("Progress [=>    ]",end='\r')
    tb = TreeBuilder(dict_list, "category_tree.json", tree_order)
    print("Progress [==>   ]",end='\r')
    ob = OptionBuilder(attr_dict_list, app_order)
    print("Progress [===>  ]",end='\r')
    

    c2d = CSVtoDict(input_file=input_file, order=conjugation_order, app_order=app_order)
    dict_list, attr_dict_list = c2d.execute()
    print("Progress [====> ]",end='\r')
    tb = TreeBuilder(dict_list, "conjugation.json", conjugation_order)
    print("Progress [=====>]",end='\r')
    


    with open('JSON/conjugation.json', 'r') as f:
        f_str = f.read()
        d = json.loads(f_str)
        l = [conjugation_order, d]
        f.close()
    with open('JSON/conjugation.json', 'w') as f:
        json.dump(l, f, indent=4)
        f.close()

    print("Progress [======]",end='\r')
    print("Complete. See JSON folder.")




if __name__ == "__main__":
    main()