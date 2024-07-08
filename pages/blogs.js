import React from "react";
import Link from "next/link"; // Import Link from Next.js
import Navbar from "../components/navbar";
import Footer from "../components/footer";
// import blogsList from "./blogList";
const blogsList = [
  {
    id: 1,
    title: "10 Fundamental Rights of a Child in India – Ensuring a Bright Future",
    image: "/img/blog/b1.png",
    description: `
    The fundamental rights of children, enshrined in the Constitution and inspired by internationally accepted principles, ensure that the children of India grow up in a safe, nurturing, and empowering environment.`,
  },
  {
    id: 2,
    title: "Gender Inequality in India – Causes & Solutions",
    image: "/img/blog/b2.png",
    description: `
    Gender inequality has been a crucial social issue in India for centuries. Census 2011 shows the child sex ratio among children of 0-6 years to be 918 girls for every 1000 boys in India. This statistic speaks for itself and demands urgent and efficient solutions to address the cause of gender inequalities. `,
  },
  {
    id: 3,
    title: "Education In Rural India: Challenges, Opportunities, Initiatives",
    image: "/img/blog/b3.png",
    description: `
    Imagine a future where every child in India can get a quality education regardless of zip code. However, the harsh truth about rural India makes this future seem far away. Limited infrastructure,`,
  },
];
const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {blogsList.map((blog) => (
            <div
              key={blog.id}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <img className="w-full h-56" src={blog.image} alt={blog.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{blog.title}</div>
                <p className="text-gray-700 text-base">
                  {blog.description.slice(0, 100)}...
                  {/* Use Link component from Next.js */}
                  <Link href={`/blogs/${blog.id}`}>
                    <button className="text-blue-500">Read more</button>
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
