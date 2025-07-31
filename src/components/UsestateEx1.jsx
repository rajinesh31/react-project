import React, {useState} from "react";
function UseStateEx1() {
    const [abcd, setabcd] = useState(0);

    return (
        <div>
            <h1>Count: {abcd}</h1>
            <button onClick={() => setabcd(abcd + 1)}>Increment</button>
        </div>
    );
};
export default UseStateEx1;