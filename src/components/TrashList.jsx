import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

import React, { Component } from "react";
import TasksRemaining from "./TasksRemaining";
import TaskItem from "./TaskItem";

import { observer } from "mobx-react";
import TaskStore from "../stores/TaskStore";

class TrashList extends Component {
	componentDidMount() {
		TaskStore.updateFilter("deleted");
	}

	render() {
		return (
			<React.Fragment>
				{TaskStore.tasksFiltered.length === 0 && (
					<div className="alert alert-primary" role="alert">
						No {TaskStore.filter !== "all" ? TaskStore.filter : ""}{" "}
						tasks found
					</div>
				)}
				{TaskStore.tasksFiltered.map((task) => (
					<TaskItem key={task.id} task={task} />
				))}

				<div className="extra-container d-flex align-items-center justify-content-between mb-2 pt-3 border-top">
					<TasksRemaining />
				</div>
			</React.Fragment>
		);
	}
}

export default observer(TrashList);
