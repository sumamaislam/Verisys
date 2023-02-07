import React from 'react'

function AnyContact() {
    return (
        <div>
            <div className='mt-[70px]'>
                <div className="bg-[url('/images/BgCode.png')] bg-cover pt-[88px] pb-[88px] bg_set ">
                    <div className='containers'>
                        <div className='flex justify-between items-center w-[90%] m-auto direction_adjust '>

                            <div>
                                <h1 className='text-[33px] text-[#ffffff] font-bold py-[78px] any_ques'>Have Any Question.?</h1>
                            </div>

                            <div className='gap-[50px] flex buttn_adjust '>
                                <div>
                                    <button className='text-[#0071BC] bg-[#ffffff] py-[14px] px-[57px] w-[300px]  text-[25px] font-semibold  contact_width button_sizing'>CONTACT US</button>
                                </div>
                                <div>
                                    <button className='text-[#0071BC] bg-[#ffffff] py-[14px] px-[57px] w-[170px]  text-[25px] font-semibold faq_width button_sizing'>FAQ</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnyContact
