import React from "react";
import { useState, useEffect } from "react"

const Useffect = () => {
    const [city, setcity] = useState("Hyderabad");
    useEffect(() => {

    if(city === "Hyderabad"){
        setcity("Bengaulur");
    }else{
        setcity("Dehil");
    }
}, []);
    return (
        <div>
            <h1>I live in {city}</h1>
        </div>
    );
};
export default Useffect;