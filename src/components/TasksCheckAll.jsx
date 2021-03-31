import React, { Component } from "react";
import { observer } from "mobx-react";
import TaskStore from "../stores/TaskStore";

class TasksCheckAll extends Component {
	render() {
		return (
			<div>
				{TaskStore.tasksFiltered.length > 0 && (
					<label>
						<input
							type="checkbox"
							onChange={TaskStore.completeAllTasks}
							checked={TaskStore.isAllCompleted}
						/>{" "}
						Check All
					</label>
				)}
			</div>
		);
	}
}

export default observer(TasksCheckAll);
