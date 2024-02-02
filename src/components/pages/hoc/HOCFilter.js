import React from "react";

const withFilterHOC = (InputComponent, data) => {

    class OutputComponent extends React.Component {
        constructor() {
            super();
            this.state={
                searchtext: '',
                originalList: data,
                filteredList: data
            }
        }

        filterFn= (e) => {
            console.log(e.target.value);

            let tempfilteredList = this.state.originalList.filter((temp) => {
                return temp.indexOf(e.target.value) >=0
            })

            console.log(tempfilteredList);

            this.setState({
                originalList: this.state.originalList,
                filteredList: tempfilteredList,
                searchtext: e.target.value
            })

        }


        render() {
            return (
                <>
                    <input type='text' onChange={(e) => this.filterFn(e)}/>
                    <InputComponent filteredList = {this.state.filteredList}/>
                </>
            )
        }
    }

    return OutputComponent;
}

export default withFilterHOC;


//HW - Same should be working with any case - uppercase/lowercase