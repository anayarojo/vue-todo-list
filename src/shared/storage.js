import Guid from '@/shared/guid.js';

const Storage = (function() {
  const _public = {};
  const _private = {};

  _public.getTasks = function(list = 'default') {
    return _private.getTasks(list);
  };

  _public.addTask = function(task, list = 'default') {
    const tasks = _private.getTasks(list);
    tasks.list.push(task);
    _private.updateTasks(tasks, list);
  };

  _public.updateTask = function(task, list = 'default') {
    const tasks = _private.getTasks(list);
    const index = tasks.findIndex((t) => t.uuid == task.uuid);

    if (index > -1) {
      tasks[index] = task;
      _private.updateTasks(tasks, list);
    }
  };

  _public.deleteTask = function(uuid, list = 'default') {
    const tasks = _private.getTasks(list);
    const index = tasks.findIndex((t) => t.uuid == uuid);

    if (index > -1) {
      tasks.splice(index, 1);
      _private.updateTasks(tasks, list);
    }
  };

  _private.updateTasks = function(value, list) {
    localStorage.setItem(`tasks_${list}`, JSON.stringify(value));
  };

  _private.getTasks = function(list) {
    let tasks = JSON.parse(localStorage.getItem(`tasks_${list}`));

    tasks = tasks || {
      name: 'default',
      description: 'Default task list, please enter a detailed description.',
      uuid: Guid.get(),
      list: [],
    };

    return tasks;
  };

  return _public;
})();

export default Storage;
