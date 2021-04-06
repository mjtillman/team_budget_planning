let vendors = [
   {"id" : 1 , "vendor" : "Microsoft", "hq" : "Seattle"},
   {"id" : 2, "vendor" : "Intel", "hq" : "Santa Clara"},
   {"id" : 3 , "vendor" : "Apple", "hq" : "Mountain View"}
]
let contracts = [
   {"id" : 1 , "vendor" : "Microsoft", "name" : "Apollo Project", "cost" : 1000},
   {"id" : 2, "vendor" : "Intel", "name" : "Hermes Project", "cost" : 10000},
   {"id" : 3 , "vendor" : "Apple", "name" : "Zeus Project", "cost" : 100000}
];


function loadPMviews() {
   viewVendors();
   viewContracts();
}

function viewVendors() {
   let view = document.getElementById("vendor_table");
   let select = document.getElementById("vendor_select");

   let viewHTML = "";
   let selectHTML = "<option selected>Select vendor...</option>";

   vendors.forEach((v) => {
      viewHTML += "<tr><td>" + v.id + "</td><td>" +
         v.vendor + "</td><td>" + v.hq + "</td>" +
            "<td>" +
            "<button class='btn btn-primary btn-sm' value='delete'" +
            "onclick='deleteVendor(" + v.id + ");'>Delete</button> " +
            "<button type='button' class='btn btn-primary btn-sm' data-bs-toggle='modal'" +
            " data-bs-target='#editVendor'>Edit</button></td></tr>";

      selectHTML += "<option value='" + v.vendor + "'>" + v.vendor + "</option>";
   });
   view.innerHTML = viewHTML;
   select.innerHTML = selectHTML;
}

function addVendor(company, hq) {
   event.preventDefault();
   let id = vendors.length + 1;
   vendors.push({"id" : id, "vendor": company, "hq": hq});
   viewVendors();
}

function editVendor() {

}

function deleteVendor(id) {
   event.preventDefault();
   vendors.splice(id-1, 1);
   viewVendors();
}

function viewContracts() {
   let view = document.getElementById("contract_table");
   let viewHTML = "";
   contracts.forEach((c) => {
      viewHTML += "<tr><td>" + c.id + "</td><td>" +
            c.name + "</td><td>" + c.vendor + "</td><td>"+ c.cost + "</td>" +
            "<td><button class='btn btn-primary btn-sm' " +
            "value='delete' onclick='deleteContract(" +
             c.id + ");'>Delete</button> " +
            "<button type='button' class='btn btn-primary btn-sm'" +
            " data-bs-toggle='modal' data-bs-target='#editVendor'>" +
            "Edit</button></td></tr>";
   });
   view.innerHTML = viewHTML;
}

function addContract(vendor, name, cost) {
   event.preventDefault();
   let id = contracts.length + 1;
   alert({"id" : id, "vendor": vendor, "name": name, "cost": cost})
   contracts.push({"id" : id, "vendor": vendor, "name": name, "cost": cost});
   viewContracts();
}

function deleteContract(id) {
   event.preventDefault();
   contracts.splice(id-1, 1);
   viewContracts();
}

function viewBudget() {
   let view = document.getElementById("viewBudget");
   let viewHTML = "";
   contracts.forEach((v) => {
      viewHTML += "<tr><td>" + v.id + "</td><td>" +
            v.name + "</td><td>" + v.vendor + "</td><td>" +
            v.cost + "</td>" +
            "<td><button class='btn btn-primary btn-sm' " +
            "value='delete' onclick='deleteBudget(" +
            v.id + ");'>Delete</button> " +
            "<button type='button' class='btn btn-primary btn-sm'" +
            " data-bs-toggle='modal' data-bs-target='#editBudget'>" +
            "Edit</button></td></tr>";
   });
   view.innerHTML = viewHTML;
}

function addBudget(vendor, name, cost) {
   event.preventDefault();
   let id = contracts.length + 1;
   contracts.push({"id" : id, "vendor": vendor, "name": name, "cost": cost});
   viewBudget();
}