import React, { useEffect, useState, useContext } from 'react'

import HeaderLoggedOut from './HeaderLoggedOut'
import HeaderLoggedIn from './HeaderLoggedIn'
import StateContext from '../StateContext'
import NavigationMenu from './NavigationMenu'

function Header() {
  const appState = useContext( StateContext )

  return (
    <>
      { appState.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut /> }
      <NavigationMenu />
    </>
  )
}

export default Header