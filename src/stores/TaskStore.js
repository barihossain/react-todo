import { action, computed, makeObservable, observable } from "mobx";
import React from "react";

class TaskStore {
	idForNewTask = 3;
	filter = "all";
	newTaskInput = React.createRef();
	tasks = [
		{
			id: 1,
			title: "First Task from MobX",
			isComplete: false,
			editing: false,
			deleted: false,
		},
		{
			id: 2,
			title: "Second Task from MobX",
			isComplete: false,
			editing: false,
			deleted: false,
		},
	];

	addTask = (event) => {
		if (event.key === "Enter") {
			const newTaskTitle = this.newTaskInput.current.value;

			if (newTaskTitle.trim().length === 0) return;

			this.tasks.push({
				id: this.idForNewTask,
				title: newTaskTitle,
				isComplete: false,
				editing: false,
				deleted: false,
			});

			this.idForNewTask++;

			this.newTaskInput.current.value = "";
		}
	};

	deleteTask = (task) => {
		task.deleted = !task.deleted;
		let index = this.tasks.findIndex((t) => t.id === task.id);

		this.tasks.splice(index, 1, task);
	};

	completeTask = (task) => {
		task.isComplete = !task.isComplete;
		let index = this.tasks.findIndex((t) => t.id === task.id);

		this.tasks.splice(index, 1, task);
	};

	changeTaskEditing = (task) => {
		task.editing = !task.editing;

		let index = this.tasks.findIndex((t) => t.id === task.id);

		this.tasks.splice(index, 1, task);
	};

	doneEdit = (task, event) => {
		event.persist();
		task.editing = false;
		let newTitle = event.target.value;

		if (newTitle.trim().length !== 0) task.title = newTitle;

		let index = this.tasks.findIndex((t) => t.id === task.id);

		this.tasks.splice(index, 1, task);
	};

	doneEditOnOtherKeys = (task, event) => {
		if (event.key === "Enter") {
			this.doneEdit(task, event);
		} else if (event.key === "Escape") {
			this.changeTaskEditing(task);
		}
	};

	clearCompleted = () => {
		this.tasks.forEach((task) => {
			task.isComplete && (task.deleted = true);
		});
	};

	updateFilter = (filter) => {
		this.filter = filter;
	};

	completeAllTasks = (event) => {
		//event.persist();
		this.tasks.forEach((task) => (task.isComplete = event.target.checked));
	};

	get remainingCount() {
		return this.tasksFiltered.filter((task) => !task.isComplete).length;
	}

	get isAllCompleted() {
		return this.remainingCount === 0;
	}

	get completedCount() {
		return this.tasksFiltered.filter((task) => task.isComplete).length;
	}

	get tasksFiltered() {
		if (this.filter === "all") {
			return this.tasks.filter((task) => !task.deleted);
		} else if (this.filter === "active") {
			return this.tasks.filter(
				(task) => !task.isComplete && !task.deleted
			);
		} else if (this.filter === "completed") {
			return this.tasks.filter(
				(task) => task.isComplete && !task.deleted
			);
		} else if (this.filter === "deleted") {
			return this.tasks.filter((task) => task.deleted);
		}

		return this.tasks;
	}

	constructor() {
		makeObservable(this, {
			idForNewTask: observable,
			filter: observable,
			tasks: observable,
			addTask: action,
			deleteTask: action,
			completeTask: action,
			changeTaskEditing: action,
			doneEdit: action,
			doneEditOnOtherKeys: action,
			remainingCount: computed,
			isAllCompleted: computed,
			completedCount: computed,
			clearCompleted: action,
			updateFilter: action,
			tasksFiltered: computed,
			completeAllTasks: action,
		});
	}
}

const store = new TaskStore();

export default store;
