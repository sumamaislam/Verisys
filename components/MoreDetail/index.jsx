import Link from 'next/link'
import React from 'react'

function MoreDetail() {
  return (
    <div>
      <div className='adjust_padding'>
        <div className="bg-[url('/images/verisysprotect.png')] relative bg-center bg-no-repeat bg-cover h-[100vh] veri_contact_bg ">
          <div className='containers'>
            <div className='absolute'>
            <h1 className='text-[50px] text-[#FFFFFF] font-bold text-center pt-[20px] verisyss_res'><span className='text-[#3C9E48]'>VERISYS</span> Protect Your Product</h1>
            <p className='text-[35px] font-bold text-[#ffffff] pt-[90px] w-[42%] verisyss_step'><span className='text-[#3C9E48]'>3 Steps </span>Will Make Your Product Secure </p>
            <p className='text-[23px] font-semibold text-[#ffffff] pt-[35px] w-[40%] pb-[230px] verisyss_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in."</p>
            </div>
          </div>
        </div>
        <div className='containers'>
          <h1 className='mt-[70px] text-[35px] text-[#0F7CC0] font-bold text-center'>Where We Protect Your Product.?</h1>
          <div className='grid gap-[33px] mt-[70px] lg:grid-cols-4  md:grid-cols-2 grid-cols-1'>
            <div className='borderColor py-[45px] px-[14px] cursor-pointer'>
              <div>
                <img className='flex justify-center m-auto' src="/images/marketplace.png" alt="" />
              </div>
              <p className='text-[#008BBF] text-[25px] font-bold text-center pt-[30px]'>Marketplaces</p>
              <p className='text-center text-[15px] pt-[10px] width_sizing capitalize'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>

            <div className='borderColor py-[45px] px-[14px] cursor-pointer'>
              <div>
                <img className='flex justify-center m-auto' src="/images/social.png" alt="" />
              </div>
              <p className='text-[#008BBF] text-[25px] font-bold text-center pt-[30px]'>Social Media</p>
              <p className='text-center text-[15px] pt-[10px] width_sizing capitalize'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>

            <div className='borderColor py-[45px] px-[14px] cursor-pointer'>
              <div>
                <img className='flex justify-center m-auto' src="/images/domain.png" alt="" />
              </div>
              <p className='text-[#008BBF] text-[25px] font-bold text-center pt-[30px]'>Domains</p>
              <p className='text-center text-[15px] pt-[10px] width_sizing capitalize'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>

            <div className='borderColor py-[45px] px-[14px] cursor-pointer'>
              <div>
                <img className='flex justify-center m-auto' src="/images/web.png" alt="" />
              </div>
              <p className='text-[#008BBF] text-[25px] font-bold text-center pt-[30px]'>Websites</p>
              <p className='text-center text-[15px] pt-[10px] width_sizing capitalize'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>

          </div>
        </div>

        <div className='containers'>
          <div className='bg-[#F1F8FD] mt-[70px] rounded-[30px] vision_shadow'>
            <div className='flex gap-[145px] items-center m-auto vision_adjusting'>
              <div className='pl-[140px] vision_img_res'>
                <div>
                  <img className='pt-[83px] pb-[40px] vision_img' src="/images/vision1.png" alt=" Our Vision" />
                </div>
                <div>
                  <h1 className='text-[#009245] text-[40px] font-bold pb-[78px] w-[281px] vision_head_res'>Our Vision</h1>
                </div>
              </div>
              <div>
                <p className='text-justify text-[20px] font-normal pr-[100px] vision_para vision1_para'>Authentic Vision is a leading provider of mobile authentication solutions designed to protect your organization’s investment in product innovation, brand value, and reputation. With a simple scan of our Holographic Fingerprint security label, connect physical products to the digital world. Prevent fraud with our effective anti-counterfeiting technology</p>
              </div>
            </div>
          </div>

          <div className='bg-[#F1F8FD] mt-[70px] rounded-[30px] vision_shadow'>
            <div className='flex gap-[145px] items-center m-auto vision_adjusting'>
              <div className='pl-[140px] vision2_img_res'>
                <div>
                  <img className='pt-[83px] pb-[40px] vision2_img' src="/images/vision2.png" alt=" Our Vision" />
                </div>
                <div>
                  <h1 className='text-[#009245] text-[40px] font-bold pb-[78px] w-[281px] vision2_head_res'>Our Vision</h1>
                </div>
              </div>
              <div>
                <p className='text-justify text-[20px] font-normal  pr-[100px] vision_para'>Authentic Vision is a leading provider of mobile authentication solutions designed to protect your organization’s investment in product innovation, brand value, and reputation. With a simple scan of our Holographic Fingerprint security label, connect physical products to the digital world. Prevent fraud with our effective anti-counterfeiting technology</p>
              </div>
            </div>
          </div>

        </div>

        <div className='containers'>
          <h1 className='text-[#009245] text-[35px] font-semibold mt-[70px] text-center faq_res'>FAQ's</h1>
          <p className='text-[#0F7CC0] font-bold text-[45px] text-center pt-[35px] pb-[82px] frrquent_res'>FREQUENTLY ASKED QUESTION</p>
          <div className='flex items-center justify-between gap-[20px] faq_gap_res'>
            <div>
              <img className='faq_img_res' src="/images/faq.png" alt="" />
            </div>
            <div>
              <div className=" dark:bg-gray-900">
                <div >
                  <div className="border-2 rounded-[30px] bg-[#E7F6FF]">
                    <div className=" border-gray-100 dark:border-gray-700">
                      <button className="flex items-center justify-between w-full p-4">
                        <h1 className="font-semibold text-[#0F7CC0]">Is there any free trial available.?</h1>


                        <span className="text-gray-400 bg-gray-200 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                          </svg>
                        </span>
                        
                      </button>

                      <hr className="border-[#0F7CC0]" />

                      <p className="p-4 text-sm text-[#0F7CC0]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                      </p>
                    </div>

                    <div className=" border-gray-100 dark:border-gray-700">
                      <button className="flex items-center justify-between w-full p-4">
                        <h1 className="font-semibold text-[#0F7CC0]">Is there any free trial available.?</h1>

                        <span className="text-white bg-blue-500 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </span>
                      </button>

                      {/* <hr className="border-[#0F7CC0]" />

                      <p className="p-4 text-sm text-[#0F7CC0]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                      </p> */}
                    </div>

                    <div className=" border-gray-100 dark:border-gray-700">
                      <button className="flex items-center justify-between w-full p-4">
                        <h1 className="font-semibold text-[#0F7CC0]">Is there any free trial available.?</h1>

                        <span className="text-white bg-blue-500 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </span>
                      </button>

                      {/* <hr className="border-[#0F7CC0]" />

                      <p className="p-4 text-sm text-[#0F7CC0]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                      </p> */}
                    </div>

                    <div className=" border-gray-100 dark:border-gray-700">
                      <button className="flex items-center justify-between w-full p-4">
                        <h1 className="font-semibold text-[#0F7CC0]">Is there any free trial available.?</h1>

                        <span className="text-white bg-blue-500 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </span>
                      </button>

                      {/* <hr className="border-[#0F7CC0]" />

                      <p className="p-4 text-sm text-[#0F7CC0]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                      </p> */}
                    </div>

                    <div className=" border-gray-100 dark:border-gray-700">
                      <button className="flex items-center justify-between w-full p-4">
                        <h1 className="font-semibold text-[#0F7CC0]">Is there any free trial available.?</h1>

                        <span className="text-white bg-blue-500 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </span>
                      </button>

                      {/* <hr className="border-[#0F7CC0]" />

                      <p className="p-4 text-sm text-[#0F7CC0]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                      </p> */}
                    </div>

                    <div className=" border-gray-100 dark:border-gray-700">
                      <button className="flex items-center justify-between w-full p-4">
                        <h1 className="font-semibold text-[#0F7CC0]">Is there any free trial available.?</h1>

                        <span className="text-white bg-blue-500 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </span>
                      </button>

                      {/* <hr className="border-[#0F7CC0]" />

                      <p className="p-4 text-sm text-[#0F7CC0]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                      </p> */}
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='mt-[70px]'>
          <div className="bg-[url('/images/BgCode.png')] bg-cover pt-[88px] pb-[88px] bg_set ">
            <div className='containers'>
              <div className='flex justify-between items-center w-[90%] m-auto direction_adjust '>

                <div>
                  <h1 className='text-[33px] text-[#ffffff] font-bold py-[78px] vision_find'>Can’t Find What You Are Looking For.?</h1>
                </div>

                <div className=' buttn_adjust '>
                  <div>
                  <Link href="/contact"><button className='text-[#0071BC] bg-[#ffffff] py-[14px] px-[57px] w-[300px] rounded-[10px] cursor-pointer text-[25px] font-semibold  contact_width button_sizing'>CONTACT US</button></Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className='containers'>
          <h1 className='text-center text-[35px] text-[#0F7CC0] font-bold mt-[70px] trustres pb-[40px]'>Why Should You Trust Us.?</h1>
          <div className='grid gap-[25px] mt-[40px] lg:grid-cols-4  md:grid-cols-2 grid-cols-1'>
            <div>
              <div>
                <img className='flex justify-center m-auto' src="/images/authentic.png" alt="" />
              </div>
              <p className='text-[#008BBF] text-[25px] font-bold text-center pt-[30px]'>100% Authentic</p>
              <p className='text-center text-[15px] pt-[10px] width_set'>We are authentic to provide you most secure QR code and validate for only one product</p>
            </div>

            <div>
              <div>
                <img className='flex justify-center m-auto' src="/images/Instant.png" alt="" />
              </div>
              <p className='text-[#008BBF] text-[25px] font-bold text-center pt-[30px]'>Instant Result</p>
              <p className='text-center text-[15px] pt-[10px] width_set'>We will provide you instant result of clear verification against the Scanned QR code</p>
            </div>

            <div>
              <div>
                <img className='flex justify-center m-auto' src="/images/Ease.png" alt="" />
              </div>
              <p className='text-[#008BBF] text-[25px] font-bold text-center pt-[30px]'>Ease of Use</p>
              <p className='text-center text-[15px] pt-[10px] width_set'>Verisys system is easy to use and can easily accessible to everyone, everywhere.</p>
            </div>

            <div>
              <div>
                <img className='flex justify-center m-auto' src="/images/Resolution.png" alt="" />
              </div>
              <p className='text-[#008BBF] text-[25px] font-bold text-center pt-[30px]'>High Resolution</p>
              <p className='text-center text-[15px] pt-[10px] width_set'>Generate unlimited number of high resolution QR code artwork files</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default MoreDetail