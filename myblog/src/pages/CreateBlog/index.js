import React from 'react'
import { Button, Gap, Input, TextArea, UploadFile } from '../../components'

export const CreateBlog = () => {
  return (
    <div>
      <Gap height={20} />
      <p>Create blog</p>
      <Input label="Post Title" placeholder="Title" />
      <UploadFile />
      <TextArea />
      <Button title="Upload" />
      <Gap height={20} />
    </div>
  )
}
