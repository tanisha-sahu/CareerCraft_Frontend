import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="bg-[#F8F8EC]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-26">
      <Link
      to="ats"
      className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200"
    >
      <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">
        New
      </span>
      <span className="text-sm font-medium">
        Resume ATS score checker was launched! See what's new
      </span>
      <svg
        className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 9 4-4-4-4"
        />
      </svg>
    </Link>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
        YOUR WORK DESERVES <br /> A PORTFOLIO THAT STANDS OUT
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
        Create sleek, customizable portfolios that bring your work to life and help you make a strong first impression.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link
            to="/template"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          >
            Get started
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="text-4xl">
      </div>


      <div className="min-h-screen bg-[#F8F8EC] flex flex-col items-center justify-center px-6 py-12 text-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Build Your Resume Effortlessly
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 max-w-2xl mb-6">
        A well-crafted resume highlights your strengths, showcases your experience, and opens doors to new opportunities. 
        Our intuitive Resume Builder helps you create a standout resume in just a few clicks — no design skills needed.
      </p>

      {/* Optional Separator */}
      <div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>

      {/* Video Tutorial */}
      <video
        className="w-full max-w-5xl h-auto rounded-2xl shadow-lg border border-gray-300"
        controls
      >
        <source
          src="video.mp4" // Replace this with your actual video path
          type="video/mp4"
          
        />
        Your browser does not support the video tag.
      </video>
      {/* After Video Section */}
      <div className="mt-10 max-w-2xl text-gray-700 text-base sm:text-lg">
        <p className="mb-3">
          Whether you're a student, fresher, or professional — your resume is your personal brand. Make it count.
        </p>
        <p>
          Start creating your resume today and let your skills speak for themselves.
        </p>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
