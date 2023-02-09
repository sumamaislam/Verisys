import Link from 'next/link'
import React from 'react'

function Product() {
    return (
        <div>
            <div className=''>
                <div className="bg-[url('/images/probg.png')]  bg-cover bg-left md:bg-center pt-[45px]  mt-20 ">
                    <div className='containers'>
                        <h1 className='text-center text-[#0F7CC0] text-[35px] font-bold proheadres'>We Protect Your Product From Stealing</h1>
                        <div>
                            <p className='text-[#3C9E48] text-[40px] pt-[20px] font-bold pl-8 proparares'>YOUR PRODUCT IS SECURE WITH </p>
                            <p className='text-[#3C9E48] text-[40px] font-bold pl-8 proparares'><span className='text-[#0F7CC0] proparares'> VERISYS </span> FROM STEALING</p>
                        </div>
                        <div className='pt-[70px] ml-[180px] pb-[355px] probuttonn'>
                        <Link href="/details"><button className='text-[18px] text-[#FFFFFf] bg-[#008BBF] p-[18px] rounded-[10px] probutton italic' style={{ "box-shadow": " 4px 4px 4px rgba(15, 124, 192, 0.25)" }}>SEE MORE DETAIL</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
