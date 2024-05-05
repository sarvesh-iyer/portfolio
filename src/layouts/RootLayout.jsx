import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"
import { Footer } from "../components/footer/Footer"

export const RootLayout = () => {
    return (
        <>
            <header className="main-header">
                <Navbar />
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
