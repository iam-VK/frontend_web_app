import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/mainpage/MainPage.jsx";
import HomePage from "./pages/mainpage/HomePage.jsx";
import LoginPage from "./pages/mainpage/LoginPage.jsx";
import SearchPage from "./pages/mainpage/SearchPage.jsx";
import UploadPage from "./pages/mainpage/UploadPage.jsx";
import NavBar from "./components/navbar/NavBar.jsx";

function App() {
	return (
		<>
			<NavBar />
			<BrowserRouter>
				<Routes>
					{/* <Route path="/" element={<MainPage />} /> */}
					<Route path="/home" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/search" element={<SearchPage />} />
					<Route path="/upload" element={<UploadPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
