import React from 'react'

function Feature() {
    return (
        <div>
            <div className='containers'>
                <h1 className='text-center text-[35px] text-[#0F7CC0] font-bold mt-[100px] trustres pb-[40px]'>Why Should You Trust Us.?</h1>
                <div className='grid gap-[25px] mt-[40px] lg:grid-cols-4  md:grid-cols-2 grid-cols-1'>
                    <div>
                        <div>
                            <img className='flex justify-center m-auto' src="/images/authentic.png" alt="" />
                        </div>
                        <p className='text-[#008BBF] text-[25px] font-bold text-center pt-[30px]'>100% Authentic</p>
                        <p className='text-center text-[15px] pt-[10px]'>We are authentic to provide you most secure QR code and validate for only one product</p>
                    </div>

                    <div>
                        <div>
                            <img className='flex justify-center m-auto' src="/images/Instant.png" alt="" />
                        </div>
                        <p className='text-[#008BBF] text-[25px] font-bold text-center pt-[30px]'>Instant Result</p>
                        <p className='text-center text-[15px] pt-[10px]'>We will provide you instant result of clear verification against the Scanned QR code</p>
                    </div>

                    <div>
                        <div>
                            <img className='flex justify-center m-auto' src="/images/Ease.png" alt="" />
                        </div>
                        <p className='text-[#008BBF] text-[25px] font-bold text-center pt-[30px]'>Ease of Use</p>
                        <p className='text-center text-[15px] pt-[10px]'>verisys system is easy to use and can easily accessible to everyone, everywhere.</p>
                    </div>

                    <div>
                        <div>
                            <img className='flex justify-center m-auto' src="/images/Resolution.png" alt="" />
                        </div>
                        <p className='text-[#008BBF] text-[25px] font-bold text-center pt-[30px]'>High Resolution</p>
                        <p className='text-center text-[15px] pt-[10px]'>Generate unlimited number of high resolution QR code artwork files</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Feature
