// components/Resume.jsx
import React, { useState } from "react"

// Component con AccordionItem - Responsive
const AccordionItem = ({ title, icon, iconBg, isOpen, onClick, children }) => {
    return (
        <div className="border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden bg-white shadow-sm">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-2 sm:p-3 md:p-4 hover:bg-gray-50 transition-colors"
            >
                <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg ${iconBg} flex items-center justify-center shadow-md`}>
                        <span className="text-sm sm:text-base md:text-lg">{icon}</span>
                    </div>
                    <span className="font-bold text-[#2c3e50] text-sm sm:text-base">{title}</span>
                </div>
                <div className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <span className="text-gray-500 text-xs sm:text-sm">▼</span>
                </div>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-2 sm:p-3 md:p-4 pt-0 border-t border-gray-100">
                    {children}
                </div>
            </div>
        </div>
    )
}

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
        <div className="flex flex-col gap-3 sm:gap-4">
            {/* Header - Responsive */}
            <div className="flex items-center gap-3 sm:gap-4 pb-3 sm:pb-4 border-b-2 border-dashed border-[#5a6340]/30">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#e67e22] to-[#d35400] flex items-center justify-center text-white text-base sm:text-lg md:text-xl font-bold shadow-lg flex-shrink-0">
                    VT
                </div>
                <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#2c3e50]">Võ Anh Thư</h3>
                    <p className="text-[#e67e22] font-medium text-xs sm:text-sm">Business Analyst</p>
                </div>
            </div>

            {/* Accordion Sections - Responsive */}
            <div className="space-y-2 sm:space-y-3">
                {/* Experience - Responsive */}
                <AccordionItem
                    title="Experience"
                    icon="💼"
                    iconBg="bg-[#5a6340]"
                    isOpen={openSection === 'experience'}
                    onClick={() => toggleSection('experience')}
                >
                    <div className="space-y-2 sm:space-y-3 relative before:absolute before:left-[5px] sm:before:left-[7px] before:top-2 before:bottom-2 before:w-0.5 before:bg-[#e67e22]/30">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-4 sm:pl-6">
                                <div className="absolute left-0 top-1.5 w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] rounded-full bg-white border-2 sm:border-[3px] border-[#e67e22] z-10"></div>
                                <div className="bg-[#f8f9fa] p-2 sm:p-3 rounded-lg">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                                        <div>
                                            <p className="font-semibold text-[#2c3e50] text-xs sm:text-sm">{exp.role}</p>
                                            <p className="text-[#e67e22] text-[10px] sm:text-xs font-medium">{exp.company}</p>
                                        </div>
                                        <span className="text-gray-400 text-[10px] sm:text-xs bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md w-fit">{exp.period}</span>
                                    </div>
                                    <p className="text-gray-500 text-[10px] sm:text-xs mt-1 sm:mt-2">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AccordionItem>

                {/* Projects - Responsive */}
                <AccordionItem
                    title="Projects"
                    icon="🚀"
                    iconBg="bg-[#9b59b6]"
                    isOpen={openSection === 'projects'}
                    onClick={() => toggleSection('projects')}
                >
                    <div className="grid gap-2 sm:gap-3">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-[#f8f9fa] p-2 sm:p-3 rounded-lg border-l-3 sm:border-l-4 border-[#9b59b6]">
                                <p className="font-semibold text-[#2c3e50] text-xs sm:text-sm">{project.name}</p>
                                <p className="text-[#9b59b6] text-[10px] sm:text-xs font-medium">{project.tech}</p>
                                <p className="text-gray-500 text-[10px] sm:text-xs mt-1">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </AccordionItem>

                {/* Certificates - Responsive */}
                <AccordionItem
                    title="Certificates"
                    icon="🏆"
                    iconBg="bg-[#f39c12]"
                    isOpen={openSection === 'certificates'}
                    onClick={() => toggleSection('certificates')}
                >
                    <div className="grid gap-1.5 sm:gap-2">
                        {certificates.map((cert, index) => (
                            <div key={index} className="flex items-center gap-2 sm:gap-3 bg-[#f8f9fa] p-2 sm:p-3 rounded-lg">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#f39c12] to-[#e67e22] flex items-center justify-center text-white text-xs sm:text-sm flex-shrink-0">
                                    🎖️
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-[#2c3e50] text-xs sm:text-sm truncate">{cert.name}</p>
                                    <p className="text-gray-500 text-[10px] sm:text-xs">{cert.issuer} • {cert.year}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AccordionItem>

                {/* Education - Responsive */}
                <AccordionItem
                    title="Education"
                    icon="🎓"
                    iconBg="bg-[#3498db]"
                    isOpen={openSection === 'education'}
                    onClick={() => toggleSection('education')}
                >
                    <div className="space-y-2 sm:space-y-3">
                        {education.map((edu, index) => (
                            <div key={index} className="bg-[#f8f9fa] p-2 sm:p-3 md:p-4 rounded-lg border-l-3 sm:border-l-4 border-[#3498db]">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                                    <div>
                                        <p className="font-semibold text-[#2c3e50] text-xs sm:text-sm md:text-base">{edu.degree}</p>
                                        <p className="text-[#3498db] text-[10px] sm:text-xs md:text-sm font-medium">{edu.school}</p>
                                    </div>
                                    <span className="text-gray-400 text-[10px] sm:text-xs bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md w-fit">{edu.period}</span>
                                </div>
                                <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2">{edu.description}</p>
                            </div>
                        ))}
                    </div>
                </AccordionItem>
            </div>

            {/* Download Button - Responsive */}
            <button className="group w-full py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-[#5a6340] to-[#7a8a50] text-white rounded-lg sm:rounded-xl font-medium hover:from-[#4a5335] hover:to-[#6a7a45] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mt-1 sm:mt-2 text-sm sm:text-base">
                <span className="group-hover:animate-bounce">📥</span>
                <span>Download Full CV</span>
            </button>
        </div>
    )
}

export default ResumeContent;