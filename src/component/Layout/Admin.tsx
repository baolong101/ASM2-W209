import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CountTimer from "../CountTime";

const AdminLayout = () => {
    const [activeTab, setActiveTab] = useState('Tất cả');

    const tabs = [
        { name: 'Dashboard', link: '/admin' },
        { name: 'Quản lí danh mục', link: 'categories' },
        { name: 'Quản lí sản phẩm', link: 'products' },
        { name: 'Quản lí đơn hàng', link: '#' },
        { name: 'Quản lí bình luận', link: '#' },
        { name: 'Quản lí tài khoản', link: '#' }
    ];
    return (
        <>
            <div className="flex w-full" >
                <aside className="sidebar p-[20px] w-[250px] h-dvh bg-[#00A9FF]">
                    <div className="logo mb-[20px] w-full *:mx-auto text-center">
                        <img src="../src/assets/images/logoadmin.png" alt="" className="w-24" />
                        <p className="mt-[15px] text-white font-semibold">AKKA</p>
                    </div>
                    <ul className="list-none p-0 *:my-[5px] *:p-[15px] text-left *:text-white *:font-medium *:text-[14px] ">
                        {tabs.map(tab => (
                            <li
                                // hover:bg-[#AFD4FF] hover:rounded-[5px] hover:text-black
                                key={tab.name}
                                className={`${activeTab === tab.name ? 'bg-[#AFD4FF] text-black' : ""} rounded-[5px] py-1.5 `}
                                onClick={() => setActiveTab(tab.name)}
                            >
                                <Link to={tab.link} className={`px-8 py-[10px] ${activeTab === tab.name ? 'text-black' : ''}`}>
                                    {tab.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
                <main className="main-content w-full flex-1 mt-4">
                    <div className="breadcrumb flex justify-between items-center  mx-5 mb-3 border rounded-lg border-gray-300 *:px-10 *:py-2.5">
                        <span className="border-l-8 rounded-l-lg border-[#00A9FF]">Danh Sách Danh Mục / Thêm danh mục</span>
                        <span className="date-time font-semibold">{<CountTimer />}
                            <Link to={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                </svg>
                            </Link>
                        </span>
                    </div>
                    <Outlet />
                </main>
            </div>
        </>
    )
}
export default AdminLayout