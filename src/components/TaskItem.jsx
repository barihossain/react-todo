import React, { Component } from "react";
import { observer } from "mobx-react";
import TaskStore from "../stores/TaskStore";

class TaskItem extends Component {
	render() {
		const task = this.props.task;
		return (
			<div
				key={task.id}
				className="d-flex align-items-center justify-content-between mb-2"
			>
				<div className="d-flex align-items-center">
					<i
						role="button"
						className={
							"far" +
							(task.isComplete
								? " fa-check-square"
								: " fa-square text-muted") +
							(task.deleted ? " d-none" : "")
						}
						onClick={() => TaskStore.completeTask(task)}
					></i>
					{!this.props.task.editing && (
						<div
							className={
								"p-2" +
								(task.deleted ? "" : " ml-4") +
								(task.isComplete
									? " task-completed text-muted font-weight-lighter"
									: "") +
								(task.deleted ? " text-danger" : "")
							}
							onDoubleClick={() =>
								TaskStore.changeTaskEditing(task)
							}
						>
							{task.title}
						</div>
					)}
					{this.props.task.editing && (
						<input
							type="text"
							autoFocus
							className="p-2 ml-4"
							defaultValue={task.title}
							onBlur={(event) => TaskStore.doneEdit(task, event)}
							onKeyUp={(event) =>
								TaskStore.doneEditOnOtherKeys(task, event)
							}
						/>
					)}
				</div>
				<div className="ml-2">
					<i
						role="button"
						className={
							"fas text-muted" +
							(task.deleted ? " fa-trash-restore" : " fa-trash")
						}
						onClick={() => TaskStore.deleteTask(this.props.task)}
					></i>
				</div>
			</div>
		);
	}
}

export default observer(TaskItem);
