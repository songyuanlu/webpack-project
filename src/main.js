import Vue from 'vue';
import App from './app.vue';

// import Test from './test.vue';
// console.log(Test.data());

new Vue({
  el: '#app',
  render: h => {
    return h(App);
  }
})