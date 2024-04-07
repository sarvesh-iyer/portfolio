import { Navbar } from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
    return (
        <>
			<header>
				<Navbar />
			</header>

            <main>
                <Outlet />
            </main>
		</>
    )
}
