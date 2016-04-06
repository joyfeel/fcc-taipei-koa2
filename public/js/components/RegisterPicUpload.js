import React from 'react'

function RegisterPicUpload() {
  return (
    <div className="register-pic-upload">
      <h3>照片上傳</h3>
      <img src="../../images/_0mado.jpg" alt="沒上傳照片就用這張圖" />
      <label htmlFor="member-pic-upload">上傳不超過1mb</label>
      <input type="file" name="memeber_picture" id="member-pic-upload" />
    </div>
  )
}

export default RegisterPicUpload
