<?php

require_once 'Database.php';

class User {
    private $conn;
    private $table_name = "users";

    public $username;
    public $email;
    public $password;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function register() {
        $query = "INSERT INTO " . $this->table_name . " (username, email, password) VALUES (:username, :email, :password)";

        $stmt = $this->conn->prepare($query);

        // Sanitize inputs
        $this->username = htmlspecialchars(strip_tags($this->username));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->password = htmlspecialchars(strip_tags($this->password));

        // Bind parameters
        $stmt->bindParam(':username', $this->username);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':password', password_hash($this->password, PASSWORD_BCRYPT)); // Hash the password

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $database = new Database();
    $db = $database->getConnection();

    $user = new User($db);

    $user->username = $_POST['username'];
    $user->email = $_POST['email'];
    $user->password = $_POST['password'];

    if ($user->register()) {
        echo json_encode(array("message" => "User was successfully registered."));
    } else {
        echo json_encode(array("message" => "Unable to register the user."));
    }
}
?>
