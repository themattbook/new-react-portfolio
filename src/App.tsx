import Navbar from "./components/Navbar";
import { FaFileDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import links from "./data/links.json";
import Me from "./assets/me.webp";

function App() {
	const [darkMode, setDarkMode] = useState(true);
	const toggleDarkMode = () => {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	};

	const getIconComponent = (iconName: string) => {
		switch (iconName) {
			case "FaFileDownload":
				return <FaFileDownload className="mr-2" />;
			case "FaGithub":
				return <FaGithub className="mr-2" />;
			case "FaLinkedin":
				return <FaLinkedin className="mr-2" />;
			case "FaEnvelope":
				return <FaEnvelope className="mr-2" />;
			default:
				return null;
		}
	};

	return (
		<div
			className={`flex flex-col min-h-screen transition-colors ${
				darkMode
					? "dark bg-stone-950 text-gray-200"
					: "bg-white text-gray-800"
			}`}
		>
			<div className="w-4/6 2xl:w-1/2 mx-auto">
				<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
				<div className="flex p-4 mt-24">
					<div className="w-1/2">
						<h1>Hello, world! 👋</h1>
						<p className="text-lg mt-3">
							I&apos;m Matt and I&apos;m a seasoned FullStack
							developer with professional experience on a wide
							array of projects. I prefer working in the frontend,
							but I am not afraid of the backend. My most recent
							role was a Frontend Developer at Digital Freight
							Network.						
						</p>
						<p className="text-lg mt-3">Want to know more?</p>
						<ul className="flex flex-wrap justify-between font-bold mt-3 text-sm">
							{links.map((link, index) => (
								<li className="mt-3 2xl:mt-5 p-2 bg-indigo-500 text-white rounded-xl" key={index}>
									<a className="flex items-center" href={link.url} target="_blank">
									{getIconComponent(link.icon)} {link.name}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className="w-1/2 flex flex-col items-center">
						<img
							src={Me}
							alt="An artist's impression of me"
							className="h-96 rounded ml-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
