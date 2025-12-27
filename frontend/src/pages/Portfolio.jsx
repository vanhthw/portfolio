import React, { useState } from "react"
import * as z from "../assets/index"
import * as c from "../components/index"

// Menu items with folders
const menuItems = {
    left: [
        { name: "profile", image: z.geekImg, isSpecial: true },
        { name: "tools", image: z.folderImg }
    ],
    right: [
        { name: "contact", image: z.folderImg },
        { name: "resume", image: z.folderImg }
    ]
}

// ==================== WINDOW COMPONENT ========================
const Window = ({ isOpen, onClose, path, children }) => {
    if (!isOpen) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/30 z-40"
                onClick={onClose}
            />

            {/* Window - Responsive */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 
                            w-[95vw] sm:w-[85vw] md:w-[650px] max-w-[650px]">
                {/* Title Bar */}
                <div className="bg-[#5a6340] rounded-t-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
                    <span
                        className="text-white font-mono text-xs sm:text-sm md:text-lg tracking-wide truncate mr-2"
                        style={{ fontFamily: "'Courier New', monospace" }}
                    >
                        T:\vanhthuww\<span className="text-[#f5d742]">{path}</span>
                    </span>
                    <button
                        onClick={onClose}
                        className="w-7 h-7 sm:w-8 sm:h-8 bg-[#e74c3c] hover:bg-[#c0392b] rounded-md flex items-center justify-center transition-colors shrink-0"
                    >
                        <img src={z.removeImg} alt="remove" className="w-7 h-7 sm:w-8 sm:h-8" />
                    </button>
                </div>

                {/* Content Area - Responsive height with dvh for mobile */}
                <div
                    className="bg-[#f5f0e8] rounded-b-lg border-t-0 border-[#c0392b] 
                               p-3 sm:p-4 md:p-6 
                               max-h-[60dvh] sm:max-h-[55dvh] md:max-h-[500px]
                               overflow-y-auto"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        height: 'auto',
                        minHeight: '200px'
                    }}
                >
                    {children}
                </div>
            </div>
        </>
    )
}


// ==================== FOLDER ITEM ====================
const FolderItem = ({ item, onClick }) => {
    return (
        <div
            className="flex flex-col items-center gap-1 sm:gap-2 cursor-pointer group"
            onClick={() => onClick && onClick(item.name)}
        >
            <div className="relative transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-1">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain drop-shadow-lg"
                />
            </div>
            <span className="text-[#5a6340] font-medium text-xs sm:text-sm tracking-wide">
                {item.name}
            </span>
        </div>
    )
}

const socialLinks = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/vanhthuww/",
        image: z.facebookImg,
        bgColor: "#1877F2",
        shadowColor: "#0d5cbd"
    },
    {
        name: "GitHub",
        url: "#",
        image: z.githubImg,
        bgColor: "#2d333b",
        shadowColor: "#1c2127"
    },
    {
        name: "LinkedIn",
        url: "#",
        image: z.linkedinImg,
        bgColor: "#0077B5",
        shadowColor: "#005885"
    },
    // {
    //     name: "TikTok",
    //     url: "#",
    //     image: z.tiktokImg,
    //     bgColor: "#fe2c55",
    //     shadowColor: "#c91e42"
    // }
]

const SocialBlock = ({ social, onEmptyLink }) => {
    const isEmptyLink = !social.url || social.url === "#"

    const handleClick = (e) => {
        if (isEmptyLink) {
            e.preventDefault()
            onEmptyLink && onEmptyLink()
        }
    }

    return (
        <a
            href={isEmptyLink ? "#" : social.url}
            target={isEmptyLink ? undefined : "_blank"}
            rel={isEmptyLink ? undefined : "noopener noreferrer"}
            onClick={handleClick}
            className="group relative block"
        >
            {/* Main block - Responsive */}
            <div
                className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl 
                           flex items-center justify-center 
                           transition-all duration-150 ease-out
                           group-hover:translate-y-1 group-active:translate-y-2
                           border-2 border-black/20 bg-white/20"
            >
                {/* Inner highlight */}
                <div className="absolute inset-1 rounded-lg md:rounded-xl pointer-events-none" />

                {/* Icon - Responsive */}
                <img
                    src={social.image}
                    alt={social.name}
                    className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 object-contain relative z-10 drop-shadow-md"
                />
            </div>
        </a>
    )
}

// ==================== MAP CONTENT BY FOLDER NAME ====================
const contentMap = {
    profile: <c.Profile />,
    tools: <c.Tools />,
    contact: <c.Contact />,
    resume: <c.Resume />
}

const Portfolio = () => {
    const [activeWindow, setActiveWindow] = useState(null)
    const [showSecretPopup, setShowSecretPopup] = useState(false)

    const handleFolderClick = (name) => {
        setActiveWindow(name)
    }

    const handleCloseWindow = () => {
        setActiveWindow(null)
    }

    const handleEmptyLink = () => {
        setShowSecretPopup(true)
    }

    const handleCloseSecretPopup = () => {
        setShowSecretPopup(false)
    }

    return (
        <>
            {/* Using dvh for proper mobile viewport height */}
            <div
                className="w-screen overflow-hidden bg-[#f5f0e8] relative"
                style={{ height: '100dvh', minHeight: '-webkit-fill-available' }}
            >
                {/* Grid background - Responsive grid size */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right,rgb(187, 133, 187) 1px, transparent 1px),
                            linear-gradient(to bottom,rgb(163, 103, 163) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px'
                    }}
                />

                {/* MAIN CONTENT - Responsive layout */}
                <div className="absolute inset-0 flex items-center justify-center pb-16 sm:pb-20 md:pb-24">
                    {/* Mobile: vertical layout, Desktop: horizontal layout */}
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between 
                                    w-full max-w-5xl px-4 sm:px-8 md:px-12 gap-6 md:gap-4">

                        {/* Mobile: folders in a row above title */}
                        <div className="flex md:hidden flex-row justify-center gap-8">
                            {[...menuItems.left, ...menuItems.right].map((item, index) => (
                                <FolderItem key={index} item={item} onClick={handleFolderClick} />
                            ))}
                        </div>

                        {/* Desktop: Left folders */}
                        <div className="hidden md:flex flex-col gap-8 lg:gap-12">
                            {menuItems.left.map((item, index) => (
                                <FolderItem key={index} item={item} onClick={handleFolderClick} />
                            ))}
                        </div>

                        {/* Center - PORTFOLIO text - Responsive size */}
                        {/* <h1
                            className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl 
                                       font-normal tracking-[0.08em] sm:tracking-[0.1em] md:tracking-[0.15em] 
                                       text-[#6b7a45] select-none text-center"
                        >
                            PORTFOLIO
                        </h1> */}
                        {/* Center - Text Block */}
                        <div className="flex flex-col items-center justify-center z-10">
                            {/* 1. Tiêu đề chính */}
                            <h1
                                className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl 
                                    font-normal tracking-[0.08em] sm:tracking-widest md:tracking-[0.15em] 
                                    text-[#6b7a45] select-none text-center"
                            >
                                PORTFOLIO
                            </h1>

                            {/* 2. Dòng chữ nhỏ nằm dưới và căn giữa */}
                            <span className="mt-1 sm:mt-3 
                                text-[#6b7a45] 
                                text-[10px] sm:text-xs md:text-sm 
                                font-mono tracking-[0.2em] uppercase opacity-70
                                text-center"
                            >
                                developed by vanhthuww
                            </span>
                        </div>


                        {/* Desktop: Right folders */}
                        <div className="hidden md:flex flex-col gap-8 lg:gap-12">
                            {menuItems.right.map((item, index) => (
                                <FolderItem key={index} item={item} onClick={handleFolderClick} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* FOOTER - Social Links - Responsive */}
                <div className="absolute bottom-0 left-0 w-full 
                                h-14 sm:h-16 md:h-20 lg:h-24
                                bg-[#7a8450] flex items-center justify-center">
                    {/* Social blocks container - Responsive gap */}
                    <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                        {socialLinks.map((social, index) => (
                            <SocialBlock
                                key={index}
                                social={social}
                                onEmptyLink={handleEmptyLink}
                            />
                        ))}
                    </div>
                </div>

                {/* Window Popup */}
                <Window
                    isOpen={activeWindow !== null}
                    onClose={handleCloseWindow}
                    path={activeWindow || ""}
                >
                    {activeWindow && contentMap[activeWindow]}
                </Window>

                {/* Secret Popup for empty links */}
                <c.SecretPopup
                    isOpen={showSecretPopup}
                    onClose={handleCloseSecretPopup}
                />
            </div>
        </>
    )
}

export default Portfolio;