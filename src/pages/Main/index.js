import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}

export default Main