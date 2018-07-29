console.log("sanity check");

let oReq = new XMLHttpRequest();

oReq.addEventListener("load", function(res) {
  console.log("response", JSON.parse(res.currentTarget.response));
});

oReq.open("GET", "https://swapi.co/api/people/4/");
oReq.send();
