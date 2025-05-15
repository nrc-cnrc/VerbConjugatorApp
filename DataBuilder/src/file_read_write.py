import csv, json

class FileReadWrite:

    @staticmethod
    def read_json(path:str):
        """Reads json (or jsonl) file and builds and returns list of dictionaries.

        Args:
            path (str): path to json/jsonl file to be read

        Returns:
            list(dict): list of dictionaries of json file.
        """
        with open(path, "r") as f:
            if path.endswith("l"):
                json_data = [json.loads(line.strip()) for line in f.readlines()]
            else:
                json_data = json.load(f)
        return json_data
    

    @staticmethod
    def write_json(path:str, data):
        """Writes json (or jsonl) file.

        Args:
            path (str): path to json/jsonl file to be read

        Returns:
            None
        """
        with open(path, "w") as f:
            json.dump(data, f)



    @staticmethod
    def read_dsv(path:str):
        """Creates a list of dictionaries from a specified-delimiter separated value file.
        Input:
            path (str): path to dsv file to be read

        Returns:
            xsv_data (list): list of dictionaries
        """
        delimiters = {"c":",", "p":"|", "t":"\t"}
        delimiter = delimiters[path[-3]]
        with open(path, "r") as psv:
            xsv_data = list(csv.DictReader(psv, delimiter=delimiter))
        return xsv_data
    

    @staticmethod
    def write_dsv(path:str, data):
        """
        Creates and writes data to dsv file. Delimiter is inferred from path.

        Input:
            path (str): path of file that will be created and written to.
            data (list(dict)): list of dictionaries that will be written to new file.

        """
        keys = list(data[0].keys())
        delimiters = {"c":",", "p":"|", "t":"\t"}
        delimiter = delimiters[path[-3]]
        with open(path, "w") as file:
            dict_writer = csv.DictWriter(file, keys, delimiter=delimiter)
            dict_writer.writeheader()
            dict_writer.writerows(data)

    @staticmethod
    def reorderJSON(conjugation_order, path):
        '''
        
        '''
        with open(path+'conjugation.json', 'r') as f:
            f_str = f.read()
            d = json.loads(f_str)
            l = [conjugation_order, d]
            f.close()
        with open(path+'conjugation.json', 'w') as f:
            json.dump(l, f,ensure_ascii=False)
            f.close()