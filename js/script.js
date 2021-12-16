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
    
  }
);