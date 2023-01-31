import React from 'react'

function Code() {
    return (
        <div>
            <div className="bg-[url('/images/BgCode.png')] bg-cover pt-[55px] pb-[55px] ">
                <div className='containers'>
                    <h1 className='capitalize text-[35px] text-center  text-[#FFFFFF] font-bold coderes'>How to make QR Code.?</h1>
                    <div className='grid gap-[25px] lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 grid-cols-1'>
                        <div className='bg-[#E9F9FF] mt-[25px] pt-6 px-[20px] rounded-[10px] cursor-pointer'>
                            <p className='text-[#008BBF] text-[25px] font-normal text-center labelres'>Label Your <span className='text-[#3C9E48] font-bold'>Product</span> </p>
                            <div className='flex items-center'>
                                <p className='text-[70px] font-bold'>1.</p>
                                <p className='text-[17px] text-center  font-light text-[#008BBF] '>Choose Your Product which you want to label and label it</p>
                            </div>
                        </div>
                        <div className='bg-[#E2E2E2] mt-[25px] pt-6 px-[20px]  rounded-[10px] cursor-pointer'>
                            <p className='text-[#008BBF] text-[25px] font-normal text-center labelres'>Scratch Your <span className='text-[#3C9E48] font-bold'>QR Code</span> </p>
                            <div className='flex items-center'>
                                <p className='text-[70px] font-bold'>2.</p>
                                <p className='text-[17px] text-center  font-light text-[#008BBF] '>Choose Your URL and Paste it into the Generator</p>
                            </div>
                        </div>
                        <div className='bg-[#E9F9FF] mt-[25px] pt-6 px-[20px]  rounded-[10px] cursor-pointer'>
                            <p className='text-[#008BBF] text-[25px] font-normal text-center labelres'>Authenticate Your <span className='text-[#3C9E48] font-bold'>QR Code</span> </p>
                            <div className='flex items-center'>
                                <p className='text-[70px] font-bold'>3.</p>
                                <p className='text-[17px] text-center  font-light text-[#008BBF] '>Choose Your URL and Paste it into the Generator</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Code
