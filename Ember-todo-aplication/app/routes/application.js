import Route from '@ember/routing/route';

export default class application extends Route {
  model() {
    return [
      { name: 'primeira tarefa', done: true },
      { name: 'segunda tarefa', done: false },
      { name: 'terceira tarefa,', done: false },
    ];
  }
}
