


class ResultBuilder:

    def __init__(self,attr_dict_list:list,dict_list:list,result_name,delimiter=None) -> None:
        self.attr_dict_list = attr_dict_list
        self.dict_list = dict_list
        self.result_name = result_name
        self.delimiter = delimiter


    def execute(self):
        formatted, ordered_by = self.build_items()
        self.combine(formatted,ordered_by)
        return self.dict_list,ordered_by
    

    def build_items(self):
        ordered_by = tuple(self.attr_dict_list[0][self.result_name].keys())
        formatted = dict()
        for attr in self.attr_dict_list:
            id = attr[self.result_name]["id"]
            formatted[id] = [""]*len(ordered_by)
            for a in attr[self.result_name]:
                formatted[id][ordered_by.index(a)] = attr[self.result_name][a].split(self.delimiter)
            
        return formatted,ordered_by
    

    def combine(self,formatted:dict,ordered_by:tuple):
        for d in self.dict_list:
            result = formatted[d[self.result_name]]
            d[ordered_by] = result

        return