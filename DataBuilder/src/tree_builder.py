import itertools
import re, os
import sys
import json
import numpy

class TreeBuilder:

    def __init__(self, input_dict, output_file, keys, path, case="l"):
        """Class takes a list of dictionaries and creates a tree data structure through dictionaries.
        Calls tree builder function.

        Args:
            input_dict (list): List of dictionaries
            output_file (str): Tree output file name
            keys (list): List of key names, if user specified
        """
        self.input_dict = input_dict
        self.output_file = output_file
        self.keys = keys
        self.path = path
        self.case = "s"
        self.toTree()
        self.duplicates = set()
        

    def toTree(self):
        """
        Function does the following:
        1. Ensures that the tree order submitted is valid
        2. Calls tree builder function
        3. Writes tree to output file
        """
        tree = {}
        if not self.keys:
            self.keys = list(self.input_dict[0].keys())
        if len(self.keys) == 1:
            tree = []
        for verb in self.input_dict: # Going through each dictionary in new list
            self.recursiveTree(tree, verb, 0)

        if not os.path.exists(self.path):
            os.makedirs(self.path)

        self.output_file = self.path + self.output_file
        with open(self.output_file, 'w') as json_file:
            json.dump(tree, json_file, sort_keys=True)

        return


    def recursiveTree(self, tree, verb, index):
        """
        Recursively creates a Tree data structure for the given data, in the given order.

        Args:
            tree (dict or list): Tree at different levels, list if it's the last level.
            verb (dict): Dictionary that contains a line from the original csv
            index (int): Index of position of keys array, denoting which level of the tree is current

        Returns:
            None
        """
        
        if verb[self.keys[index]] not in tree: # If this node is not currently at this level, add it
            if index == (len(self.keys) - 1): # if current level is the last level
                if self.case == "u":
                    base = verb[self.keys[index]].upper()
                elif self.case == "t":
                    base = verb[self.keys[index]][0].upper()+verb[self.keys[index]][1:]
                else:
                    base = verb[self.keys[index]]
                
                # if len(tree) != 0 and "text" in verb:
                #     if verb["text"].startswith("ê-"):
                #         if not (tree[0].startswith("ki") or tree[0].startswith("ni")) and "2" in verb['concept']:
                #             tree.insert(0, base)
                #         else:
                #             tree.insert(1,base)
                #     elif not (base.startswith("ki") or base.startswith("ni")) and "2" in verb['concept']:
                #         tree.append(base)
                #     else:
                #         tree.insert(0,base)
                    
                        
                # else:
                # if "text" in verb:
                #     if not base.startswith("<SPAN>"):
                #         base = base[0].upper() + base[1:].lower()

                tree.append(base) # add it to the last level list
                # tree.sort()
                
                return # move on to next verb

            elif index == (len(self.keys) - 2): # else if current level is second last level
                tree[verb[self.keys[index]]] = [] # add it to dictionary with empty list value (i.e. the last level)

            else: # if any other level
                tree[verb[self.keys[index]]] = {} # add it to dictionary with empty dictionary value for the next level.

        if index < (len(self.keys) - 1):
            self.recursiveTree(tree[verb[self.keys[index]]], verb, index+1) #if this node *is* at the current level, check if next node is at next level.
        
        return 
