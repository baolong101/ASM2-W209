import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
    const [activeTab, setActiveTab] = useState('Tất cả');

    const tabs = [
        { name: 'Dashboard', link: '#' },
        { name: 'Quản lí danh mục', link: '#' },
        { name: 'Quản lí sản phẩm', link: '#' },
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
                <main className="main-content w-full flex-1">
                    <div className="header">
                        <h1>Danh sách danh mục</h1>
                    </div>
                    <div className="breadcrumb">
                        <span>Danh Sách Danh Mục / Thêm danh mục</span>
                        <span className="date-time">Thứ , Ngày/Tháng/Năm - Giờ/Phút/Giây</span>
                    </div>
                    {/* <div className="form">
                        <div className="form-group">
                            <label>Mã danh mục</label>
                            <input type="text" value="Tự tăng" disabled />
                        </div>
                        <div className="form-group">
                            <label>Tên danh mục</label>
                            <input
                                type="text"
                                value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                            />
                        </div>
                        <button onClick={addCategory} className="btn btn-add">Thêm mới</button>
                        <button className="btn btn-list">Danh sách</button>
                    </div> */}
                    {/* <ul className="category-list">
                        {categories.map((category) => (
                            <li key={category.id}>{category.name}</li>
                        ))}
                    </ul> */}
                    <Outlet />
                </main>
            </div>
        </>
    )
}
export default AdminLayout