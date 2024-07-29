
const AddProduct = () => {
    return (
        <div className='relative overflow-x-auto shadow-lg border-2 sm:rounded-lg mx-5'>
            <div className='mx-6 mt-6'>
                <h1 className='p-2 text-sm rounded-md font-medium'>Thêm Sản Phẩm</h1>
                <hr className='mt-4 bg-[#FFEA20] h-[2px]' />
            </div>
            <div className='py-2 mx-6'>
                <form className="">
                    <div className='flex'>
                        <div className="mb-5 w-[100px] mr-5">
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>
                            <input type="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Auto" disabled />
                        </div>
                        <div className="mb-5 w-[250px] mr-5">
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên Sản Phẩm</label>
                            <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-5 mr-5">
                            <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giá Sản Phẩm</label>
                            <input type="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-5 mr-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                            <input className="block text-sm  border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />

                        </div>
                        <div className="mb-5 w-[300px]">
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô tả</label>
                            <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 mb-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Thêm</button>
                </form>
            </div>
        </div>
    )
}
export default AddProduct