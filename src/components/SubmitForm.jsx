import React from 'react'

const SubmitForm = () => {
    function handleSubmit(e) {
    e.preventDefault()
    e.target.submit()
  }
  return (
    <section
      id="submitform"
      className="flex flex-col justify-center items-center w-full px-4 gap-11 py-10"
    >
      <h2 className="text-white text-3xl md:text-4xl mb-8 underline decoration-green-700">
        Lets Talk about Work
      </h2>
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="w-full bg-white rounded-2xl overflow-hidden min-h-[500px]">
          <iframe
            className="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7236.741276949068!2d67.24685790976058!3d24.919440578049326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU1JzExLjgiTiA2N8KwMTQnNTcuMiJF!5e0!3m2!1sen!2s!4v1744178551979!5m2!1sen!2s"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="w-full flex justify-center items-center gap-7">
          <div
            id="drawer-contact"
            className="flex flex-col py-3.5 gap-6 border-[#04b30f] hover:scale-[1.02] duration-200 shadow-[0_0px_60px_#0e52189f] border-2 w-full max-w-[600px] h-[550px] rounded-3xl p-6"
          >
            <h5
              id="drawer-label"
              className="flex gap-3 items-center text-white text-3xl md:text-4xl uppercase"
            >
              <svg
                className="w-10"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              Contact us
            </h5>

            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/salmanhanif44444@gmail.com"
              method="POST"
              className="flex flex-col gap-5"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_subject" value="New message from Portfolio" />

              <div>
                <label htmlFor="subject" className="text-white text-[20px]">
                  Your Name
                </label>
                <input
                  type="text"
                  id="subject"
                  name="name"
                  className="w-full h-[40px] border-green-700 border-2 rounded-3xl pl-4 text-white bg-transparent placeholder:pl-2"
                  placeholder="Your Good Name ?"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="text-white text-[20px]">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full h-[40px] border-green-700 border-2 rounded-3xl pl-4 text-white bg-transparent placeholder:pl-2"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="text-white text-[20px]">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full h-[180px] border-green-700 pt-4 placeholder:pl-0 border-2 rounded-3xl pl-4 text-white bg-transparent  placeholder:pt-1"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-[150px] rounded-2xl h-[40px] bg-gradient-to-r from-[#04b30f] to-[rgb(6,221,60)] text-white font-bold hover:opacity-90 transition"
              >
                Connect
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubmitForm