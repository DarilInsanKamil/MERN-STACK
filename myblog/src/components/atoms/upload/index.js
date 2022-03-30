import React from 'react'

export const UploadFile = ({...rest}) => {
  return (
    <div>
        <input type="file" {...rest}/>
    </div>
  )
}
