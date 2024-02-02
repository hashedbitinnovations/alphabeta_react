import React from 'react';
import withFilterHOC from './HOCFilter';

const countries = ['India', 'Brazil', 'UK', 'USA', 'Nepal', 'China', 'Bhutan', 'Russia', 'Australia', 'Sri Lanka' ];

const HOCCountry = (props) => {
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

export default withFilterHOC(HOCCountry, countries)
