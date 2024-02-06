import mysql from "mysql2";

// create the connection to database

const db = mysql.createConnection({
  host: "dbrestaurant.cluster-cl6860c2snq2.us-east-1.rds.amazonaws.com",
  user: "admin", //admin
  password: "Mdpotfm4D6VO8XNu82UH", 
  database: "samsDB", 
  port: "3306", 
});


db.connect(error => {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log("Successfully connected to the database.");
});

export default db;
