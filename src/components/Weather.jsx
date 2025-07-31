const Weather = () => {
    let temp = 1;

    if(temp < 15){
        return <h1>It's cold</h1>
    }
    else if(temp >= 15 && temp <= 30){
        return <h1>It's normal</h1>
    }
    else if(temp > 30){
        return <h1>It's hot</h1>
    }
};
export default Weather;