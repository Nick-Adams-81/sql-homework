const mysql = require("mysql")
const express = require("express")
const inquirer = require("inquirer")


const app = express();
const port = process.env.PORT || 3307;





const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Theking1@",
    database: "employee_tracker_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    runSearch()
})

function runSearch(){
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "what would you like to do?",
        choices: [
            "input new role",
            "update role",
            "delete role",
            "read roles",
            "input new department",
            "update department",
            "delete department",
            "read departments",
            "input new employee",
            "update employee",
            "delete employee",
            "read employees",
            "exit"
        ]
    }).then(function(answer){
        switch (answer.action){
            case "input new role":
                createRole()
                break

            case "update role":
                updateRole()
                break

            case "delete role":
                deleteRole()
                break

            case "read roles":
                readRoles()
                break

            case "input new department": 
                createDepartment()
                break

            case "update department":
                updateDepartment()
                break

            case "delete department":
                 deleteDepartment()

            case "read departments":
                 readDepartments()
                 break

            case "input new employee":
                createEmployee()
                break

            case "update employee":
                updateEmployee()
                break

            case "delete employee":
                deleteEmployee()
                break

            case "read employees":
                reademployees()
                break

            case "exit":
            connection.end()
        }
    })
}
function createRole() {
    console.log("creating a new role...\n");
    let query = connection.query(
        "INSERT INTO role SET ?",
       function promptUser(){
           return inquirer.prompt([
           {
               type: "input",
               name: "role_id",
               message: "input role id"
           },
           {
               type: "input",
               name: "title",
               message: "input role title"
           },
           {
               type: "input",
               name: "salary",
               message: "input role salary"
           },
           {
               type: "input",
               name: "department_id",
               message: "input department id"
           }
           
        ])
    
       },
        function(err,res){
            if (err) throw err;
            console.log(res.affectedRows + "role inserted!\n");
            updateRole()
        }
    );
    console.log(query.sql)  
}
function updateRole(){
    console.log("updating intern role!...\n");
    let query = connection.query(
        "UPDATE role SET ? WHERE ?",
        [
            {
                salary: 500,
            },
            {
                title: "web dev"
            }
        ],
        function(err, res){
            if (err) throw err;
            console.log(res.affectedRows + "roles updated!\n")
            deleteRole()
        }
    );
    console.log(query.sql);
}
function deleteRole() {
    console.log("deleteing all roles supervisor.../n");
    connection.query(
        "DELETE FROM role WHERE ?",
        {
            title: "",
            
        },
        function(err, res){
            if (err) throw err;
            console.log(res.affectedRows + "roles deleted!\n")
            readRoles()
        }
    );
}


function readRoles(){
    console.log("selecting all roles!...\n")
    connection.query("SELECT * FROM role", function(err, res){
        if (err) throw err;
        console.log(res);
        connection.end()
        
    })
}


function createDepartment() {
    console.log("creating a new department...\n");
    let query = connection.query(
        "INSERT INTO department SET ?",
       function promptUser(){
           return inquirer.prompt([
           {
               type: "input",
               name: "department_id",
               message: "input department id"
           },
           {
               type: "input",
               name: "name",
               message: "input department name"
           }
          
           
        ])
    
       },
        function(err,res){
            if (err) throw err;
            console.log(res.affectedRows + "department inserted!\n");
            updateDepartment()
        }
    );
    console.log(query.sql)  
}
function updateDepartment(){
    console.log("updating department!...\n");
    let query = connection.query(
        "UPDATE department SET ? WHERE ?",
        [
            {
                department_id: 500,
            },
            {
                name: "something"
            }
        ],
        function(err, res){
            if (err) throw err;
            console.log(res.affectedRows + "roles updated!\n")
            deleteDepartment()
        }
    );
    console.log(query.sql);
}
function deleteDepartment() {
    console.log("deleteing all roles supervisor.../n");
    connection.query(
        "DELETE FROM department WHERE ?",
        {
            title: "",
            
        },
        function(err, res){
            if (err) throw err;
            console.log(res.affectedRows + "roles deleted!\n")
            readDepartments()
        }
    );
}


function readDepartments(){
    console.log("selecting all departments!...\n")
    connection.query("SELECT * FROM department", function(err, res){
        if (err) throw err;
        console.log(res);
        connection.end()
        
    })
}

function createEmployee() {
    console.log("creating a new employee...\n");
    let query = connection.query(
        "INSERT INTO employee SET ?",
       function promptUser(){
           return inquirer.prompt([
           {
               type: "input",
               name: "employee_id",
               message: "input employee id"
           },
           {
               type: "input",
               name: "first_name",
               message: "input employee first name"
           },
           {
               type: "input",
               name: "last_name",
               message: "input employee last name"
           },
           {
               type: "input",
               name: "role_id",
               message: "input role id"
           },
           {
               type: "input",
               name: "manager_id",
               message: "input manager id"
           },
           {
               type: "input",
               name: "department_id",
               message: "input department id"
           }
           
        ])
    
       },
        function(err,res){
            if (err) throw err;
            console.log(res.affectedRows + "role inserted!\n");
            updateEmployee()
        }
    );
    console.log(query.sql)  
}
function updateEmployee(){
    console.log("updating employee!...\n");
    let query = connection.query(
        "UPDATE empoloyee SET ? WHERE ?",
        [
            {
                salary: 500,
            },
            {
                title: "web dev"
            }
        ],
        function(err, res){
            if (err) throw err;
            console.log(res.affectedRows + "roles updated!\n")
            deleteEmployee()
        }
    );
    console.log(query.sql);
}
function deleteEmployee() {
    console.log("deleteing employees .../n");
    connection.query(
        "DELETE FROM employee WHERE ?",
        {
            title: "",
            
        },
        function(err, res){
            if (err) throw err;
            console.log(res.affectedRows + "roles deleted!\n")
            reademployees()
        }
    );
}


function reademployees(){
    console.log("selecting all employees!...\n")
    connection.query("SELECT * FROM employee", function(err, res){
        if (err) throw err;
        console.log(res);
        connection.end()
        
    })
}

app.listen(port, function(){
    console.log("app listening on port " + port)
});


