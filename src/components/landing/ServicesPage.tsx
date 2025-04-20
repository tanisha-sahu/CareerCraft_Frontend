export default function ServicesPage() {
    return (
      <section className="bg-[#F8F8EC] py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Service 1: Image left, content right */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img 
                src="service1.png" 
                alt="service 1" 
                className="w-full rounded-lg shadow-xl transition-all hover:shadow-2xl" 
              />
            </div>
            <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
              <h2 className="text-4xl font-bold text-gray-800">
                Service One
              </h2>
              <p className="mt-4 text-lg text-gray-600">
              We help you create a professional portfolio website using clean, modern, and fully responsive templates. Whether you're a student, freelancer, or job seeker, your portfolio will beautifully showcase your skills, projects, and achievements — all in one place.  </p>
            </div>
          </div>
  
          {/* Service 2: Image right, content left */}
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 ">
              <img 
                src="sevice2.png" 
                alt="Service 2" 
                className="w-full rounded-lg shadow-xl transition-all hover:shadow-2xl" 
              />
            </div>
            <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0">
              <h2 className="text-4xl font-bold text-gray-800">
                Service Two
              </h2>
              <p className="mt-4 text-lg text-gray-600">
              Our AI-powered resume ATS checker analyzes your resume just like a company’s Applicant Tracking System would. It gives you a detailed score, highlights missing keywords, and helps you improve your resume so you have a better chance of getting shortlisted.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  