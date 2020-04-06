import Guid from '@/shared/guid.js';
import Storage from '@/shared/storage.js';

const Tasks = (function() {
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
    tasks.list.forEach((element, index) => {
      if (element.uuid === task.uuid) {
        tasks.list[index] = task;
        _private.updateTasks(tasks, list);
      }
    });
  };

  _public.deleteTask = function(uuid, list = 'default') {
    const tasks = _private.getTasks(list);
    tasks.list.forEach((element, index) => {
      if (element.uuid === uuid) {
        tasks.list.splice(index, 1);
        _private.updateTasks(tasks, list);
      }
    });
  };

  _private.updateTasks = function(value, list) {
    Storage.set(`tasks_${list}`, value, true);
  };

  _private.getTasks = function(list) {
    let tasks = Storage.get(`tasks_${list}`, true);

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

export default Tasks;
