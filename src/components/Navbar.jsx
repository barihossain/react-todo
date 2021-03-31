import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-top mb-3">
				<a className="navbar-brand" href="/">
					ToDo List
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="nav nav-pills ml-auto">
						<li className="nav-item">
							<NavLink className="nav-link" to="/todos">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/trash">
								Trashed
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
