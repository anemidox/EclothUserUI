<?php

class Database {
  private $host;
  private $username;
  private $password;
  private $database;
  private $conn;

  public function __construct($host, $username, $password, $database) {
    $this->host = $host;
    $this->username = $username;
    $this->password = $password;
    $this->database = $database;
  }

  public function connect() {
    $this->conn = new mysqli($this->host, $this->username, $this->password, $this->database);

    if ($this->conn->connect_error) {
      die("Connection failed: ". $this->conn->connect_error);
    }
  }

  public function query($sql) {
    $result = $this->conn->query($sql);
    return $result;
  }

  public function close() {
    $this->conn->close();
  }
}

// Usage example
$db = new Database('localhost', 'root', 'password', 'ydatabase');
$db->connect();

$result = $db->query("SELECT * FROM users");
while ($row = $result->fetch_assoc()) {
  echo $row['name']. "<br>";
}

$db->close();

?>