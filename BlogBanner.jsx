import React from 'react';
import blogImage from '../../assets/images/blog.png';

function BlogBanner() {
    return (
        <div className="flex h-96 justify-center items-center overflow-hidden">
            <img src={blogImage} alt="FAQ Banner" className="w-full background-cover h-96" />
        </div>
    );
}

export default BlogBanner;
