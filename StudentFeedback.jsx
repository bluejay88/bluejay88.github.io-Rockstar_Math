import React, { useState, useEffect } from "react";
import feedbackImage1 from "../assets/images/feedback_images/1.jpg";
import feedbackImage2 from "../assets/images/feedback_images/2.jpg";
import feedbackImage3 from "../assets/images/feedback_images/3.jpg";
import feedbackImage4 from "../assets/images/feedback_images/4.jpg";
import feedbackImage5 from "../assets/images/feedback_images/5.jpg";

function StudentFeedback() {
    const reviews = [
        {
            img: feedbackImage1,
            name: "Alice Johnson",
            class: "Grade 9",
            review: "The lessons are amazing and easy to follow! I really like how the topics are broken down into smaller chunks that are easier to digest. The quizzes at the end of each section are very helpful for testing understanding. Overall, a great platform for learning."
        },
        {
            img: feedbackImage2,
            name: "Bob Smith",
            class: "FSC",
            review: "I really improved my understanding of calculus. The examples provided were very practical and matched real-world scenarios. The exercises allowed me to apply what I had learned effectively. I would highly recommend this to students."
        },
        {
            img: feedbackImage3,
            name: "Charlie Brown",
            class: "Grade 10",
            review: "Great teaching style and very engaging. I always struggled with understanding certain concepts in math, but this platform made it so much simpler. The interactive sessions kept me focused, and I feel more confident in my abilities now."
        },
        {
            img: feedbackImage4,
            name: "Daisy Lee",
            class: "FSC",
            review: "A wonderful experience with top-notch content. I particularly enjoyed the step-by-step explanations and the visually appealing diagrams. This course exceeded my expectations in every way. Keep up the fantastic work!"
        },
        {
            img: feedbackImage5,
            name: "Ethan Hawke",
            class: "Grade 11",
            review: "Highly recommend to anyone wanting to learn. The structure of the lessons was clear, and the additional resources provided were invaluable. I found myself looking forward to each session. Thank you for such a well-thought-out course."
        },
    ];

    const [visibleReviews, setVisibleReviews] = useState([0]);
    const [isMd, setIsMd] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const updateIsMd = () => setIsMd(window.innerWidth >= 768);
        window.addEventListener("resize", updateIsMd);
        return () => window.removeEventListener("resize", updateIsMd);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleReviews((current) => {
                const nextIndexes = current.map((index) => (index + 1) % reviews.length);
                return isMd ? [nextIndexes[0], (nextIndexes[0] + 1) % reviews.length] : [nextIndexes[0]];
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [isMd, reviews.length]);

    return (
        <div className="w-full py-10 px-2 lg:px-28">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold">Students Feedback</h1>
            </div>

            <div className="flex gap-6 overflow-hidden">
                {visibleReviews.map((index) => {
                    const review = reviews[index];
                    return (
                        <div
                            key={index}
                            className="flex flex-col gap-5 items-start bg-gray-100 border border-gray-200 rounded-xl p-8 shadow-lg transition-transform transform hover:scale-105"
                            style={{ minWidth: isMd ? "400px" : "100%" }}
                        >
                            <div className="flex gap-5 items-center">
                                <img
                                    src={review.img}
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full mb-4 border border-gray-400"
                                />
                                <div className="flex flex-col">
                                    <h2 className="text-xl font-semibold mb-1">{review.name}</h2>
                                    <p className="text-sm text-gray-500 mb-2">{review.class}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">"{review.review}"</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default StudentFeedback;