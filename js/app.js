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
