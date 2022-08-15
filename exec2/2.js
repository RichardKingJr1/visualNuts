let data = [
    {
    country:"US",
    languages: ["en"]
    },
    {
    country:"BE",
    languages: ["nl","fr","de"]
    },
    {
    country:"NL",
    languages: ["nl"]
    },
    {
    country:"DE",
    languages: ["de"]
    },
    {
    country:"ES",
    languages: ["es"]
    },    
];

exec2(data);

function exec2(jsonInput){

    //a
    console.log('Number of countries:');
    console.log(jsonInput.length);

    ///b
    let highest1 = jsonInput[0].languages.length;
    let selectedCountry1 = [jsonInput[0].country];

    for(let i = 1; i < jsonInput.length; i++){
        if(highest1 < jsonInput[i].languages.length && jsonInput[i].languages.includes('de')){
            highest1 = jsonInput[i].languages.length;
            selectedCountry1 = [jsonInput[i].country];
        }else if(highest1 == jsonInput[i].languages.length && jsonInput[i].languages.includes('de')){
            selectedCountry1.push(jsonInput[i].country)
        }
    }

    console.log('Country with the most official languages, where they officially speak German:');
    console.log(JSON.stringify(selectedCountry1));

    ///c
    let highest2 = jsonInput[0].languages.length;
    let selectedCountry2 = [jsonInput[0].country];

    for(let i = 1; i < jsonInput.length; i++){
        if(highest2 < jsonInput[i].languages.length){
            highest2 = jsonInput[i].languages.length;
            selectedCountry2 = [jsonInput[i].country];
        }else if(highest2 == jsonInput[i].languages.length){
            selectedCountry2.push(jsonInput[i].country)
        }
    }

    console.log('Country with the highest number of official languages:');
    console.log(JSON.stringify(selectedCountry2));

    ///d
    mapLanguages = {};

    for(let i = 0; i < jsonInput.length; i++){
        for(let lenguage of jsonInput[i].languages){
            if(lenguage in mapLanguages){
                mapLanguages[lenguage] = mapLanguages[lenguage] + 1;
            }else{
                mapLanguages[lenguage] = 1;
            }
        }
    }

    selected = [];
    highest = 0;

    for(lenguage in mapLanguages){
        //console.log(`${lenguage}: ${mapLanguages[lenguage]}`);
        if(mapLanguages[lenguage] > highest){
            selected = [lenguage];
            highest = mapLanguages[lenguage];
        }else if(mapLanguages[lenguage] == highest){
            selected.push(lenguage);
        }
    }

    console.log('Most common official language(s):');
    console.log(JSON.stringify(selected));
}






