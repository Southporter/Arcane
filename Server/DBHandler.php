<?php
   class DBHandler {
      protected static $db;

      function __construct($dbname) {
         $this->setupConnection($dbname);
      }

      function __destruct() {
         $this->db->close();
      }

      public function setupConnection($dbName) {
         $credentials = new Credentials();
         $this->db = new mysqli('localhost', $credentials->getName(), $credentials->getWord(), $dbName);
         if ($this->db->connect_error) {
            return ("Connection failed: " . $this->db->connect_error);
         } else {
            return true;
         }
      }

      public function select($query, $selectColumns, $table, $whereColumns, $whereValues) {
         $statement = "SELECT ";
         $isFirst = true;
         foreach ($selectColumns as $column) {
            if (!$isFirst) {
               $statement .= ", ";
            } else {
               $isFirst = !$isFirst;
            }

            $statement .= $column;
         }
         $statement .= " FROM " . $table;
         $isFirst = true;
         $lengthColumns = count($whereColumns);
         $lengthValues = count($whereValues);
         if ($lengthValues == $lengthColumns) {
            for ($i = 0; $i < $lengthColumns; $i++) {
               if (!isFirst) {
                  $statement .= ", ";
               } else {
                  $isFirst = !$isFirst;
               }

               $statement .= $whereColumns[$i] . "=" . $whereValues[$i];
            }

            $this->db->query($statement);
         } else {
            return "ERROR: whereColumns and whereValues are of different lenghts";
         }

      }

   }
?>
