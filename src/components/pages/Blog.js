import React, { useContext } from 'react'
import { DataAppContext } from '../../DataContext'

const Blog = () => {
  const localContext = useContext(DataAppContext);
  const {appState, setAppState} = localContext;
  const {username} = appState;
  return (
    <div>
      <h2>Blog Page</h2>
      <div>Hi {username}</div>
    </div>
  )
}

export default Blog
