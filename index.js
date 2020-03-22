const mysql = require("mysql")
const express = require("express")
const inquirer = require("inquirer")




const connection = mysql.createConnection({
    host: "localhost",
    PORT: 3306,
    user: "root",
    password: "theking1@",
    database: "employee_tracker_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readRole()
})
function readRole() {
    connection.query("SELECT role_id FROM role", function(err, res){
        if (err) throw err;

        console.log(res);
        connection.end()
    })
}

