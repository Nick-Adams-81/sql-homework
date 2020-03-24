const mysql = require("mysql")
const express = require("express")


const app = express();
const port = process.env.PORT || 9000;





const connection = mysql.createConnection({
    host: "localhost",
    PORT: 3306,
    user: "root",
    password: "Theking1@",
    database: "employee_tracker_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createRole()
})
function createRole() {
    console.log("creating a new role...\n");
    let query = connection.query(
        "INSERT INTO role SET ?",
        {   
            role_id: 5,
            title: "web dev",
            salary: 100,
            department_id: 10
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



app.listen(port, function(){
    console.log("app listening on port" + port)
});


