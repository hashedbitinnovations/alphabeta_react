import React, { useState } from "react";

//context varibale
const DataAppContext = React.createContext();

//context enclosing wrapper component
const DataContext = (props) => {

    const initialContextValues = {
        username: 'tempusername'
    }
    const [appState, setAppState] = useState(initialContextValues);

    return (
        <DataAppContext.Provider value={{ appState, setAppState }}>
            {
                props.children
            }
        </DataAppContext.Provider>
    )


}

export default DataContext;
export { DataAppContext };

//Context - https://miro.medium.com/v2/resize:fit:1400/0*dvRTW8e79fzNl6_N