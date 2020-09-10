// from data.js
var tableData = data;

var tbody = d3.select("tbody");

console.log(data);

//loop
data.forEach(function(ufoReport) {
    console.log(ufoReport);
});

//append
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

//entries
    Object.entries(ufoReport).forEach(function([key,value]) {
    console.log(key, value);
    });
});

//by values
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key,value);

    var cell = row.append("tr");
    });
});

// // ufo report values (date/time, city, state, country, shape, comment)
data.forEach(function(ufoReport) {
   console.log(ufoReport);
   var row = tbody.append("tr");
   
   Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);

    var cell = row.append("td");
    cell.text(value);
   });
});

//buttons
var button = d3.select("#button");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
}
