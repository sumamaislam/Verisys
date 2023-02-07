import React from 'react'

function Market() {
  return (
    <div>
      <div className='containers'>
        <h1 className='text-center text-[35px] text-[#0F7CC0] font-bold mt-[70px]'>Our Markets</h1>
        <div>

          <div className='flex gap-[73px] mt-[70px] flex-wrap m-auto justify-center gap_sizing'>
            <div className='borderColor py-[35px] px-[40px w-[300px] cursor-pointer'>
              <div>
                <img className='flex justify-center m-auto hover:scale-125 duration-500 ease-in-out' src="/images/automotive.png" alt="" />
              </div>
              <p className='text-[#008BBF] text-[20px] font-bold text-center pt-[30px]'>Automotive</p>
            </div>

            <div className='borderColor py-[35px] px-[40px]  w-[300px] cursor-pointer'>
              <div>
                <img className='flex justify-center m-auto hover:scale-125 duration-500 ease-in-out' src="/images/oil.png" alt="" />
              </div>
              <p className='text-[#008BBF] text-[20px] font-bold text-center pt-[30px]'>Oil and Lubricants</p>
            </div>

            <div className='borderColor py-[35px] px-[40px]  w-[300px] cursor-pointer'>
              <div>
                <img className='flex justify-center m-auto hover:scale-125 duration-500 ease-in-out' src="/images/industry.png" alt="" />
              </div>
              <p className='text-[#008BBF] text-[20px] font-bold text-center pt-[30px]'>Industrial Products</p>
            </div>

            <div className='borderColor py-[35px] px-[40px]  w-[300px] cursor-pointer'>
              <div>
                <img className='flex justify-center m-auto hover:scale-125 duration-500 ease-in-out' src="/images/brandtech.png" alt="" />
              </div>
              <p className='text-[#008BBF] text-[20px] font-bold text-center pt-[30px]'>Brand and technology license </p>
            </div>

            <div className='borderColor py-[35px] px-[40px]  w-[300px] cursor-pointer'>
              <div>
                <img className='flex justify-center m-auto hover:scale-125 duration-500 ease-in-out' src="/images/agro.png" alt="" />
              </div>
              <p className='text-[#008BBF] text-[20px] font-bold text-center pt-[30px]'>Agro-Chemical</p>
            </div>

            <div className='borderColor py-[35px] px-[40px]  w-[300px] cursor-pointer'>
              <div>
                <img className='flex justify-center m-auto hover:scale-125 duration-500 ease-in-out' src="/images/healthcare.png" alt="" />
              </div>
              <p className='text-[#008BBF] text-[20px] font-bold text-center pt-[30px]'>Healthcare</p>
            </div>

            <div className='borderColor py-[35px] px-[40px] w-[300px] cursor-pointer '>
              <div>
                <img className='flex justify-center m-auto hover:scale-125 duration-500 ease-in-out' src="/images/spirit.png" alt="" />
              </div>
              <p className='text-[#008BBF] text-[20px] font-bold text-center pt-[30px]'>Wine and Spirits</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Market
