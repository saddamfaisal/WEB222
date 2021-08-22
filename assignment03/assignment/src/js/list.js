// Data for the "HTML Lists" Page
//Name:           SADDAM FAISAL
// Student Number: 118406198
// Email:          sfaisal6@myseneca.ca
// Date:           19/07/2020
const fruits = ['Apples', 'Oranges', 'Pears', 'Grapes', 'Pineapples', 'Mangos'];

const directory = [
  { type: 'file', name: 'file1.txt' },
  { type: 'file', name: 'file2.txt' },
  {
    type: 'directory',
    name: 'HTML Files',
    files: [
      { type: 'file', name: 'file1.html' },
      { type: 'file', name: 'file2.html' }
    ]
  },
  { type: 'file', name: 'file3.txt' },
  {
    type: 'directory',
    name: 'JavaScript Files',
    files: [
      { type: 'file', name: 'file1.js' },
      { type: 'file', name: 'file2.js' },
      { type: 'file', name: 'file3.js' }
    ]
  }
];
function ol(subt, object) {
  var result = "";
  for (var i = 0; i < object.length; i++) {
      result += "<li>" + object[i] + "</li>";
  }


  subt.innerHTML += "<ol>" + result + "</ol>";
}
 
  function ul(subt, object) {
  var result = "", innerOutput = "";

  for (var i = 0; i < object.length; i++) {
      result += "<li>" + object[i].name + "</li>";
      if (object[i].type == "directory") {
          innerOutput = "";
          for (var j = 0; j < object[i].files.length; j++) {
              innerOutput += "<li> " + object[i].files[j].name + "</li>";
          } result += "<ul>" + innerOutput + "</ul>";
      }

  }
  subt.innerHTML += "<ul>" + result + "</ul>";
}
window.onload = function () {
  var orderList = document.getElementById("order");
  var unorderList = document.getElementById("unorder");
  ol(orderList, fruits);
  ul(unorderList, directory);
} 