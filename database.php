<?php
$servername = "localhost"; // Change this if your database is hosted elsewhere
$username = "your_username"; // Change this to your database username
$password = "your_password"; // Change this to your database password
$dbname = "your_database"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to insert data into the database
function insertData($username, $password) {
    global $conn;
    $sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} 
?>