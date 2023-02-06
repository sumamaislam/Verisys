import React from "react";

function Banner() {
  return (
    <div className="adjust_padding">
      <div className="containers">
        <div className="flex justify-around items-center gap-4 CounterRes mb-24">
          <div className="w-[100%] lg:w-[60%] md:w-[100%] justify-center flex flex-col stop_counter_set">
            <h1 className="text-[35px] font-bold text-[#0F7CC0] stopres">Stop Counterfeiting</h1>
            <h3 className="text-[35px] capitalize font-semibold text-[#3C9E48] preventres">Prevent Fraud Augment your physical products with digital value</h3>
            <p className="text-[20px] font-normal QRres">Make a QR code for free that you can use in your branding, marketing, and more to easily direct customers to your website.</p>
            {/* <div>
              <button className="w-[235px] bg-[#008BBF] text-[#FFFFFF] p-[21px] rounded-[10px] text-[15px] font-bold mt-10 flex m-auto justify-center cursor-pointer btnQrRes">Get Your QR Code Now</button>
            </div> */}
          </div>
          <div>
            <img className="w-[680px] scanres" src="/images/verify.png" alt=" Verify Image " />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Banner;