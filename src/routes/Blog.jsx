import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import PageLayout from "@/components/PageLayout";
import BlogAllExpand from "@/routes/BlogAllExpand";
import { motion } from "framer-motion";

export default function Blog() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  };
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPosts = useMemo(() => {
    return [
      {
        id: 1,
        title: "In Appreciation of Our Student Leaders",
        category: "Featured",
        date: "Aug 9, 2023",
        description:
          "Now as there is a week left before our Summer Student Leaders Cohort leave the Pure Mentorship Program...",
        image: "./src/assets/BlogStudents.webp",
        link: "/BlogAllExpand#post-1",
      },
      {
        id: 2,
        title: "Mastering React Hooks",
        category: "New",
        date: "June 1, 2024",
        description:
          "Dive deep into the power of React Hooks and how to use them effectively.",
        image: "/placeholder.svg",
        link: "/BlogAllExpand",
      },
      {
        id: 3,
        title: "Optimizing Website Performance",
        category: "Popular",
        date: "May 28, 2024",
        description:
          "Learn techniques to improve your website's speed and user experience.",
        image: "/placeholder.svg",
        link: "/BlogAllExpand",
      },
      {
        id: 4,
        title: "The Rise of Serverless Computing",
        category: "Featured",
        date: "May 15, 2024",
        description:
          "Explore the benefits and challenges of serverless architecture.",
        image: "/placeholder.svg",
        link: "/BlogAllExpand",
      },
      {
        id: 5,
        title: "Accessibility in Web Design",
        category: "New",
        date: "April 30, 2024",
        description:
          "Ensuring your website is inclusive and accessible to all users.",
        image: "/placeholder.svg",
        link: "/BlogAllExpand",
      },
      {
        id: 6,
        title: "Scaling Your React Application",
        category: "Popular",
        date: "April 20, 2024",
        description:
          "Strategies and best practices for building scalable React apps.",
        image: "/placeholder.svg",
        link: "/BlogAllExpand",
      },
    ].filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);
  return (
    <>
      <PageLayout>
        {/* Thenu Header */}
        <section className="w-full h-full">
          <div className="relative">
            <img
              src="./src/assets/FounderHeadshotCrop.png"
              alt="Thunu Headshot"
              className="w-full"
            />
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={fadeInAnimationVariants}
            >
              <div id="text-box">
                <h2 className="text-sm md:text-3xl text-white font-bold absolute bottom-7 left-2 md:bottom-12 md:left-4">
                  A Reflection of the New Changes with Thenu
                </h2>
                <div className="flex absolute bottom-2 left-2 md:bottom-6 md:left-4">
                  <img src="./src/assets/logo.svg" className="w-5 mr-2 " />
                  <div className="text-white text-sm md:text-lg">
                    Pure Mentorship
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* BLOG GRID */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-6 md:px-8 lg:px-10 flex items-center justify-between mb-8 md:mb-10 lg:mb-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                Browse our top blog posts
                <span className="block h-1 w-20 bg-red-500 mt-2" />
              </h2>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 px-4 md:px-0">
            {filteredPosts.map((post) => (
              <motion.div
                initial="initial"
                whileInView="animate"
                variants={fadeInAnimationVariants}
              >
                <div
                  key={post.id}
                  className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out md:mx-5"
                >
                  <Link
                    to={post.link}
                    className="absolute inset-0 z-10"
                    prefetch={false}
                  >
                    <span className="sr-only">View</span>
                  </Link>
                  <div className="h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </div>
                  <div className="bg-white dark:bg-gray-950 p-6 space-y-3">
                    <div className="flex items-center space-x-2">
                      <div
                        className={`text-white px-2 py-1 rounded-full text-xs font-medium ${
                          post.category === "Featured"
                            ? "bg-red-500"
                            : post.category === "New"
                            ? "bg-blue-500"
                            : "bg-green-500"
                        }`}
                      >
                        {post.category}
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-red-500 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {post.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-6 md:px-8 lg:px-10 flex items-center justify-center mb-8 md:mb-10 lg:mb-12">
            <div>
              <Link
                className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl"
                to="/BlogAll"
              >
                Browse all blog posts
                <span className="block h-1 w-full bg-red-500 mt-2" />
              </Link>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
