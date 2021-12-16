// Partendo dal markup allegato, rifare lo slider ma questa volta usando Vue.

const app = new Vue (
  {
    el: '#app',
    data: {
      counter: 0,
      images: [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
      ]
    },
    methods: {
      next: function () { //funzione per i next button
        this.counter +=1;
        if (this.counter > this.images.length - 1) { //evito che si rompa quando arriva alla fine
          this.counter = 0;
        }
      },
      prev: function () { //funzione per i prev button
        this.counter -= 1;
        if (this.counter < 0) { //evito che si rompa quando vado più indietro della prima img
          this.counter = this.images.length - 1;
        }
      }
    }
  }
);