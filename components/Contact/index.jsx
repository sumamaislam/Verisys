import React, { useState } from 'react'

function ContactUs() {

  const fields = {
    firstname: "",
    lastname: "",
    email: "",
    organization: "",
    message: "",
  }

  const [formValues, setFormValues] = useState(fields)
  const [formError, setFormError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    validate(formValues)
    setIsSubmit(true)
  }


  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "First Name is required"
    }

    if (!values.lastname) {
      errors.lastname = "Last Name is required"
    }

    if (!values.email) {
      errors.email = "Email is required"
    }

    if (!values.organization) {
      errors.organization = "Organization Name is required"
    }
    if (!values.message) {
      errors.message = "Message Name is required"
    }
    if (Object.keys(errors).length > 0) {
      setFormError(errors)
    } else {
      console.log(formValues)
      setFormError(fields)
      setFormValues(fields)
    }
  }


  return (
    <div>
      <div className='adjust_padding relative h-[600px]'>
        <div className='container'>
          <div className='flex justify-between'>
            <div className='w-[50%] flex flex-col h-[600px] justify-center '>
              <h1 className='text-[50px] font-bold text-[#0F7CC0] pb-[30px]'>Contact Us</h1>
              <p className='capitalize text-[22px] font-normal pb-[30px]'>Want to get in touch with our Customer Service team? Looking to learn more about our solutions? Have a press inquiry?</p>
              <p className='capitalize text-[22px] font-normal'>Speak to a member of our team by using the form below, or give us a call.</p>
            </div>
            <div>
              <img className='absolute right-0 h-[100%] top-0' src="/images/contactbanner.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='container' >
        <div className='flex justify-between gap-[70px] mt-[70px] items-center'>
          <div className='bg-[#D8F3FE] rounded-[10px] w-[65%]'>
            <form onSubmit={handleSubmit} >
              <div className="py-10 px-5">

                <div className="grid grid-cols-2 gap-4">

                  <div className="col-span-2 lg:col-span-1">
                    <label className='text-[12px] font-extrabold pb-[5px]'> First Name</label>
                    <input type="text" className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" name='firstname' placeholder="First Name"
                      value={formValues.firstname}
                      onChange={handleChange} />
                    <pre>{formError.firstname}</pre>
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <label className='text-[12px] font-extrabold pb-[5px]'> Last Name</label>
                    <input type="text" className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" name='lastname' placeholder="Last Name"
                      value={formValues.lastname}
                      onChange={handleChange} />
                    <pre>{formError.lastname}</pre>
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <labe className='text-[12px] font-extrabold pb-[5px]' l> E-Mail</labe>
                    <input type="text" className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" name='email' placeholder="E-mail"
                      value={formValues.email}
                      onChange={handleChange} />
                    <pre>{formError.email}</pre>
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <label className='text-[12px] font-extrabold pb-[5px]'>Name Of Organization</label>
                    <input type="text" className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" name='organization' placeholder="Name of organization *"
                      value={formValues.organization}
                      onChange={handleChange} />
                    <pre>{formError.organization}</pre>
                  </div>

                  <div>
                    <label className='text-[12px] font-extrabold pb-[5px]'> Country</label>
                    <select className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" name="">
                      <option hidden>Please Select</option>
                      <option>Us</option>
                      <option>Pakistan</option>
                      <option>America</option>
                    </select>
                  </div>

                  <div>
                    <label className='text-[12px] font-extrabold pb-[5px]'> Reason Of Contact </label>
                    <select className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" name="">
                      <option hidden>Please Select</option>
                      <option>Brand Protection</option>
                      <option>QR CODE</option>
                      <option>Anti Piracy </option>
                      <option>Partnership</option>
                      <option>Others</option>
                    </select>
                  </div>


                  <div className="col-span-2">
                    <textarea cols="30" rows="8" className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" name='message' placeholder="Type Your Message Here........."
                      value={formValues.message}
                      onChange={handleChange}>
                    </textarea>
                    <pre>{formError.message}</pre>
                  </div>

                  <div className="col-span-2 flex m-auto">
                    <button className="text-[25px] p-[8px] bg-[#0F7CC0] brandformbutton text-white font-bold py-[12px] px-[62px] rounded-[10px]">
                      Submit
                    </button>
                  </div>

                </div>
              </div>
            </form>
          </div>
          <div className='w-[35%]'>
            <h1 className='text-[#0F7CC0] text-[45px] font-bold pb-[45px]'>How Can We Help.?</h1>
            <p className='capitalize text-[25px] font-normal pb-[40px]'>Looking For The Brand Secure QR Code Website.? We verisys.us Is Always Here To Help You.</p>
            <p className='capitalize text-[25px] text-[#0F7CC0] font-semibold'>Fill the form and let us know how can we help.?</p>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-[url('/images/BgCode.png')] bg-cover pt-[55px] pb-[55px] ">
          <div className='container'>
          <h1 className='text-center text-[35px] text-[#FFFFFF] font-bold mt-[45px] mb-[55px]  trustres'>OTHER OPTIONS</h1>
            <div className='grid gap-[25px] mt-[40px] lg:grid-cols-4  md:grid-cols-2 grid-cols-1'>
              <div>
                <div>
                  <img className='flex justify-center m-auto' src="/images/skypecont.png" alt="" />
                </div>
                <p className='text-[25px] font-bold text-center pt-[30px] text-[#FFFFFF]'>Skype</p>
                <p className='text-center text-[15px] pt-3 font-semibold'>verisys.int</p>
              </div>

              <div>
                <div>
                  <img className='flex justify-center m-auto' src="/images/twittercont.png" alt="" />
                </div>
                <p className='text-[25px] font-bold text-center pt-[30px] text-[#FFFFFF]'>Twitter</p>
                <p className='text-center text-[15px] pt-3 font-semibold'>verisysis.int</p>
              </div>

              <div>
                <div>
                  <img className='flex justify-center m-auto' src="/images/phonecont.png" alt="" />
                </div>
                <p className='text-[25px] font-bold text-center pt-[30px] text-[#FFFFFF]'>Phone</p>
                <p className='text-center text-[15px] pt-3 font-semibold'>+1 234 456 2919</p>
              </div>

              <div>
                <div>
                  <img className='flex justify-center m-auto' src="/images/mailcont.png" alt="" />
                </div>
                <p className='text-[25px] font-bold text-center pt-[30px] text-[#FFFFFF]'>Mail</p>
                <p className='text-center text-[15px] pt-3 font-semibold'>contact@verisys.com</p>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactUs
