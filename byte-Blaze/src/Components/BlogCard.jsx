import React from "react";
import { Link } from "react-router-dom";
import notfound from "/notfound.jpg"
const BlogCard = ({blog}) => {
  return (
    <Link
      to='/'
      href="#"
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 hidden sm:block"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={blog.cover_image || notfound}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {blog.titlte}
        </h3>
        <span className="text-xs text-gray-400">{new Date(blog.published_at).toDateString()}</span>
        <p>
          {blog.description}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
