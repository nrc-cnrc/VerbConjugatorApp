import argparse

class ArgParsing:

    def __init__(self):
        self.parser = None
        self.args = None
        self.parseArgs()

    def parseArgs(self):
        '''
        Establishes argument options.
        Populates attributes self.parser and self.args
        '''
        self.parser = argparse.ArgumentParser()
        self.parser.add_argument("-f","--file_input", dest="input_file", help="Input file containing language model", required=True)
        self.parser.add_argument("-o", "--order", dest="order", help="In-app category order")
        self.parser.add_argument("-tt", "--tooltip", dest="tooltip", default=False, help="Autogenerate tooltip json file", action="store_true")
        self.parser.add_argument("-c", "--colour", dest="colour", default=False, help="Autogenerate colours in scss file", action="store_true")
        self.parser.add_argument("--auto-place", dest="autoplace", default=False, help="Automatically places variable.scss and JSON folders in correct paths", action="store_true")
        self.parser.add_argument("--test", dest="test", default=False, help="Runs basic tests about the created JSON files.", action="store_true")

        self.args = self.parser.parse_args()    


    def argsCheck(self):
        """Checks the validity of the files given in the arguments.

        Returns:
            input_file (str): path of the file containing the language information
            order_file (str): path of the file containing the ordering information (if exists)
        """

        #Validate input/LM file
        self.args.input_file = self.args.input_file.strip()
        input_file = self.args.input_file
        self.checkFileExists(input_file, "Input")
        self.checkFileFormat(input_file, "Input")

        # Validate order file, if exists
        if self.args.order:
            order_file = self.args.order
            self.checkFileExists(order_file, "Order")
            self.checkFileFormat(order_file, "Order")
        else:
            order_file = None

        return input_file, order_file
    

    def checkFileExists(self,file:str, filetype:str):
        """Checks if the files given exist

        Args:
            file (str): path of the file to check
            filetype (str): type of file for error message
        """

        try:
            f = open(file, 'r')
            f.close()
        except OSError:
            print("{} file '{}' does not exist.".format(filetype,file))
            exit()


    def checkFileFormat(self,file:str,filetype:str):
        """Ensure the file given is a delimiter seperated value file.

        Args:
            file (str): path of the file to check
            filetype (str): type of the file for error message
        """

        if not file.endswith("sv"):
            print("{} file '{}' MUST have delimiter seperated values and a ._sv extension".format(filetype,file))
            exit()