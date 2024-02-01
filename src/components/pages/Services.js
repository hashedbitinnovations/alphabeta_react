import React, { useContext, useState } from 'react';
import { DataAppContext } from '../../DataContext';
import { Link } from 'react-router-dom';

const Services = () => {
  const localContext = useContext(DataAppContext);
  console.log(localContext);

  const [services, setServices] = useState(['FD', 'Deposit', 'Cards', 'Loans'])
  return (
    <div>
      <h2>Services Page</h2>
      <div>Hi {localContext.appState.username}</div>
      <br></br>
      <div className='row'>
        {
          services && services.map((temp) => (
            <Link to={`/servicedetails/${temp}`}>
              <div className='col-4 bg-primary bg-opacity-25 mx-2 my-2'>{temp}</div>
            </Link>
          ))
        }
      </div>

    </div>
  )
}

export default Services
