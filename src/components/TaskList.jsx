import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

import React, { Component } from "react";
import TasksRemaining from "./TasksRemaining";
import TaskItem from "./TaskItem";
import TasksCheckAll from "./TasksCheckAll";
import TasksFilters from "./TasksFilters";
import TasksClearCompleted from "./TasksClearCompleted";
import { observer } from "mobx-react";
import TaskStore from "../stores/TaskStore";

class TaskList extends Component {
	componentDidMount() {
		TaskStore.updateFilter("all");
	}

	render() {
		return (
			<React.Fragment>
				<input
					type="text"
					className="new-task w-100 p-2 mb-4 font-weight-light"
					placeholder="Enter new task here"
					ref={TaskStore.newTaskInput}
					onKeyUp={TaskStore.addTask}
				/>
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
					<TasksCheckAll />

					<TasksRemaining />
				</div>
				<div className="extra-container d-flex align-items-center justify-content-between mb-2 pt-3 border-top">
					<TasksFilters />

					{TaskStore.completedCount > 0 && <TasksClearCompleted />}
				</div>
			</React.Fragment>
		);
	}
}

export default observer(TaskList);
