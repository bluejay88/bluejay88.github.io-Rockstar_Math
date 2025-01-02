import React from 'react';
import faqImage from '../../assets/images/faq.png'; // Update the path as needed

function FAQBanner() {
    return (
        <div className="flex h-96 justify-center items-center overflow-hidden">
            <img src={faqImage} alt="FAQ Banner" className="w-full background-cover h-96" />
        </div>
    );
}

export default FAQBanner;
