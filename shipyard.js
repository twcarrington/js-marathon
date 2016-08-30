// YOUR CODE GOES HERE
var launchpad;
var crewNames;

crewNames = ["Plamen", "Tommy", "Pete", "Mike", "Shana", "Amanda", "Dustin", "Alex", "Jun", "Hawley", "Marc", "Jennz"];
var coolShipNames = ["Engterprize", "Holy Ship","Millenial Falcon"];

launchpad = function(ship, crew, rocketz){
  console.log("Jennz Frennz get ready fo space");
  console.log("NOW ANNOUNCING OUR DELIGHTFUL SHIP OF FRENNZ CALLED " + ship.name + "!!!!!!");
  ship.loadCrew(crew);
  console.log("Cpt. " + ship.captain().name + " on deck!");
  ship.mountPropulsion(rocketz);
  ship.propulsion.addFuel(10);
  ship.takeoff();
};


function Ship (name) {
  this.name = name;
  this.crew = [];
  this.propulsion = null;
};

Ship.prototype.loadCrew = function(crew) {
  for (var i = 0; i < crew.length; i++) {
    this.crew.push(crew[i]);
    console.log(crew[i].name + ' has boarded ' + this.name);
  }
}

Ship.prototype.captain = function(){
  var crewSize = this.crew.length;
  var randomNumber = Math.floor(Math.random() * crewSize);
  return this.crew[randomNumber];
}

Ship.prototype.mountPropulsion = function(engine){
  this.propulsion = engine;
  console.log("PROPULSIONZ MOUNTEDZ!!!!");
}

Ship.prototype.takeoff = function( ) {
  if (this.propulsion.fire( )) {
    console.log("YAAAYJENN<3");
  } else {
    console.log("Takeoff not succesful! Add fuel! </3");
  }
}

function CrewMember (name) {
  this.name = name;
  this.trained = false;
}

function trainCrew (names) {
  var trainedCrew = [];
  for (var i = 0; i < names.length; i++) {
    var newCrew = new CrewMember(names[i]);
    newCrew.trained = true;
    trainedCrew.push(newCrew);
  }
  return trainedCrew;
}

var rocket = {
  fuel: 0,
  addFuel: function (fuel){
    this.fuel += fuel;
    console.log("The rocket now has: " + this.fuel + " fuel(z)");
  },

  fire: function(){
    if (this.fuel > 0){
      this.fuel--;
      console.log("the rockets have been fired");
      console.log(this.fuel + " fuelz");
      return true;

    } else {
      console.log("failed to fire engines");
      return false;
    }
  }
}

var fleet = {
  ships: [],
  name: "happy fleet",
  build: function(shipNames){
    for(var i = 0; i<shipNames.length; i++){
      var newShip = new Ship(shipNames[i]);
      this.ships.push(newShip);
      console.log(newShip.name + " iz now on fleetz");
    }
  }
}

var ourCrew = trainCrew(crewNames);
var ourShip = new Ship ("FRENNZSHIP");
launchpad(ourShip, ourCrew, rocket);
fleet.build(coolShipNames);
