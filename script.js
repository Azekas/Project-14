"use strict"


var Name = document.getElementById("name");
var Lastname = document.getElementById("lastname");
var Age = document.getElementById("age");
var Table = document.getElementById("table");
var tableLength = Table.rows.length;
var Add = document.getElementById("add");

Add.addEventListener("click", function() {
    if(Name.value && Lastname.value && Age.value > 0){
        var createRow = Table.insertRow();
        var createName = createRow.insertCell(0);
        var createLastname = createRow.insertCell(1);
        var createAge = createRow.insertCell(2);
        createName.innerText = Name.value;
        createLastname.innerText = Lastname.value;
        createAge.innerText = Age.value;
        tableLength++;
        Name.value = "";
        Lastname.value = "";
        Age.value = "";
    } 
    else {
        alert("Įveskite duomenis!")
    }
  }
 );

var Dlt1 = document.getElementById("dlt-1");

Dlt1.addEventListener("click", function(){ 
    if(tableLength > 1) {
        tableLength--;
        Table.deleteRow(1);
    } 
    else {
        alert("Nebėra ką trinti!");
    }     
  }
 );

var DltLast = document.getElementById("dlt-last");

DltLast.addEventListener("click", function(){
    if(tableLength > 1) {
        tableLength--;
        Table.deleteRow(-1);
    } 
    else {
        alert("Nebėra ką trinti!");
    }
  }
 );