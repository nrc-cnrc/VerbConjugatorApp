# VerbConjugator

## Requirements
This project requires:

- [docker](https://www.docker.com/) v20.10.21

- [docker-compose](https://docs.docker.com/compose/) 1.29.2



_Once this has all been installed_, navigate to the `VerbConjugatorApp/VerbApp` directory and run the following command:
    `docker-compose build`

If this command runs successfully (i.e., says Successfully built and tagged), in the same directory, run the following command:
    `docker-compose up`

Afterwards, open your preferred internet browser and navigate to the following URL:
    `http://localhost:8080/`


## Packages
This project uses the following packages:

- [npm](https://www.npmjs.com/get-npm) v6.14.7 

- [ionic](https://ionicframework.com/docs/intro/cli) v6.20.4 

- [angular](https://angular.io/docs) v13.3.9



## Inital Test
This project comes initialized as a French conjugator. 

## Make Your Own App
If you haven't already formatted your language's data, please navigate to the `VerbConjugator/DataBuilder` directory and following the instructions detailed in the instructions.

### Move JSON folder
Once you have completed the data building instructions, it should have produced a directory entitled `JSON`. Copy that folder into the following directory:
    `VerbConjugator/VerbApp/src/assets`

There is already a JSON folder in this directory. It contains the french data, so please delete it. If you'd like to look at it for reference, refer back to this repository.

### Choose Colours
