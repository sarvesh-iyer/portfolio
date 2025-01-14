import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { IndividualProject } from './pages/IndividualProject'

function App() {

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<RootLayout />}>
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='works' element={<Projects />} />
				<Route path='works/:id' element={<IndividualProject />} />
			</Route>
		)
	)

	return (
		<RouterProvider router={router} />
	)
}

export default App
