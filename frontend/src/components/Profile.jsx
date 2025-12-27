// components/Profile.jsx
import React from "react"
import * as z from "../assets/index"
import Typewriter from "typewriter-effect"

const ProfileContent = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 p-2 sm:p-4">
            {/* Avatar - Responsive size */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                <img
                    src={z.avatarImg}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Info - Responsive text */}
            <div className="flex flex-col gap-1 sm:gap-2 text-center sm:text-left">
                <p className="text-gray-700 text-sm sm:text-base md:text-lg">Hi! I'm</p>
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#e67e22] leading-tight">
                    Võ Anh Thư
                    <span className="text-gray-700 text-sm sm:text-base md:text-lg"> (Sofia)</span>
                </h2>
                <p className="text-gray-700 uppercase tracking-wider font-semibold text-xs sm:text-sm mt-1 sm:mt-2">
                    I'M A BUSINESS ANALYST.
                </p>
                <p className="text-gray-600 italic text-xs sm:text-sm border-l-4 border-[#e67e22] pl-3 mt-1 sm:mt-2 text-left">
                    {/* "Code is like a puzzle, and I'm the puzzle solver" */}
                    <Typewriter
                                options={{
                                    strings: ["Code is like a puzzle, and I'm the puzzle solver."],
                                    autoStart: true,
                                    loop: true,
                                    delay: 80,
                                    deleteSpeed: 10,
                                    pauseFor: 1000,
                                }}
                            />
                </p>
                <div className="flex justify-center sm:justify-start gap-4 text-xs text-gray-500 mt-1 sm:mt-2">
                    <span>Ho Chi Minh City, Viet Nam
                        <img src={z.vietnamFlagImg} alt="Vietnam Flag" className="w-4 h-4 inline-block ml-1" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProfileContent;