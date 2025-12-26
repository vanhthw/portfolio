// components/Tools.jsx
import React from "react"
import * as z from "../assets/index"

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
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {toolCategories.map((category, catIndex) => (
                    <div key={catIndex} className="bg-white rounded-xl sm:rounded-2xl border-2 border-gray-100 p-3 sm:p-4 md:p-6 hover:shadow-lg transition-shadow">
                        <div className="mb-2 sm:mb-3 md:mb-4">
                            <h4 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800 mb-0.5 sm:mb-1">
                                {category.category}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-500">{category.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {category.tools.map((tool, toolIndex) => (
                                <div
                                    key={toolIndex}
                                    className={`${tool.color} px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform cursor-pointer min-w-[100px] sm:min-w-[120px] md:min-w-[140px]`}
                                >
                                    <img src={tool.image} alt={tool.name} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" />
                                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToolsContent;