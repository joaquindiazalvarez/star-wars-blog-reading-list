import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/hp-logo.png";
import { Context } from "../store/appContext"

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	console.log(store.favoriteArray);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src={logo} height="100"></img></span>
			</Link>
			<div>
				<h1>Harry Potter Blog</h1>
			</div>
			<div className="dropdown me-4">
  				<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    			Favorites
  				</button>
 				 <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">				
						{store.favoriteArray.map((value, k)=>{
						return(
						<li>
							<Link to={'/character/' + value}>
								<div className="dropdown-item" href="#">{value}</div>
							</Link>
							<div
								onClick={() => {
									actions.deleteFromFavorites(value);
								}}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-x-lg"
									viewBox="0 0 16 16">
									<path
										fillRule="evenodd"
										d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
									/>
									<path
										fillRule="evenodd"
										d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
									/>
								</svg>
							</div>
						</li>
	)})}
  				</ul>
			</div>
		</nav>
	);
};
