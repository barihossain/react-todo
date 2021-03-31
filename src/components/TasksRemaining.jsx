import React, { Component } from "react";
import { observer } from "mobx-react";
import TaskStore from "../stores/TaskStore";

class TasksRemaining extends Component {
	render() {
		return (
			<div className="mb-2">
				{TaskStore.remainingCount} item
				{TaskStore.remainingCount > 1 ? "s" : ""} left
			</div>
		);
	}
}

export default observer(TasksRemaining);
