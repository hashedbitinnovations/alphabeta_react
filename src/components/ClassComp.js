import React, { Component } from "react";
import { DataAppContext } from "../DataContext"; //import context variable

class ClassComp extends Component {

    constructor() {
        super();
        console.log('constructor running...........')
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('componentDidMount running @@@@@@@@@@@@')
    }


    shouldComponentUpdate() {
        console.log('shouldComponentUpdate #############');
        return true;
    }

    componentDidUpdate() {
        console.log('componentDidUpdate.................');
    }

    componentWillUnmount() {
        console.log('#######component unmounting #############')
    }

    increaseFn = () => {
        console.log('increasing..........')
        this.setState({
            count: this.state.count + 1
        })
    }

    decreaseFn = () => {
        console.log('decreasing..........')
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        console.log('rendering................')
        return (
            <>
                <h2>This is a class component.</h2>

                <h4 id='numdisplay'>Num - {this.state.count}</h4>
                <br></br>

                <button onClick={this.increaseFn}>Increase</button>
                <button onClick={this.decreaseFn}>Decrease</button>


                <br></br>
                <br></br>
                <DataAppContext.Consumer>
                    {
                        (localContext) => {
                            console.log(localContext)
                            return(
                                <div>Hi {localContext.appState.username}</div>
                            )
                        }
                    }
                </DataAppContext.Consumer>
            </>
        )
    }
}

export default ClassComp;



// Phases and Lifecycle mthods in Class Component
// Mounting / Rendering Phase
// constructor - all initializations
// //getDerivedStatefromProps
// render - for jsx
// componentDidMount - runs after first loading


// Re-mounting / Re-rendering Phase
// //getDerivedStatefromProps
// shouldComponentUpdate - check whether component has to be updated or not
// render - reload jsx
// componentDidUpdate - runs after every reloading except 1st


// Unmounting Phase
// componentWillUnmount - just before leaving component




//HW - Implement show hide functionality in Class Component.
