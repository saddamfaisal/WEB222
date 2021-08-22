// Data for the "HTML Tables" Page
//Name:           SADDAM FAISAL
// Student Number: 118406198
// Email:          sfaisal6@myseneca.ca
// Date:           19/07/2020
const users = [
  {
    first_name: 'Kaitlin',
    last_name: 'Burns',
    age: 23,
    email: 'kburns99753@usermail.com'
  },
  {
    first_name: 'Joshua',
    last_name: 'Feir',
    age: 31,
    email: 'josh319726@usermail.com'
  },
  {
    first_name: 'Stephen',
    last_name: 'Shaw',
    age: 28,
    email: 'steve.shaw47628@usermail.com'
  },
  {
    first_name: 'Timothy',
    last_name: 'McAlpine',
    age: 37,
    email: 'Timbo72469@usermail.com'
  },
  {
    first_name: 'Sarah',
    last_name: 'Connor',
    age: 19,
    email: 'SarahC6320@usermail.com'
  }
];

function rider (subt, riders) {
  var result ="", innerOutput = "";
  for (key in riders) {
      var result = "<tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Email</th></tr>";
      innerOutput += ("<tr>" + "<td>" + riders[key].first_name + "</td>"
          + "<td>" + riders[key].last_name + "</td>"
          + "<td>" + riders[key].age + "</td>"
          + "<td>" + "<a href='mailto:" + riders[key].email + "'>" + riders[key].email + "</a>" + "</td>") + "</tr>";
  }
  output += innerOutput ;
  subt.innerHTML += "<table border=1>" + result + "</table>";
}

window.onload = function () {
  var rider_ = document.getElementById("ridertable");
  rider (rider_, riders);
} 