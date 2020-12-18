const weather ={
    temperature : {
        value : 50,
        unit : "celcius"
    },
description : "sunny",
iconId : "01d",
city : "London",
country : "britain",
};
{
    iconElement.innerHtml =
    <img src="icons/${weather.iconId}.png"/>;