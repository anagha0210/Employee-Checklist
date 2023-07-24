import React from 'react'
export default function Footer(props) {
  const now=new Date();
  return (
    <div>
      <h1>Team Allocation Application-{now.getFullYear()}/{now.getMonth()}/{now.getDay()}</h1>
    </div>
  )
}

