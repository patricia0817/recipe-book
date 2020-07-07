import React, { useEffect, useContext } from 'react'
import StateContext from '../StateContext'

function Page( props ) {
  const appState = useContext( StateContext )

  return (
    < div className={ `content-container ${ !appState.loggedIn && "content-container__logged-out" }` } > { props.children }</div >
  )
}

export default Page