import json
import os, re
import sys

class OptionBuilder:

    def __init__(self, attr_dict_list, app_order, path):
        """
        Class creates individual JSON files containing all elements of the individual options, 
        with no duplicates

        Args:
            dict_list (list): List of dictionaries 
        """

        self.attr_dict_list = attr_dict_list
        self.attrs = {}
        self.app_order = app_order
        self.path = path
        self.removeDupes()
        self.writeAttr()


    def removeDupes(self):
        """
        Removes duplicates by adding each element to its respective dictionary attr set
        """
        
        for key in self.attr_dict_list[0].keys():
            self.attrs[key] = set()

        for d in self.attr_dict_list:
            for attr in d:
                self.attrs[attr].add(tuple(d[attr].items()))

        for key in self.attrs:
            temp = [dict(t) for t in self.attrs[key]]
            self.attrs[key] = temp
        

    def writeAttr(self):
        """
        Creates each file using the attr dictionary where each key has a set of unique values.
        Files are saved to the 'data' folder.
        """
        if not os.path.exists(self.path):
            os.makedirs(self.path)
        major_output_file = self.path+"information.json"
        major = {}
        for attr in self.attrs:
            if self.app_order:
                if attr not in self.app_order:
                    continue
            tojson = {"name":attr, "children":[]}
            for value in self.attrs[attr]:
                tojson["children"].append(value)
            newlist = sorted(tojson["children"], key=lambda k: k['id']) 
            tojson["children"] = newlist

            re_ordered = self.orderOptions(tojson)

            major[attr] = re_ordered

        if self.app_order:
            temp = []
            for d in self.app_order:
                temp.append(major[d])
            major = temp
        else:
            major = list(major.values())

        with open(major_output_file, 'w') as json_file:
            json.dump(major, json_file,indent=4,ensure_ascii=False)


    def orderOptions(self, attrdicts, orders=None):
        orders = {"concept":
        ["none1sg", "ni3sg1sg", "vaitni3sg1sg", "1sg3sg", 
        "none2sg", "ni3sg2sg", "vaitni3sg2sg", "2sg3sg",
        "none3sg", "ni3sg3sg", "vaitni3sg3sg", "3sg3'",
        "none1pl", "ni3sg1pl", "vaitni3sg1pl", "1pl3sg",
        "none2pl", "ni3sg2pl", "vaitni3sg2pl", "2pl3sg",
        "none3pl", "ni3sg3pl", "vaitni3sg3pl", "3pl3'",
        "none2i", "ni3sg2i", "vaitni3sg2i", "2i3sg",
        "none3'", "ni3sg3'","vaitni3sg3'", "3'3'",
        "onone", "opnone", "o'none", "o'pnone"]
        }

        if attrdicts["name"] in orders:
            neworder = []
            for id in orders[attrdicts["name"]]:
                for obj in range(len(attrdicts["children"])):
                    if attrdicts["children"][obj]["id"] == id:
                        neworder.append(attrdicts["children"].pop(obj))
                        break
            neworder += attrdicts["children"]
            attrdicts["children"] = neworder
        if attrdicts["name"] == "verb":
            attrdicts["children"] = sorted(attrdicts["children"], key=lambda d: d['base']) 

        return attrdicts
       