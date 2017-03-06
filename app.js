// superheros and their information
let superherosData = [
  {name: 'Gambit', phonenumber: '111-111-1111', affiliation: 'Marvel', photo_url: 'https://blogs-images.forbes.com/scottmendelson/files/2015/07/xmen-gambit.jpg'},
  {name: 'Wolverine', phonenumber: '222-222-2222', affiliation: 'Marvel', photo_url: 'http://cdn.playbuzz.com/cdn/5747f67c-45f5-49a4-82a7-d3223ffc1731/1d36f2c4-202a-4c28-9b86-f01fadc50795.jpg'},
  {name: 'Storm', phonenumber: '333-333-3333', affiliation: 'Marvel', photo_url: 'http://comicsalliance.com/files/2015/08/storm-feat-630x420.jpg'},
  {name: 'Rogue', phonenumber: '444-444-4444', affiliation: 'Marvel', photo_url: 'http://static.srcdn.com/wp-content/uploads/Marvel-Cards-1994-Rogue-X-Men-Art-Boris.jpg'},
  {name: 'Jean Grey', phonenumber: '555-555-5555', affiliation: 'Marvel', photo_url: 'https://i.annihil.us/u/prod/marvel/i/mg/f/80/537bb2c79eebc.jpg'},
  {name: 'Cyclops', phonenumber: '777-777-7777', affiliation: 'Marvel', photo_url: 'http://static.comicvine.com/uploads/original/11111/111115462/3023976-9211536091-Cyclo.jpg'},
  {name: 'Colossus', phonenumber: '888-888-8888', affiliation: 'DC', photo_url: 'http://geekandsundry.com/wp-content/uploads/2015/06/colossus-4-e1435313686453-900x545.jpg'},
  {name: 'Beast', phonenumber: '999-999-9999', affiliation: 'DC', photo_url: 'https://s-media-cache-ak0.pinimg.com/originals/20/27/6f/20276fbae335479eab55db86e3e26602.jpg'}
]

// module and controller
angular
    .module("superherosApp", [])
    .controller('superherosCtrl', [ superherosController ])

//controller creation
    function superherosController () {
      this.superheros = superherosData;

      this.addSuperheros = function() {
        let superheros = {name: this.newSuperheros.name, phonenumber: this.newSuperheros.phonenumber, affiliation: this.newSuperheros.affiliation, photo_url: this.newSuperheros.photo_url};
        this.superheros.push(superheros);
      }
    }
