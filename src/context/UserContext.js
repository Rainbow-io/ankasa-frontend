// import internal modules
import React, { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decodeToken } from 'react-jwt'

// import external modules
import { getUserID } from '../redux/actions/userByID';

export const userContext = createContext(null)

const UserContext = ({ children }) => {
  const tokenUser = localStorage.getItem("token");
  const userInfo = decodeToken(tokenUser);
  const dispatch = useDispatch();

  const userDetailData = useSelector((state) => state.UserID);

  useEffect(() => {
    dispatch((getUserID(userInfo.id)))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(userDetailData)
  return (
    <userContext.Provider value={{ userPicture: userDetailData.data?.photo}}>
      {children}
    </userContext.Provider>
  )
}

export default UserContext
