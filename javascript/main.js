let vendors = [
   {"id" : 1 , "name" : "Microsoft", "hq" : "Seattle"},
   {"id" : 2, "name" : "Intel", "hq" : "Santa Clara"},
   {"id" : 3 , "name" : "Apple", "hq" : "Mountain View"}
];

let contracts = [
   {"id" : 1 , "vendor" : "Microsoft", "name" : "Apollo Project", "cost" : 1000},
   {"id" : 2, "vendor" : "Intel", "name" : "Hermes Project", "cost" : 10000},
   {"id" : 3 , "vendor" : "Apple", "name" : "Zeus Project", "cost" : 100000}
];

function viewVendors() {
   let view = document.getElementById("viewVendors");
   let viewHTML = "";
   vendors.forEach((v) => {
      viewHTML += "<tr><td>" + v.id + "</td><td>" +
         v.name + "</td><td>" + v.hq + "</td></tr>";
   });
   view.innerHTML = viewHTML;
}

function addVendor() {

}

function viewContracts() {
   let view = document.getElementById("viewContracts");
   let viewHTML = "";
   contracts.forEach((c) => {
      viewHTML += "<tr><td>" + c.id + "</td><td>" +
         c.name + "</td><td>" + c.vendor + "</td><td>"+ c.cost + "</td></tr>";
   });
   view.innerHTML = viewHTML;
}

function addContract() {

}

function addBudget() {

}

function viewBudget() {
   let view = document.getElementById("viewBudget");
   let viewHTML = "";
   contracts.forEach((c) => {
      viewHTML += "<tr><td>" + c.id + "</td><td>" +
            c.name + "</td><td>" + c.vendor + "</td><td>"+ c.cost + "</td></tr>";
   });
   view.innerHTML = viewHTML;
}