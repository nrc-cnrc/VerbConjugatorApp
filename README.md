# VerbConjugator

### Requirements
This project requires:

- [docker](https://www.docker.com/) v20.10.21

- [docker-compose](https://docs.docker.com/compose/) 1.29.2
- python 3
- pip 3


### Inital Test
This project comes initialized as a French conjugator. 

_Once docker and docker-compose been installed_, navigate to the `VerbConjugatorApp/VerbApp` directory and run the following command:
    `docker-compose build`

If this command runs successfully (i.e., says Successfully built and tagged), in the same directory, run the following command:
    `docker-compose up`

Afterwards, open your preferred internet browser and navigate to the following URL:
    `http://localhost:8080/`

If successful, you should see the following page:

![image](https://user-images.githubusercontent.com/22920735/220707021-6e7778c1-eca7-40dd-8766-7d021d194f3d.png)



### Packages
This project uses the following packages:

- [npm](https://www.npmjs.com/get-npm) v6.14.7 

- [ionic](https://ionicframework.com/docs/intro/cli) v6.20.4 

- [angular](https://angular.io/docs) v13.3.9



## Make Your Own App - Quick Start

### Assumptions 
This quick start guide assumes you have installed docker and docker-compose and have a working familiarity with the command line. 


-----------
### Step 1: Create your language file
The language file needs to be a [comma separated file (CSV)](https://www.howtogeek.com/348960/what-is-a-csv-file-and-how-do-i-open-it/) that contains all of the information a user may need to build a verb conjugation. Note that in these instructions, a "category" refers to the categories that the user selects from in order to build their conjugation. In the French example shown above, the categories would be verb, subject, and option. 
The CSV file should have three columns per category that a user selects from, plus a column containing the conjugation. Specifically:
- Category name (e.g. verb)
    - The value of this category must be a **unique** id. For example, in English, there are two verbs that are spelt "bank". To include both, they each need their own unique id. For example, bank_heap and bank_title. 
    - Note that these ids _do not_ need to be human readable and can be any string. However, having them human readable may be beneficial for de-bugging.
- Category name underscore base (e.g. verb_base)
    - What the category value is in the "base" language that the user is conjugating _to_. For example, if my verb was "bank", then this value would be "banque". This is the value that will be shown to the user. 
    - This column title is required to exist, but it's value can be left empty if needed.
- Category name underscore translation (e.g. verb_translation)
    - What the category value is in the "translation" language that the user is conjugating _from_. For example, if my verb was "bank", then this value would be "bank". This is the value that will be shown to the user. 
    - This column title is required to exist, but it's value can be left empty if needed.
- Conjugation column
    - This column can be named anything, but for the purposes of quick start, let's call it "conjugation". 


Below is an example exerpt from the French language file used to create the example application.

| verb  | verb_base | verb_translation | subject | subject_base | subject_translation | option                | option_base           | option_translation   | conjugation |
|-------|-----------|------------------|---------|--------------|---------------------|----------------------|----------------------|---------------------|-------------|
| aller | aller     | go               | 1sg     | Je           | I                   | conditionnel present | conditionnel present | conditional present | irais       |
| aller | aller     | go               | 2sg     | Tu           | You                 | conditionnel present | conditionnel present | conditional present | irais       |

**Note:** There is no need to manually remove irrelevant columns from your language file. The data formatting script will remove them for you.

-----------
### Step 2: Create your order file
The next step is to create your order file, which is also a csv. This file is used to determine the order of the categories that the user chooses. This ordering is important because it prevents the user from selecting conjugations that made not be possible (e.g. an object for an intransitive verb) or conjugations that are missing from your language file. This file should be structured as follows:
- Order of categories that the user will select from in the user interface (UI)
- Order of categories that the script will build for the conjugations.json file. 
    - For quick start, this order is not important. It may only be important given a very large and unbalanced language file. For the current purposes, I reccomend having this line being idential to the previous line (order of categories in the UI) followed by the conjugation.

See below for the example order file contents used to create the French conjugation version.

``verb, subject, option ``

``verb, subject, option, conjugation``

-----------
### Step 3: Create a folder for your step 1 & step 2 files
a. Create a new directory for your language files in ``./DataBuilder/langs/``.

``mkdir ./DataBuilder/langs/[your language]``

b. Place your files created in steps 1 & 2 in this folder.

c. Navigate to the DataBuilder directory

``cd DataBuilder``

d. Install


