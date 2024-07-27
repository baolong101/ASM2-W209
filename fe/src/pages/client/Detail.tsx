import { useState } from "react";
import { Link } from "react-router-dom"


const Detail = () => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const sizes = ['X', 'M', 'L', 'XL', 'XXL'];
    return (
        <>
            <div className="flex items-center bg-gray-200">
                <Link to={"/"} className="mb-1 mx-2 hover:underline">Trang chủ </Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
                <h3 className="mb-1 mx-2 hover:underline">Product</h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
                <h3 className="mb-1 mx-2 hover:underline">Detail</h3>
            </div>
            <main className="flex mx-auto *:border w-[1300px] gap-2">
                <div className="w-[35%]">
                    <img src="../src/assets/images/shirt.png" className="border" alt="" />
                    {/* <div>
                        <img src="../src/assets/images/shirt.png" alt="" />
                        <img src="../src/assets/images/shirt.png" alt="" />
                    </div> */}
                </div>
                <div className="w-[65%]">
                    {/* About */}
                    <div className="">
                        <h1 className="text-2xl font-normal">Tên sản phẩm</h1>
                        <p className="text-xl text-red-500 font-medium">99$</p>
                        <div>
                            <p className="font-medium">Mô tả sản phẩm: </p>
                            <p>
                                Chất liệu: Vải French Terry.
                                Thành phần: 100% Cotton
                                - Thấm hút
                                - Thoát ẩm tốt
                                - Mềm mại
                                - Thân thiện với môi trường
                                + Kỹ thuật: In Trame
                            </p>
                        </div>
                    </div>
                    {/* Size */}
                    <div>
                        <h3 className="text-xl font-normal">Size</h3>
                        <div className="*:mx-2 *:border *:px-7 *:py-1 *:rounded-sm">
                            {sizes.map(size => (
                                <button
                                    key={size}
                                    className={`px-7 py-1 border rounded-sm ${selectedSize === size ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

        </>

    )
}
export default Detail