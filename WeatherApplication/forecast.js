const key = 'EFGKOAWPnrx5KBHsy5Ht4iCFMMAAygg4';


//get the weather infomration
const getWeather  = async (id) => {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;//"349727"


    const response = await fetch(base + query);
    const data = await response.json();

      
    console.log('getCity data:', data);

    return data[0];
};


// get city information
const getCity = async (city) => {
 
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    console.log('getCity data:', data);

    return data[0];
};


getCity('New York').then(data => {
    return getWeather(data.key);
}).then(data =>{
    console.log(data)
}).catch(err => console.log(err));






///this is to get the infomaion from the website to our  system