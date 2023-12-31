import {
	FaFileDownload,
	FaGithub,
	FaLinkedin,
	FaEnvelope,
} from "react-icons/fa";
import links from "../data/links.json";

// Icons for links
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

function AboutMe() {
	return (
		<main className="flex flex-col lg:flex-row p-4 mt-24 2xl:mt-48">
			<div className="w-full lg:w-1/2">
				<h1 className="text-2xl lg:hidden">Hello, world! 👋</h1>
				<h1 className="hidden lg:block">Hello, world! 👋</h1>
				<p className="text-lg mt-3">
					I&apos;m Matt and I&apos;m a seasoned FullStack developer
					with professional experience on a wide array of projects. I
					prefer working in the frontend, but I am not afraid of the
					backend. My most recent role was a Frontend Developer at
					Digital Freight Network.
				</p>
				<p className="text-lg mt-3">Want to know more?</p>
				<ul className="flex flex-col mx-auto lg:mx-0 lg:flex-row lg:flex-wrap justify-between font-bold mt-3 text-sm 2xl:w-5/6">
					{links.map((link, index) => (
						<li
							className="mt-3 2xl:mt-5 p-2 bg-sky-600 hover:bg-sky-700 dark:bg-sky-800 text-white rounded-xl"
							key={index}
						>
							<a
								className="flex items-center justify-center lg:justify-normal"
								href={link.url}
								target="_blank"
							>
								{getIconComponent(link.icon)} {link.name}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className="hidden w-1/2 lg:flex lg:flex-col items-center">
				<img
					src="/assets/me.webp"
					alt="An artist's impression of me"
					className="h-96 rounded ml-auto"
				/>
			</div>
		</main>
	);
}

export default AboutMe;
