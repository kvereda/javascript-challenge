// from data.js
var tableData = data;

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
