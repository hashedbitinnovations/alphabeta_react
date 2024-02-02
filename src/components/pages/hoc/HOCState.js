import React from 'react';
import withFilterHOC from './HOCFilter';

const states = ['Uttar Pradesh', 'Madhya Pradesh', 'Kerala', 'Maharashtra', 'Telangaana', 'Delhi', 'Harayana', 'Bihar', 'West Bengal'];

const HOCState = (props) => {
    return (
        <div>

            <div>
                {
                    props.filteredList && props.filteredList.map((item) => (
                        <p>{item}</p>
                    ))
                }
            </div>

        </div>
    )
}

export default withFilterHOC(HOCState, states);
