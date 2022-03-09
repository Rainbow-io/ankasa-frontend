import React from 'react'
import { useNavigate } from 'react-router-dom'
import notFound from '../../assets/404-pic.svg'
import notFound2 from '../../assets/404-pic2.svg'
import Button from '../../components/base/Button'

const Page404 = () => {
  const navigate = useNavigate()
  return (
    <div className='container d-flex'>
      <div className="image w-75 me-3 d-none d-sm-block ">
        <img className='w-100' src={notFound} alt="" />
      </div>
      <div className="desc-page w-25 align-self-center">
        <div className="top-desc">
          <h1>Do Not Cry</h1>
          <Button 
          className='btn btn-primary w-100 my-4'
          onClick={()=> navigate('/main/explore')}
          ><h2>Back To Home</h2></Button>
          <p>This Page is doesn't exist or removed! We suggest you back to home</p>
        </div>
        <div className="bot-desc">
          <img className='w-100' src={notFound2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Page404