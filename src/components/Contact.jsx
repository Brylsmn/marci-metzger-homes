export const Contact = () => {
  return (
    <section className="bg-(--color-off-white) py-16">
      <h1 className="text-(--color-dark-blue) font-inria-serif-bold text-3xl text-center py-4 pb-16 lg:text-4xl">
        GET IN TOUCH
      </h1>
      <div className="grid lg:grid-cols-3 justify-evenly gap-8 px-8 lg:px-16 mx-auto max-w-7xl">
        <div className="flex flex-col justify-evenly bg-(--color-off-white) rounded-lg shadow-md p-6 max-w-md w-full mx-auto h-full border border-gray-200">
          <div>
            <h2 className="text-lg md:text-xl font-inria-sans-bold text-(--color-off-black) mb-2 pb-6">
              Marci Metzger – THE RIDGE REALTY GROUP
            </h2>
            <p className="text-(--color-off-black) font-inria-sans-regular text-sm">
              3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
            </p>
            <p className="text-(--color-off-black) font-inria-sans-regular mt-3">
              (206) 919-6886
            </p>
            <div className="border-t border-(--color-gray) mt-8 mb-4"></div>
            <div>
              <p className="text-(--color-off-black) font-inria-sans-bold">Office Hours</p>
              <p className="text-(--color-off-black) font-inria-sans-regular text-sm pt-4">
                Open daily &nbsp;&nbsp; 8:00 am - 7:00 pm
              </p>
            </div>
            <p className="text-(--color-off-black) text-sm mt-3 font-inria-sans-regular py-8">
              Appointments outside office hours available upon request. Just call!
            </p>
          </div>
          <button className="w-full bg-(--color-dark-blue) text-(--color-off-white) font-medium py-2 rounded-lg hover:bg-(--color-blue)">
            Message us on WhatsApp
          </button>
        </div>
        <div className="flex flex-col justify-center bg-(--color-bg) rounded-lg shadow-md p-8 max-w-md w-full mx-auto h-full border border-(--color-gray)">
          <h2 className="text-2xl font-inria-sans-bold text-(--color-off-black) text-center mb-4">
            Send us a message
          </h2>
          <form className="flex flex-col justify-between grow">
            <div>
              <div className="mb-4">
                <label
                  className="block text-(--color-off-black) mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-2 py-1 text-(--color-gray) border-b border-(--color-gray) focus:border-(--color-dark-blue) focus:outline-none transition duration-300"
                  placeholder=""
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-(--color-off-black) mb-1"
                  htmlFor="email"
                >
                  Email*
                </label>
                <input
                  className="w-full px-2 py-1 text-(--color-gray) border-b border-(--color-gray) focus:border-(--color-dark-blue) focus:outline-none transition duration-300"
                  placeholder=""
                  name="email"
                  id="email"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-(--color-off-black) mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-2 py-1 text-(--color-gray) border-b border-(--color-gray) resize-none focus:border-(--color-dark-blue) focus:outline-none transition duration-300"
                  rows={4}
                  placeholder=""
                  name="message"
                  id="message"
                />
              </div>
            </div>
            <button
              className="w-full bg-(--color-dark-blue) text-(--color-off-white) font-inria-sans-bold py-2 px-4 rounded-lg hover:bg-(--color-blue) transition duration-300 mt-2"
              type="submit"
            >
              Send
            </button>
            <div className="text-xs pt-8 font-inria-sans-light text-center">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center max-w-md w-full mx-auto h-full">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.5027908542215!2d-116.02587388473547!3d36.20832618007442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8da4b3d3c3d81%3A0x3db3dc0c7d4d7d52!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sus!4v1694520000000!5m2!1sen!2sus"
            className="w-full h-[450px] lg:h-[560px] rounded-lg shadow-md border border-(--color-gray)"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
