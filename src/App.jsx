import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './assets/styles/globalStyles.css'

// Layout
import { RootLayout } from './layouts/RootLayout'
import { Home } from './components/Home/Home'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route path='/' element={<Home />} />	
		</Route>
	)
)

function App() {

	return (
		<RouterProvider router={router} />
	)
}

export default App
