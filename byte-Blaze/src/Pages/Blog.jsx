import React, { useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
const Blog = () => {
    const [tabIndex, setTabIndex] = useState(0)
    console.log(tabIndex);
    
  const blogData = useLoaderData();
  // console.log(blogData);
  const {
    comments_count,
    title,
    reading_time_minutes,
    public_reactions_count,
    published_at, tags
  } = blogData;
  return (
    <>
    <Nav />
    <div className="w-full px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 bg-gray-800 text-gray-50 p-4">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
            <div className="flex items-center md:space-x-2">
              <p className="text-sm">
                {reading_time_minutes} min read •{" "}
                {new Date(published_at).toLocaleString()}
              </p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              {comments_count} • {public_reactions_count}
            </p>
          </div>

          <div className="flex items-start -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap bg-gray-800 text-gray-100">
            <Link to='content'
             onClick={ ()=>setTabIndex(0) }
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400 text-gray-50 `}
            >
              <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content</span>
            </Link>

            <Link to = 'author'
            onClick={ ()=>setTabIndex(1) }
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400 text-gray-50 `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Author</span>
            </Link>
          
          
          </div>
       
        
        
        </div>
       
        
      </article>
      <div className=" border-2 border-gray-300 p-2">
        <Outlet />
        </div>
      
      <div>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">

          {tags.map(tag=> <a
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
          >
            #{tag}
          </a>)}

          
     
    
        </div>
       
      </div>
    </div>
    
    </>
  );
};

export default Blog;
