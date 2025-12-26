// components/Contact.jsx
import React, { useState } from "react"
import * as z from "../assets/index"

const ContactContent = () => {
    const [showQR, setShowQR] = useState(false)

    const contactMethods = [
        {
            icon: "📧",
            label: "Email",
            value: "voanhthu743@gmail.com",
            href: "#",
            color: "from-[#e74c3c] to-[#c0392b]",
            action: null
        },
        {
            icon: "📱",
            label: "Zalo",
            value: "Nhấn để xem QR Code",
            href: null,
            color: "from-[#27ae60] to-[#1e8449]",
            action: () => setShowQR(true)
        },
    ]

    const socials = [
        { image: z.facebookImg, name: "Facebook", color: "bg-[#1877f2]" },
        { image: z.instagramImg, name: "Instagram", color: "bg-[#1877f2]" },
        { image: z.tiktokImg, name: "TikTok", color: "bg-[#000]" },
        { image: z.linkedinImg, name: "LinkedIn", color: "bg-[#0077b5]" },
    ]

    return (
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
            {/* QR Code Modal */}
            {showQR && (
                <div
                    className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center rounded-lg"
                    onClick={() => setShowQR(false)}
                >
                    <div
                        className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl max-w-[280px] sm:max-w-xs mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="text-center mb-3 sm:mb-4">
                            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#27ae60] to-[#1e8449] mb-2">
                                <span className="text-xl sm:text-2xl">📱</span>
                            </div>
                            <h4 className="font-bold text-[#2c3e50] text-base sm:text-lg">Scan Zalo code</h4>
                            <p className="text-gray-500 text-xs sm:text-sm">Connect with me to talk about work</p>
                        </div>
                        <div className="bg-white p-2 rounded-lg sm:rounded-xl border-2 border-[#27ae60] shadow-inner">
                            <img
                                src={z.zaloQR}
                                alt="Zalo QR Code"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        <button
                            onClick={() => setShowQR(false)}
                            className="mt-3 sm:mt-4 w-full py-2 bg-gradient-to-r from-[#27ae60] to-[#1e8449] text-white rounded-lg sm:rounded-xl font-medium hover:opacity-90 transition-opacity text-sm sm:text-base"
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            )}

            {/* Header - Responsive */}
            <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#e67e22] to-[#d35400] mb-2 sm:mb-3 shadow-lg">
                    <span className="text-2xl sm:text-3xl">👋</span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#2c3e50]">Let's Connect!</h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">Glad to connect with you</p>
            </div>

            {/* Contact Methods - Responsive */}
            <div className="space-y-2 sm:space-y-3">
                {contactMethods.map((method, index) => {
                    const Component = method.href ? 'a' : 'button'
                    return (
                        <Component
                            key={index}
                            href={method.href || undefined}
                            onClick={method.action || undefined}
                            className={`flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 bg-white rounded-lg sm:rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 w-full text-left ${!method.href && !method.action ? 'pointer-events-none' : 'cursor-pointer'}`}
                        >
                            <div className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                                <span className="text-base sm:text-lg md:text-xl">{method.icon}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">{method.label}</p>
                                <p className="font-semibold text-[#2c3e50] text-xs sm:text-sm md:text-base truncate">{method.value}</p>
                            </div>
                            {(method.href || method.action) && (
                                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                    <span className="text-gray-400 text-sm">→</span>
                                </div>
                            )}
                        </Component>
                    )
                })}
            </div>

            {/* Social Links - Responsive */}
            <div className="pt-2 sm:pt-3 border-t border-dashed border-gray-200">
                <p className="text-[10px] sm:text-xs text-gray-400 text-center mb-2 sm:mb-3 uppercase tracking-wider">Follow me</p>
                <div className="flex justify-center gap-2 sm:gap-3">
                    {socials.map((social, index) => (
                        <button
                            key={index}
                            className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform duration-300"
                            title={social.name}
                        >
                            <img src={social.image} alt={social.name} className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain" />
                        </button>
                    ))}
                </div>
            </div>

            {/* CTA - Responsive */}
            <div className="bg-gradient-to-r from-[#5a6340] to-[#7a8a50] rounded-lg sm:rounded-xl p-3 sm:p-4 text-center shadow-lg">
                <p className="text-white/90 text-xs sm:text-sm mb-1 sm:mb-2">Ready to collaborate?</p>
                <p className="text-white font-bold text-sm sm:text-base">Let's build something amazing together! 🚀</p>
            </div>
        </div>
    )
}

export default ContactContent