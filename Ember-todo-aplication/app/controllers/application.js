import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    update() {
      this.model.pushObject({
        done: false,
        name: this.text,
      });
    },
  },
});
