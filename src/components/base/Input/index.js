// import internal modules
import React from 'react'

// import external modules
import './input.css';

const index = ({ type, ...props }) => {
  return (
    <input type={type ? type : "text"} {...props} />
  )
}

export default index