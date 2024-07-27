import { Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"
import { HiMail } from "react-icons/hi"
const ForgotPass = () => {
    return (
        <>
            <div className="flex items-center ">
                <div className="flex text-white items-center bg-[url(../src/assets/images/bg-login.jpg)] bg-no-repeat bg-cover h-lvh w-[50%]">
                    <div className="text-center tracking-widest mx-auto">
                        <div>
                            <h4 className="text-2xl">Nice to meet you again</h4>
                            <h1 className="text-[60px]">WELCOME BACK</h1>
                            <hr className="w-[80px] mx-auto py-1 rounded-xl bg-white" />
                        </div>
                        <div className="w-[500px] mt-10">
                            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisci elit,
                                sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. </p>
                        </div>
                    </div>

                </div>
                <div className="mx-auto">
                    <Link to={"/"} className="flex items-center *:mx-1 hover:opacity-70"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>
                        Trang chủ</Link>
                    <div className="text-center my-[50px]">
                        <h1 className="text-3xl text-[#00A9FF] font-medium">Forgot Password</h1>
                        <p className="text-sm text-gray-500 text-center w-[300px] mt-6 mx-auto">Lorem ipsum dolor sit amet,
                            consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore aliqua.
                        </p>
                    </div>
                    <form action="" className="*:my-4 w-[340px]">
                        <div>
                            {/* <input type="text" name="" id="" placeholder="Nhập email để khôi phục mật khẩu !"
                                className="bg-gray-100 border-l-4 border-[#00A9FF] w-full py-2 pl-3"
                            /> */}
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="email4" value="Your email" />
                                </div>
                                <TextInput id="email4" type="email" icon={HiMail} placeholder="name@gmail.com" required />
                            </div>
                            <div className="text-right mt-2">
                                <Link to={"/login"} className="text-[#00A9FF] hover:font-medium hover:text-blue-600 text-sm">Back to login !</Link>
                            </div>
                        </div>
                        <button type="submit" className="bg-[#00A9FF] w-full py-2 rounded-3xl text-white tracking-widest">SUBCRIBE</button>
                    </form>
                </div >
            </div >
        </>
    )
}
export default ForgotPass