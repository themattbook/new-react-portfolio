import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { useState } from "react";

function App() {
	// Dark mode
	const [darkMode, setDarkMode] = useState(true);
	const toggleDarkMode = () => {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	};

	return (
		<div
			id="home"
			className={`flex flex-col min-h-screen transition-colors ${
				darkMode
					? "dark bg-stone-950 text-white"
					: "bg-white text-gray-800"
			}`}
		>
			<div className="w-full p-2 lg:p-0 lg:w-4/6 2xl:w-1/2 mx-auto">
				<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
				<AboutMe />
				<Projects />
			</div>
		</div>
	);
}

export default App;
