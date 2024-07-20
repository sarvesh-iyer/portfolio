import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { Home } from './pages/Home'
import { About } from './pages/About'

function App() {

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<RootLayout />}>
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
			</Route>
		)
	)

	return (
		<RouterProvider router={router} />
	)
}

export default App
