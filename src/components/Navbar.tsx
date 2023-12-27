import { FaSun } from "react-icons/fa";
import { HiMiniMoon } from "react-icons/hi2";
import { Link } from "react-scroll";
interface NavbarProps {
	darkMode: boolean;
	toggleDarkMode: () => void;
}

function Navbar(props: NavbarProps) {
	return (
		<header className="relative">
			<div className="fixed top-0 left-0 right-0">
				<nav className="flex items-center w-4/6 mx-auto p-4 bg-white dark:bg-stone-950 transition-colors">
					<h4>Matt Sweet</h4>
					<ul className="flex items-center ml-auto text-sm text-gray-800 dark:text-gray-200 font-bold uppercase">
						<li className="mr-5">
							<Link to="home" smooth={true} duration={700}>
								Home
							</Link>
						</li>					
						<li className="mr-5">
							<Link to="projects" smooth={true} duration={700}>
								Projects
							</Link>
						</li>
						<li className="mr-8"><a href="https://www.upwork.com/freelancers/~017915d053d8eda84a?s=1110580755107926016" target="_blank">Upwork</a></li>
						<li className="text-2xl cursor-pointer" onClick={props.toggleDarkMode}>
							{props.darkMode ? <FaSun /> : <HiMiniMoon />}
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
