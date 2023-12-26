import Navbar from "./components/Navbar";
import { FaFileDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import Me from "./assets/me.webp";

function App() {
	const [darkMode, setDarkMode] = useState(true);
	const toggleDarkMode = () => {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	};

	return (
		<div
			className={`flex flex-col min-h-screen transition-colors ${
				darkMode
					? "dark bg-stone-950 text-gray-200"
					: "bg-white text-gray-800"
			}`}
		>
			<div className="w-1/2 mx-auto">
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
						<ul className="font-bold mt-3 text-sm">
							<li className="mt-5">
								<a
									className="flex items-center"
									download
									href="./assets/Matthew_Sweet_Resume.docx"
								>
									<FaFileDownload className="mr-3" /> My
									Resume (.docx, 583kb)
								</a>
							</li>
							<li className="mt-5">
								<a
									className="flex items-center"
									href="https://github.com/themattbook"
									target="_blank"
								>
									<FaGithub className="mr-3" /> My Github
								</a>
							</li>
							<li className="mt-5">
								<a
									className="flex items-center"
									href="https://linkedin.com/in/meetmattsweet"
									target="_blank"
								>
									<FaLinkedin className="mr-3" /> My LinkedIn
								</a>
							</li>
							<li className="mt-5">
								<a
									className="flex items-center"
									href="mailto:themattbook@gmail.com"
									target="_blank"
								>
									<FaEnvelope className="mr-3" /> Email
								</a>
							</li>
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
