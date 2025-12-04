import React, { useState } from "react"
import * as z from "../assets/index"

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
                // className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
                className="fixed inset-0 bg-black/30 z-40"
                onClick={onClose}
            />
            
            {/* Window */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[650px] max-w-[90vw]">
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
                        <img src={z.removeImg} alt="remove" className="w-8 h-8" />
                    </button>
                </div>

                {/* Content Area */}
                <div 
                    className="bg-[#f5f0e8] rounded-b-lg border-t-0 border-[#c0392b] p-6 h-[300px] overflow-y-auto"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {children}
                </div>
            </div>
        </>
    )
}

// ==================== PROFILE CONTENT ======================
const ProfileContent = () => {
    return (
        <div className="flex items-center gap-8 p-4">
            {/* Avatar */}
            <div className="w-40 h-40 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                <img 
                    src={z.avatarImg} 
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2">
                <p className="text-gray-700 text-lg">Hi! I'm</p>
                <h2 className="text-4xl font-bold text-[#e67e22] leading-tight">
                    Võ Anh Thư
                    <span className="text-gray-700 text-lg"> (Sofia)</span>
                </h2>
                <p className="text-gray-700 uppercase tracking-wider text-sm mt-2">
                    I'M A WEB DEVELOPER
                </p>
                <p className="text-gray-600 italic text-sm border-l-4 border-[#e67e22] pl-3 mt-2">
                    {/* "Bridging the gap between business needs and technical solutions" */}
                    "Code is like a puzzle, and I'm the puzzle solver"
                </p>
                <div className="flex gap-4 text-xs text-gray-500 mt-2">
                    <span>Ho Chi Minh City, Viet Nam
                        <img src={z.vietnamFlagImg} alt="Vietnam Flag" className="w-4 h-4 inline-block ml-1" />
                    </span>
                </div>
            </div>
        </div>
    )
}

// ==================== WORKS CONTENT ====================
// const WorksContent = () => {
//     const tools = [
//         { name: "VS Code", icon: z.githubImg },
//         { name: "Github", icon: z.githubImg },
//         { name: "Figma", icon: z.githubImg },
//         { name: "Basamiq", icon: z.githubImg },
//         { name: "MySQL", icon: z.githubImg },
//         { name: "Google\nSheets", icon: z.githubImg },
//         { name: "Microsoft\nWord", icon: z.githubImg },
//         { name: "Microsoft\nExcel", icon: z.githubImg },
//     ]

//     return (
//         <div className="flex flex-col">            
//             <h3 className="text-3xl font-bold text-center text-[#5a6340] mb-8">TOOLS</h3>
            
//             {/* Tools Grid */}
//             <div className="grid grid-cols-4 gap-6">
//                 {tools.map((tool, index) => (
//                     <div key={index} className="flex flex-col items-center gap-2">
//                         <div className="w-16 h-16 bg-white rounded-xl border-2 border-gray-200 flex items-center justify-center shadow-sm hover:scale-110 transition-transform cursor-pointer p-2">
//                             <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
//                         </div>
//                         <span className="text-xs text-gray-600 text-center whitespace-pre-line">
//                             {tool.name}
//                         </span>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

const ToolsContent = () => {
    const toolCategories = [
        {
            category: "Development & Version Control",
            description: "Coding and source code management",
            tools: [
                { name: "VS Code", image: z.vscodeImg, color: "bg-blue-50" },
                { name: "GitHub", image: z.githubImg, color: "bg-gray-50" },
            ]
        },
        {
            category: "Database & Backend",
            description: "Data management and queries",
            tools: [
                { name: "MySQL", image: z.mysqlImg, color: "bg-teal-50" },
                { name: "SQL Server", image: z.sqlServerImg, color: "bg-teal-50" },
            ]
        },
        {
            category: "Design & Prototyping",
            description: "UI/UX design and wireframing",
            tools: [
                { name: "Figma", image: z.figmaImg, color: "bg-purple-50" },
                // { name: "Balsamiq", image: z.githubImg, color: "bg-orange-50" },
            ]
        },
        {
            category: "Documentation & Analysis",
            description: "Business analysis and reporting",
            tools: [
                { name: "Microsoft Word", image: z.wordImg, color: "bg-blue-50" },
                { name: "Microsoft Excel", image: z.excelImg, color: "bg-green-50" },
                { name: "Google Sheets", image: z.sheetsImg, color: "bg-green-50" },
                { name: "Canva", image: z.canvaImg, color: "bg-green-50" },
            ]
        }
    ];

    return (
        <div className="max-w-6xl mx-auto">            
            <div className="space-y-8">
                {toolCategories.map((category, catIndex) => (
                    <div key={catIndex} className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:shadow-lg transition-shadow">
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold text-gray-800 mb-1 ">
                                {category.category}
                            </h4>
                            <p className="text-sm text-gray-500">{category.description}</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                            {category.tools.map((tool, toolIndex) => (
                                <div 
                                    key={toolIndex} 
                                    className={`${tool.color} px-4 py-3 rounded-xl border border-gray-200 flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer min-w-[140px]`}
                                >
                                    <img src={tool.image} alt={tool.name} className="w-8 h-8 object-contain" />
                                    <span className="text-sm font-medium text-gray-700">
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Optional: Proficiency Legend */}
            {/* <div className="mt-8 text-center text-xs text-gray-500">
                <p>Proficient in all listed tools with hands-on project experience</p>
            </div> */}
        </div>
    );
};


// ==================== CONTACT CONTENT ====================
const ContactContent = () => {
    const [showQR, setShowQR] = useState(false)

    const contactMethods = [
        {
            icon: "📧",
            label: "Email",
            value: "voanhthu743@gmail.com",
            // href: "https://mail.google.com/mail/?view=cm&to=voanhthu743@gmail.com",
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
        // {
        //     icon: "📍",
        //     label: "Location",
        //     value: "Ho Chi Minh City, Viet Nam",
        //     href: null,
        //     color: "from-[#3498db] to-[#2980b9]",
        //     action: null
        // }
    ]

    const socials = [
        { image: z.facebookImg, name: "Facebook", color: "bg-[#1877f2]" },
        { image: z.instagramImg, name: "Instagram", color: "bg-[#1877f2]" },
        { image: z.tiktokImg, name: "TikTok", color: "bg-[#000]" },
        { image: z.linkedinImg, name: "LinkedIn", color: "bg-[#0077b5]" },
        // { image: z.githubImg, name: "GitHub", color: "bg-[#333]" },
    ]

    return (
        <div className="flex flex-col gap-5">
            {/* QR Code Modal */}
            {showQR && (
                <div 
                    className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center rounded-lg"
                    onClick={() => setShowQR(false)}
                >
                    <div 
                        className="bg-white rounded-2xl p-6 shadow-2xl max-w-xs mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="text-center mb-4">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#27ae60] to-[#1e8449] mb-2">
                                <span className="text-2xl">📱</span>
                            </div>
                            <h4 className="font-bold text-[#2c3e50] text-lg">Scan Zalo code</h4>
                            <p className="text-gray-500 text-sm">Connect with me to talk about work</p>
                        </div>
                        <div className="bg-white p-2 rounded-xl border-2 border-[#27ae60] shadow-inner">
                            <img 
                                src={z.zaloQR} 
                                alt="Zalo QR Code" 
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        <button 
                            onClick={() => setShowQR(false)}
                            className="mt-4 w-full py-2 bg-gradient-to-r from-[#27ae60] to-[#1e8449] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#e67e22] to-[#d35400] mb-3 shadow-lg">
                    <span className="text-3xl">👋</span>
                </div>
                <h3 className="text-xl font-bold text-[#2c3e50]">Let's Connect!</h3>
                <p className="text-gray-500 text-sm mt-1">Glad to connect with you</p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-3">
                {contactMethods.map((method, index) => {
                    const Component = method.href ? 'a' : 'button'
                    return (
                        <Component
                            key={index}
                            href={method.href || undefined}
                            // target={method.href ? "_blank" : undefined}
                            onClick={method.action || undefined}
                            className={`flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 w-full text-left ${!method.href && !method.action ? 'pointer-events-none' : 'cursor-pointer'}`}
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-md`}>
                                <span className="text-xl">{method.icon}</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-gray-400 uppercase tracking-wider">{method.label}</p>
                                <p className="font-semibold text-[#2c3e50]">{method.value}</p>
                            </div>
                            {(method.href || method.action) && (
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                    <span className="text-gray-400">→</span>
                                </div>
                            )}
                        </Component>
                    )
                })}
            </div>

            {/* Social Links */}
            <div className="pt-3 border-t border-dashed border-gray-200">
                <p className="text-xs text-gray-400 text-center mb-3 uppercase tracking-wider">Follow me</p>
                <div className="flex justify-center gap-3">
                    {socials.map((social, index) => (
                        <button
                            key={index}
                            className={`w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform duration-300`}
                            title={social.name}
                        >
                            <img src={social.image} alt={social.name} className="w-9 h-9 object-contain" />
                        </button>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#5a6340] to-[#7a8a50] rounded-xl p-4 text-center shadow-lg">
                <p className="text-white/90 text-sm mb-2">Ready to collaborate?</p>
                <p className="text-white font-bold">Let's build something amazing together! 🚀</p>
            </div>
        </div>
    )
}

// ==================== ACCORDION ITEM ====================
const AccordionItem = ({ title, icon, iconBg, isOpen, onClick, children }) => {
    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            {/* Header - Click to toggle */}
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center shadow-md`}>
                        <span className="text-lg">{icon}</span>
                    </div>
                    <span className="font-bold text-[#2c3e50] text-base">{title}</span>
                </div>
                <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <span className="text-gray-500">▼</span>
                </div>
            </button>
            
            {/* Content - Expandable */}
            <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-4 pt-0 border-t border-gray-100">
                    {children}
                </div>
            </div>
        </div>
    )
}

// ==================== RESUME CONTENT ====================
const ResumeContent = () => {
    const [openSection, setOpenSection] = useState(null)

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section)
    }

    const experiences = [
        {
            role: "Web Developer",
            company: "VLH Company",
            period: "3/2025 - Present",
            description: "Building modern web applications with React & Nodejs"
        },
        {
            role: "Java Intern",
            company: "VNPT IT 5",
            period: "6/2024 - 8/2024",
            description: "Developed responsive UI components and REST API integration"
        }
    ]

    const projects = [
        {
            name: "Portfolio Website",
            tech: "React, TailwindCSS",
            description: "Personal portfolio with creative design"
        },
        {
            name: "#",
            tech: "#",
            description: "#"
        },
        {
            name: "#",
            tech: "#",
            description: "#"
        }
    ]

    const certificates = [
        {
            name: "#",
            issuer: "#",
            year: "2023"
        },
        {
            name: "#",
            issuer: "#",
            year: "2022"
        },
        {
            name: "#",
            issuer: "#",
            year: "2022"
        }
    ]

    const education = [
        {
            degree: "Bachelor of Information Technology",
            school: "Tien Giang University",
            period: "2021 - 2025",
            description: "Major in Information Technology"
        }
    ]

    return (
        <div className="flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-center gap-4 pb-4 border-b-2 border-dashed border-[#5a6340]/30">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#e67e22] to-[#d35400] flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    VT
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#2c3e50]">Võ Anh Thư</h3>
                    <p className="text-[#e67e22] font-medium text-sm">Web Developer</p>
                </div>
            </div>

            {/* Accordion Sections */}
            <div className="space-y-3">
                {/* Experience */}
                <AccordionItem
                    title="Experience"
                    icon="💼"
                    iconBg="bg-[#5a6340]"
                    isOpen={openSection === 'experience'}
                    onClick={() => toggleSection('experience')}
                >
                    <div className="space-y-3 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-0.5 before:bg-[#e67e22]/30">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-6">
                                <div className="absolute left-0 top-1.5 w-[14px] h-[14px] rounded-full bg-white border-[3px] border-[#e67e22] z-10"></div>
                                <div className="bg-[#f8f9fa] p-3 rounded-lg">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-semibold text-[#2c3e50] text-sm">{exp.role}</p>
                                            <p className="text-[#e67e22] text-xs font-medium">{exp.company}</p>
                                        </div>
                                        <span className="text-gray-400 text-xs bg-white px-2 py-1 rounded-md">{exp.period}</span>
                                    </div>
                                    <p className="text-gray-500 text-xs mt-2">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AccordionItem>

                {/* Projects */}
                <AccordionItem
                    title="Projects"
                    icon="🚀"
                    iconBg="bg-[#9b59b6]"
                    isOpen={openSection === 'projects'}
                    onClick={() => toggleSection('projects')}
                >
                    <div className="grid gap-3">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-[#f8f9fa] p-3 rounded-lg border-l-4 border-[#9b59b6]">
                                <p className="font-semibold text-[#2c3e50] text-sm">{project.name}</p>
                                <p className="text-[#9b59b6] text-xs font-medium">{project.tech}</p>
                                <p className="text-gray-500 text-xs mt-1">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </AccordionItem>

                {/* Certificates */}
                <AccordionItem
                    title="Certificates"
                    icon="🏆"
                    iconBg="bg-[#f39c12]"
                    isOpen={openSection === 'certificates'}
                    onClick={() => toggleSection('certificates')}
                >
                    <div className="grid gap-2">
                        {certificates.map((cert, index) => (
                            <div key={index} className="flex items-center gap-3 bg-[#f8f9fa] p-3 rounded-lg">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f39c12] to-[#e67e22] flex items-center justify-center text-white text-sm">
                                    🎖️
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-[#2c3e50] text-sm">{cert.name}</p>
                                    <p className="text-gray-500 text-xs">{cert.issuer} • {cert.year}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AccordionItem>

                {/* Education */}
                <AccordionItem
                    title="Education"
                    icon="🎓"
                    iconBg="bg-[#3498db]"
                    isOpen={openSection === 'education'}
                    onClick={() => toggleSection('education')}
                >
                    <div className="space-y-3">
                        {education.map((edu, index) => (
                            <div key={index} className="bg-[#f8f9fa] p-4 rounded-lg border-l-4 border-[#3498db]">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-semibold text-[#2c3e50]">{edu.degree}</p>
                                        <p className="text-[#3498db] text-sm font-medium">{edu.school}</p>
                                    </div>
                                    <span className="text-gray-400 text-xs bg-white px-2 py-1 rounded-md">{edu.period}</span>
                                </div>
                                <p className="text-gray-500 text-sm mt-2">{edu.description}</p>
                            </div>
                        ))}
                    </div>
                </AccordionItem>
            </div>

            {/* Download Button */}
            <button className="group w-full py-3 bg-gradient-to-r from-[#5a6340] to-[#7a8a50] text-white rounded-xl font-medium hover:from-[#4a5335] hover:to-[#6a7a45] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mt-2">
                <span className="group-hover:animate-bounce">📥</span>
                <span>Download Full CV</span>
            </button>
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

const SocialBlock = ({ social }) => {
    return (
        <a
            href={social.url}
            // target="_blank"
            className="group relative block"
        >
            
            {/* Main block */}
            <div
                className="relative w-16 h-16 rounded-xl flex items-center justify-center 
                           transition-all duration-150 ease-out
                           group-hover:translate-y-1 group-active:translate-y-2
                           border-2 border-black/20 bg-white/20"
                // style={{ backgroundColor: social.bgColor }}
            >
                {/* Inner highlight */}
                <div className="absolute inset-1 rounded-xl pointer-events-none" />
                
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
    tools: <ToolsContent />,
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