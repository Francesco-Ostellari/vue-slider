// Partendo dal markup allegato, rifare lo slider ma questa volta usando Vue.
/* 
Bonus:
1 - al click su uno dei pallini mostrare l’immagine in posizione corrispondente
2 - applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3 - quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce */

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
      },
      circleClick: function (index) { //funzione per il click sull'icona dei pallini 
        this.counter = index;
      },
      autoPlay: function () {
        this.timer = setInterval(() => { //funzione per l'autoplay
          this.next();
        }, 3000);
      },
      stopTimer: function () { //funzione per fermare l'autoplay quando sono in hover sull'img
        clearTimeout(this.timer);
      }
    },
    created() {
      this.autoPlay();
    }
  }
);

