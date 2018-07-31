//Problem 1: Person 4
//Instantiate a new XHR object for person 4
let oReq = new XMLHttpRequest();

//Add an event listener to the event with a function as the event handler
oReq.addEventListener("load", function (res) {

  //Set parsed data to my object
  let myObj = JSON.parse(res.currentTarget.response);

  //Check response
  console.log("response: ", myObj);

  //Fill in name of person 4 into the person4name element
  console.log("response person4Name: ", myObj.name);
  document.getElementById("person4Name").innerHTML = myObj.name;

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  //Instantiate a new XHR object for person 4's home world
  //HomeWorld is on a different link so a new data request needs to be made
  o1Req = new XMLHttpRequest();

  //Add an event listener to the event with a function as the event handler
  o1Req.addEventListener("load", function (res) {

    //Reset my object to new parsed data object
    myObj = JSON.parse(res.currentTarget.response);

    //Fill in home world of person 4 into person4HomeWorld element
    console.log("response person4HomeWorld: ", myObj.name);
    document.getElementById("person4HomeWorld").innerHTML = myObj.name;
  });

  //Set the destination to person 4's object's homeworld link and send the request
  o1Req.open("GET", myObj.homeworld);
  o1Req.send();
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
});

//Set the destination to person 4's link and send the request.
oReq.open("GET", "https://swapi.co/api/people/4/");
oReq.send();



//Problem 2: Person 14
//Instantiate a new XHR object for person 14
let o2Req = new XMLHttpRequest();

//Add an event listener to the event with a function as the event handler
o2Req.addEventListener("load", function (res) {

  //Set my object to new parsed data object
  let myObj2 = JSON.parse(res.currentTarget.response);

  //Check response
  console.log("response: ", myObj2);

  //Fill in name of person 14 into the person14name element
  console.log("response person14Name: ", myObj2.name);
  document.getElementById("person14Name").innerHTML = myObj2.name;

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  //Instantiate a new XHR object for person 14's species
  //Species is on a different link so a new data request needs to be made
  o3Req = new XMLHttpRequest();

  //Add an event listener to the event with a function as the event handler
  o3Req.addEventListener("load", function (res) {

    //Reset my object to new parsed data object
    myObj2 = JSON.parse(res.currentTarget.response);

    //Fill in species of person 14 into the person14species element
    console.log("response person14Species: ", myObj2.name);
    document.getElementById("person14Species").innerHTML = myObj2.name;
  });

  o3Req.open("GET", myObj2.species);
  o3Req.send();
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
});

o2Req.open("GET", "https://swapi.co/api/people/14/");
o2Req.send();



//Problem 3:
//Instantiate a new XHR object for all films
o4Req = new XMLHttpRequest();

//Add an event listener to the event with a function as the event handler
o4Req.addEventListener("load", function (res) {

  //Set my object to new parsed data object for films
  let myObj3 = JSON.parse(res.currentTarget.response);

  //Check response
  console.log("response films1: ", myObj3);
  console.log("response films2: ", myObj3.results);

  //Create list elements and add them to film list
  let filmListElem = document.getElementById("filmList");

  //Iterate through all films in the object
  for (let i = 0; i < myObj3.results.length; i++) {

    //For each film, create a list element called film
    let film = document.createElement("li");
    film.className = "film";

    //For each film, create a film title element with heading size 2. This is to name the film
    let filmTitle = document.createElement("h2");
    filmTitle.className = "filmTitle";
    filmTitle.innerHTML = myObj3.results[i].title;
    film.appendChild(filmTitle);

    //For each film, create a planet's title for the list of planets
    let planets = document.createElement("h3");
    planets.innerHTML = "Planets";
    film.appendChild(planets);

    //For each film, create an unordered list of planets that appeared in each film
    let filmPlanets = document.createElement("ul");
    filmPlanets.className = "filmPlanets";
    planets.appendChild(filmPlanets);

    //Iterate through each film's list of planets
    for (let j = 0; j < myObj3.results[i].planets.length; j++) {

      //Check film name and planet link
      var filmName = myObj3.results[i].title;
      var planetLink = myObj3.results[i].planets[j];
      console.log("film: " + filmName + ", planet: " + planetLink);

      /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
      //Instantiate a new XHR object for all planets in each film
      o5Req = new XMLHttpRequest();

      //Create list element for each planet in each film
      let planet = document.createElement("li");
      planet.className = "planet";

      //Add an event listener to the event with a function as the event handler
      o5Req.addEventListener("load", function (res) {

        //Reset my object to new parsed data object for planets
        myObj3 = JSON.parse(res.currentTarget.response);

        console.log("response planet: ", myObj3.name + ", planet: " + planetLink);

        //For each planet, create a planet name title element with heading size 4
        let planetName = document.createElement("h4");
        planetName.className = "planetName";
        planetName.innerHTML = myObj3.name;
        planet.appendChild(planetName);
      });

      filmPlanets.appendChild(planet);

      o5Req.open("GET", myObj3.results[i].planets[j]);
      o5Req.send();
      /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    }
    filmListElem.appendChild(film);
  }
});

o4Req.open("GET", "https://swapi.co/api/films/");
o4Req.send();
