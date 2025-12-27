// components/SecretPopup.jsx
import React from "react"
import Lottie from "lottie-react"
import Typewriter from "typewriter-effect"
import flirtingDogAnimation from "../assets/Flirting Dog.json"

const SecretPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-100 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Popup */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-110
                            w-[85vw] sm:w-[320px] md:w-[380px]">
                <div className="bg-linear-to-br from-[#fff8e7] to-[#ffe4c4] rounded-2xl shadow-2xl 
                                border-4 border-[#e67e22] overflow-hidden
                                animate-[bounceIn_0.5s_ease-out]">
                    {/* Lottie Animation */}
                    <div className="flex justify-center pt-4 pb-2">
                        <Lottie
                            animationData={flirtingDogAnimation}
                            loop={true}
                            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
                        />
                    </div>

                    {/* Typewriter Text */}
                    <div className="px-4 sm:px-6 pb-4 text-center">
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#5a6340] min-h-[2em]">
                            <Typewriter
                                options={{
                                    strings: ["Không cho bạn biết đâu~"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 80,
                                    deleteSpeed: 50,
                                    pauseFor: 2000,
                                }}
                            />
                        </div>
                    </div>

                    {/* Close Button */}
                    <div className="px-4 pb-4">
                        <button
                            onClick={onClose}
                            className="w-full py-2 sm:py-2.5 bg-linear-to-r from-[#e67e22] to-[#d35400] 
                                       text-white rounded-xl font-medium text-sm sm:text-base
                                       hover:from-[#d35400] hover:to-[#c0392b] 
                                       transition-all duration-300 shadow-lg hover:shadow-xl
                                       active:scale-95"
                        >
                            Hiểu rồi! 😊
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecretPopup

