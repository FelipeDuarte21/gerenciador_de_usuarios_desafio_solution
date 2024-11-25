import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from './contexts/authContext'
import useAuth from "./hooks/useAuth"
import Home from "./pages/Home"
import Cadastro from "./pages/Cadastro"
import Atualiza from "./pages/Atualiza"
import Login from "./pages/Login"

const App = () => {

	const RotaProtegida = ({Item}) => {
		const { isAutentication } = useAuth();
		return isAutentication ? <Item/> : <Login /> ;
	}

	const VerificaLogin = () => {
		const { isAutentication } = useAuth();
		return isAutentication ? <Home/> : <Login/> ;
	}

	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route exact path="/home" element={<RotaProtegida Item={Home} />} />
					<Route exact path="/cadastro" element={<RotaProtegida Item={Cadastro} />} />
					<Route exact path="/atualiza/:id" element={<RotaProtegida Item={Atualiza} />} />
					<Route exact path="/" element={<VerificaLogin/>} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	)
	
}

export default App;
