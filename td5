<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
<?php 

class Employe {
    private $lastName;
    private $firstName;
    private $password;
    private $phone;
    private $email;
    private $dOB;

    public function __construct($lastName, $firstName, $password, $phone, $email, $dOB) {
        $this->lastName = $lastName;
        $this->firstName = $firstName;
        $this->password = $password;
        $this->phone = $phone;
        $this->email = $email;
        $this->dOB = $dOB;
    }
}

class EmployeC {
    public function show($employe) {
        echo "<table>";
        echo "<tr><th>Last Name</th><th>First Name</th><th>Password</th><th>Phone</th><th>Email</th><th>Date of Birth</th></tr>";
        echo "<tr>";
        echo "<td>".$employe->lastName."</td>";
        echo "<td>".$employe->firstName."</td>";
        echo "<td>".$employe->password."</td>";
        echo "<td>".$employe->phone."</td>";
        echo "<td>".$employe->email."</td>";
        echo "<td>".$employe->dOB."</td>";
        echo "</tr>";
        echo "</table>";
    }
}

require_once "../Model/employe.php";
require_once "../Controller/EmployeC.php";

// Créer un employé
$employe1 = new Employe("Doe", "Jane", "12345678", "(Insérer le numéro de téléphone)", "Jane.Doe@gmail.com", "1/1/2000");

// Afficher les informations avec var_dump()
var_dump($employe1);

// Afficher les informations avec la méthode show()
$employeController = new EmployeC();
$employeController->show($employe1);

?>

</body>
</html>