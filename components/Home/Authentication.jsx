import React from 'react'

function Authentication() {
    return (
        <div>
            <div className='containers'>
                <div>
                    <h1 className='text-[35px] font-bold text-[#0F7CC0] text-center mt-[70px] mobauthres'>Mobile Authentication Solution</h1>
                </div>
                <div className='flex justify-between gap-[40px] items-center mt-10 authres'>
                    <div className='w-[2350px] authimgres'>
                        <img className='' src="/images/auth.png" alt="Authentication Image" />
                    </div>
                    <div>
                        <p className='text-justify authparares'>Authentic Vision is a leading provider of mobile authentication solutions designed to protect your organization’s investment in product innovation, brand value, and reputation. With a simple scan of our Holographic Fingerprint security label, connect physical products to the digital world. Prevent fraud with our effective anti-counterfeiting technology, and at the same time drive pain-free brand license compliance and consumer engagement. From Salzburg to the world, Authentic Vision brings you a uniquely secure pathway to trusted status and sustainable growth.</p>
                    </div>
                </div>
            </div>

            {/* <hr className='mt-14 hrborder' /> */}
        </div>
    )
}

export default Authentication
