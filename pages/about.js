
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import heroImg from "../public/img/f.png";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-green-950 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our NGO</h1>
            <p className="text-lg">Making a Positive Impact on the World</p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission and Vision</h2>
            <p className="text-gray-700 mb-4 pl-8 pr-8">
            At Project EduConnect, we firmly believe in the transformative power of unity, collaboration, and a shared purpose. Our mission is simple and profound: to unite the brilliant minds within our diverse communities, all while striving for extraordinary outcomes. We warmly invite you as we embark on this meaningful journey to create lasting positive change.
              <br />
              <br />
              {/* <ul className="list-disc text-left ml-8 lg:ml-32">
                <li>Conducting health camps</li>
                <li>
                  Held blood and food donations, and created awareness campaigns
                  in remote areas.
                </li>
                <li>
                  Distributing educational tools, materials, books, school
                  uniforms, and scholarships to needy students.
                </li>
                <li>
                  Providing necessary farming inputs to farmers and promoting
                  organic farming.
                </li>
                <li>
                  Organizing community-driven plantation programs and engaging
                  in the conservation of wildlife.
                </li>
                <li>
                  Holding welfare and development programs at remote locations
                  to create awareness among marginalized sections of society.
                </li>
              </ul> */}
            </p>
            <p className="text-gray-700 mb-4 pl-8 pr-8">Project EduConnect is on a mission to democratize education and empower marginalized and minority communities across India. Presently, our commitment lies in empowering law students at the institutional level and fostering legal literacy and awareness programs within communities at the community level. 
            </p>
          </div>
        </section>
        <section>
          <div className="lg:flex">
            <div className="container mx-auto text-center md:text-left">
              <h2 className="text-3xl font-bold mb-8 md:pl-8">Our Story</h2>
              <h2 className="text-xl font-bold mb-8 md:pl-8">
                History and the Founding
              </h2>
              <p className="text-gray-700 mb-4 pl-8 pr-8">
                Launched in 2023, Project EduConnect (Connecting Minds, Igniting Futures) is a community-driven non-profit initiative dedicated to uplifting and enhancing access to education for learners at all levels, from primary to higher education, and across various domains, throughout marginalized and minority communities across India.
              </p>
              <h2 className="text-xl font-bold mb-8 md:pl-8">
                Founders and their inspirations
              </h2>
              <p className="text-gray-700 mb-4 pl-8 pr-8">
                The founders of Project Edu Connect drew inspiration from the
                teachings of prominent leaders and visionaries who advocated for
                social justice and equality. As the President of AProject Edu Connect, 
                Rameez Reza is an enthusiastic and
                passionate individual who has always been motivated by a desire
                to make a positive impact on the lives of others. This motivated
                him to seek out like-minded friends, who ultimately helped form
                Project Edu Connect. It is their actions that speak louder
                than their words. Thei unwavering commitment to the cause laid the foundation for a
                movement that would touch countless lives and leave an indelible
                mark on society.
              </p>
            </div>
            <div>
              <Image
                src={heroImg}
                width="616"
                height="617"
                className={"object-cover lg:mt-16"}
                alt="Our Story"
                loading="eager"
                placeholder="blur"
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-200 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="/img/team/f.png"
                  alt="Team Member 1"
                />
                <h3 className="text-xl font-bold mb-2">Rameez Raza</h3>
                <p className="text-gray-700">Founder & CEO</p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="/img/team/f.png"
                  alt="Team Member 1"
                />
                <h3 className="text-xl font-bold mb-2">Rameez Raza</h3>
                <p className="text-gray-700">Founder & CEO</p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="/img/team/f.png"
                  alt="Team Member 1"
                />
                <h3 className="text-xl font-bold mb-2">Rameez Raza</h3>
                <p className="text-gray-700">Founder & CEO</p>
              </div>

              {/* Team Member 4 */}
             

              {/* Team Member 5 */}
             

              {/* Team Member 6 */}
              
              {/* Team Member 7 */}
              

              {/* Team Member 8 */}
              

              {/* Team Member 8 */}
              
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              Have questions or want to get involved? Reach out to us!
            </p>
            <a
              href="tel:+917419261380"
              className="px-6 py-3 text-lg font-medium text-center text-white bg-green-950 hover:bg-green-900 rounded-md transition duration-300"
            >
              Call Us
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
