import React from "react";
import * as z from "../assets/index";

const ToolsVer2 = () => {
    // Danh sách các công cụ phổ biến cho Data Analyst
    const daTools = [
        {
            name: "Microsoft Excel",
            image: z.excelImg,
            description: "Phân tích & Xử lý dữ liệu",
            color: "bg-green-50/50 hover:bg-green-100 border-green-200"
        },
        {
            name: "SQL Server",
            image: z.sqlServerImg,
            description: "Truy vấn Cơ sở dữ liệu",
            color: "bg-red-50/50 hover:bg-red-100 border-red-200"
        },
        {
            name: "MySQL",
            image: z.mysqlImg,
            description: "Quản trị Cơ sở dữ liệu",
            color: "bg-blue-50/50 hover:bg-blue-100 border-blue-200"
        },
        {
            name: "Power BI",
            image: z.pbiImg,
            description: "Trực quan hóa dữ liệu",
            color: "bg-yellow-50/50 hover:bg-yellow-100 border-yellow-200"
        },
        {
            name: "Python",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            description: "Lập trình phân tích dữ liệu",
            color: "bg-blue-50/50 hover:bg-blue-100 border-blue-200"
        },
        {
            name: "Jupyter Notebook",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",
            description: "Môi trường phân tích",
            color: "bg-orange-50/50 hover:bg-orange-100 border-orange-200"
        },
        {
            name: "Tableau",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tableau/tableau-original.svg",
            description: "Dashboard & Báo cáo",
            color: "bg-indigo-50/50 hover:bg-indigo-100 border-indigo-200"
        },
        {
            name: "Google Sheets",
            image: z.sheetsImg,
            description: "Báo cáo trực tuyến",
            color: "bg-emerald-50/50 hover:bg-emerald-100 border-emerald-200"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto py-8">
            {/* Grid layout: 2 cột trên mobile, 4 cột trên desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {daTools.map((tool, index) => (
                    <div
                        key={index}
                        className={`
                            ${tool.color} flex flex-col items-center justify-center 
                            p-6 rounded-2xl border transition-all duration-300 
                            hover:scale-[1.02] hover:shadow-md cursor-pointer
                            group
                        `}
                    >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 bg-white rounded-xl shadow-sm flex items-center justify-center p-3 group-hover:shadow transition-shadow">
                            <img
                                src={tool.image}
                                alt={tool.name}
                                className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="font-semibold text-gray-800 text-base sm:text-lg mb-1 text-center">
                            {tool.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 text-center font-medium opacity-80">
                            {tool.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToolsVer2;
