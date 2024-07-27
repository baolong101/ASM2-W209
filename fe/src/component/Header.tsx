import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import { TOKEN_STORAGE_KEY, USER_INFO_STORAGE_KEY } from "../constants";

const Header = () => {
  const isLogin = localStorage.getItem(TOKEN_STORAGE_KEY);
  const userInfo = JSON.parse(
    localStorage.getItem(USER_INFO_STORAGE_KEY) as string
  );

  const onLogout = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(USER_INFO_STORAGE_KEY);

    window.location.href = "/login";
  };

  return (
    <>
      <header>
        {/* top header  */}
        <div className="w-full bg-[#05422c] lg:h-[37px] mb:h-[34px] *:text-white flex justify-center items-center *:lg:text-sm *:mb:text-xs gap-x-4">
          <span className=" lg:w-auto mb:w-[266px] mb:truncate">
            LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.
          </span>
          <span>
            <CountdownTimer />
          </span>
        </div>

        {/* logo, search and cart  */}
        <div className="w-full flex justify-center items-center border-b">
          <div className="container w-[1440px] lg:h-[760x] mb:h-[56px] flex justify-between *:flex *:items-center items-center">
            <div>
              <img
                className="lg:translate-x-[64px] mb:translate-x-[-11.5px] lg:w-[167px] lg:h-[40px] mb:w-[119px] mb:h-[28px]"
                src="./src/assets/images/logos.png"
                alt=""
              />
            </div>

            <div className="mb:hidden lg:block">
              <div className="items-center ">
                <div className=" h-[56px] flex items-center *:border-gray-200 ">
                  <ul className="flex justify-center  *:flex *:justify-center *:px-8 *:py-2">
                    <li>
                      <Link to={""}>All</Link>
                    </li>
                    <li>
                      <Link to={""}>Shirt</Link>
                    </li>
                    <li>
                      <Link to={""}>Trousers</Link>
                    </li>
                    <li>
                      <Link to={""}>About us</Link>
                    </li>
                    <li className="relative group">
                      <Link to={""}>All_2</Link>
                      <ul className="absolute hidden group-hover:flex group-hover:w-full bg-white border border-gray-200 mt-2 top-8">
                        <li>
                          <Link to={""}>Option 1</Link>
                          <Link to={""}>Option A</Link>
                        </li>
                        <li>
                          <Link to={""}>Option 2</Link>
                        </li>
                        <li>
                          <Link to={""}>Option 3</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:gap-x-6 mb:gap-x-4 lg:-translate-x-[60px] mb:-translate-x-[20px]">
              {/* <div className="mb:hidden lg:block *:h-[48px]">
                            <form className="w-[456px] flex *:h-[48px] justify-between">
                                <input type="text" className="border rounded-full w-[200px] px-6" placeholder="Search" />
                                <button className="rounded-[50%] bg-[#17af26] w-[48px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                        stroke="currentColor" className="size-6 text-white mx-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </button>
                            </form>
                        </div> */}
              {isLogin ? (
                <div className="flex items-center gap-x-1">
                  <Link to={userInfo?.role === "ADMIN" ? "/admin" : "/profile"}>
                    Hi, {userInfo?.name}
                  </Link>
                  <p>|</p>
                  <p onClick={onLogout} className="cursor-pointer">
                    Đăng xuất
                  </p>
                </div>
              ) : (
                <Link to={"login"} className="*:hover:opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </Link>
              )}
              |
              <button className="h-[24px] *:hover:opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 w-[24px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <span className="absolute bg-red-500 top-2 rounded-[50%] w-[16px] h-[16px] text-xs text-white">
                  99+
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
