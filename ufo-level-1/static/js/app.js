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

button.on("click", runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputElement = d3.select("#ufo-input");
    var inputDate = inputElement.property("value");
    console.log(inputDate);

    var filterData = tableData.filter(ufoReport => ufoReport.datetime === inputDate);
    console.log(filterData);
    
    var tbody = d3.select("tbody");
    tbody.html("");
// loop for filtered data
    filterData.forEach(function(ufoReport){
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]){
            var cell = row.append("td").text(value);

        });
    }); 
};
