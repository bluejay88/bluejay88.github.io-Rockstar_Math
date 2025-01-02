import React from "react";
import amy from "../assets/images/amy.png";
import mortarBoardGreen from "../assets/images/mortarBoardGreen.png";
import mortarBoardRed from "../assets/images/mortarBoardRed.png";
import video from "../assets/images/video.png";
import students from "../assets/images/students.png";

function Milestones() {
    return (
        <div className="w-full py-10 px-6 lg:px-20">
            <div className="w-full">
                {/* Header */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-center lg:text-left">Amy’s / Rockstar Math Milestones</h1>
                </div>
                {/* Content */}
                <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-10">
                    {/* Grid Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-20 gap-y-10 w-full mt-20 lg:w-2/5">
                        <div className="milestone-item p-4 rounded-lg gap-5 flex items-center">
                            <img src={mortarBoardGreen} alt="Icon" className="w-20 h-auto" />
                            <div>
                                <p className="text-2xl font-bold">300</p>
                                <p className="text-gray-600">Instructors</p>
                            </div>
                        </div>
                        <div className="milestone-item p-4 rounded-lg gap-5 flex items-center">
                            <img src={video} alt="Icon" className="w-20 h-auto" />
                            <div>
                                <p className="text-2xl font-bold">10,000+</p>
                                <p className="text-gray-600">Videos</p>
                            </div>
                        </div>
                        <div className="milestone-item p-4 rounded-lg gap-5 flex items-center">
                            <img src={mortarBoardRed} alt="Icon" className="w-20 h-auto" />
                            <div>
                                <p className="text-2xl font-bold">20,000+</p>
                                <p className="text-gray-600">Graduated Students</p>
                            </div>
                        </div>
                        <div className="milestone-item p-4 rounded-lg gap-5 flex items-center">
                            <img src={students} alt="Icon" className="w-20 h-auto" />
                            <div>
                                <p className="text-2xl font-bold">1,000,000+</p>
                                <p className="text-gray-600">Students Enrolled</p>
                            </div>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className="w-full lg:w-2/5 flex justify-center">
                        <img
                            src={amy}
                            alt="Milestone Image"
                            className="rounded-lg shadow-lg w-full max-w-[450px] h-auto object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Milestones;
