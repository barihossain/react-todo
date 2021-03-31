import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../App.css";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import TaskList from "./TaskList";
import TrashList from "./TrashList";
import Navbar from "./Navbar";

class App extends Component {
	render() {
		return (
			<main>
				<div className="container py-4">
					<div className="p-2 mb-4 bg-light rounded-3">
						<div className="container-fluid py-5">
							<Navbar />
							<Switch>
								<Route
									path="/todos"
									render={(props) => <TaskList {...props} />}
								/>
								<Route
									path="/trash"
									render={(props) => <TrashList {...props} />}
								/>
								<Redirect from="/" exact to="/todos" />
							</Switch>
						</div>
					</div>
				</div>
			</main>
		);
	}

	/*
	//"start": "react-scripts start",
    //"build": "react-scripts build",
    //"test": "react-scripts test",
	*/

	//newTaskInput = React.createRef();
	// addTask = (event) => {
	// 	if (event.key === "Enter") {
	// 		const newTaskTitle = this.newTaskInput.current.value;

	// 		let tasks = [...this.state.tasks];
	// 		let idForNewTask = this.state.idForNewTask + 1;
	// 		tasks.push({
	// 			id: idForNewTask,
	// 			title: newTaskTitle,
	// 			isComplete: false,
	// 			editing: false,
	// 		});

	// 		this.setState({ tasks, idForNewTask });

	// 		this.newTaskInput.current.value = "";
	// 	}
	// };

	// deleteTask = (id) => {
	// 	let tasks = [...this.state.tasks];

	// 	let index = tasks.findIndex((t) => t.id === id);

	// 	tasks.splice(index, 1);

	// 	this.setState({ tasks });
	// };

	// completeTask = (task) => {
	// 	task.isComplete = !task.isComplete;
	// 	let tasks = [...this.state.tasks];
	// 	let index = tasks.findIndex((t) => t.id === task.id);

	// 	tasks.splice(index, 1, task);

	// 	this.setState({ tasks });
	// };

	// changeTaskEditing = (task) => {
	// 	task.editing = !task.editing;
	// 	let tasks = [...this.state.tasks];
	// 	let index = tasks.findIndex((t) => t.id === task.id);

	// 	tasks.splice(index, 1, task);

	// 	this.setState({ tasks });
	// };

	// doneEdit = (task, event) => {
	// 	event.persist();
	// 	task.editing = false;
	// 	let newTitle = event.target.value;

	// 	if (newTitle.trim().length !== 0) task.title = newTitle;

	// 	let tasks = [...this.state.tasks];
	// 	let index = tasks.findIndex((t) => t.id === task.id);

	// 	tasks.splice(index, 1, task);

	// 	this.setState({ tasks });
	// };

	// doneEditOnOtherKeys = (task, event) => {
	// 	if (event.key === "Enter") {
	// 		this.doneEdit(task, event);
	// 	} else if (event.key === "Escape") {
	// 		this.changeTaskEditing(task);
	// 	}
	// };

	// remainingCount = () => {
	// 	return this.state.tasks.filter((task) => !task.isComplete).length;
	// };

	// isAllCompleted = () => {
	// 	return this.remainingCount() === 0;
	// };

	// completedCount = () => {
	// 	return this.state.tasks.filter((task) => task.isComplete).length;
	// };

	// clearCompleted = () => {
	// 	let tasks = [...this.state.tasks];

	// 	tasks = tasks.filter((task) => !task.isComplete);

	// 	this.setState({ tasks });
	// };

	// updateFilter = (filter) => {
	// 	this.setState({ filter: filter });
	// };

	// tasksFiltered = () => {
	// 	let tasks = [...this.state.tasks];

	// 	if (this.state.filter === "all") {
	// 		return tasks;
	// 	} else if (this.state.filter === "active") {
	// 		return tasks.filter((task) => !task.isComplete);
	// 	} else if (this.state.filter === "completed") {
	// 		return tasks.filter((task) => task.isComplete);
	// 	}

	// 	return tasks;
	// };

	// completeAllTasks = (event) => {
	// 	event.persist();

	// 	let tasks = [...this.state.tasks];
	// 	tasks.forEach((todo) => (todo.isComplete = event.target.checked));

	// 	this.setState({ tasks });
	// };
}

export default App;
