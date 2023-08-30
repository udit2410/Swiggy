import React from 'react'

const Header = () => {
  return (
    <div className='header flex justify-between  px-6 py-3 bg-black items-center  text-white '>

        <div className="imageLogo">
            <img className='w-14 h-14 rounded-full' src="https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg" alt="" />
        </div>

        <div className="navList">
            <ul className='flex gap-4 text-lg'>
                <li>Home</li>
                <li>AboutUs</li>
                <li>ContactUs</li>
                <li>Cart</li>
            </ul>
        </div>

    </div>
  )
}

export default Header