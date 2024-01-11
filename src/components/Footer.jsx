import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='food_footer mt-5'>
                <div className='footer-filter py-4 flex justify-center items-center'>
                    <div className='text-center'>
                        <div className='w-100'>
                            <img src="/images/logo-regular-dark.png" className='mx-auto' alt="" />
                        </div>
                        <p className='mt-5 fs-3 font-semibold'>You CAN REACH US AT</p>
                        <p className='mt-2 fs-1 font-semibold text-[#eb5058]'>+91 9873611510</p>
                        <p className='fs-3 font-semibold mt-5'>ADDRESS</p>
                        <p className='fs-3 text-[#eb5058]'>Mavdi Chowk, Rajkot-360004</p>
                        <div className='text-[#eb5058] fs-3 flex gap-3 justify-center mt-5'>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-whatsapp"></i>
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
