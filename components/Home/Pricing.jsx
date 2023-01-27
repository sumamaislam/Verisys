import React, { useState } from 'react'

function Pricing() {

    const [selectBox, setSelectBox] = useState("one");
    const [checked, setChecked] = useState(false)

    return (
        <div>
            <div className='container px-[15px]'>
                <div>
                    <h1 className='capitalize text-[#0F7CC0] text-[35px] font-bold text-center mt-20 priceres'>Get Started now, Pick the pricing plan for your product</h1>
                    <p className='text-[16px] text-center mt-5 priceparares'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nt mollit anim id est laborum."</p>
                </div>
                <div className='flex gap-3 items-center justify-center m-auto mt-6'>
                    <div className='text-[25px] font-bold text-[#0F7CC0] items-center'>Monthly</div>
                    <div>
                        <div class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked={checked}  class="sr-only peer" />
                            <div onClick={()=>setChecked(!checked)} class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ml-3 text-sm text-gray-900 dark:text-gray-300  font-medium">Yearly</span>
                        </div>
                    </div>
                </div>
                <div>
                    {!checked && <div className='grid gap-[60px] grid-cols-1 lg:grid-cols-3  md:grid-cols-2'>
                        <div onClick={() => setSelectBox("one")} className={`bg-[#FFFFFF] mt-[25px] pt-6 px-[20px]  border-[1px]  rounded-[10px] cursor-pointer borderRound ${selectBox === "one" ? "change_color" : ""}`}>
                            <p className='text-[#3C9E48] text-[35px] font-bold text-center basic'>Basic</p>
                            <div className='text-center w-fit m-auto font-bold text-[70px] relative text-[#0F7CC0] pb-[20px] basic numres'><p className=' text-[40px] text-[#0F7CC0] left-[-20%] absolute font-bold basic dollarSign'>$</p>25 <span className='basic text-[20px] text-[#0F7CC0]'>/Month</span></div>
                            <div className='h-[250px]'>
                                <div className='flex gap-4 items-center pb-2'>
                                    <div>
                                        {selectBox === "one" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='basic text-[14px] font-semibold text-[#0F7CC0]'>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-center pb-2'>
                                    <div>
                                        {selectBox === "one" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='basic text-[14px] font-semibold text-[#0F7CC0]'>Lorem ipsum dolor sit</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div>
                                        {selectBox === "one" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='basic text-[14px] font-semibold text-[#0F7CC0]'>Lorem ipsum sit</p>
                                    </div>
                                </div>
                            </div>
                            <div className='pb-10 flex justify-center m-auto'>
                                <button className='basicbtn bg-[#0F7CC0] text-[#FFFFFF] rounded-[10px] font-bold text-[22px] w-[260px] p-[10px] cursor-pointer' style={{ "box-shadow": " 0px 6px 10px rgba(0, 0, 0, 0.25)" }}>CHOOSE PLAN</button>
                            </div>
                        </div>
                        <div onClick={() => setSelectBox("two")} className={`bg-[#FFFFFF] mt-[25px] pt-6 px-[20px] relative  border-[1px]  rounded-[10px] cursor-pointer borderRound ${selectBox === "two" ? "change_color" : ""}`}>
                           <div> 
                            <button onClick={() => setSelectBox("one")} className={`bg-[#0F7CC0] ${selectBox === "one" ? "change_color" : ""}`} className='text-[#FFFFFF] p-[8px] absolute right-0 top-0 font-bold bestoff' >BEST OFFER</button>
                            </div>
                            <p className='text-[#3C9E48] text-[35px] font-bold text-center basic'>Standard</p>

                            <div className='text-center font-bold text-[70px] w-fit m-auto relative text-[#0F7CC0] pb-[20px] basic numres'><p className='  text-[40px] text-[#0F7CC0] left-[-20%] absolute font-bold basic dollarSign'>$</p>45 <span className='basic text-[20px] text-[#0F7CC0]'>/Month</span></div>
                            <div className='h-[250px]'>
                                <div className='flex gap-4 pb-2 items-center'>
                                    <div>
                                        {selectBox === "two" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 pb-2 items-center'>
                                    <div>
                                        {selectBox === "two" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum dolor sit</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 pb-2 items-center'>
                                    <div>
                                        {selectBox === "two" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum sit</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 pb-2 items-center'>
                                    <div>
                                        {selectBox === "two" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div>
                                        {selectBox === "two" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                            </div>

                            <div className='pb-10 flex justify-center m-auto'>
                                <button className=' basicbtn bg-[#0F7CC0] text-[#FFFFFF] rounded-[10px] font-bold text-[22px] w-[260px] p-[10px] cursor-pointer' style={{ "box-shadow": " 0px 6px 10px rgba(0, 0, 0, 0.25)" }}>CHOOSE PLAN</button>
                            </div>

                        </div>
                        <div onClick={() => setSelectBox("three")} className={`bg-[#FFFFFF] mt-[25px] pt-6 px-[20px]  border-[1px]  rounded-[10px] cursor-pointer borderRound ${selectBox === "three" ? "change_color" : ""}`}>
                            <p className='text-[#3C9E48] text-[35px] font-bold text-center basic'>Premium</p>

                            <div className='text-center font-bold text-[70px] w-fit m-auto relative text-[#0F7CC0] pb-[20px] basic numres'><p className='  text-[40px] text-[#0F7CC0] left-[-20%] absolute font-bold basic dollarSign'>$</p>57 <span className='basic text-[20px] text-[#0F7CC0]'>/Month</span></div>
                            <div className='h-[250px]'>
                                <div className='flex gap-4 pb-2 items-center'>
                                    <div>
                                        {selectBox === "three" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 pb-2 items-center'>
                                    <div>
                                        {selectBox === "three" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum dolor sit</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 pb-2 items-center'>
                                    <div>
                                        {selectBox === "three" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum sit</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 pb-2 items-center'>
                                    <div>
                                        {selectBox === "three" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 pb-2 items-center'>
                                    <div>
                                        {selectBox === "three" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div>
                                        {selectBox === "three" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum sit</p>
                                    </div>
                                </div>
                            </div>

                            <div className='pb-10 flex justify-center m-auto'>
                                <button className=' basicbtn bg-[#0F7CC0] text-[#FFFFFF] rounded-[10px] text-[22px] font-bold w-[260px] p-[10px] cursor-pointer' style={{ "box-shadow": " 0px 6px 10px rgba(0, 0, 0, 0.25)" }}>CHOOSE PLAN</button>
                            </div>



                        </div>
                    </div>}
                    {checked && <div className='grid gap-[60px] grid-cols-1 lg:grid-cols-3  md:grid-cols-2'>
                        <div onClick={() => setSelectBox("one")} className={`bg-[#FFFFFF] mt-[25px] pt-6 px-[20px]  border-[1px]  rounded-[10px] cursor-pointer borderRound ${selectBox === "one" ? "change_color" : ""}`}>
                            <p className='text-[#3C9E48] text-[35px] font-bold text-center basic'>Basic</p>
                            <div className='text-center w-fit m-auto font-bold text-[70px] relative text-[#0F7CC0] pb-[20px] basic numres'><p className=' text-[40px] text-[#0F7CC0] left-[-20%] absolute font-bold basic dollarSign'>$</p>150 <span className='basic text-[20px] text-[#0F7CC0]'>/Yearly</span></div>
                            <div className='h-[250px]'>
                                <div className='flex gap-4 items-center pb-2'>
                                    <div>
                                        {selectBox === "one" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='basic text-[14px] font-semibold text-[#0F7CC0]'>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-center pb-2'>
                                    <div>
                                        {selectBox === "one" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='basic text-[14px] font-semibold text-[#0F7CC0]'>Lorem ipsum dolor sit</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div>
                                        {selectBox === "one" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='basic text-[14px] font-semibold text-[#0F7CC0]'>Lorem ipsum sit</p>
                                    </div>
                                </div>
                            </div>
                            <div className='pb-10 flex justify-center m-auto'>
                                <button className='basicbtn bg-[#0F7CC0] text-[#FFFFFF] rounded-[10px] font-bold text-[22px] w-[260px] p-[10px] cursor-pointer' style={{ "box-shadow": " 0px 6px 10px rgba(0, 0, 0, 0.25)" }}>CHOOSE PLAN</button>
                            </div>
                        </div>
                        <div onClick={() => setSelectBox("two")} className={`bg-[#FFFFFF] mt-[25px] pt-6 px-[20px] relative  border-[1px]  rounded-[10px] cursor-pointer borderRound ${selectBox === "two" ? "change_color" : ""}`}>
                            <button className='text-[#FFFFFF] p-[8px] absolute right-0 top-0 font-bold bestoff'>BEST OFFER</button>
                            <p className='text-[#3C9E48] text-[35px] font-bold text-center basic'>Standard</p>

                            <div className='text-center font-bold text-[70px] w-fit m-auto relative text-[#0F7CC0] pb-[20px] basic numres'><p className='  text-[40px] text-[#0F7CC0] left-[-20%] absolute font-bold basic dollarSign'>$</p>250 <span className='basic text-[20px] text-[#0F7CC0]'>/Yearly</span></div>
                            <div className='h-[250px]'>
                                <div className='flex gap-4 pb-2 items-center'>
                                    <div>
                                        {selectBox === "two" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 pb-2 items-center'>
                                    <div>
                                        {selectBox === "two" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum dolor sit</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 pb-2 items-center'>
                                    <div>
                                        {selectBox === "two" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum sit</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 pb-2 items-center'>
                                    <div>
                                        {selectBox === "two" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div>
                                        {selectBox === "two" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                            </div>

                            <div className='pb-10 flex justify-center m-auto'>
                                <button className=' basicbtn bg-[#0F7CC0] text-[#FFFFFF] rounded-[10px] font-bold text-[22px] w-[260px] p-[10px] cursor-pointer' style={{ "box-shadow": " 0px 6px 10px rgba(0, 0, 0, 0.25)" }}>CHOOSE PLAN</button>
                            </div>

                        </div>
                        <div onClick={() => setSelectBox("three")} className={`bg-[#FFFFFF] mt-[25px] pt-6 px-[20px]  border-[1px]  rounded-[10px] cursor-pointer borderRound ${selectBox === "three" ? "change_color" : ""}`}>
                            <p className='text-[#3C9E48] text-[35px] font-bold text-center basic'>Premium</p>

                            <div className='text-center font-bold text-[70px] w-fit m-auto relative text-[#0F7CC0] pb-[20px] basic numres'><p className='  text-[40px] text-[#0F7CC0] left-[-20%] absolute font-bold basic dollarSign'>$</p>350 <span className='basic text-[20px] text-[#0F7CC0]'>/Yearly</span></div>
                            <div className='h-[250px]'>
                                <div className='flex gap-4 pb-2 items-center'>
                                    <div>
                                        {selectBox === "three" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 pb-2 items-center'>
                                    <div>
                                        {selectBox === "three" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum dolor sit</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 pb-2 items-center'>
                                    <div>
                                        {selectBox === "three" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum sit</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 pb-2 items-center'>
                                    <div>
                                        {selectBox === "three" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 pb-2 items-center'>
                                    <div>
                                        {selectBox === "three" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div>
                                        {selectBox === "three" ? <img className='w-4' src="/images/Tick2.png" alt="" /> : <img className='w-4' src="/images/Tick.png" alt="" />}
                                    </div>
                                    <div>
                                        <p className='text-[14px] font-semibold text-[#0F7CC0] basic'>Lorem ipsum sit</p>
                                    </div>
                                </div>
                            </div>

                            <div className='pb-10 flex justify-center m-auto'>
                                <button className=' basicbtn bg-[#0F7CC0] text-[#FFFFFF] rounded-[10px] text-[22px] font-bold w-[260px] p-[10px] cursor-pointer' style={{ "box-shadow": " 0px 6px 10px rgba(0, 0, 0, 0.25)" }}>CHOOSE PLAN</button>
                            </div>



                        </div>
                    </div>}
                </div>
            </div>
            <hr className='mt-14 hrborder' />
        </div>
    )
}

export default Pricing
