import React from 'react'
import mail from "../assets/images/mail.svg"
import search from "../assets/images/search.svg"
import user from "../assets/images/user.svg"

const Header = () => {
  return (
    <header className='p-5 d-flex align-items-center justify-content-between container-fluid' style={{backgroundColor:"#DBE5EF"}}>
        <div className='d-flex align-items-center gap-3'>
            <div>logo</div>
            <div className='fs-3 fw-bold'>start</div>
        </div>
        <div className='d-flex gap-3 align-items-center'>
            <div><img src={mail} alt="" /></div>
            <div><img src={search} alt="" /></div>
            <div><img src={user} alt="" /></div>
            <div className='px-3 py-2 rounded bg-primary'>3</div>
        </div>
    </header>
  )
}

export default Header