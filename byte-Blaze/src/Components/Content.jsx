import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Content = () => {
    const blog = useLoaderData();
    console.log(blog);
    return (
        <div>
            <div>
                <img className='w-full' src={blog.cover_image} alt="" />
            </div>
        </div>
    );
};

export default Content;