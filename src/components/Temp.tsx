import React from 'react'

const Temp = ({name}) => {
  return (
    <div style={{
      width: 1216,
      height: 524,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#000',
      color: '#fff',
    }}>
      {name}
    </div>
  )
}

export default Temp