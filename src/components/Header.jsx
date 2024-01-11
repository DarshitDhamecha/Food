import React from 'react'

export default function Header() {
    return (
        <>
            <div className='header-anim py-2 border-0 w-100 bg-[#fbf9f7] flex justify-between px-4 items-center'>
                <div>
                    <img src="/images/logo-regular-dark.png" className='height-width' alt="" />
                </div>
                <div>
                    <div className='gap-3 text-xl items-center lg:flex xl:flex hidden'>
                        <a href='#' className='hover:text-[#eb5058] duration-300 hover:underline cursor-pointer m-0'>HOME</a>
                        <a href='#' className='hover:text-[#eb5058] duration-300 hover:underline cursor-pointer m-0'>MENU</a>
                        <a href='#' className='hover:text-[#eb5058] duration-300 hover:underline cursor-pointer m-0'>DRINK</a>
                        <a href='#' className='hover:text-[#eb5058] duration-300 hover:underline cursor-pointer m-0'>ABOUT</a>
                        <a href='#' className='hover:text-[#eb5058] duration-300 hover:underline cursor-pointer m-0'>CONTACT</a>
                    </div>
                    <div className='block lg:hidden xl:hidden'>
                        <button class="text-[#eb5058]" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fa-solid fa-bars fs-2"></i>
                        </button>
                    </div>
                </div>
            </div>
            {/* ---------collapse for responsive header ---------- */}
            <div class="collapse visible" id="collapseExample">
                <div class="card card-body rounded-0 ">
                    <a href='#' className='hover:text-[#eb5058] duration-300 hover:underline cursor-pointer m-0'>HOME</a>
                    <hr className='my-2' />
                    <a href='#' className='hover:text-[#eb5058] duration-300 hover:underline cursor-pointer m-0'>MENU</a>
                    <hr className='my-2' />
                    <a href='#' className='hover:text-[#eb5058] duration-300 hover:underline cursor-pointer m-0'>DRINK</a>
                    <hr className='my-2' />
                    <a href='#' className='hover:text-[#eb5058] duration-300 hover:underline cursor-pointer m-0'>ABOUT</a>
                    <hr className='my-2' />
                    <a href='#' className='hover:text-[#eb5058] duration-300 hover:underline cursor-pointer m-0'>CONTACT</a>
                </div>
            </div>
        </>
    )
}
