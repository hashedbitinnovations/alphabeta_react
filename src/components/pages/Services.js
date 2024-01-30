import React, { useContext } from 'react';
import { DataAppContext } from '../../DataContext';

const Services = () => {
  const localContext = useContext(DataAppContext);
  console.log(localContext);
  return (
    <div>
      <h2>Services Page</h2>
      <div>Hi {localContext.appState.username}</div>
    </div>
  )
}

export default Services
