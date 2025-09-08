import React from "react";
import Mumbai from './Mumbai';

const Delhi = ({gift}) => {
    return (
        <div>
            <h1>I am Delhi</h1>
            <Mumbai gift = {gift}/>
        </div>
    )
}
export default Delhi;