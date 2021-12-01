import React from 'react'

const Heading = (props) => {
  console.log(props, 'tests')
  return (
    <div>
      <h1>
        {props.heading} {props.title}
      </h1>
    </div>
  )
}

export default Heading
