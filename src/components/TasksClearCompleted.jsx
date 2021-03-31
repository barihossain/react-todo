import React, { Component } from "react";
import { observer } from "mobx-react";
import TaskStore from "../stores/TaskStore";
class TasksClearCompleted extends Component {
	render() {
		return (
			<div>
				<button
					onClick={TaskStore.clearCompleted}
					className="btn btn-outline-success btn-sm"
				>
					Clear Completed
				</button>
			</div>
		);
	}
}

export default observer(TasksClearCompleted);
