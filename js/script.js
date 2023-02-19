var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
var form = $("addForm");
var employeeTable = $("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var count=0;


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    var empID = $("id").value;
    var name = $("name").value;
    var ext = $("extension").value;
    var email = $("email").value;
    var dept= $("department").value;    

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employeeTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellExt = row.insertCell(2);
    let cellEmail = row.insertCell(3);
    let cellDept = row.insertCell(4);
    let cellDelete = row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textNodeID = document.createTextNode(empID);
    cellID.appendChild(textNodeID);

    let textNodeName = document.createTextNode(name);
    cellName.appendChild(textNodeName);
 
    let textNodeExt = document.createTextNode(ext);
    cellExt.appendChild(textNodeExt);

    let textNodeEmail = document.createTextNode(email);
    cellEmail.appendChild(textNodeEmail);

    let textNodeDept = document.createTextNode(dept);
    cellDept.appendChild(textNodeDept);

    // CREATE THE DELETE BUTTON
    let delButton = document.createElement("button");
    delButton.className = "btn btn-danger btn-sm del";
    let textNodeDel = document.createTextNode("X");
    delButton.appendChild(textNodeDel);
    cellDelete.appendChild(delButton);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus();
    
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    $("empCount").innerText = "(" + ++count + ")";

});

// DELETE EMPLOYEE

employeeTable.addEventListener("click", (e) => {
    if (e.target.classList.contains('del')){
        if(confirm("Do you really want to delete this row?")) {
            employeeTable.deleteRow(e.target.parentNode.parentNode.rowIndex);
            $("empCount").innerText = "(" + --count + ")";
            $('id').focus();
        };
    }
})
