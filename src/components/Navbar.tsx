import { FaSun } from "react-icons/fa";
import { HiMiniMoon } from "react-icons/hi2";

interface NavbarProps {
	darkMode: boolean;
	toggleDarkMode: () => void;
}

function Navbar(props: NavbarProps) {
	return (
		<nav className="flex items-center w-full p-4">
			<h4>Matt Sweet</h4>
			<ul className="flex items-center ml-auto text-sm text-gray-800 dark:text-gray-200 font-bold uppercase">
				<li className="mr-5">Home</li>
				<li className="mr-5">Projects</li>
				<li className="mr-5">Contact</li>
				<li className="mr-8">More</li>
				<li className="text-2xl cursor-pointer" onClick={props.toggleDarkMode}>
					{props.darkMode ? <FaSun /> : <HiMiniMoon />}
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
