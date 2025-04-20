const AboutSection = () => {
    return (
        <section className="bg-[#F8F8EC] py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Block 1: Question left, Answer card right */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 flex items-center">
              <h2 className="text-5xl font-bold text-black ">
                Who You Are?
              </h2>
            </div>
            <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
              <div className="p-1 rounded-xl shadow-lg transition-all hover:shadow-2xl">
                <div className="bg-white rounded-xl p-8">
                  <p className="text-xl text-gray-800 leading-relaxed">
                    We are <span className="font-semibold">Career Craft</span>, we’re on a mission to help individuals craft their professional journey with confidence. Whether it’s building a stunning portfolio website or optimizing your resume for ATS systems, we provide smart, simple, and effective tools that highlight your strengths. We believe everyone deserves a chance to stand out, and our platform is designed to make that possible — with ease, style, and impact.

</p>
                  {/* <p className="mt-4 text-xl text-gray-800 leading-relaxed">
                    By merging artistic creativity with cutting-edge technology, we help you build a portfolio that not only looks visually stunning but also narrates your professional journey in a compelling way.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          
          {/* Block 2: Question right, Answer card left */}
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 md:pl-12 flex items-center">
              <h2 className="text-5xl font-bold text-black ">
                What You Do?
              </h2>
            </div>
            <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0">
              <div className="p-1 rounded-xl shadow-lg transition-all hover:shadow-2xl">
                <div className="bg-white rounded-xl p-8">
                  <p className="text-xl text-gray-800 leading-relaxed">
                    At <span className="font-semibold">Career Craft</span>, we provide two key services to boost your professional presence. We help you build modern, eye-catching portfolio websites that showcase your work and skills in the best possible way. Alongside that, our smart ATS Resume Checker analyzes your resume, scores it, and gives you clear suggestions to improve your chances of getting shortlisted by top companies.</p>
                  {/* <p className="mt-4 text-xl text-gray-800 leading-relaxed">
                    Whether you’re a freelancer, startup, or established professional, our solutions are tailored to help you shine in the digital space.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          
          {/* Block 3: Question left, Answer card right */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 flex items-center">
              <h2 className="text-5xl font-bold text-black ">
                Why It Matters?
              </h2>
            </div>
            <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
              <div className="p-1 rounded-xl shadow-lg transition-all hover:shadow-2xl">
                <div className="bg-white rounded-xl p-8">
                  <p className="text-xl text-gray-800 leading-relaxed">
                  In today’s competitive world, just having skills isn’t enough — how you present them makes all the difference. Recruiters spend only a few seconds on each resume, and many use automated systems to filter candidates. That’s why having a strong online portfolio and an ATS-optimized resume is no longer optional — it’s essential. Career Craft empowers you to stand out with a personal brand that reflects your potential and a resume that speaks the language of hiring systems.   </p>
                  {/* <p className="mt-4 text-xl text-gray-800 leading-relaxed">
                    Our platform ensures your portfolio stands out visually while effectively communicating your expertise and passion, fostering trust and credibility.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          
          {/* Block 4: Question right, Answer card left */}
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 md:pl-12 flex items-center">
            <h2 className="text-5xl font-bold text-black ">
              Your Mission or Vision?
            </h2>
          </div>
          <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0">
            <div className="p-1 rounded-xl shadow-lg transition-all hover:shadow-2xl">
              <div className="bg-white rounded-xl p-8">
                <p className="text-xl text-gray-800 leading-relaxed">
                At Career Craft, our mission is to empower job seekers by providing the tools to create standout portfolios and ATS-optimized resumes, helping them confidently navigate the job market. </p>
                <p className="mt-4 text-xl text-gray-800 leading-relaxed">
                We aim to make professional growth accessible to all, offering innovative solutions that help individuals showcase their potential and connect with opportunities. </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>

  
    )    
  };
  
  export default AboutSection;
  