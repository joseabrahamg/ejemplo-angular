(function() {
  var app = angular.module('gemStore', []);
  var urlImages = 'https://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angularjs/assets/demo/images/';
  var now = Date.now();
  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('TabController', function(){
    this.tab = 3;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };
  });

  var gems = [
    {
      name: 'Azurita',
      description: "Algunas gemas tienen cualidades ocultas más allá de su brillo, más allá de su brillo... Azurita es una de esas gemas.",
      brillo: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        //https://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angularjs/assets/demo/images/gem-08.gif
        urlImages+"gem-02.gif",
        urlImages+"gem-05.gif",
        urlImages+"gem-09.gif"
      ],
      reviews: [{
        stars: 5,
        body: "Me encanta esta joya!",
        author: "joe@example.org",
        createdOn: now-1592000000
      }, {
        stars: 1,
        body: "Esta joya apesta.",
        author: "tim@example.org",
        createdOn: now-2592000000
      }]
    },
    {
      name: 'Bloodstone',
      description: "El origen de la Bloodstone es desconocido, de ahí su bajo valor. Sin embargo, tiene un brillo muy alto y 12 lados.",
      brillo: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        urlImages+"gem-01.gif",
        urlImages+"gem-03.gif",
        urlImages+"gem-04.gif",
      ],
      reviews: [{
        stars: 3,
        body: "Creo que esta joya estaba bien, honestamente podría usar más brillo, IMO.",
        author: "JimmyDean@example.org",
        createdOn: now-3592000000
      }, {
        stars: 4,
        body: "¡Cualquier joya con 12 caras es para mí!",
        author: "gemsRock@example.org",
        createdOn: now-4592000000
      }]
    },
    {
      name: 'Zircon',
      description: "Zircon es nuestra gema más codiciada y buscada. Pagará mucho para ser el orgulloso propietario de esta hermosa joya de alto brillo.",
      brillo: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        urlImages+"gem-06.gif",
        urlImages+"gem-07.gif",
        urlImages+"gem-08.gif"
      ],
      reviews: [{
        stars: 1,
        body: "Esta gema es MUY cara por su valor de rareza.",
        author: "turtleguyy@example.org",
        createdOn: now-5592000000
      }, {
        stars: 1,
        body: "BBW: ¡Alto brillo! = Alta calidad.",
        author: "LouisW407@example.org",
        createdOn: now-6592000000
      }, {
        stars: 1,
        body: "No malgastes tus rublos!",
        author: "nat@example.org",
        createdOn: now-7592000000
      }]
    }
  ];
})();