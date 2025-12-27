// components/Tools.jsx
/*
    Mục đích của cái trang này 
    1. BA làm gì ??? 
    2. BA dùng tools gì để giải quyết vấn đề ???
    3. Có thể dùng để giải quyết khi làm thực tế không ??? 
*/
import React from "react"
import * as z from "../assets/index"

const ToolsContent = () => {
    const toolCategories = [
        {
            category: "Project Management & Documentation",
            description: "Manage project requests, track progress, and archive project documents.",
            tools: [
                { name: "Jira", image: z.jiraImg, color: "bg-blue-50" },
                { name: "Confluence", image: z.confluenceImg, color: "bg-gray-50" },
                { name: "Docs", image: z.docImg, color: "bg-gray-50" },
            ]
        },
        {
            category: "Process & Business Modeling",
            description: "Process and business modeling to understand and optimize workflows.",
            tools: [
                { name: "Draw.io", image: z.drawioImg, color: "bg-blue-50" },
                { name: "Microsoft Visio", image: z.visioImg, color: "bg-gray-50" },]
        },
        {
            category: "Solution Design & API Collaboration",
            description: "Wireframe, user flow, and API testing.",
            tools: [
                { name: "Figma", image: z.figmaImg, color: "bg-purple-50" },
                { name: "Postman", image: z.postmanImg, color: "bg-purple-50" },
                { name: "Swagger", image: z.swaggerImg, color: "bg-purple-50" },

            ]
        },
        {
            category: "Data analysis & Reporting",
            description: "Analyzing data and building reports to support decision-making.",
            tools: [
                { name: "Power BI", image: z.pbiImg, color: "bg-teal-50" },
                { name: "SQL Server/MySQL", image: z.sqlServerImg, color: "bg-teal-50" },
                { name: "Excel/Sheets", image: z.sheetsImg, color: "bg-teal-50" },
            ]
        },
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