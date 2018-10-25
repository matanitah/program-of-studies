class Course {
  constructor(name, teachers, grades) {
    this.name = name;
    this.teachers = teachers;
    this.grades = grades;
  }
}

var courses = [];
var westCiv = new Course("Western Civilization", "Powell", 9);
var englishI = new Course("English I", "Giordano", 10);
var exampleCourse = new Course("ExampleCourse", "CODERS", 12);
courses.push(westCiv);
courses.push(englishI);
courses.push(exampleCourse);

function createTable(){  //body reference
  var body = document.getElementsByTagName("body")[0];

  // create elements <table> and a <tbody>

  var tbl = document.createElement("table");
  tbl.setAttribute("id", "courseTable");
  var tblBody = document.createElement("tbody");

  // cells creation
  for (var j = 0; j < courses.length; j++) {
    // table row creation
    var row = document.createElement("tr");

    for (var i = 0; i < 4; i++) {
      // create element <td> and text node
      //Make text node the contents of <td> element
      // put <td> at end of the table row
switch (i) {
  case 0:
  var cell = document.createElement("td");
  var cellText = document.createTextNode(courses[j].name);
    break;
  case 1:
  var cell = document.createElement("td");
  var cellText = document.createTextNode(courses[j].teachers);
  break;
  case 2:
  var cell = document.createElement("td");
  var cellText = document.createTextNode(courses[j].grades);
  break;
}
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    //row added to end of table body
    tblBody.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  body.appendChild(tbl);
  // tbl border attribute to
  tbl.setAttribute("border", "2");
 tbl.setAttribute("border", "2");
}
function search(){
var input, filter, table, tr, td, i;
input = document.getElementById("searchInput");
filter = input.value.toUpperCase();
table = document.getElementById("courseTable");
tr = table.getElementsByTagName("tr");

// Loop through all table rows, and hide those who don't match the search query
for (i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[0];
  if (td) {
    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
}
