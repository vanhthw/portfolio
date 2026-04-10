import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as z from "../assets/index";

const ProjectsDemo = () => {
    const navigate = useNavigate();

    // Bạn có thể thêm nhiều demo vào mảng này
    const demos = [
        {
            title: "Theo dõi số lượng sấy",
            image: z.sayImg, // Lấy từ z.sayImg trong file index.js
            // url: "https://drying.congtien.com.vn/dryingquantitydashboard" // Vẫn giữ lại link nếu bạn muốn cho phép "Mở xem đầy đủ"
        },
        {
            title: "Báo cáo tiến độ cắt",
            image: z.sayImg, // Lấy từ z.sayImg trong file index.js
            // url: "https://drying.congtien.com.vn/dryingquantitydashboard" // Vẫn giữ lại link nếu bạn muốn cho phép "Mở xem đầy đủ"
        },
        {
            title: "Theo dõi máy chuyên dụng",
            image: z.sayImg, // Lấy từ z.sayImg trong file index.js
            // url: "https://drying.congtien.com.vn/dryingquantitydashboard" // Vẫn giữ lại link nếu bạn muốn cho phép "Mở xem đầy đủ"
        },
        {
            title: "Theo dõi mã hàng chuyển đổi nhanh",
            image: z.sayImg, // Lấy từ z.sayImg trong file index.js
            // url: "https://drying.congtien.com.vn/dryingquantitydashboard" // Vẫn giữ lại link nếu bạn muốn cho phép "Mở xem đầy đủ"
        }
    ];

    return (
        <div className="w-screen min-h-screen bg-[#f5f0e8] relative flex items-center justify-center p-2 md:p-4 overflow-hidden">
            {/* Grid background */}
            <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right,rgb(187, 133, 187) 1px, transparent 1px),
                        linear-gradient(to bottom,rgb(163, 103, 163) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                }}
            />

            {/* Popup Window */}
            <div className="relative z-10 w-full max-w-5xl rounded-lg shadow-2xl flex flex-col h-[90vh]">
                {/* Title Bar */}
                <div className="bg-[#5a6340] rounded-t-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between shrink-0">
                    <span
                        className="text-white font-mono text-sm md:text-lg tracking-wide truncate mr-2"
                        style={{ fontFamily: "'Courier New', monospace" }}
                    >
                        T:\vanhthuww\<span className="text-[#f5d742]">projects-demo</span>
                    </span>
                    <button
                        onClick={() => navigate('/')}
                        className="w-7 h-7 sm:w-8 sm:h-8 bg-[#e74c3c] hover:bg-[#c0392b] rounded-md flex items-center justify-center transition-colors shrink-0"
                    >
                        <img src={z.removeImg} alt="remove" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                    </button>
                </div>

                {/* Content Area */}
                <div className="bg-[#f5f0e8] rounded-b-lg border-x border-b border-[#5a6340]/20 p-4 sm:p-6 overflow-y-auto flex-1">
                    <div className="mb-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#2c3e50] mb-2">Projects Demo</h2>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Dưới đây là danh sách một số báo cáo tôi đã làm trong quá trình làm việc tại công ty.
                        </p>
                    </div>

                    <div className="grid gap-10">
                        {demos.map((demo, index) => (
                            <div key={index} className="flex flex-col gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                                <h3 className="font-bold text-[#2c3e50] text-lg sm:text-xl border-l-4 border-[#9b59b6] pl-3">
                                    {demo.title}
                                </h3>

                                {/* Image container */}
                                <div className="relative w-full rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                                    {demo.image ? (
                                        <img
                                            src={demo.image}
                                            alt={demo.title}
                                            className="w-full h-auto block"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full flex items-center justify-center p-12 text-sm text-gray-500 italic bg-gray-50">
                                            [Chưa có hình ảnh] Hãy import và thêm đường dẫn ảnh từ src/assets/reports vào biến demos
                                        </div>
                                    )}
                                </div>

                                {demo.url && (
                                    <div className="flex justify-end mt-1">
                                        <a href={demo.url} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-[#9b59b6] transition-colors flex items-center gap-1 font-medium">
                                            Mở xem đầy đủ
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}

                        {demos.length === 0 && (
                            <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                                <p className="text-gray-500 italic">Chưa có demo nào. Hãy thêm mã URL vào mảng demos trong file ProjectsDemo.jsx.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDemo;
