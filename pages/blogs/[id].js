import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
// import blogsList from "../blogList";
const blogsList = [
  {
    id: 1,
    title: "10 Fundamental Rights of a Child in India – Ensuring a Bright Future",
    image: "/img/gallery/b1.png",
    description: `
   The fundamental rights of children, enshrined in the Constitution and inspired by internationally accepted principles, ensure that the children of India grow up in a safe, nurturing, and empowering environment.`,
  },
  {
    id: 2,
    title: "Gender Inequality in India – Causes & Solutions",
    image: "/img/gallery/b2.png",
    description: `
    Gender inequality has been a crucial social issue in India for centuries. Census 2011 shows the child sex ratio among children of 0-6 years to be 918 girls for every 1000 boys in India. This statistic speaks for itself and demands urgent and efficient solutions to address the cause of gender inequalities. `,
  },
  {
    id: 3,
    title: "Education In Rural India: Challenges, Opportunities, Initiatives",
    image: "/img/gallery/b3.png",
    description: `
    Imagine a future where every child in India can get a quality education regardless of zip code. However, the harsh truth about rural India makes this future seem far away. Limited infrastructure,`,
  },
];
const Blog = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = blogsList.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-screen-md mx-auto">
          <div className="flex justify-center">
            <img className="w-full md:w-4/5 md:h-96" src={blog.image} alt={blog.title} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{blog.title}</div>
            <p className="text-gray-700 mb-4 text-base">{blog.description}</p>
          </div>
          <Link
            href="/blogs"
            className="w-full px-6 ml-6 py-2 mt-3 text-center text-white bg-green-950 hover:bg-green-900 rounded-md lg:ml-5"
          >
            Back
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
