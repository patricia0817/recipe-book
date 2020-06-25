import React, { useEffect } from 'react'

function Page( props ) {
  return (
    < div className="content-container" > { props.children }</div >
  )
}

export default Page