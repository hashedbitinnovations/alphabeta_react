import React, { Fragment, useContext } from "react";
import { DataAppContext } from "../../DataContext";

const About = () => {
    const localContext = useContext(DataAppContext);
    const {appState, setAppState} = localContext;
    const {username} = appState;
    return (
        <>
            <div>
                test
            </div>
            <div>
                test 2
            </div>
            <input type="text" onBlur={(e) => setAppState({...appState, username: e.target.value})}/>

            <br>
            </br>
            <div>Hi {username}</div>
            
        </>
    )
}

export default About;



// function abc() {
//     return 4
//     return 5
// }



// .class > .class2