import { Outlet } from "react-router-dom"
import Header from "../Header"
import { Footer } from "flowbite-react"


const WebsiteLayout = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
export default WebsiteLayout