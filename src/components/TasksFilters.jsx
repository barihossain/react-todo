import React, { Component } from "react";
import { observer } from "mobx-react";
import TaskStore from "../stores/TaskStore";

class TasksFilters extends Component {
	render() {
		return (
			<div>
				<button
					className={
						"btn btn-outline-primary btn-sm mr-1" +
						(TaskStore.filter === "all" ? " active" : "")
					}
					onClick={() => TaskStore.updateFilter("all")}
				>
					All
				</button>
				<button
					className={
						"btn btn-outline-primary btn-sm mr-1" +
						(TaskStore.filter === "active" ? " active" : "")
					}
					onClick={() => TaskStore.updateFilter("active")}
				>
					Active
				</button>
				<button
					className={
						"btn btn-outline-primary btn-sm mr-1" +
						(TaskStore.filter === "completed" ? " active" : "")
					}
					onClick={() => TaskStore.updateFilter("completed")}
				>
					Completed
				</button>
			</div>
		);
	}
}

export default observer(TasksFilters);
