import { Link } from "react-router-dom"


const Home = () => {
    return (
        <>
            <div className="banner">
                <img src="./src/assets/images/banner.jpeg" className="w-full" alt="" />
            </div>
            <div>
                <h1 className="text-center text-2xl font-semibold my-5">Sản Phẩm Hot</h1>
                <div className="grid grid-cols-4 w-[1400px] mx-auto *:border *:mx-auto *:bg-gray-100 gap-x-[10px] *:px-3 *:py-6">
                    {/* Item */}
                    <div className="*:text-center">
                        <h1 className="text-xl">Sản Phẩm 1</h1>
                        <hr className="mt-2 w-6 mx-auto bg-gray-500 h-[2px]" />
                        <p className="mx-2 mt-2 mb-4">Mô tả</p>
                        <div className="relative group w-[300px] mb-2 rounded-xl place-items-center">
                            <img className="w-[220px] mx-auto mb-2" src="./src/assets/images/shirt.png" alt="" />
                            <Link to={"detail"}
                                className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px] mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md left-1/2 top-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                Details</Link>
                            <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">$60 ounce</section>
                        </div>
                        <span className="text-sm">99$</span>
                        <div className="*:mx-[2px] *:text-white mt-5">
                            <button className="bg-blue-500 px-4 py-2 rounded-xl hover:opacity-75">Add to Cart</button>
                            <button className="bg-red-500 px-4 py-2 rounded-xl hover:opacity-75">Buy Now</button>
                        </div>
                    </div>
                    <div className="*:text-center">
                        <h1 className="text-xl">Sản Phẩm 1</h1>
                        <hr className="mt-2 w-6 mx-auto bg-gray-500 h-[2px]" />
                        <p className="mx-2 mt-2 mb-4">Mô tả</p>
                        <div className="relative group w-[300px] mb-2 rounded-xl place-items-center">
                            <img className="w-[220px] mx-auto mb-2" src="./src/assets/images/shirt.png" alt="" />
                            <Link to={"detail"}
                                className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px] mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md left-1/2 top-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                Details</Link>
                            <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">$60 ounce</section>
                        </div>
                        <span className="text-sm">99$</span>
                        <div className="*:mx-[2px] *:text-white mt-5">
                            <button className="bg-blue-500 px-4 py-2 rounded-xl hover:opacity-75">Add to Cart</button>
                            <button className="bg-red-500 px-4 py-2 rounded-xl hover:opacity-75">Buy Now</button>
                        </div>
                    </div>
                    <div className="*:text-center">
                        <h1 className="text-xl">Sản Phẩm 1</h1>
                        <hr className="mt-2 w-6 mx-auto bg-gray-500 h-[2px]" />
                        <p className="mx-2 mt-2 mb-4">Mô tả</p>
                        <div className="relative group w-[300px] mb-2 rounded-xl place-items-center">
                            <img className="w-[220px] mx-auto mb-2" src="./src/assets/images/shirt.png" alt="" />
                            <Link to={"detail"}
                                className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px] mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md left-1/2 top-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                Details</Link>
                            <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">$60 ounce</section>
                        </div>
                        <span className="text-sm">99$</span>
                        <div className="*:mx-[2px] *:text-white mt-5">
                            <button className="bg-blue-500 px-4 py-2 rounded-xl hover:opacity-75">Add to Cart</button>
                            <button className="bg-red-500 px-4 py-2 rounded-xl hover:opacity-75">Buy Now</button>
                        </div>
                    </div>
                    <div className="*:text-center">
                        <h1 className="text-xl">Sản Phẩm 1</h1>
                        <hr className="mt-2 w-6 mx-auto bg-gray-500 h-[2px]" />
                        <p className="mx-2 mt-2 mb-4">Mô tả</p>
                        <div className="relative group w-[300px] mb-2 rounded-xl place-items-center">
                            <img className="w-[220px] mx-auto mb-2" src="./src/assets/images/shirt.png" alt="" />
                            <Link to={"detail"}
                                className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px] mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md left-1/2 top-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                Details</Link>
                            <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">$60 ounce</section>
                        </div>
                        <span className="text-sm">99$</span>
                        <div className="*:mx-[2px] *:text-white mt-5">
                            <button className="bg-blue-500 px-4 py-2 rounded-xl hover:opacity-75">Add to Cart</button>
                            <button className="bg-red-500 px-4 py-2 rounded-xl hover:opacity-75">Buy Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Home