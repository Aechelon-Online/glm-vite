import React, { useRef, useEffect } from 'react'


const FrontForm = () => {
    const formRef = useRef(null)

    useEffect(() => {
        const script = document.createElement('script')
        script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
        script.type = 'text/javascript'
        formRef.current.appendChild(script)
    }, [])


  return (
    <div className="absolute h-[40%] w-[95%] text-[0.625rem] bottom-0 text-white">
      <div className="flex justify-center mx-1">
        <form
          className="w-[100%] max-w-[350px] tablet:max-w-[475px] h-[170px] bg-gray-800/30 border-solid border-2 border-gray-700 p-2 flex flex-col items-center justify-center validate"
          ref={formRef}
          action="https://greglucemusic.us8.list-manage.com/subscribe/post?u=93a75b530a80d657cb9b80df0&amp;id=7af118c516&amp;f_id=00fe1ee0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          noValidate>
          
            <div className="w-[100%] text-center text-[0.75rem] mb-1 smallMobile:text-[0.875rem] tablet:text-[1rem]">
              Sign UP today to receive <span className="font-bold">20%</span> discount on your first event.
            </div>
            <div className="flex p-1 mt-0 w-[70%] justify-center">
            <div className="border-solid border-2 border-gray-600 rounded rounded-5 px-0 mx-1">
                    <input
                      className="bg-gray-500/0 py-2 px-2 text-[0.75rem] w-[38vw] smallMobile:w-[150px] tablet:w-[200px] smallMobile:px-3 mobile:px-4 tablet:text-[1rem]"
                      type="text"
                      name="FNAME"
                      placeholder="First Name"
                      required
                    />
                </div>

                <div className="border-solid border-2 border-gray-600 rounded rounded-5 px-0 mx-1">
                    <input
                      className="bg-gray-500/0 py-2 px-2 text-[0.75rem] w-[38vw] smallMobile:w-[150px] tablet:w-[200px] smallMobile:px-3 mobile:px-4 tablet:text-[1rem]"
                      type="email"
                      name="EMAIL"
                      placeholder="Email"
                      required
                    />
                </div>
                
            </div>

            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
              <input type="text" name="b_93a75b530a80d657cb9b80df0_7af118c516" tabIndex="-1" value="" />
            </div>
                <input
                  className="border-solid border-2 border-gray-600 p-[7px] m-1 rounded rounded-2 text-[0.75rem] mobile:text-[0.875rem] tablet:text-[1rem] button font-bold bg-gradient-to-tr from-red-400/80 to-yellow-300/80"
                  type="submit"
                  value="GET DISCOUNT"
                  name="get discount"
                />
            <div>
              <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
              <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
            </div>
          
        </form>
      </div>
    </div>
  )
}

export default FrontForm

