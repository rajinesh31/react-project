import { createContext, useContext, useState } from "react";

const Gift = createContext()

export const GiftProvider =({Children})=>{
    const [surprise, setSuprise] = useState("Apple")

    return (
        <Gift.Provider value={{surprise, setSuprise}}>
            {Children}
        </Gift.Provider>
    )
}

export const useData =() => useContext(Gift)
