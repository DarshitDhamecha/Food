import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Aos from 'aos'

export default function Food() {
    // for aos animation
    useEffect(() => {
        Aos.init({
            duration: 1500,
        });
    }, [])
    return (
        <>
            <div className='bg-food-img relative !p-0'>
                <div className="bg-fitter !p-0 !m-0">
                    {/* <------------------for header---------------> */}
                    <Header />
                    <div className='h-[80vh] flex items-center justify-center'>
                        <div className='text-white text-center headding-anim'>
                            <p className='curv-font display-2'>Welcome To The</p>
                            <p className='display-3 font-semibold mt-2 secline-anim'>Deeplight Restaurant</p>
                            <button className='btn-anim rounded-0 bg-transparent  border-1 border-white px-4 py-2 text-lg hover:!bg-[#eb5058] hover:!border-[#eb5058] duration-300 mt-4'>Reservation</button>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-[-100px] w-100'>
                    <div className='mx-auto h-[180px] w-[1px] bg-[#eb5058]'></div>
                </div>
            </div>
            <div className='w-100 mt-[180px] flex items-center justify-center'>
                <img src="/images/image-01-free-img.png" data-aos="zoom-in" alt="" />
            </div>
            <div className='w-100 mt-5'>
                <div className='w-75 mx-auto text-center' data-aos="fade-up">
                    <p className='curv-font fs-1'>Honest, Flavorful Food</p>
                    <p className='fs-2 mt-2'>A Few Words About Our Restaurant</p>
                    <div className='w-100'>
                        <div className='mx-auto my-4 w-[100px] h-[1px] bg-black'></div>
                    </div>
                    <p className='mt-1 text-[#9e9e9e] font-semibold'>In this article, we’ll show you examples of catchy restaurant slogans and taglines for many different restaurant types – from fast food to fine dining, and more. These examples are packed with restaurant slogan ideas that you can use to help your venue attract new guests, and make them remember what’s unique about your specific restaurant! </p>
                    <button className='rounded-0 bg-transparent  border-1 border-[#eb5058] text-[#eb5058] px-4 py-2 text-lg hover:!bg-[#eb5058] hover:text-white my-2 duration-300 mt-5'>Read More</button>

                </div>
            </div>
            <div className='w-100 my-[80px]'>
                <div className='mx-auto h-[120px] w-[1px] bg-[#eb5058]'></div>
            </div>
            <div className='w-100'>
                <div className='mx-auto w-75 text-center' data-aos="fade-up">
                    <p className='curv-font display-5'>eat good food</p>
                    <p className='display-5 font-semibold mt-3'>Have A Quick Look At Our Menus</p>
                    <div className='w-100'>
                        <div className='mx-auto w-[100px] h-[1px] bg-black my-4'></div>
                    </div>
                    <p className='text-[#9e9e9e] font-semibold'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                </div>
            </div>
            <div className='w-100 my-5'>
                <div className='food-first-bg mx-auto' data-aos="zoom-in">
                    <div className="bg-temp-fitter flex items-center justify-center">
                        <div className="w-75 text-white">
                            <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
                                <p className='display-4 curv-font'>Chef Recommend</p>
                                <div className='w-[100px] h-[2px] my-3 bg-[#eb5058]'></div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <i class="fa-solid fs-4 fa-utensils"></i>
                                <a href='#' className='fs-3 hover:text-[#eb5058] duration-300'>Paneer Butter Masala</a>
                            </div>
                            <hr className='w-100 h-[1px] bg-[#eb5058]'></hr>
                            <div className='flex gap-3 items-center'>
                                <i class="fa-solid fs-4 fa-utensils"></i>
                                <a href='#' className='fs-3 hover:text-[#eb5058] duration-300'>Paneer Pasanda</a>
                            </div>
                            <hr className='w-100 h-[1px] bg-[#eb5058]'></hr>
                            <div className='flex gap-3 items-center'>
                                <i class="fa-solid fs-4 fa-utensils"></i>
                                <a href='#' className='fs-3 hover:text-[#eb5058] duration-300'>Dal Tadka</a>
                            </div>
                            <hr className='w-100 h-[1px] bg-[#eb5058]'></hr>
                            <div className='flex gap-3 items-center food'>
                                <i class="fa-solid fs-4 fa-utensils"></i>
                                <a href='#' className='fs-3 hover:text-[#eb5058] duration-300'>Pav Bhaji</a>
                            </div>
                            <hr className='w-100 h-[1px] bg-[#eb5058]'></hr>
                        </div>
                    </div>
                </div>
            </div>
            <div className='food-wraper 100 d-flex px-4 gap-2 my-5'>
                <div className='first-food' data-aos="zoom-in">
                    <div className='food-product flex justify-center items-end p-4'>
                        <div className=' text-white'>
                            <h1 className='fs-2'>Paneer Butter Masala</h1>
                            <p className='my-2'>Paneer Butter Masala is one of India’s most popular paneer gravy recipes, and with good reason! Indian cottage cheese cubes are smothered in a creamy,</p>
                            <button className='btn rounded-0 bg-white font-semibold px-3 py-2 hover:!bg-[#eb5058] hover:text-white'>Check Out</button>
                        </div>
                    </div>
                </div>
                <div className='second-food' data-aos="zoom-in">
                    <div className='food-product flex justify-center items-end p-4'>
                        <div className=' text-white'>
                            <h1 className='fs-2'>Dal Tadka</h1>
                            <p className='my-2'>Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils)</p>
                            <button className='btn rounded-0 bg-white font-semibold px-3 py-2 hover:!bg-[#eb5058] hover:text-white'>Check Out</button>
                        </div>
                    </div>
                </div>
                <div className='third-food' data-aos="zoom-in">
                    <div className='food-product flex justify-center items-end p-4'>
                        <div className=' text-white'>
                            <h1 className='fs-2'>Pav Bhaji</h1>
                            <p className='my-2'>Pav bhaji is a classic Indian street food. The dish is said to have originated in Portugal, where the Portuguese would combine different vegetables.</p>
                            <button className='btn rounded-0 bg-white font-semibold px-3 py-2 hover:!bg-[#eb5058] hover:text-white'>Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-100 my-[80px]'>
                <div className='mx-auto h-[120px] w-[1px] bg-[#eb5058]'></div>
            </div>
            <div className='w-100'>
                <img src="/images/image-03-free-img.png" data-aos="zoom-in" className='mx-auto' alt="" />
            </div>
            <div className='w-100 mt-5 text-center' data-aos="fade-up">
                <p className='fs-1 curve-font'>Join us</p>
                <p className='display-5 font-semibold my-3'>Book A Table Now, Come and See US</p>
                <button className='rounded-0 bg-transparent  border-1 border-[#eb5058] text-[#eb5058] px-4 py-2 text-lg hover:!bg-[#eb5058] hover:text-white mt-3 duration-300'>Reservation</button>
            </div>
            {/* <--------------for footer------------------> */}
            <Footer />

        </>
    )
}
