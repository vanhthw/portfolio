import React, { useState } from "react"

// Import social images
import linkedinImg from "../assets/social/linkedin.png"
import githubImg from "../assets/social/github.png"
import facebookImg from "../assets/social/facebook.png"
import tiktokImg from "../assets/social/tiktok.png"
import removeImg from "../assets/social/remove.png"

// Import folder images
import folderImg from "../assets/social/folder.png"
import geekImg from "../assets/social/geek.png"

// Menu items with folders
const menuItems = {
    left: [
        { name: "profile", image: geekImg, isSpecial: true },
        { name: "works", image: folderImg }
    ],
    right: [
        { name: "contact", image: folderImg },
        { name: "resume", image: folderImg }
    ]
}

// ==================== WINDOW COMPONENT (Dùng chung) ====================
const Window = ({ isOpen, onClose, path, children }) => {
    if (!isOpen) return null

    return (
        <>
            {/* Backdrop */}
            <div 
                className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
                onClick={onClose}
            />
            
            {/* Window */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[700px] max-w-[90vw]">
                {/* Title Bar */}
                <div className="bg-[#5a6340] rounded-t-lg px-4 py-3 flex items-center justify-between">
                    <span 
                        className="text-white font-mono text-lg tracking-wide"
                        style={{ fontFamily: "'Courier New', monospace" }}
                    >
                        T:\vanhthuww\<span className="text-[#f5d742]">{path}</span>
                    </span>
                    <button 
                        onClick={onClose}
                        className="w-8 h-8 bg-[#e74c3c] hover:bg-[#c0392b] rounded-md flex items-center justify-center transition-colors"
                    >
                        <img src={removeImg} alt="remove" className="w-8 h-8" />
                    </button>
                </div>

                {/* Content Area */}
                <div className="bg-[#f5f0e8] rounded-b-lg border-t-0 border-[#c0392b] p-6">
                    {children}
                </div>
            </div>
        </>
    )
}

// ==================== PROFILE CONTENT ====================
const ProfileContent = () => {
    return (
        <div className="flex items-center gap-8 p-4">
            {/* Avatar */}
            <div className="w-40 h-40 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                <img 
                    src={geekImg} 
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2">
                <p className="text-gray-700 text-lg">Hi! I'm</p>
                <h2 className="text-4xl font-bold text-[#e67e22] leading-tight">
                    Võ<br/>Anh Thư
                </h2>
                <p className="text-gray-600 uppercase tracking-wider text-sm mt-2">
                    I'M A WEB DEVELOPER
                </p>
                <p className="text-[#e67e22] italic text-sm">
                    "Code is like a puzzle, and I'm the puzzle solver"
                </p>
            </div>
        </div>
    )
}

// ==================== WORKS CONTENT ====================
const WorksContent = () => {
    const tools = [
        { name: "GitHub", icon: "🐙" },
        { name: "VS Code", icon: "💻" },
        { name: "Figma", icon: "🎨" },
        { name: "Canva", icon: "🖼️" },
        { name: "Google\nDocs", icon: "📄" },
        { name: "Google\nSheets", icon: "📊" },
        { name: "Microsoft\nWord", icon: "📝" },
        { name: "Microsoft\nExcel", icon: "📈" },
    ]

    return (
        <div className="flex flex-col">
            {/* Orange divider */}
            <div className="w-full h-6 bg-[#f5b041] rounded-md mb-6" />
            
            <h3 className="text-3xl font-bold text-center text-[#5a6340] mb-8">TOOLS</h3>
            
            {/* Tools Grid */}
            <div className="grid grid-cols-4 gap-6">
                {tools.map((tool, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 bg-white rounded-xl border-2 border-gray-200 flex items-center justify-center text-3xl shadow-sm hover:scale-110 transition-transform cursor-pointer">
                            {tool.icon}
                        </div>
                        <span className="text-xs text-gray-600 text-center whitespace-pre-line">
                            {tool.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

// ==================== CONTACT CONTENT ====================
const ContactContent = () => {
    return (
        <div className="flex flex-col gap-6 p-4">
            <div className="w-full h-6 bg-[#3498db] rounded-md" />
            
            <h3 className="text-3xl font-bold text-center text-[#5a6340]">CONTACT ME</h3>
            
            <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <span className="text-2xl">📧</span>
                    <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">your.email@example.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <span className="text-2xl">📱</span>
                    <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">+84 123 456 789</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <span className="text-2xl">📍</span>
                    <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">Ho Chi Minh City, Vietnam</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ==================== RESUME CONTENT ====================
const ResumeContent = () => {
    return (
        <div className="flex flex-col gap-6 p-4">
            <div className="w-full h-6 bg-[#9b59b6] rounded-md" />
            
            <h3 className="text-3xl font-bold text-center text-[#5a6340]">RESUME</h3>
            
            <div className="space-y-6">
                {/* Experience */}
                <div>
                    <h4 className="text-lg font-bold text-[#5a6340] mb-3">💼 Experience</h4>
                    <div className="bg-white p-4 rounded-lg">
                        <p className="font-medium">Frontend Developer</p>
                        <p className="text-sm text-gray-500">Company Name • 2022 - Present</p>
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h4 className="text-lg font-bold text-[#5a6340] mb-3">🎓 Education</h4>
                    <div className="bg-white p-4 rounded-lg">
                        <p className="font-medium">Bachelor of Computer Science</p>
                        <p className="text-sm text-gray-500">University Name • 2018 - 2022</p>
                    </div>
                </div>

                {/* Download Button */}
                <button className="w-full py-3 bg-[#5a6340] text-white rounded-lg font-medium hover:bg-[#4a5335] transition-colors">
                    📥 Download CV
                </button>
            </div>
        </div>
    )
}

// ==================== FOLDER ITEM ====================
const FolderItem = ({ item, onClick }) => {
    return (
        <div 
            className="flex flex-col items-center gap-2 cursor-pointer group"
            onClick={() => onClick && onClick(item.name)}
        >
            <div className="relative transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-1">
                <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-contain drop-shadow-lg"
                />
            </div>
            <span className="text-[#5a6340] font-medium text-sm tracking-wide">
                {item.name}
            </span>
        </div>
    )
}

const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/your-profile",
        image: linkedinImg,
        bgColor: "#0077B5",
        shadowColor: "#005885"
    },
    {
        name: "GitHub",
        url: "https://github.com/your-profile",
        image: githubImg,
        bgColor: "#2d333b",
        shadowColor: "#1c2127"
    },
    {
        name: "Facebook",
        url: "https://facebook.com/your-profile",
        image: facebookImg,
        bgColor: "#1877F2",
        shadowColor: "#0d5cbd"
    },
    {
        name: "TikTok",
        url: "https://tiktok.com/@your-profile",
        image: tiktokImg,
        bgColor: "#fe2c55",
        shadowColor: "#c91e42"
    }
]

const SocialBlock = ({ social }) => {
    return (
        <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
        >
            
            {/* Main block */}
            <div
                className="relative w-16 h-16 rounded-xl flex items-center justify-center 
                           transition-all duration-150 ease-out
                           group-hover:translate-y-1 group-active:translate-y-2
                           border-2 border-black/20"
                style={{ backgroundColor: social.bgColor }}
            >
                {/* Inner highlight */}
                <div className="absolute inset-1 rounded-xl bg-white/10 pointer-events-none" />
                
                {/* Icon */}
                <img 
                    src={social.image} 
                    alt={social.name}
                    className="w-12 h-12 object-contain relative z-10 drop-shadow-md"
                />
            </div>
        </a>
    )
}

// ==================== MAP CONTENT BY FOLDER NAME ====================
const contentMap = {
    profile: <ProfileContent />,
    works: <WorksContent />,
    contact: <ContactContent />,
    resume: <ResumeContent />
}

const Portfolio = () => {
    const [activeWindow, setActiveWindow] = useState(null)

    const handleFolderClick = (name) => {
        setActiveWindow(name)
    }

    const handleCloseWindow = () => {
        setActiveWindow(null)
    }

    return (
        <>
            <div className="h-screen w-screen overflow-hidden bg-[#f5f0e8] relative">
                {/* Grid background */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right,rgb(187, 133, 187) 1px, transparent 1px),
                            linear-gradient(to bottom,rgb(163, 103, 163) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* MAIN CONTENT */}
                <div className="absolute inset-0 flex items-center justify-center pb-20">
                    <div className="flex items-center justify-between w-full max-w-5xl px-12">
                        
                        {/* Left folders */}
                        <div className="flex flex-col gap-12">
                            {menuItems.left.map((item, index) => (
                                <FolderItem key={index} item={item} onClick={handleFolderClick} />
                            ))}
                        </div>

                        {/* Center - PORTFOLIO text */}
                        <h1 
                            className="text-8xl font-normal tracking-[0.15em] text-[#6b7a45] select-none"
                        >
                            PORTFOLIO
                        </h1>

                        {/* Right folders */}
                        <div className="flex flex-col gap-12">
                            {menuItems.right.map((item, index) => (
                                <FolderItem key={index} item={item} onClick={handleFolderClick} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* FOOTER - Social Links */}
                <div className="absolute bottom-0 left-0 w-full h-1/7 bg-[#7a8450] flex items-center justify-center">
                    {/* Social blocks container */}
                    <div className="flex items-center gap-6">
                        {socialLinks.map((social, index) => (
                            <SocialBlock key={index} social={social} />
                        ))}
                    </div>
                </div>

                {/* Window Popup - Dùng chung cho tất cả */}
                <Window 
                    isOpen={activeWindow !== null}
                    onClose={handleCloseWindow}
                    path={activeWindow || ""}
                >
                    {activeWindow && contentMap[activeWindow]}
                </Window>
            </div>
        </>
    )
}

export default Portfolio;