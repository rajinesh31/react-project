import React from "react";
import Kolkata from './Kolkata';
import { useData } from "../Context/Ex";

const Mumbai = ({gift}) => {
    const {surprise}=useData()
    return (
        <div>Mumbai
            <h1>{surprise} is a fruite</h1>
            <Kolkata gift = {gift}/>
        </div>
    )
}
export default Mumbai;