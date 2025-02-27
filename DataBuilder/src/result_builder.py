


class ResultBuilder:

    def __init__(self,attr_dict_list:list,dict_list:list,result_name,delimiter=None) -> None:
        self.attr_dict_list = attr_dict_list
        self.dict_list = dict_list
        self.result_name = result_name
        self.delimiter = delimiter


    def execute(self):
        formatted, ordered_by = self.build_items()
        formatted = self.combine_items(formatted)
        return formatted
    

    def build_items(self):
        ordered_by = list(self.attr_dict_list[0][self.result_name].keys())
        if "id" in ordered_by and len(ordered_by)>1: ordered_by.remove("id")
        ordered_by = tuple(ordered_by)
        formatted = dict()
        for attr in self.attr_dict_list:
            id = attr[self.result_name]["id"]
            formatted[id] = [""]*len(ordered_by)
            for a in attr[self.result_name]:
                if a != "id":
                    formatted[id][ordered_by.index(a)] = attr[self.result_name][a].split(self.delimiter)
            if len(formatted[id]) == 0:
                formatted[id] = [id]

        # formatted["ordered_by"] = ordered_by

        return formatted,ordered_by
    
    def combine_items(self,formatted:dict):
        format = True
        for id in formatted:
            if len(formatted[id]) < 2:
                format = False
            length = len(formatted[id][0])
            for item in formatted[id]:
                if len(item) != length:
                    format = False
                  
  
        if format:
            for id in formatted:
                result_list = []
                length = len(formatted[id][0])
                for i in range(length):
                    r = []
                    for j in formatted[id]:
                        r.append(j[i])
                    result_list.append(r)
                formatted[id] = result_list

        return formatted