console.log("sanity check");

//Problem 1: Person 4
let oReq = new XMLHttpRequest();

oReq.addEventListener("load", function(res) {
  //check response
  console.log("response: ", JSON.parse(res.currentTarget.response));

  //person 4 name
  console.log(
    "response person4Name: ",
    JSON.parse(res.currentTarget.response).name
  );

  document.getElementById("person4Name").innerHTML = JSON.parse(
    res.currentTarget.response
  ).name;

  //HomeWorld is on a different link so it needs to be on a different request.
  //person 4 home world
  oReq = new XMLHttpRequest();

  oReq.addEventListener("load", function(res) {
    console.log(
      "response person4HomeWorld: ",
      JSON.parse(res.currentTarget.response).name
    );
    document.getElementById("person4HomeWorld").innerHTML = JSON.parse(
      res.currentTarget.response
    ).name;
  });

  oReq.open("GET", "https://swapi.co/api/planets/1/");
  oReq.send();
});

oReq.open("GET", "https://swapi.co/api/people/4/");
oReq.send();

//Problem 2:
let o2Req = new XMLHttpRequest();

o2Req.addEventListener("load", function(res) {
  //Check response
  console.log("response: ", JSON.parse(res.currentTarget.response));

  //person 14 name
  console.log(
    "response person14Name: ",
    JSON.parse(res.currentTarget.response).name
  );
  document.getElementById("person14Name").innerHTML = JSON.parse(
    res.currentTarget.response
  ).name;

  //Species is on a different link so another request needs to be made.
  //person 14 species
  o2Req = new XMLHttpRequest();

  o2Req.addEventListener("load", function(res) {
    console.log(
      "response person14Species: ",
      JSON.parse(res.currentTarget.response).name
    );

    document.getElementById("person14Species").innerHTML = JSON.parse(
      res.currentTarget.response
    ).name;
  });

  o2Req.open("GET", "https://swapi.co/api/species/1/");
  o2Req.send();
});

o2Req.open("GET", "https://swapi.co/api/people/14/");
o2Req.send();

//Problem 3:
o3Req = new XMLHttpRequest();

o3Req.addEventListener("load", function(res) {
  console.log(
    "response films: ",
    JSON.parse(res.currentTarget.response).results
  );

  //Create list elements and add them to film list
  let filmListElem = document.getElementById("filmList");
  for (
    let i = 0;
    i < JSON.parse(res.currentTarget.response).results.length;
    i++
  ) {
    //Create list element called list
    let film = document.createElement("li");
    film.className = "film";

    //Create film title element for each film with heading size 2
    let filmTitle = document.createElement("h2");
    filmTitle.className = "filmTitle";
    filmTitle.innerHTML = JSON.parse(res.currentTarget.response).results[
      i
    ].title;
    film.appendChild(filmTitle);

    //Create film's planets list
    let planets = document.createElement("h3");
    planets.innerHTML = "Planets";
    film.appendChild(planets);

    //Create unordered list of planets that appeared in each film
    let filmPlanets = document.createElement("ul");
    filmPlanets.className = "filmPlanets";
    planets.appendChild(filmPlanets);

    //Create list elements for each planet
    let planet = document.createElement("li");
    planet.className = "planet";
    filmPlanets.appendChild(planet);

    //Create a planet name title element for each planet with heading4
    let planetName = document.createElement("h4");
    planetName.className = "planetName";

    o3Req = new XMLHttpRequest();

    o3Req.addEventListener("load", function(res) {
      console.log("response planet: ", JSON.parse(res.currentTarget.response));
    });
    for (
      let j = 0;
      j < JSON.parse(res.currentTarget.response).results[i].planets;
      j++
    ) {
      o3Req.open(
        "GET",
        JSON.parse(res.currentTarget.response).results[i].planets[j]
      );
      o3Req.send();
    }

    filmListElem.appendChild(film);
  }
});

o3Req.open("GET", "https://swapi.co/api/films/");
o3Req.send();
