let records = [
    {
        "name": "gina",
        "replacement": false,
        "city": "Atlantic City, NJ",
        "season": 1,
        "fights": []
    },
    {
        "name": "katie",
        "replacement": true,
        "city": "Nashville, TN",
        "season": 1,
        "fights": []
    },
    {
        "name": "mona",
        "replacement": false,
        "city": "Atlanta, GA",
        "season": 1,
        "fights": [
            "savannah-l"
        ]
    },
    {
        "name": "nora",
        "replacement": false,
        "season": 1,
        "city": "Portland, OR",
        "fights": [
            "savannah-w",
            "savannah-l"
        ]
    },
    {
        "name": "savannah",
        "replacement": false,
        "season": 1,
        "city": "Los Angeles, CA",
        "fights": [
            "nora-l",
            "nora-w",
            "mona-w",
            "christina-w"
        ]
    },
    {
        "name": "symone",
        "replacement": false,
        "city": "Brooklyn, NY",
        "season": 1,
        "fights": []
    },
    {
        "name": "erin",
        "replacement": false,
        "city": "Los Angeles, CA",
        "season": 2,
        "fights": [
            "leila-w",
            "natasha-l",
            "danielle-t",
            "janae-l"
        ]
    },
    {
        "name": "keysha",
        "replacement": false,
        "city": "Detriot, MI",
        "season": 2,
        "fights": [
            "random-w",
            "patricia-w",
            "leila-w"
        ]
    },
    {
        "name": "leila",
        "city": "Pittsburgh, PA",
        "replacement": false,
        "season": 2,
        "fights": [
            "erin-l",
            "keysha-l"
        ]
    },
    {
        "name": "nat",
        "replacement": true,
        "city": "Baltimore, MD",
        "season": 2,
        "fights": [
            "danielle-l",
            "danielle-l",
            "alexis-l"
        ]
    },
    {
        "name": "natasha",
        "replacement": false,
        "city": "Seattle, WA",
        "season": 2,
        "fights": [
            "random-t",
            "erin-w"
        ]
    },
    {
        "name": "patricia",
        "replacement": false,
        "city": "Cleveland, OH",
        "season": 2,
        "fights": [
            "keysha-l"
        ]
    },
    {
        "name": "dayana",
        "replacement": true,
        "city": "Columbus, OH",
        "season": 3,
        "fights": [
            "tookie-w",
            "saaphari-l",
            "saaphari-w",
            "tookie-t"
        ]
    },
    {
        "name": "hayden",
        "city": "Grand Rapids, MI",
        "replacement": false,
        "season": 3,
        "fights": [
            "lindsey-w",
            "zoey-w"
        ]
    },
    {
        "name": "lindsey",
        "replacement": false,
        "city": "Denver, CO",
        "season": 3,
        "fights": [
            "hayden-l",
            "saaphari-t",
            "zoey-l",
            "yasmin-l",
            "yasmin-l"
        ]
    },
    {
        "name": "saaphari",
        "replacement": false,
        "city": "Chicago, IL",
        "season": 3,
        "fights": [
            "lindsey-t",
            "dayana-w",
            "dayana-l"
        ]
    },
    {
        "name": "tookie",
        "replacement": false,
        "city": "Compton, CA",
        "season": 3,
        "fights": [
            "dayana-w",
            "dayana-t",
            "yasmin-l",
            "vanessa-w",
            "blumarie-l",
            "blumarie-w",
            "vanessa-l"
        ]
    },
    {
        "name": "yasmin",
        "replacement": true,
        "city": "Atlanta, GA",
        "season": 3,
        "fights": [
            "lindsey-w",
            "lindsey-w",
            "tookie-w",
            "angelique-l"
        ]
    },
    {
        "name": "zoey",
        "replacement": false,
        "city": "San Juan, PR",
        "season": 3,
        "fights": [
            "lindsey-w",
            "hayden-l"
        ]
    },
    {
        "name": "chloe",
        "replacement": false,
        "city": "Oakland, CA",
        "season": 4,
        "fights": [
            "tia-w",
            "tia-j-lupita,kiki",
            "melani-l"
        ]
    },
    {
        "name": "kiki",
        "replacement": false,
        "city": "Albany, NY",
        "season": 4,
        "fights": [
            "melani-l",
            "melani-l",
            "melani-l",
            "tia-j-lupita,chloe",
            "ayella-l",
            "angela-l",
            "tina-l"
        ]
    },
    {
        "name": "lupita",
        "city": "Dallas, TX",
        "replacement": false,
        "season": 4,
        "fights": [
            "tia-l",
            "tia-j-chloe,kiki"
        ]
    },
    {
        "name": "melani",
        "city": "New York City, NY",
        "replacement": false,
        "season": 4,
        "fights": [
            "kiki-w",
            "kiki-w",
            "chloe-w",
            "kiki-w",
            "chloe-w"
        ]
    },
    {
        "name": "sel",
        "city": "San Antonio, TX",
        "replacement": true,
        "season": 4,
        "fights": []
    },
    {
        "name": "tia",
        "replacement": false,
        "city": "Miami, FL",
        "season": 4,
        "fights": [
            "chloe-l",
            "lupita-w",
            "j-kiki,chloe,lupita"
        ]
    },
    {
        "name": "ashlynn",
        "replacement": true,
        "city": "Allendale, NJ",
        "season": 5,
        "fights": []
    },
    {
        "name": "janae",
        "replacement": false,
        "city": "Compton, CA",
        "season": 5,
        "fights": [
            "tyeesha-t",
            "lexis-t",
            "kalissa-l",
            "erin-w",
            "kalissa-l"
        ]
    },
    {
        "name": "kendra",
        "replacement": true,
        "city": "Nashville, TN",
        "season": 5,
        "fights": [
            "venecia-w",
            "lexis-w"
        ]
    },
    {
        "name": "lexis",
        "replacement": false,
        "city": "Los Angeles, CA",
        "season": 5,
        "fights": [
            "rayleigh-l",
            "janae-t",
            "kendra-l",
            "tina-l",
            "tina-l",
            "tina-l"
        ]
    },
    {
        "name": "rayleigh",
        "replacement": false,
        "city": "Fort Lauderdale, FL",
        "season": 5,
        "fights": [
            "tyeesha-l",
            "tyeesha-w",
            "tyeesha-l",
            "lexis-w"
        ]
    },
    {
        "name": "tina",
        "replacement": true,
        "city": "Chicago, IL",
        "season": 5,
        "fights": [
            "venecia-w",
            "lexis-w",
            "kiki-w",
            "christina-w",
            "lexis-w",
            "lexis-w"
        ]
    },
    {
        "name": "tyeesha",
        "replacement": false,
        "city": "Detriot, MI",
        "season": 5,
        "fights": [
            "rayleigh-w",
            "rayleigh-l",
            "rayleigh-w",
            "janae-t"
        ]
    },
    {
        "name": "venecia",
        "replacement": false,
        "city": "Houston, TX",
        "season": 5,
        "fights": [
            "kendra-l",
            "tina-l"
        ]
    },
    {
        "name": "aliyah",
        "replacement": false,
        "city": "San Antonio, TX",
        "season": 6,
        "fights": [
            "drea-l",
            "drea-t",
            "drea-l",
            "drea-l",
            "drea-l",
            "lynesha-w",
            "lynesha-w",
            "drea-l"
        ]
    },
    {
        "name": "drea",
        "replacement": false,
        "city": "Atlanta, GA",
        "season": 6,
        "fights": [
            "aliyah-w",
            "aliyah-t",
            "nesse-w",
            "aliyah-w",
            "nesse-w",
            "aliyah-w",
            "aliyah-w",
            "bartender-w",
            "stephanie-w",
            "aliyah-w",
            "paige-w",
            "karina-w"
        ]
    },
    {
        "name": "karina",
        "replacement": true,
        "city": "New Orleans, LA",
        "season": 6,
        "fights": [
            "lynesha-w",
            "drea-l"
        ]
    },
    {
        "name": "latricia",
        "replacement": false,
        "city": "Denver, CO",
        "season": 6,
        "fights": []
    },
    {
        "name": "lynesha",
        "replacement": true,
        "city": "Long Beach, CA",
        "season": 6,
        "fights": [
            "aliyah-l",
            "aliyah-l",
            "karina-l",
            "blumarie-t",
            "blumarie-t"
        ]
    },
    {
        "name": "nesse",
        "replacement": false,
        "city": "Miami, FL",
        "season": 6,
        "fights": [
            "drea-l",
            "drea-l",
            "stephanie-l"
        ]
    },
    {
        "name": "paige",
        "replacement": false,
        "city": "Los Angeles, CA",
        "season": 6,
        "fights": [
            "drea-l"
        ]
    },
    {
        "name": "stephanie",
        "replacement": true,
        "city": "Harlem, NY",
        "season": 6,
        "fights": [
            "drea-l",
            "nesse-w"
        ]
    },
    {
        "name": "angelique",
        "replacement": true,
        "season": 7,
        "city": "San Diego, CA",
        "fights": [
            "christina-w",
            "beyonka-w",
            "christina-w",
            "liana-l",
            "j-beyonka,trina,christina,liana",
            "j-liana,trina",
            "liana-t",
            "liana-w",
            "yasmin-w"
        ]
    },
    {
        "name": "ashley",
        "replacement": false,
        "city": "Boise, ID",
        "season": 7,
        "fights": [
            "liana-w",
            "j-trina,christina"
        ]
    },
    {
        "name": "beyonka",
        "replacement": false,
        "season": 7,
        "city": "Phoenix, AZ",
        "fights": [
            "angelique-l",
            "angelique-j-trina,christina,liana",
            "shanelle-t"
        ]
    },
    {
        "name": "christina",
        "replacement": false,
        "season": 7,
        "city": "New York City, NY",
        "fights": [
            "ashley-j-trina",
            "angelique-l",
            "angelique-l",
            "angelique-j-trina,beyonka,liana",
            "shanelle-l",
            "shanelle-j-liana",
            "savannah-l",
            "angela-l",
            "tina-l"
        ]
    },
    {
        "name": "liana",
        "replacement": false,
        "city": "Los Angeles, CA",
        "season": 7,
        "fights": [
            "ashley-w",
            "angelique-w",
            "angelique-j-trina,christina,beyonka",
            "angelique-j-trina",
            "shanelle-l",
            "shanelle-t",
            "shanelle-j-christina",
            "angelique-t",
            "angelique-l"
        ]
    },
    {
        "name": "shanelle",
        "replacement": true,
        "city": "Houston, TX",
        "season": 7,
        "fights": [
            "liana-w",
            "christina-w",
            "liana-t",
            "j-liana,christina",
            "beyonka-t"
        ]
    },
    {
        "name": "trina",
        "replacement": false,
        "city": "Seattle, WA",
        "season": 7,
        "fights": [
            "ashley-j-christina",
            "angelique-j-beyonka,christina,liana",
            "angelique-j-liana"
        ]
    },
    {
        "name": "angela",
        "replacement": false,
        "city": "Brooklyn, NY",
        "season": 8,
        "fights": [
            "rebecca-w",
            "rebecca-w",
            "taynice-l",
            "taynice-w",
            "taynice-t",
            "banisha-l",
            "taynice-l",
            "taynice-w",
            "rebecca-t",
            "kiki-w",
            "christina-w"
        ]
    },
    {
        "name": "ayella",
        "replacement": false,
        "city": "Dallas, TX",
        "season": 8,
        "fights": [
            "sam-t",
            "kiki-w"
        ]
    },
    {
        "name": "banisha",
        "replacement": false,
        "city": "Chicago, IL",
        "season": 8,
        "fights": [
            "angela-w"
        ]
    },
    {
        "name": "rebecca",
        "replacement": false,
        "city": "Boston, MA",
        "season": 8,
        "fights": [
            "angela-l",
            "angela-l",
            "angela-t"
        ]
    },
    {
        "name": "sam",
        "replacement": true,
        "city": "Albany, NY",
        "season": 8,
        "fights": [
            "ayella-t"
        ]
    },
    {
        "name": "taynice",
        "replacement": false,
        "city": "Memphis, TN",
        "season": 8,
        "fights": [
            "angela-w",
            "angela-l",
            "angela-t",
            "angela-w",
            "angela-l"
        ]
    },
    {
        "name": "alexis",
        "replacement": false,
        "city": "Oakland, CA",
        "season": 9,
        "fights": [
            "jayda-w",
            "haley-w",
            "jayda-w",
            "iris-w",
            "nat-w"
        ]
    },
    {
        "name": "erica",
        "city": "Compton, CA",
        "replacement": true,
        "season": 9,
        "fights": [
            "jayda-t",
            "iris-w"
        ]
    },
    {
        "name": "haley",
        "replacement": false,
        "city": "Columbus, OH",
        "season": 9,
        "fights": [
            "alexis-l",
            "nikki-t",
            "jayda-l",
            "nikki-l"
        ]
    },
    {
        "name": "iris",
        "replacement": false,
        "city": "Austin, TX",
        "season": 9,
        "fights": [
            "erica-l",
            "alexis-l"
        ]
    },
    {
        "name": "jayda",
        "replacement": false,
        "season": 9,
        "city": "Orlando, FL",
        "fights": [
            "alexis-l",
            "erica-t",
            "alexis-l",
            "haley-w"
        ]
    },
    {
        "name": "nikki",
        "replacement": false,
        "city": "Los Angeles, CA",
        "season": 9,
        "fights": [
            "haley-t",
            "haley-w"
        ]
    },
    {
        "name": "ciara",
        "replacement": true,
        "city": "Baltimore, MD",
        "season": 10,
        "fights": [
            "gabi-w",
            "gabi-w",
            "deja-t",
            "tiana-w",
            "deja-w",
            "sasha-w",
            "deja-w"
        ]
    },
    {
        "name": "deja",
        "replacement": false,
        "season": 10,
        "city": "Atlanta, GA",
        "fights": [
            "jennifer-t",
            "ciara-t",
            "ciara-l",
            "ciara-l"
        ]
    },
    {
        "name": "gabi",
        "replacement": true,
        "city": "Los Angeles, CA",
        "season": 10,
        "fights": [
            "ciara-l",
            "ciara-l",
            "sasha-w"
        ]
    },
    {
        "name": "jennifer",
        "city": "Denver, CO",
        "replacement": false,
        "season": 10,
        "fights": [
            "sasha-l",
            "deja-t",
            "mercedies-l"
        ]
    },
    {
        "name": "mercedies",
        "city": "Detriot, MI",
        "replacement": false,
        "season": 10,
        "fights": [
            "jennifer-w",
            "sasha-l",
            "sasha-w"
        ]
    },
    {
        "name": "sasha",
        "replacement": false,
        "city": "Columbus, OH",
        "season": 10,
        "fights": [
            "jennifer-w",
            "mercedies-w",
            "mercedies-l",
            "ciara-l",
            "gabi-l"
        ]
    },
    {
        "name": "tiana",
        "replacement": false,
        "city": "Dover, DL",
        "season": 10,
        "fights": [
            "ciara-l"
        ]
    },
    {
        "name": "danielle",
        "replacement": false,
        "city": "Las Vegas, NV",
        "season": 11,
        "fights": [
            "kayla-w",
            "kayla-w",
            "kayla-w",
            "nat-w",
            "nat-w",
            "erin-t"
        ]
    },
    {
        "name": "jojo",
        "replacement": true,
        "city": "San Antonio, TX",
        "season": 11,
        "fights": []
    },
    {
        "name": "kayla",
        "replacement": false,
        "city": "Columbus, OH",
        "season": 11,
        "fights": [
            "danielle-l",
            "danielle-l",
            "danielle-l",
            "laura-l"
        ]
    },
    {
        "name": "latisha",
        "replacement": false,
        "city": "Houston, TX",
        "season": 11,
        "fights": [
            "nelly-w"
        ]
    },
    {
        "name": "laura",
        "city": "Miami, FL",
        "replacement": true,
        "season": 11,
        "fights": [
            "kayla-w"
        ]
    },
    {
        "name": "mimi",
        "replacement": false,
        "city": "St Louis, MO",
        "season": 11,
        "fights": []
    },
    {
        "name": "nelly",
        "replacement": false,
        "season": 11,
        "city": "Kansas City, KS",
        "fights": [
            "latisha-l"
        ]
    },
    {
        "name": "aviya",
        "replacement": false,
        "city": "Albany, NY",
        "season": 12,
        "fights": [
            "kalissa-l",
            "kalissa-l",
            "chikita-l",
            "kacey-w",
            "kalissa-l",
            "lucia-l",
            "maddie-t",
            "vanessa-l"
        ]
    },
    {
        "name": "chikita",
        "city": "Phoenix, AZ",
        "replacement": false,
        "season": 12,
        "fights": [
            "aviya-w",
            "lucia-t",
            "lucia-l",
            "maddie-j-rita,kacey"
        ]
    },
    {
        "name": "claire",
        "replacement": true,
        "city": "New York City, NY",
        "season": 12,
        "fights": [
            "kalissa-l"
        ]
    },
    {
        "name": "janisha",
        "replacement": false,
        "city": "Orlando, FL",
        "season": 12,
        "fights": []
    },
    {
        "name": "kacey",
        "replacement": false,
        "city": "Boston, MA",
        "season": 12,
        "fights": [
            "aviya-l",
            "lucia-l",
            "maddie-l",
            "maddie-l",
            "maddie-j-chikita,rita"
        ]
    },
    {
        "name": "kalissa",
        "replacement": false,
        "season": 12,
        "city": "Houston, TX",
        "fights": [
            "aviya-w",
            "aviya-w",
            "aviya-w",
            "claire-w",
            "janae-w",
            "janae-w"
        ]
    },
    {
        "name": "lucia",
        "replacement": true,
        "city": "San Diego, CA",
        "season": 12,
        "fights": [
            "kacey-w",
            "aviya-w",
            "chikita-t",
            "chikita-w",
            "rita-w"
        ]
    },
    {
        "name": "maddie",
        "city": "New Haven, CT",
        "replacement": true,
        "season": 12,
        "fights": [
            "aviya-t",
            "kacey-w",
            "kacey-w",
            "rita-w",
            "j-chikita,rita,kacey"
        ]
    },
    {
        "name": "rita",
        "replacement": true,
        "season": 12,
        "city": "Lubbock, TX",
        "fights": [
            "maddie-l",
            "maddie-j-chikita,kacey",
            "lucia-l"
        ]
    },
    {
        "name": "carli",
        "replacement": true,
        "season": 13,
        "city": "Bull Run, VA",
        "fights": [
            "tori-j-tixie,suki,liz",
            "tixie-l",
            "vanessa-l"
        ]
    },
    {
        "name": "diamond",
        "replacement": false,
        "city": "Atlanta, GA",
        "season": 13,
        "fights": [
            "vanessa-l",
            "tixie-l",
            "j-liz,suki,tixie"
        ]
    },
    {
        "name": "liz",
        "replacement": false,
        "season": 13,
        "city": "Denver, CO",
        "fights": [
            "vanessa-l",
            "suki-t",
            "tixie-l",
            "diamond-j-suki,tixie",
            "tori-j-tixie,suki,carli"
        ]
    },
    {
        "name": "suki",
        "replacement": false,
        "season": 13,
        "city": "Wilmington, DE",
        "fights": [
            "liz-t",
            "diamond-j-liz,tixie",
            "tori-l",
            "tori-j-tixie,liz,carli",
            "tori-l"
        ]
    },
    {
        "name": "tixie",
        "replacement": false,
        "city": "New York City, NY",
        "season": 13,
        "fights": [
            "liz-w",
            "vanessa-w",
            "diamond-w",
            "diamond-j-suki,liz",
            "tori-j-suki,carli,liz",
            "tori-l",
            "carli-w",
            "vanessa-t"
        ]
    },
    {
        "name": "tori",
        "replacement": true,
        "city": "Oakland, CA",
        "season": 13,
        "fights": [
            "suki-w",
            "j-suki,tixie,liz,carli",
            "tixie-w",
            "suki-w"
        ]
    },
    {
        "name": "vanessa",
        "replacement": false,
        "season": 13,
        "city": "Los Angeles, CA",
        "fights": [
            "liz-w",
            "random-w",
            "diamond-w",
            "tixie-l",
            "tixie-t",
            "carli-w",
            "aviya-w",
            "tookie-l",
            "blumarie-w",
            "tookie-w"
        ]
    },
    {
        "name": "blumarie",
        "replacement": false,
        "season": 14,
        "city": "Albany, NY",
        "fights": [
            "tiffany-w",
            "monique-w",
            "monique-w",
            "jasmine-w",
            "lynesha-t",
            "tookie-w",
            "vanessa-l",
            "lynesha-t",
            "tookie-l"
        ]
    },
    {
        "name": "jasmine",
        "replacement": true,
        "season": 14,
        "city": "Columbus, OH",
        "fights": [
            "blumarie-l",
            "kamika-l",
            "tiffany-w",
            "kamika-t"
        ]
    },
    {
        "name": "kamika",
        "replacement": false,
        "city": "New York City, NY",
        "season": 14,
        "fights": [
            "monique-w",
            "monique-t",
            "jasmine-w",
            "jasmine-t"
        ]
    },
    {
        "name": "monique",
        "replacement": false,
        "season": 14,
        "city": "Los Angeles, CA",
        "fights": [
            "kamika-l",
            "blumarie-l",
            "kamika-t",
            "blumarie-l"
        ]
    },
    {
        "name": "rock",
        "replacement": false,
        "city": "Chicago, IL",
        "season": 14,
        "fights": []
    },
    {
        "name": "tiffany",
        "replacement": false,
        "city": "Atlanta, GA",
        "season": 14,
        "fights": [
            "blumarie-l",
            "jasmine-l"
        ]
    },
    {
        "name": "carina",
        "replacement": true,
        "city": "Fort Lauderdale, FL",
        "season": 15,
        "fights": [
            "charice-j-jaylin",
            "shanice-l",
            "kyra-l",
            "halisha-l"
        ]
    },
    {
        "name": "charice",
        "replacement": false,
        "city": "Los Angeles, CA",
        "season": 15,
        "fights": [
            "halisha-l",
            "kyra-t",
            "kyra-w",
            "j-jaylin,carina",
            "kyra-t"
        ]
    },
    {
        "name": "halisha",
        "replacement": false,
        "city": "Chicago, IL",
        "season": 15,
        "fights": [
            "charice-w",
            "shanice-t",
            "shanice-t",
            "willa-w",
            "willa-w",
            "shanice-l",
            "jaylin-w",
            "carina-w"
        ]
    },
    {
        "name": "jaylin",
        "replacement": true,
        "city": "Fort Lauderdale, FL",
        "season": 15,
        "fights": [
            "charice-j-carina",
            "halisha-l"
        ]
    },
    {
        "name": "kyra",
        "replacement": false,
        "city": "Chicago, IL",
        "season": 15,
        "fights": [
            "charice-t",
            "charice-l",
            "carina-w",
            "charice-t"
        ]
    },
    {
        "name": "shanice",
        "replacement": false,
        "city": "Los Angeles, CA",
        "season": 15,
        "fights": [
            "halisha-t",
            "halisha-t",
            "halisha-w",
            "carina-w",
            "willa-w"
        ]
    },
    {
        "name": "toni",
        "replacement": false,
        "city": "Detriot, MI",
        "season": 15,
        "fights": []
    },
    {
        "name": "willa",
        "replacement": false,
        "city": "Detriot, MI",
        "season": 15,
        "fights": [
            "halisha-l",
            "halisha-l",
            "shanice-l"
        ]
    },
    {
        "name": "chasity",
        "replacement": false,
        "season": 16,
        "city": "Atlanta, GA",
        "fights": [
            "romi-t",
            "ebonique-l",
            "malia-t",
            "malia-w",
            "tatianna-t",
            "ebonique-t",
            "tatianna-w",
            "tatianna-w",
            "tatianna-w",
            "tatianna-t"
        ]
    },
    {
        "name": "ebonique",
        "replacement": false,
        "season": 16,
        "city": "Los Angeles, CA",
        "fights": [
            "malia-t",
            "romi-w",
            "chasity-w",
            "gia-w",
            "chasity-t",
            "tatianna-w"
        ]
    },
    {
        "name": "gia",
        "city": "Seattle, WA",
        "replacement": true,
        "season": 16,
        "fights": [
            "tatianna-t",
            "ebonique-l",
            "janessa-t",
            "janessa-w",
            "tatianna-t"
        ]
    },
    {
        "name": "janessa",
        "replacement": true,
        "city": "Baton Rogue, LA",
        "season": 16,
        "fights": [
            "tatianna-t",
            "tatianna-l",
            "gia-t",
            "gia-l"
        ]
    },
    {
        "name": "malia",
        "replacement": false,
        "city": "Baltimore, MD",
        "season": 16,
        "fights": [
            "ebonique-t",
            "chasity-t",
            "chasity-l"
        ]
    },
    {
        "name": "romi",
        "replacement": false,
        "city": "Miami, FL",
        "season": 16,
        "fights": [
            "tatianna-t",
            "tatianna-w",
            "chasity-t",
            "tatianna-t",
            "tatianna-w"
        ]
    },
    {
        "name": "tatianna",
        "replacement": false,
        "city": "Houston, TX",
        "season": 16,
        "fights": [
            "romi-t",
            "romi-l",
            "janessa-t",
            "romi-t",
            "chasity-t",
            "gia-t",
            "chasity-l",
            "chasity-l",
            "chasity-l",
            "janessa-w",
            "romi-l",
            "gia-t",
            "chasity-t",
            "ebonique-l"
        ]
    },
    {
        "name": "alisha",
        "replacement": false,
        "season": 17,
        "city": "Harlem, NY",
        "fights": [
        	"april-w",
        	"april-w",
        	"stella-l", 
        	"naj-l",
        	"naj-l",
        	"stella-l",
        	"monisha-l"
        	]
    },
    {
        "name": "april",
        "replacement": false,
        "city": "Boston, MA",
        "season": 17,
        "fights": [
        	"alisha-l",
        	"alisha-l",
        	"naj-l",
        	"cheerie-l",
        	"chanel-l"
        	]
    },
    {
        "name": "chanel",
        "city": "Miami, FL",
        "replacement": false,
        "season": 17,
        "fights": [
        	"naj-l",
        	"naj-l",
        	"lala-t",
        	"stella-l",
        	"lala-l",
        	"lala-w",
        	"cheerie-t",
        	"lala-w",
        	"april-w"
        	]
    },
    {
        "name": "naj",
        "replacement": false,
        "city": "Richmond, VA",
        "season": 17,
        "fights": [
        	"alisha-w",
        	"alisha-w",
        	"april-w",
        	"chanel-w",
        	"chanel-w",
        	"random-w",
        	"stella-w",
        	"stella-t"
        	]
    },
    {
        "name": "stella",
        "replacement": false,
        "city": "Salt Lake City, UT",
        "season": 17,
        "fights": [
        	"alisha-w",
        	"alisha-w",
        	"cheerie-t",
        	"chanel-w",
        	"lala-w",
        	"naj-l",
        	"monisha-l",
        	"naj-t"
        	]
    },
    {
        "name": "cheerie",
        "replacement": true,
        "city": "Houston, TX",
        "season": 17,
        "fights": [
        	"april-w",
        	"stella-t",
        	"chanel-t"
        	]
    },
    {
        "name": "lala",
        "replacement": true,
        "city": "Reno, NV",
        "season": 17,
        "fights": [
        	"chanel-t",
        	"stella-l",
        	"chanel-w",
        	"chanel-l",
        	"chanel-l"
        	]
    },
    {
        "name": "monisha",
        "replacement": true,
        "city": "Richmond, VA",
        "season": 17,
        "fights": [
        	"stella-w",
        	"alisha-w"
        	]
    }
]
