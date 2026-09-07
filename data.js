const COURSE_DATA = {
  "courses": [
    {
      "id": "dbms",
      "name": "Database Management System",
      "short": "DBMS",
      "chapters": [
        {
          "name": "Introduction to DBMS",
          "summary": "A database is an organized collection of related data. A DBMS provides tools to create, store, retrieve, update and secure that data.",
          "notes": [
            "Database, DBMS and database system",
            "Advantages of DBMS: reduced redundancy, consistency, sharing and security",
            "DBMS users and basic database architecture",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "Define database and DBMS.",
            "List advantages of DBMS.",
            "Differentiate database and DBMS.",
            "Define the key concepts of Introduction to DBMS with suitable examples.",
            "Explain the important principles covered in Introduction to DBMS.",
            "Differentiate the major terms or techniques in Introduction to DBMS.",
            "Write short notes on the most important topics of Introduction to DBMS.",
            "Describe practical applications of Introduction to DBMS.",
            "What are the common advantages, limitations or problems related to Introduction to DBMS?",
            "Write an exam-oriented answer covering the main points of Introduction to DBMS."
          ],
          "questions": [
            {
              "q": "What is a DBMS?",
              "a": "A DBMS is software used to define, create, store, retrieve, update and manage data in databases.",
              "options": [
                "Software for managing databases",
                "A programming language",
                "An operating system",
                "A network cable"
              ],
              "correct": 0
            },
            {
              "q": "Which is an advantage of a DBMS?",
              "a": "A DBMS can reduce unnecessary duplication of data and improve consistency.",
              "options": [
                "Increased redundancy",
                "Better data sharing",
                "No security",
                "No backup"
              ],
              "correct": 1
            },
            {
              "q": "What is a database?",
              "a": "A database is an organized collection of related data.",
              "options": [
                "A collection of related data",
                "A computer monitor",
                "A network cable",
                "A programming loop"
              ],
              "correct": 0
            },
            {
              "q": "What is the main purpose of a DBMS?",
              "a": "It provides facilities to create, store, retrieve, update and control database data.",
              "options": [
                "Manage databases",
                "Design graphics",
                "Compile programs",
                "Transmit radio signals"
              ],
              "correct": 0
            },
            {
              "q": "What is data redundancy?",
              "a": "Data redundancy is unnecessary duplication of the same data.",
              "options": [
                "Unnecessary data duplication",
                "Data encryption",
                "Data sorting",
                "Data compression"
              ],
              "correct": 0
            },
            {
              "q": "Which DBMS feature helps prevent unauthorized access?",
              "a": "Database security mechanisms help restrict unauthorized access.",
              "options": [
                "Security and access control",
                "Screen resolution",
                "CPU scheduling",
                "HTML validation"
              ],
              "correct": 0
            },
            {
              "q": "Who is responsible for overall database administration?",
              "a": "A database administrator (DBA) manages database policies, security, availability and maintenance.",
              "options": [
                "DBA",
                "Web designer",
                "Network cable",
                "End user only"
              ],
              "correct": 0
            },
            {
              "q": "What is data integrity?",
              "a": "Data integrity means data remains accurate, valid and consistent.",
              "options": [
                "Accuracy and consistency of data",
                "Faster typing",
                "Larger storage only",
                "More duplicate records"
              ],
              "correct": 0
            },
            {
              "q": "What is a database system?",
              "a": "A database system includes the database, DBMS, users and related applications/procedures.",
              "options": [
                "Database, DBMS, users and related components",
                "Only tables",
                "Only hardware",
                "Only SQL commands"
              ],
              "correct": 0
            },
            {
              "q": "Why is data sharing useful in a DBMS?",
              "a": "Controlled sharing allows multiple authorized users or applications to use common data.",
              "options": [
                "It enables controlled multi-user access",
                "It removes all security",
                "It deletes records",
                "It disables backups"
              ],
              "correct": 0
            }
          ]
        },
        {
          "name": "ER Model",
          "summary": "The Entity-Relationship model represents entities, attributes and relationships before a relational database is designed.",
          "notes": [
            "Entity, attribute and relationship",
            "Strong and weak entities",
            "Cardinality: one-to-one, one-to-many and many-to-many",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "Define entity and attribute.",
            "Explain cardinality.",
            "What is an ER diagram?",
            "Define the key concepts of ER Model with suitable examples.",
            "Explain the important principles covered in ER Model.",
            "Differentiate the major terms or techniques in ER Model.",
            "Write short notes on the most important topics of ER Model.",
            "Describe practical applications of ER Model.",
            "What are the common advantages, limitations or problems related to ER Model?",
            "Write an exam-oriented answer covering the main points of ER Model."
          ],
          "questions": [
            {
              "q": "What does an ER diagram represent?",
              "a": "It represents entities, their attributes and relationships among them.",
              "options": [
                "Database relationships",
                "Only source code",
                "Only hardware",
                "Internet speed"
              ],
              "correct": 0
            },
            {
              "q": "What is an entity?",
              "a": "An entity is a distinguishable real-world object or concept about which data is stored.",
              "options": [
                "A distinguishable object or concept",
                "A SQL command",
                "A cable",
                "A processor register"
              ],
              "correct": 0
            },
            {
              "q": "What is an attribute?",
              "a": "An attribute describes a property of an entity.",
              "options": [
                "A property of an entity",
                "A network protocol",
                "A program loop",
                "A database backup"
              ],
              "correct": 0
            },
            {
              "q": "What is a relationship?",
              "a": "A relationship represents an association between entities.",
              "options": [
                "An association between entities",
                "A memory chip",
                "A programming error",
                "A file extension"
              ],
              "correct": 0
            },
            {
              "q": "What does 1:M cardinality mean?",
              "a": "One entity instance can be associated with many instances of another entity.",
              "options": [
                "One-to-many",
                "Many-to-one only",
                "One-to-one only",
                "No relationship"
              ],
              "correct": 0
            },
            {
              "q": "What is a weak entity?",
              "a": "A weak entity depends on an identifying entity and does not have a complete key of its own.",
              "options": [
                "An entity dependent on another for identification",
                "A deleted entity",
                "A network device",
                "A programming object"
              ],
              "correct": 0
            },
            {
              "q": "Why are ER diagrams used?",
              "a": "They provide a conceptual view of data entities, attributes and relationships before implementation.",
              "options": [
                "To model database structure conceptually",
                "To compile SQL",
                "To format documents",
                "To test network speed"
              ],
              "correct": 0
            },
            {
              "q": "What is a multivalued attribute?",
              "a": "It is an attribute that can have more than one value for one entity.",
              "options": [
                "An attribute with multiple values",
                "An attribute with no name",
                "A primary key only",
                "A table without rows"
              ],
              "correct": 0
            },
            {
              "q": "What is a derived attribute?",
              "a": "It is an attribute whose value can be calculated from other stored values.",
              "options": [
                "An attribute calculated from other data",
                "A password",
                "A foreign key only",
                "A deleted column"
              ],
              "correct": 0
            }
          ]
        },
        {
          "name": "Relational Model and Keys",
          "summary": "The relational model stores data in tables made of rows and columns. Keys help identify records and connect related tables.",
          "notes": [
            "Relation, tuple and attribute",
            "Primary key and candidate key",
            "Foreign key and referential integrity",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "Define primary key.",
            "Define foreign key.",
            "Differentiate primary and foreign keys.",
            "Define the key concepts of Relational Model and Keys with suitable examples.",
            "Explain the important principles covered in Relational Model and Keys.",
            "Differentiate the major terms or techniques in Relational Model and Keys.",
            "Write short notes on the most important topics of Relational Model and Keys.",
            "Describe practical applications of Relational Model and Keys.",
            "What are the common advantages, limitations or problems related to Relational Model and Keys?",
            "Write an exam-oriented answer covering the main points of Relational Model and Keys."
          ],
          "questions": [
            {
              "q": "What uniquely identifies a row in a relation?",
              "a": "A primary key uniquely identifies each row.",
              "options": [
                "Primary key",
                "Foreign key",
                "Duplicate value",
                "Null field"
              ],
              "correct": 0
            },
            {
              "q": "What is a relation?",
              "a": "A relation is a table consisting of rows and columns.",
              "options": [
                "A table",
                "A program",
                "A cable",
                "A processor"
              ],
              "correct": 0
            },
            {
              "q": "What is a tuple?",
              "a": "A tuple is a row or record in a relation.",
              "options": [
                "A row",
                "A database server",
                "A column name only",
                "A query language"
              ],
              "correct": 0
            },
            {
              "q": "What is a candidate key?",
              "a": "A candidate key is a minimal set of attributes that uniquely identifies a tuple.",
              "options": [
                "A minimal unique identifier",
                "A duplicate field",
                "A table name",
                "A display label"
              ],
              "correct": 0
            },
            {
              "q": "What is a composite key?",
              "a": "A composite key uses two or more attributes together to uniquely identify a row.",
              "options": [
                "A key made from multiple attributes",
                "A key with duplicate values",
                "A password field",
                "A foreign server"
              ],
              "correct": 0
            },
            {
              "q": "What is referential integrity?",
              "a": "It ensures foreign-key values correctly reference existing primary or candidate keys.",
              "options": [
                "Consistency of references between related tables",
                "Sorting rows alphabetically",
                "Compressing data",
                "Deleting duplicate tables"
              ],
              "correct": 0
            },
            {
              "q": "Can a primary key contain duplicate values?",
              "a": "No. Primary-key values must uniquely identify rows.",
              "options": [
                "No",
                "Always yes",
                "Only in text columns",
                "Only in backups"
              ],
              "correct": 0
            },
            {
              "q": "What is a foreign key?",
              "a": "A foreign key is an attribute or set of attributes that references a key in another relation.",
              "options": [
                "A reference to a key in another table",
                "A password",
                "A file name",
                "A CPU address"
              ],
              "correct": 0
            },
            {
              "q": "What is a NULL value in a relation?",
              "a": "NULL represents missing, unknown or inapplicable information, not a normal zero or empty string.",
              "options": [
                "Missing or unknown information",
                "Always zero",
                "Always false",
                "A duplicate key"
              ],
              "correct": 0
            }
          ]
        },
        {
          "name": "Normalization",
          "summary": "Normalization organizes relational data to reduce redundancy and update anomalies.",
          "notes": [
            "Functional dependency",
            "1NF, 2NF and 3NF",
            "Insertion, deletion and update anomalies",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "Explain 1NF, 2NF and 3NF.",
            "Why is normalization used?",
            "Define the key concepts of Normalization with suitable examples.",
            "Explain the important principles covered in Normalization.",
            "Differentiate the major terms or techniques in Normalization.",
            "Write short notes on the most important topics of Normalization.",
            "Describe practical applications of Normalization.",
            "What are the common advantages, limitations or problems related to Normalization?",
            "Write an exam-oriented answer covering the main points of Normalization."
          ],
          "questions": [
            {
              "q": "Why is normalization used?",
              "a": "It reduces unnecessary redundancy and helps prevent modification anomalies.",
              "options": [
                "To increase duplication",
                "To reduce redundancy",
                "To remove all tables",
                "To replace SQL"
              ],
              "correct": 1
            },
            {
              "q": "What is normalization?",
              "a": "Normalization is the process of organizing relational data to reduce redundancy and anomalies.",
              "options": [
                "Organizing data to reduce redundancy",
                "Encrypting every row",
                "Deleting all tables",
                "Converting SQL to HTML"
              ],
              "correct": 0
            },
            {
              "q": "What is 1NF?",
              "a": "A relation is in first normal form when attribute values are atomic and repeating groups are removed.",
              "options": [
                "Atomic values with no repeating groups",
                "No primary key",
                "Every table has two keys",
                "All data is duplicated"
              ],
              "correct": 0
            },
            {
              "q": "What is 2NF?",
              "a": "A relation in 2NF is in 1NF and has no partial dependency of a non-key attribute on part of a composite key.",
              "options": [
                "1NF plus no partial dependency",
                "Only atomic values",
                "No foreign keys",
                "No relationships"
              ],
              "correct": 0
            },
            {
              "q": "What is 3NF?",
              "a": "A relation in 3NF is in 2NF and has no transitive dependency of non-key attributes on a key.",
              "options": [
                "2NF plus no transitive dependency",
                "Only one column",
                "No primary key",
                "No rows"
              ],
              "correct": 0
            },
            {
              "q": "What is an update anomaly?",
              "a": "It occurs when repeated data must be changed in multiple places and inconsistent values may result.",
              "options": [
                "Inconsistent updates to duplicated data",
                "A fast query",
                "A backup failure only",
                "A network timeout"
              ],
              "correct": 0
            },
            {
              "q": "What is an insertion anomaly?",
              "a": "It occurs when a new fact cannot be inserted without adding unrelated or unavailable data.",
              "options": [
                "Difficulty inserting a fact because of table design",
                "A successful insert",
                "A query returning rows",
                "A primary key lookup"
              ],
              "correct": 0
            },
            {
              "q": "What is a deletion anomaly?",
              "a": "It occurs when deleting one fact unintentionally removes another useful fact.",
              "options": [
                "Loss of unrelated information during deletion",
                "Faster deletion",
                "A database backup",
                "A sorted query"
              ],
              "correct": 0
            },
            {
              "q": "What is functional dependency?",
              "a": "An attribute set X functionally determines Y when each X value is associated with only one Y value.",
              "options": [
                "A dependency where X determines Y",
                "A backup dependency",
                "A network route",
                "A program loop"
              ],
              "correct": 0
            }
          ]
        },
        {
          "name": "SQL Basics",
          "summary": "SQL is used to define, manipulate and query relational databases.",
          "notes": [
            "DDL: CREATE, ALTER, DROP",
            "DML: SELECT, INSERT, UPDATE, DELETE",
            "WHERE, ORDER BY, GROUP BY and aggregate functions",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "What is SQL?",
            "Differentiate DDL and DML.",
            "Write basic SELECT and INSERT statements.",
            "Define the key concepts of SQL Basics with suitable examples.",
            "Explain the important principles covered in SQL Basics.",
            "Differentiate the major terms or techniques in SQL Basics.",
            "Write short notes on the most important topics of SQL Basics.",
            "Describe practical applications of SQL Basics.",
            "What are the common advantages, limitations or problems related to SQL Basics?",
            "Write an exam-oriented answer covering the main points of SQL Basics."
          ],
          "questions": [
            {
              "q": "Which command retrieves rows from a table?",
              "a": "SELECT is used to retrieve data.",
              "options": [
                "SELECT",
                "DROP",
                "ALTER",
                "DELETE"
              ],
              "correct": 0
            },
            {
              "q": "What does SELECT do?",
              "a": "SELECT retrieves data from one or more tables or query results.",
              "options": [
                "Retrieves data",
                "Deletes a database",
                "Creates a user only",
                "Renames a computer"
              ],
              "correct": 0
            },
            {
              "q": "What does INSERT do?",
              "a": "INSERT adds new rows to a table.",
              "options": [
                "Adds rows",
                "Deletes rows",
                "Creates a network",
                "Stops a server"
              ],
              "correct": 0
            },
            {
              "q": "What does UPDATE do?",
              "a": "UPDATE modifies existing rows.",
              "options": [
                "Modifies existing data",
                "Creates hardware",
                "Deletes a table only",
                "Displays HTML"
              ],
              "correct": 0
            },
            {
              "q": "What does DELETE do?",
              "a": "DELETE removes selected rows from a table.",
              "options": [
                "Removes rows",
                "Removes the database server",
                "Changes a column type only",
                "Creates a table"
              ],
              "correct": 0
            },
            {
              "q": "What is DDL?",
              "a": "DDL contains commands used to define or change database structures.",
              "options": [
                "Data Definition Language",
                "Data Display Logic",
                "Digital Data Link",
                "Database Debug Layer"
              ],
              "correct": 0
            },
            {
              "q": "What is DML?",
              "a": "DML contains commands used to manipulate data in database tables.",
              "options": [
                "Data Manipulation Language",
                "Database Memory Layer",
                "Digital Machine Logic",
                "Data Mapping Link"
              ],
              "correct": 0
            },
            {
              "q": "What does WHERE do?",
              "a": "WHERE filters rows according to a condition.",
              "options": [
                "Filters rows by a condition",
                "Sorts only columns",
                "Creates backups",
                "Adds indexes automatically"
              ],
              "correct": 0
            },
            {
              "q": "What does ORDER BY do?",
              "a": "ORDER BY sorts query results by specified columns.",
              "options": [
                "Sorts query results",
                "Deletes rows",
                "Creates tables",
                "Encrypts passwords"
              ],
              "correct": 0
            }
          ]
        }
      ]
    },
    {
      "id": "c",
      "name": "C Programming",
      "short": "C",
      "chapters": [
        {
          "name": "Programming Fundamentals",
          "summary": "Programs are sets of instructions. C programs commonly use variables, data types, operators, input/output and control structures.",
          "notes": [
            "Algorithm and flowchart",
            "Variables and constants",
            "Data types and operators",
            "printf and scanf",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "Define algorithm.",
            "Explain data types.",
            "What is a variable?",
            "Define the key concepts of Programming Fundamentals with suitable examples.",
            "Explain the important principles covered in Programming Fundamentals.",
            "Differentiate the major terms or techniques in Programming Fundamentals.",
            "Write short notes on the most important topics of Programming Fundamentals.",
            "Describe practical applications of Programming Fundamentals.",
            "What are the common advantages, limitations or problems related to Programming Fundamentals?",
            "Write an exam-oriented answer covering the main points of Programming Fundamentals."
          ],
          "questions": [
            {
              "q": "Which function is commonly used for formatted output in C?",
              "a": "printf() is commonly used for formatted output.",
              "options": [
                "printf()",
                "scanf()",
                "main()",
                "sizeof()"
              ],
              "correct": 0
            },
            {
              "q": "What is an algorithm?",
              "a": "An algorithm is a finite sequence of clear steps for solving a problem.",
              "options": [
                "A finite sequence of solution steps",
                "A compiler error",
                "A database table",
                "A monitor"
              ],
              "correct": 0
            },
            {
              "q": "What is a variable?",
              "a": "A variable is a named memory location whose value can change during program execution.",
              "options": [
                "A named changeable storage location",
                "A fixed cable",
                "A compiler",
                "A database server"
              ],
              "correct": 0
            },
            {
              "q": "What is a constant?",
              "a": "A constant is a value that is not intended to change during program execution.",
              "options": [
                "A non-changing value",
                "A loop",
                "A function call",
                "A pointer address only"
              ],
              "correct": 0
            },
            {
              "q": "What is a data type?",
              "a": "A data type specifies the kind of value a variable can hold and related operations.",
              "options": [
                "The kind of value a variable stores",
                "A program file",
                "A network address",
                "A keyboard layout"
              ],
              "correct": 0
            },
            {
              "q": "What is an operator?",
              "a": "An operator is a symbol or construct that performs an operation on operands.",
              "options": [
                "A symbol that performs an operation",
                "A variable name",
                "A comment",
                "A compiler"
              ],
              "correct": 0
            },
            {
              "q": "What is a flowchart?",
              "a": "A flowchart graphically represents the steps and decisions of an algorithm.",
              "options": [
                "A graphical representation of an algorithm",
                "A database schema",
                "A network cable",
                "A source-code compiler"
              ],
              "correct": 0
            },
            {
              "q": "What is a compiler?",
              "a": "A compiler translates source code into a form that can be executed or further processed.",
              "options": [
                "A program that translates source code",
                "A text editor only",
                "A database",
                "A router"
              ],
              "correct": 0
            },
            {
              "q": "Why are comments used in programs?",
              "a": "Comments explain code for readers and are ignored as executable instructions by the compiler.",
              "options": [
                "To document and explain code",
                "To speed the CPU",
                "To store database rows",
                "To replace variables"
              ],
              "correct": 0
            }
          ]
        },
        {
          "name": "Control Statements",
          "summary": "Control statements determine the order in which statements execute.",
          "notes": [
            "if, if-else and nested if",
            "switch",
            "for, while and do-while",
            "break and continue",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "Differentiate while and do-while.",
            "Explain switch.",
            "Write a loop to repeat an operation.",
            "Define the key concepts of Control Statements with suitable examples.",
            "Explain the important principles covered in Control Statements.",
            "Differentiate the major terms or techniques in Control Statements.",
            "Write short notes on the most important topics of Control Statements.",
            "Describe practical applications of Control Statements.",
            "What are the common advantages, limitations or problems related to Control Statements?",
            "Write an exam-oriented answer covering the main points of Control Statements."
          ],
          "questions": [
            {
              "q": "Which loop executes its body at least once?",
              "a": "The do-while loop checks its condition after executing the body.",
              "options": [
                "for",
                "while",
                "do-while",
                "switch"
              ],
              "correct": 2
            },
            {
              "q": "What does an if statement do?",
              "a": "It conditionally executes a block when its Boolean condition is true.",
              "options": [
                "Conditionally executes code",
                "Declares a database",
                "Creates a pointer automatically",
                "Formats a disk"
              ],
              "correct": 0
            },
            {
              "q": "What is a nested if?",
              "a": "A nested if is an if statement placed inside another conditional statement.",
              "options": [
                "An if inside another conditional",
                "A loop inside a database",
                "A function pointer",
                "A network protocol"
              ],
              "correct": 0
            },
            {
              "q": "What is switch used for?",
              "a": "switch selects among multiple branches based on an expression value.",
              "options": [
                "Multi-way selection",
                "Memory allocation only",
                "File compression",
                "Database backup"
              ],
              "correct": 0
            },
            {
              "q": "What is a for loop?",
              "a": "A for loop is commonly used when initialization, condition and update can be expressed together.",
              "options": [
                "A loop with initialization, condition and update",
                "A database query",
                "A data type",
                "A pointer"
              ],
              "correct": 0
            },
            {
              "q": "When is while useful?",
              "a": "while repeats a block while its condition remains true and may execute zero times.",
              "options": [
                "When repetition depends on a condition checked first",
                "Only for arrays",
                "Only for files",
                "Only for databases"
              ],
              "correct": 0
            },
            {
              "q": "What is do-while?",
              "a": "do-while executes its body before checking the continuation condition.",
              "options": [
                "A loop that executes before testing",
                "A selection statement",
                "A data type",
                "A function declaration"
              ],
              "correct": 0
            },
            {
              "q": "What does break do?",
              "a": "break exits the nearest applicable loop or switch statement.",
              "options": [
                "Exits a loop or switch",
                "Skips one iteration only",
                "Declares a variable",
                "Calls a function"
              ],
              "correct": 0
            },
            {
              "q": "What does continue do?",
              "a": "continue skips the remaining statements of the current loop iteration and proceeds to the next iteration.",
              "options": [
                "Skips to the next loop iteration",
                "Ends the whole program",
                "Deletes a variable",
                "Creates a loop"
              ],
              "correct": 0
            }
          ]
        },
        {
          "name": "Arrays and Strings",
          "summary": "Arrays store multiple values of the same type. Character arrays are commonly used to represent strings in C.",
          "notes": [
            "One-dimensional and multidimensional arrays",
            "String basics",
            "Common string library functions",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "Define array.",
            "Explain string in C.",
            "Differentiate 1D and 2D arrays",
            "Define the key concepts of Arrays and Strings with suitable examples.",
            "Explain the important principles covered in Arrays and Strings.",
            "Differentiate the major terms or techniques in Arrays and Strings.",
            "Write short notes on the most important topics of Arrays and Strings.",
            "Describe practical applications of Arrays and Strings.",
            "What are the common advantages, limitations or problems related to Arrays and Strings?",
            "Write an exam-oriented answer covering the main points of Arrays and Strings."
          ],
          "questions": [
            {
              "q": "An array stores:",
              "a": "An array stores multiple elements of the same data type under one name.",
              "options": [
                "Only one value",
                "Multiple same-type values",
                "Only functions",
                "Only files"
              ],
              "correct": 1
            },
            {
              "q": "What is an array?",
              "a": "An array is a collection of elements of the same data type stored under one name.",
              "options": [
                "A same-type collection of elements",
                "A function",
                "A network",
                "A database server"
              ],
              "correct": 0
            },
            {
              "q": "What is an array index?",
              "a": "An index identifies the position of an element in an array.",
              "options": [
                "The position of an element",
                "A data type",
                "A compiler",
                "A pointer variable only"
              ],
              "correct": 0
            },
            {
              "q": "What is a two-dimensional array?",
              "a": "It organizes elements using two indices, commonly represented as rows and columns.",
              "options": [
                "An array addressed by two indices",
                "A single variable",
                "A loop",
                "A function"
              ],
              "correct": 0
            },
            {
              "q": "How is a C string represented?",
              "a": "A C string is a character array terminated by the null character.",
              "options": [
                "A character array ending with null character",
                "An integer array only",
                "A pointer to a database",
                "A float only"
              ],
              "correct": 0
            },
            {
              "q": "What does strlen commonly return?",
              "a": "strlen returns the number of characters before the terminating null character.",
              "options": [
                "String length excluding null terminator",
                "Array capacity always",
                "Number of words in a file",
                "Memory address"
              ],
              "correct": 0
            },
            {
              "q": "What does strcpy commonly do?",
              "a": "strcpy copies a string into a destination character array.",
              "options": [
                "Copies a string",
                "Compares two integers",
                "Sorts a database",
                "Allocates a process"
              ],
              "correct": 0
            },
            {
              "q": "What is a multidimensional array useful for?",
              "a": "It is useful for representing table-like or higher-dimensional data.",
              "options": [
                "Table-like data",
                "Only text files",
                "Only functions",
                "Network routing"
              ],
              "correct": 0
            },
            {
              "q": "Why must array bounds be respected?",
              "a": "Access outside valid bounds can cause undefined behavior and incorrect results.",
              "options": [
                "To avoid invalid memory access",
                "To make variables constant",
                "To create loops",
                "To enable SQL"
              ],
              "correct": 0
            }
          ]
        },
        {
          "name": "Functions and Pointers",
          "summary": "Functions divide programs into reusable units. Pointers store memory addresses and can be used with arrays, functions and dynamic memory.",
          "notes": [
            "Function declaration, definition and call",
            "Parameter passing",
            "Pointer basics and address operator",
            "Pointers and arrays",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "What is a function?",
            "What is a pointer?",
            "Explain call by value and address.",
            "Define the key concepts of Functions and Pointers with suitable examples.",
            "Explain the important principles covered in Functions and Pointers.",
            "Differentiate the major terms or techniques in Functions and Pointers.",
            "Write short notes on the most important topics of Functions and Pointers.",
            "Describe practical applications of Functions and Pointers.",
            "What are the common advantages, limitations or problems related to Functions and Pointers?",
            "Write an exam-oriented answer covering the main points of Functions and Pointers."
          ],
          "questions": [
            {
              "q": "What does a pointer store?",
              "a": "A pointer stores a memory address.",
              "options": [
                "A memory address",
                "Only a character",
                "A database table",
                "A loop"
              ],
              "correct": 0
            },
            {
              "q": "What is a function?",
              "a": "A function is a named block of code designed to perform a specific task.",
              "options": [
                "A reusable block of code",
                "A database row",
                "A network cable",
                "A file system"
              ],
              "correct": 0
            },
            {
              "q": "What is a function prototype?",
              "a": "A prototype declares a function’s name, return type and parameter types before use.",
              "options": [
                "A declaration describing a function interface",
                "A loop",
                "A variable value",
                "A database key"
              ],
              "correct": 0
            },
            {
              "q": "What is recursion?",
              "a": "Recursion is when a function directly or indirectly calls itself.",
              "options": [
                "A function calling itself",
                "A pointer changing type",
                "A database query",
                "A network packet"
              ],
              "correct": 0
            },
            {
              "q": "What does & mean in a typical C expression?",
              "a": "The address-of operator obtains the memory address of an object.",
              "options": [
                "Address of an object",
                "Multiplication",
                "String termination",
                "Logical OR"
              ],
              "correct": 0
            },
            {
              "q": "What does * do with a pointer expression?",
              "a": "The dereference operator accesses the value stored at the pointed-to address.",
              "options": [
                "Dereferences a pointer",
                "Creates a database",
                "Ends a loop",
                "Declares a string"
              ],
              "correct": 0
            },
            {
              "q": "What is call by value?",
              "a": "A copy of an argument value is passed to the function.",
              "options": [
                "A copy of the value is passed",
                "The original variable is always replaced",
                "A database is copied",
                "A pointer is deleted"
              ],
              "correct": 0
            },
            {
              "q": "What is call by address/reference conceptually?",
              "a": "A function receives access to the caller’s object through an address or reference, allowing modification.",
              "options": [
                "The function can access the caller’s object",
                "Only a copy is used",
                "No argument is passed",
                "The program stops"
              ],
              "correct": 0
            },
            {
              "q": "What is a NULL pointer?",
              "a": "A null pointer does not point to a valid object or function.",
              "options": [
                "A pointer representing no valid target",
                "A pointer to the first array element",
                "A database key",
                "A compiler"
              ],
              "correct": 0
            }
          ]
        }
      ]
    },
    {
      "id": "cpp",
      "name": "C++ Programming",
      "short": "C++",
      "chapters": [
        {
          "name": "C++ Fundamentals",
          "summary": "C++ extends procedural programming with features such as classes, objects, references, templates and standard libraries.",
          "notes": [
            "Basic syntax and I/O",
            "Variables and data types",
            "Functions and references",
            "Namespaces",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "What is C++?",
            "Explain reference variables.",
            "What is a namespace?",
            "Define the key concepts of C++ Fundamentals with suitable examples.",
            "Explain the important principles covered in C++ Fundamentals.",
            "Differentiate the major terms or techniques in C++ Fundamentals.",
            "Write short notes on the most important topics of C++ Fundamentals.",
            "Describe practical applications of C++ Fundamentals.",
            "What are the common advantages, limitations or problems related to C++ Fundamentals?",
            "Write an exam-oriented answer covering the main points of C++ Fundamentals."
          ],
          "questions": [
            {
              "q": "Which stream is commonly used for output in C++?",
              "a": "cout is the standard output stream.",
              "options": [
                "cout",
                "cin",
                "cerr",
                "getline"
              ],
              "correct": 0
            },
            {
              "q": "What is a reference variable in C++?",
              "a": "A reference is an alias for an existing object.",
              "options": [
                "An alias for an existing object",
                "A database row",
                "A loop",
                "A file"
              ],
              "correct": 0
            },
            {
              "q": "What is cout used for?",
              "a": "cout is the standard output stream object in C++.",
              "options": [
                "Output",
                "Input only",
                "Database access",
                "Memory allocation"
              ],
              "correct": 0
            },
            {
              "q": "What is cin used for?",
              "a": "cin is commonly used for standard input.",
              "options": [
                "Input",
                "Output only",
                "Compilation",
                "Networking"
              ],
              "correct": 0
            },
            {
              "q": "What is a namespace?",
              "a": "A namespace groups identifiers and helps avoid name collisions.",
              "options": [
                "A named scope for identifiers",
                "A memory chip",
                "A loop",
                "A database table"
              ],
              "correct": 0
            },
            {
              "q": "What is function overloading?",
              "a": "Function overloading allows multiple functions with the same name but different parameter lists.",
              "options": [
                "Same name with different parameter lists",
                "Same variable with different values",
                "Deleting a function",
                "Copying a database"
              ],
              "correct": 0
            },
            {
              "q": "What is a constructor?",
              "a": "A constructor is a special member function used to initialize objects.",
              "options": [
                "A member used to initialize objects",
                "A loop",
                "A database key",
                "A compiler"
              ],
              "correct": 0
            },
            {
              "q": "What is a destructor?",
              "a": "A destructor is a special member function used when an object is destroyed.",
              "options": [
                "A member called during object destruction",
                "A constructor parameter",
                "A SQL query",
                "A network packet"
              ],
              "correct": 0
            },
            {
              "q": "What is the scope of a local variable?",
              "a": "A local variable is accessible only within its declared block or function scope.",
              "options": [
                "Its local block/function scope",
                "The entire internet",
                "Every source file always",
                "The database server"
              ],
              "correct": 0
            }
          ]
        },
        {
          "name": "Object-Oriented Programming",
          "summary": "OOP models software using classes and objects and supports encapsulation, abstraction, inheritance and polymorphism.",
          "notes": [
            "Class and object",
            "Encapsulation and abstraction",
            "Inheritance",
            "Polymorphism",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "Define class and object.",
            "Explain inheritance.",
            "What is polymorphism?",
            "Define the key concepts of Object-Oriented Programming with suitable examples.",
            "Explain the important principles covered in Object-Oriented Programming.",
            "Differentiate the major terms or techniques in Object-Oriented Programming.",
            "Write short notes on the most important topics of Object-Oriented Programming.",
            "Describe practical applications of Object-Oriented Programming.",
            "What are the common advantages, limitations or problems related to Object-Oriented Programming?",
            "Write an exam-oriented answer covering the main points of Object-Oriented Programming."
          ],
          "questions": [
            {
              "q": "An object is:",
              "a": "An object is an instance of a class.",
              "options": [
                "An instance of a class",
                "A compiler",
                "A database",
                "A loop"
              ],
              "correct": 0
            },
            {
              "q": "What is encapsulation?",
              "a": "Encapsulation bundles data and related methods and controls access to internal state.",
              "options": [
                "Bundling data and methods with controlled access",
                "Deleting classes",
                "Sorting objects",
                "Copying files"
              ],
              "correct": 0
            },
            {
              "q": "What is abstraction?",
              "a": "Abstraction exposes essential features while hiding unnecessary implementation details.",
              "options": [
                "Hiding unnecessary implementation details",
                "Duplicating every method",
                "Removing all classes",
                "Changing a database"
              ],
              "correct": 0
            },
            {
              "q": "What is inheritance?",
              "a": "Inheritance allows a class to derive properties and behavior from another class.",
              "options": [
                "Deriving a class from another class",
                "Deleting a parent class",
                "Copying a file",
                "Creating a database"
              ],
              "correct": 0
            },
            {
              "q": "What is polymorphism?",
              "a": "Polymorphism allows the same interface or operation to have different implementations.",
              "options": [
                "One interface with multiple forms/implementations",
                "One class only",
                "No methods",
                "A database index"
              ],
              "correct": 0
            },
            {
              "q": "What is a class?",
              "a": "A class is a blueprint defining data members and functions for objects.",
              "options": [
                "A blueprint for objects",
                "A network packet",
                "A database row",
                "A compiler"
              ],
              "correct": 0
            },
            {
              "q": "What is an object?",
              "a": "An object is an instance of a class.",
              "options": [
                "An instance of a class",
                "A source-code comment",
                "A database table",
                "A CPU register"
              ],
              "correct": 0
            },
            {
              "q": "What is method overriding?",
              "a": "Overriding occurs when a derived class provides a new implementation of an inherited method.",
              "options": [
                "A derived class redefines an inherited method",
                "Changing a variable name",
                "Deleting a method",
                "Overloading a database"
              ],
              "correct": 0
            },
            {
              "q": "Why use access specifiers?",
              "a": "They control which parts of a class can be accessed from different contexts.",
              "options": [
                "To control member accessibility",
                "To sort objects",
                "To allocate disks",
                "To compile HTML"
              ],
              "correct": 0
            }
          ]
        }
      ]
    },
    {
      "id": "python",
      "name": "Python Programming",
      "short": "Python",
      "chapters": [
        {
          "name": "Python Basics",
          "summary": "Python is a high-level programming language known for readable syntax and a large standard library.",
          "notes": [
            "Variables and built-in types",
            "Input and output",
            "Operators",
            "Indentation and comments",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "List common Python data types.",
            "Why is indentation important?",
            "Define the key concepts of Python Basics with suitable examples.",
            "Explain the important principles covered in Python Basics.",
            "Differentiate the major terms or techniques in Python Basics.",
            "Write short notes on the most important topics of Python Basics.",
            "Describe practical applications of Python Basics.",
            "What are the common advantages, limitations or problems related to Python Basics?",
            "Write an exam-oriented answer covering the main points of Python Basics."
          ],
          "questions": [
            {
              "q": "Which symbol starts a Python comment?",
              "a": "A single-line comment begins with #.",
              "options": [
                "#",
                "//",
                "/*",
                "--"
              ],
              "correct": 0
            },
            {
              "q": "Why is Python considered high-level?",
              "a": "Python provides abstractions that let programmers work without directly managing most machine-level details.",
              "options": [
                "It provides high-level programming abstractions",
                "It uses only machine code",
                "It is a database",
                "It is an operating system"
              ],
              "correct": 0
            },
            {
              "q": "What is a Python variable?",
              "a": "A variable name refers to an object/value in Python.",
              "options": [
                "A name referring to a value/object",
                "A hardware port",
                "A database server",
                "A network cable"
              ],
              "correct": 0
            },
            {
              "q": "What is indentation used for in Python?",
              "a": "Indentation defines code blocks.",
              "options": [
                "Defining code blocks",
                "Naming databases",
                "Allocating memory manually",
                "Creating IP addresses"
              ],
              "correct": 0
            },
            {
              "q": "What type stores True or False?",
              "a": "The bool type stores Boolean values.",
              "options": [
                "bool",
                "str",
                "list",
                "dict"
              ],
              "correct": 0
            },
            {
              "q": "What does input() do?",
              "a": "input() reads a line of user input and returns it as a string.",
              "options": [
                "Reads user input as a string",
                "Prints output",
                "Deletes a variable",
                "Creates a class automatically"
              ],
              "correct": 0
            },
            {
              "q": "What does print() do?",
              "a": "print() writes values to standard output.",
              "options": [
                "Displays output",
                "Reads files only",
                "Creates a loop",
                "Compiles Python"
              ],
              "correct": 0
            },
            {
              "q": "What is a string?",
              "a": "A string is a sequence of characters.",
              "options": [
                "A sequence of characters",
                "A network route",
                "A database key",
                "A loop"
              ],
              "correct": 0
            },
            {
              "q": "What is type conversion?",
              "a": "Type conversion changes a value from one data type to another when supported.",
              "options": [
                "Changing a value to another type",
                "Deleting a value",
                "Sorting a list",
                "Creating a server"
              ],
              "correct": 0
            }
          ]
        },
        {
          "name": "Collections and Control Flow",
          "summary": "Python provides lists, tuples, sets and dictionaries, plus conditional and looping constructs.",
          "notes": [
            "Lists and tuples",
            "Sets and dictionaries",
            "if/elif/else",
            "for and while",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "Differentiate list and tuple.",
            "What is a dictionary?",
            "Explain for loop.",
            "Define the key concepts of Collections and Control Flow with suitable examples.",
            "Explain the important principles covered in Collections and Control Flow.",
            "Differentiate the major terms or techniques in Collections and Control Flow.",
            "Write short notes on the most important topics of Collections and Control Flow.",
            "Describe practical applications of Collections and Control Flow.",
            "What are the common advantages, limitations or problems related to Collections and Control Flow?",
            "Write an exam-oriented answer covering the main points of Collections and Control Flow."
          ],
          "questions": [
            {
              "q": "Which collection stores key-value pairs?",
              "a": "A dictionary stores key-value pairs.",
              "options": [
                "List",
                "Tuple",
                "Dictionary",
                "String"
              ],
              "correct": 2
            },
            {
              "q": "What is a list in Python?",
              "a": "A list is an ordered, mutable collection.",
              "options": [
                "An ordered mutable collection",
                "An immutable key-value store",
                "Only a string",
                "A class definition"
              ],
              "correct": 0
            },
            {
              "q": "What is a tuple?",
              "a": "A tuple is an ordered, generally immutable collection.",
              "options": [
                "An ordered immutable collection",
                "A database table",
                "A loop",
                "A file"
              ],
              "correct": 0
            },
            {
              "q": "What is a set?",
              "a": "A set is an unordered collection of distinct hashable elements.",
              "options": [
                "A collection of distinct elements",
                "An ordered duplicate list",
                "A key-value pair only",
                "A string"
              ],
              "correct": 0
            },
            {
              "q": "What is a dictionary?",
              "a": "A dictionary maps keys to values.",
              "options": [
                "A key-value mapping",
                "A sequence of characters",
                "A loop",
                "A class"
              ],
              "correct": 0
            },
            {
              "q": "What does elif provide?",
              "a": "elif provides additional conditional branches after an if condition.",
              "options": [
                "Additional conditional branches",
                "A loop",
                "A function return",
                "A dictionary"
              ],
              "correct": 0
            },
            {
              "q": "What does range() commonly provide in loops?",
              "a": "range() produces an arithmetic sequence of integers.",
              "options": [
                "A sequence of integers",
                "A dictionary",
                "A string parser",
                "A database"
              ],
              "correct": 0
            },
            {
              "q": "What does break do in Python loops?",
              "a": "break terminates the nearest enclosing loop.",
              "options": [
                "Terminates the loop",
                "Skips only the current statement",
                "Defines a function",
                "Creates a list"
              ],
              "correct": 0
            },
            {
              "q": "What does continue do in Python loops?",
              "a": "continue skips the rest of the current iteration and begins the next one.",
              "options": [
                "Moves to the next iteration",
                "Ends the program",
                "Deletes the loop",
                "Creates a tuple"
              ],
              "correct": 0
            }
          ]
        }
      ]
    },
    {
      "id": "web",
      "name": "Web Technology",
      "short": "Web",
      "chapters": [
        {
          "name": "HTML",
          "summary": "HTML structures web documents using elements such as headings, paragraphs, links, images, forms and semantic sections.",
          "notes": [
            "HTML document structure",
            "Text, links and images",
            "Lists and tables",
            "Forms and semantic HTML",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "What is HTML?",
            "Explain semantic elements.",
            "What is a form?",
            "Define the key concepts of HTML with suitable examples.",
            "Explain the important principles covered in HTML.",
            "Differentiate the major terms or techniques in HTML.",
            "Write short notes on the most important topics of HTML.",
            "Describe practical applications of HTML.",
            "What are the common advantages, limitations or problems related to HTML?",
            "Write an exam-oriented answer covering the main points of HTML."
          ],
          "questions": [
            {
              "q": "HTML is primarily used to:",
              "a": "HTML structures the content of web pages.",
              "options": [
                "Structure web content",
                "Manage databases",
                "Compile C++",
                "Route packets"
              ],
              "correct": 0
            },
            {
              "q": "What is HTML?",
              "a": "HTML is the markup language used to structure content on the web.",
              "options": [
                "A markup language for web structure",
                "A database language",
                "A network protocol",
                "An operating system"
              ],
              "correct": 0
            },
            {
              "q": "What does the head element contain?",
              "a": "head contains metadata and references such as the title, stylesheets and scripts.",
              "options": [
                "Document metadata and resource references",
                "Visible page paragraphs only",
                "Database rows",
                "Network packets"
              ],
              "correct": 0
            },
            {
              "q": "What is a semantic element?",
              "a": "A semantic element clearly describes the meaning or role of its content.",
              "options": [
                "An element describing content meaning",
                "A CSS variable",
                "A SQL command",
                "A network device"
              ],
              "correct": 0
            },
            {
              "q": "What is an anchor element used for?",
              "a": "The anchor element creates hyperlinks.",
              "options": [
                "Creating links",
                "Creating databases",
                "Running C code",
                "Routing packets"
              ],
              "correct": 0
            },
            {
              "q": "What does img provide?",
              "a": "The img element embeds an image resource in a document.",
              "options": [
                "An image",
                "A database",
                "A video call",
                "A server"
              ],
              "correct": 0
            },
            {
              "q": "What is a form used for?",
              "a": "Forms collect user input for processing.",
              "options": [
                "Collecting user input",
                "Styling text",
                "Compiling code",
                "Routing data"
              ],
              "correct": 0
            },
            {
              "q": "What is an HTML attribute?",
              "a": "An attribute provides additional information or configuration for an element.",
              "options": [
                "Additional element information",
                "A database table",
                "A programming loop",
                "A network cable"
              ],
              "correct": 0
            },
            {
              "q": "Why use headings in HTML?",
              "a": "Headings structure content hierarchically and improve readability and accessibility.",
              "options": [
                "To structure document sections",
                "To create databases",
                "To encrypt pages",
                "To compile scripts"
              ],
              "correct": 0
            }
          ]
        },
        {
          "name": "CSS",
          "summary": "CSS controls presentation, layout, spacing, typography and responsive behavior of web pages.",
          "notes": [
            "Selectors and properties",
            "Box model",
            "Flexbox and Grid",
            "Responsive design and media queries",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "Explain CSS box model.",
            "What is Flexbox?",
            "Why use media queries?",
            "Define the key concepts of CSS with suitable examples.",
            "Explain the important principles covered in CSS.",
            "Differentiate the major terms or techniques in CSS.",
            "Write short notes on the most important topics of CSS.",
            "Describe practical applications of CSS.",
            "What are the common advantages, limitations or problems related to CSS?",
            "Write an exam-oriented answer covering the main points of CSS."
          ],
          "questions": [
            {
              "q": "CSS is used mainly for:",
              "a": "CSS controls the presentation and layout of HTML content.",
              "options": [
                "Styling web pages",
                "Creating databases",
                "Running servers only",
                "Sending emails"
              ],
              "correct": 0
            },
            {
              "q": "What is CSS?",
              "a": "CSS is a stylesheet language used to control presentation and layout.",
              "options": [
                "A stylesheet language",
                "A database engine",
                "A network protocol",
                "A compiler"
              ],
              "correct": 0
            },
            {
              "q": "What is the CSS box model?",
              "a": "It describes content, padding, border and margin around an element.",
              "options": [
                "Content, padding, border and margin",
                "Only colors",
                "Only fonts",
                "Only images"
              ],
              "correct": 0
            },
            {
              "q": "What is a selector?",
              "a": "A selector identifies the HTML elements to which CSS rules apply.",
              "options": [
                "A pattern identifying elements",
                "A database key",
                "A network address",
                "A JavaScript function"
              ],
              "correct": 0
            },
            {
              "q": "What is Flexbox useful for?",
              "a": "Flexbox provides one-dimensional layout and alignment of elements.",
              "options": [
                "One-dimensional layout and alignment",
                "Database storage",
                "Server authentication",
                "Image compression"
              ],
              "correct": 0
            },
            {
              "q": "What is CSS Grid useful for?",
              "a": "Grid provides two-dimensional row-and-column layout.",
              "options": [
                "Two-dimensional layouts",
                "Only text formatting",
                "SQL queries",
                "Network routing"
              ],
              "correct": 0
            },
            {
              "q": "What is a media query?",
              "a": "A media query applies CSS rules conditionally based on characteristics such as viewport size.",
              "options": [
                "Conditional responsive styling",
                "A database query",
                "A network request",
                "A JavaScript loop"
              ],
              "correct": 0
            },
            {
              "q": "What does margin control?",
              "a": "Margin controls space outside an element’s border.",
              "options": [
                "Space outside the border",
                "Text inside a paragraph",
                "Database rows",
                "Network bandwidth"
              ],
              "correct": 0
            },
            {
              "q": "What does padding control?",
              "a": "Padding controls space between an element’s content and its border.",
              "options": [
                "Space between content and border",
                "Space outside the element",
                "A font family",
                "A database index"
              ],
              "correct": 0
            }
          ]
        },
        {
          "name": "JavaScript",
          "summary": "JavaScript adds behavior and interactivity to web pages and can manipulate the DOM.",
          "notes": [
            "Variables and data types",
            "Functions",
            "Events",
            "DOM manipulation",
            "Arrays and objects",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "What is DOM?",
            "Explain event handling.",
            "What is a JavaScript function?",
            "Define the key concepts of JavaScript with suitable examples.",
            "Explain the important principles covered in JavaScript.",
            "Differentiate the major terms or techniques in JavaScript.",
            "Write short notes on the most important topics of JavaScript.",
            "Describe practical applications of JavaScript.",
            "What are the common advantages, limitations or problems related to JavaScript?",
            "Write an exam-oriented answer covering the main points of JavaScript."
          ],
          "questions": [
            {
              "q": "DOM stands for:",
              "a": "DOM means Document Object Model.",
              "options": [
                "Document Object Model",
                "Data Object Manager",
                "Digital Output Mode",
                "Document Order Map"
              ],
              "correct": 0
            },
            {
              "q": "What is JavaScript used for on web pages?",
              "a": "It can add behavior, interactivity and dynamic updates to web pages.",
              "options": [
                "Interactivity and dynamic behavior",
                "Database storage only",
                "HTML parsing only",
                "Network cabling"
              ],
              "correct": 0
            },
            {
              "q": "What is the DOM?",
              "a": "The DOM is an object representation of a document that scripts can inspect and modify.",
              "options": [
                "An object representation of the document",
                "A database engine",
                "A compiler",
                "A network protocol"
              ],
              "correct": 0
            },
            {
              "q": "What is an event?",
              "a": "An event is a signal that something happened, such as a click or input.",
              "options": [
                "A signal representing an occurrence",
                "A CSS rule",
                "A database row",
                "A server cable"
              ],
              "correct": 0
            },
            {
              "q": "What is a function?",
              "a": "A JavaScript function is a reusable block of code that can accept inputs and return a result.",
              "options": [
                "Reusable executable code",
                "A database table",
                "A CSS selector",
                "A network layer"
              ],
              "correct": 0
            },
            {
              "q": "What is an array?",
              "a": "An array is an ordered collection of values.",
              "options": [
                "An ordered collection",
                "A key-value database only",
                "A style rule",
                "A network packet"
              ],
              "correct": 0
            },
            {
              "q": "What is an object in JavaScript?",
              "a": "An object is a collection of properties and methods represented as key-value associations.",
              "options": [
                "A collection of properties and methods",
                "A CSS file",
                "A database server",
                "A loop only"
              ],
              "correct": 0
            },
            {
              "q": "What does addEventListener do?",
              "a": "It registers a function to run when a specified event occurs on a target.",
              "options": [
                "Registers an event handler",
                "Creates a database",
                "Compiles HTML",
                "Deletes the DOM"
              ],
              "correct": 0
            },
            {
              "q": "What is JSON commonly used for?",
              "a": "JSON is a text format commonly used to exchange structured data.",
              "options": [
                "Exchanging structured data",
                "Styling pages",
                "Compiling C",
                "Routing packets"
              ],
              "correct": 0
            }
          ]
        }
      ]
    },
    {
      "id": "network",
      "name": "Computer Networks",
      "short": "Networks",
      "chapters": [
        {
          "name": "Networking Fundamentals",
          "summary": "A computer network connects devices so they can communicate and share resources.",
          "notes": [
            "LAN, MAN and WAN",
            "Network topologies",
            "Transmission media",
            "Network devices",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "Define computer network.",
            "Differentiate LAN and WAN.",
            "Explain common topologies",
            "Define the key concepts of Networking Fundamentals with suitable examples.",
            "Explain the important principles covered in Networking Fundamentals.",
            "Differentiate the major terms or techniques in Networking Fundamentals.",
            "Write short notes on the most important topics of Networking Fundamentals.",
            "Describe practical applications of Networking Fundamentals.",
            "What are the common advantages, limitations or problems related to Networking Fundamentals?",
            "Write an exam-oriented answer covering the main points of Networking Fundamentals."
          ],
          "questions": [
            {
              "q": "LAN usually covers:",
              "a": "A LAN normally covers a limited geographic area such as a building or campus.",
              "options": [
                "A limited local area",
                "The whole world",
                "Only satellites",
                "Only one CPU"
              ],
              "correct": 0
            },
            {
              "q": "What is a computer network?",
              "a": "A network connects devices so they can communicate and share resources.",
              "options": [
                "Connected devices that communicate",
                "A single isolated computer",
                "A programming language",
                "A database table"
              ],
              "correct": 0
            },
            {
              "q": "What is LAN?",
              "a": "LAN is a network covering a relatively small geographic area.",
              "options": [
                "Local Area Network",
                "Large Access Network",
                "Linked Application Node",
                "Local Analog Network"
              ],
              "correct": 0
            },
            {
              "q": "What is WAN?",
              "a": "WAN connects networks across large geographic areas.",
              "options": [
                "Wide Area Network",
                "Web Access Node",
                "Wireless Analog Network",
                "Wide Application Name"
              ],
              "correct": 0
            },
            {
              "q": "What is a topology?",
              "a": "Network topology describes how devices and links are arranged.",
              "options": [
                "The arrangement of network devices and links",
                "A database schema",
                "A programming syntax",
                "A CPU instruction"
              ],
              "correct": 0
            },
            {
              "q": "What does a switch generally do?",
              "a": "A switch forwards frames within a local network based on MAC addresses.",
              "options": [
                "Forwards LAN frames",
                "Compiles code",
                "Stores SQL tables",
                "Displays web pages"
              ],
              "correct": 0
            },
            {
              "q": "What does a router do?",
              "a": "A router forwards packets between different networks using network-layer addressing.",
              "options": [
                "Forwards packets between networks",
                "Only connects keyboards",
                "Compiles programs",
                "Stores passwords"
              ],
              "correct": 0
            },
            {
              "q": "What is transmission media?",
              "a": "Transmission media are physical or wireless paths through which signals travel.",
              "options": [
                "Paths that carry network signals",
                "Database indexes",
                "Software licenses",
                "CPU registers"
              ],
              "correct": 0
            },
            {
              "q": "What is bandwidth?",
              "a": "Bandwidth describes the capacity of a communication channel to carry data over a given time.",
              "options": [
                "Data-carrying capacity",
                "A database key",
                "A programming language",
                "A monitor size"
              ],
              "correct": 0
            }
          ]
        },
        {
          "name": "OSI and TCP/IP Models",
          "summary": "Layered models divide network communication into manageable functions.",
          "notes": [
            "Seven OSI layers",
            "TCP/IP model",
            "Encapsulation",
            "Examples of protocols",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "List OSI layers.",
            "Compare OSI and TCP/IP.",
            "What is encapsulation?",
            "Define the key concepts of OSI and TCP/IP Models with suitable examples.",
            "Explain the important principles covered in OSI and TCP/IP Models.",
            "Differentiate the major terms or techniques in OSI and TCP/IP Models.",
            "Write short notes on the most important topics of OSI and TCP/IP Models.",
            "Describe practical applications of OSI and TCP/IP Models.",
            "What are the common advantages, limitations or problems related to OSI and TCP/IP Models?",
            "Write an exam-oriented answer covering the main points of OSI and TCP/IP Models."
          ],
          "questions": [
            {
              "q": "Which OSI layer provides routing?",
              "a": "The network layer is responsible for logical addressing and routing.",
              "options": [
                "Physical",
                "Data Link",
                "Network",
                "Application"
              ],
              "correct": 2
            },
            {
              "q": "How many layers are in the OSI reference model?",
              "a": "The OSI model has seven layers.",
              "options": [
                "7",
                "4",
                "5",
                "3"
              ],
              "correct": 0
            },
            {
              "q": "Which OSI layer handles end-to-end transport?",
              "a": "The transport layer provides end-to-end transport services.",
              "options": [
                "Transport",
                "Physical",
                "Presentation",
                "Data Link"
              ],
              "correct": 0
            },
            {
              "q": "Which layer handles logical addressing and routing?",
              "a": "The network layer handles logical addressing and routing.",
              "options": [
                "Network",
                "Session",
                "Physical",
                "Application"
              ],
              "correct": 0
            },
            {
              "q": "What is encapsulation?",
              "a": "Encapsulation adds protocol-control information as data moves down protocol layers for transmission.",
              "options": [
                "Adding layer-specific control information",
                "Deleting packets",
                "Encrypting every file",
                "Changing HTML"
              ],
              "correct": 0
            },
            {
              "q": "What is TCP?",
              "a": "TCP is a connection-oriented transport protocol that provides reliable ordered delivery.",
              "options": [
                "A reliable connection-oriented transport protocol",
                "A CSS framework",
                "A database",
                "A hardware device"
              ],
              "correct": 0
            },
            {
              "q": "What is IP?",
              "a": "IP provides addressing and packet forwarding at the network layer.",
              "options": [
                "An Internet Protocol for addressing and forwarding",
                "A programming language",
                "A storage device",
                "A web browser"
              ],
              "correct": 0
            },
            {
              "q": "What is the application layer for?",
              "a": "It provides network services used by applications and protocols such as HTTP, DNS and SMTP.",
              "options": [
                "Application-level network services",
                "Electrical signaling only",
                "Physical cabling",
                "CPU scheduling"
              ],
              "correct": 0
            },
            {
              "q": "Why use layered network models?",
              "a": "Layers separate responsibilities and make design, troubleshooting and interoperability easier.",
              "options": [
                "To separate responsibilities",
                "To remove all protocols",
                "To increase cable length",
                "To replace hardware"
              ],
              "correct": 0
            }
          ]
        }
      ]
    },
    {
      "id": "os",
      "name": "Operating System",
      "short": "OS",
      "chapters": [
        {
          "name": "OS Fundamentals",
          "summary": "An operating system manages hardware resources and provides services to applications and users.",
          "notes": [
            "Functions of OS",
            "Types of operating systems",
            "Kernel and system calls",
            "User and system programs",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "Define operating system.",
            "List OS functions.",
            "What is a kernel?",
            "Define the key concepts of OS Fundamentals with suitable examples.",
            "Explain the important principles covered in OS Fundamentals.",
            "Differentiate the major terms or techniques in OS Fundamentals.",
            "Write short notes on the most important topics of OS Fundamentals.",
            "Describe practical applications of OS Fundamentals.",
            "What are the common advantages, limitations or problems related to OS Fundamentals?",
            "Write an exam-oriented answer covering the main points of OS Fundamentals."
          ],
          "questions": [
            {
              "q": "A major function of an OS is:",
              "a": "Resource management is a major operating-system function.",
              "options": [
                "Resource management",
                "Only typing",
                "Only browsing",
                "Only compiling"
              ],
              "correct": 0
            },
            {
              "q": "What is an operating system?",
              "a": "An operating system manages computer resources and provides services to applications and users.",
              "options": [
                "System software managing resources and services",
                "A database",
                "A web page",
                "A compiler only"
              ],
              "correct": 0
            },
            {
              "q": "What is a kernel?",
              "a": "The kernel is the core part of an operating system that manages resources and privileged operations.",
              "options": [
                "Core of the operating system",
                "A database table",
                "A web browser",
                "A network cable"
              ],
              "correct": 0
            },
            {
              "q": "What is a system call?",
              "a": "A system call is a controlled interface through which a program requests services from the OS.",
              "options": [
                "An interface for requesting OS services",
                "A CSS rule",
                "A database query only",
                "A hardware port"
              ],
              "correct": 0
            },
            {
              "q": "What is multitasking?",
              "a": "Multitasking allows multiple tasks to make progress through CPU scheduling and resource management.",
              "options": [
                "Managing multiple tasks over time",
                "Using only one program",
                "Deleting processes",
                "Formatting disks"
              ],
              "correct": 0
            },
            {
              "q": "What is a device driver?",
              "a": "A driver is software that enables the OS to communicate with a hardware device.",
              "options": [
                "Software that interfaces with hardware",
                "A database engine",
                "A web server",
                "A compiler"
              ],
              "correct": 0
            },
            {
              "q": "What is booting?",
              "a": "Booting is the process of starting a computer and loading the operating system.",
              "options": [
                "Starting the system and loading the OS",
                "Deleting the OS",
                "Compiling a program",
                "Connecting a database"
              ],
              "correct": 0
            },
            {
              "q": "What is a file system?",
              "a": "A file system organizes and manages files and directories on storage.",
              "options": [
                "A method for organizing stored files",
                "A network protocol",
                "A CPU register",
                "A programming language"
              ],
              "correct": 0
            },
            {
              "q": "Why does an OS provide security?",
              "a": "It controls access to resources and helps protect system data and operations.",
              "options": [
                "To control access and protect resources",
                "To increase monitor size",
                "To replace the CPU",
                "To write HTML"
              ],
              "correct": 0
            }
          ]
        },
        {
          "name": "Process and Memory Management",
          "summary": "The OS manages processes and allocates memory so programs can execute efficiently and safely.",
          "notes": [
            "Process and program",
            "Process states",
            "Scheduling basics",
            "Main memory and virtual memory",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "Define process.",
            "Explain process states.",
            "What is virtual memory?",
            "Define the key concepts of Process and Memory Management with suitable examples.",
            "Explain the important principles covered in Process and Memory Management.",
            "Differentiate the major terms or techniques in Process and Memory Management.",
            "Write short notes on the most important topics of Process and Memory Management.",
            "Describe practical applications of Process and Memory Management.",
            "What are the common advantages, limitations or problems related to Process and Memory Management?",
            "Write an exam-oriented answer covering the main points of Process and Memory Management."
          ],
          "questions": [
            {
              "q": "A running program is commonly represented as a:",
              "a": "A process is a program in execution.",
              "options": [
                "Process",
                "File extension",
                "Protocol",
                "Database"
              ],
              "correct": 0
            },
            {
              "q": "What is a process?",
              "a": "A process is a program in execution.",
              "options": [
                "A program in execution",
                "A source-code comment",
                "A network cable",
                "A database key"
              ],
              "correct": 0
            },
            {
              "q": "What is process scheduling?",
              "a": "Scheduling selects processes for CPU execution according to a scheduling policy.",
              "options": [
                "Selecting processes for CPU execution",
                "Formatting memory",
                "Creating web pages",
                "Encrypting files"
              ],
              "correct": 0
            },
            {
              "q": "What is a process state?",
              "a": "A process state describes its current execution condition, such as ready, running or waiting.",
              "options": [
                "The current execution condition",
                "A file extension",
                "A database field",
                "A network address"
              ],
              "correct": 0
            },
            {
              "q": "What is context switching?",
              "a": "Context switching saves the state of one process/thread and loads another so execution can switch.",
              "options": [
                "Saving one execution state and loading another",
                "Deleting a process",
                "Formatting a disk",
                "Compiling code"
              ],
              "correct": 0
            },
            {
              "q": "What is virtual memory?",
              "a": "Virtual memory uses storage to extend the apparent memory available to processes.",
              "options": [
                "A memory-management technique using storage",
                "A CPU register",
                "A database cache only",
                "A network protocol"
              ],
              "correct": 0
            },
            {
              "q": "What is paging?",
              "a": "Paging divides virtual and physical memory into fixed-size pages and frames.",
              "options": [
                "Fixed-size page/frame memory management",
                "A network topology",
                "A file format",
                "A programming language"
              ],
              "correct": 0
            },
            {
              "q": "What is fragmentation?",
              "a": "Fragmentation refers to wasted or inconveniently arranged memory/storage space.",
              "options": [
                "Inefficiently used free space",
                "A network failure",
                "A compiler warning",
                "A database query"
              ],
              "correct": 0
            },
            {
              "q": "Why is memory protection needed?",
              "a": "It prevents processes from improperly accessing memory belonging to other processes or the OS.",
              "options": [
                "To isolate and protect memory",
                "To increase screen brightness",
                "To create SQL tables",
                "To route packets"
              ],
              "correct": 0
            }
          ]
        }
      ]
    },
    {
      "id": "ds",
      "name": "Data Structures",
      "short": "DS",
      "chapters": [
        {
          "name": "Arrays and Linked Lists",
          "summary": "Data structures organize data for efficient storage and operations.",
          "notes": [
            "Array characteristics",
            "Linked-list nodes",
            "Singly and doubly linked lists",
            "Insertion and deletion concepts",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "What is a data structure?",
            "Differentiate array and linked list.",
            "Define the key concepts of Arrays and Linked Lists with suitable examples.",
            "Explain the important principles covered in Arrays and Linked Lists.",
            "Differentiate the major terms or techniques in Arrays and Linked Lists.",
            "Write short notes on the most important topics of Arrays and Linked Lists.",
            "Describe practical applications of Arrays and Linked Lists.",
            "What are the common advantages, limitations or problems related to Arrays and Linked Lists?",
            "Write an exam-oriented answer covering the main points of Arrays and Linked Lists."
          ],
          "questions": [
            {
              "q": "A linked list is made of:",
              "a": "A linked list consists of nodes connected through links/references.",
              "options": [
                "Nodes and links",
                "Only indexes",
                "Only files",
                "Only functions"
              ],
              "correct": 0
            },
            {
              "q": "What is a data structure?",
              "a": "A data structure organizes data so it can be stored and accessed efficiently.",
              "options": [
                "An organized way to store and access data",
                "A programming language",
                "A network cable",
                "A database server"
              ],
              "correct": 0
            },
            {
              "q": "What is an array advantage?",
              "a": "Arrays provide direct indexed access to elements.",
              "options": [
                "Fast indexed access",
                "No memory use",
                "Automatic sorting",
                "No fixed type"
              ],
              "correct": 0
            },
            {
              "q": "What is a linked-list node?",
              "a": "A node stores data and one or more links/references to other nodes.",
              "options": [
                "Data plus link/reference fields",
                "Only an index",
                "A database",
                "A CPU"
              ],
              "correct": 0
            },
            {
              "q": "What is a singly linked list?",
              "a": "Each node contains a link to the next node.",
              "options": [
                "Nodes linked in one forward direction",
                "Nodes with two mandatory links",
                "An array only",
                "A stack only"
              ],
              "correct": 0
            },
            {
              "q": "What is a doubly linked list?",
              "a": "Each node has links to both the previous and next nodes.",
              "options": [
                "Nodes with previous and next links",
                "Nodes with no links",
                "A database table",
                "A queue only"
              ],
              "correct": 0
            },
            {
              "q": "Why can linked lists grow dynamically?",
              "a": "Nodes can be allocated as needed rather than requiring one contiguous fixed-size block.",
              "options": [
                "Nodes can be allocated as needed",
                "They never use memory",
                "They are always sorted",
                "They require no pointers"
              ],
              "correct": 0
            },
            {
              "q": "What is insertion in a linked list?",
              "a": "Insertion adds a node and updates relevant links to include it.",
              "options": [
                "Adding a node and adjusting links",
                "Deleting the whole list",
                "Sorting a database",
                "Compiling code"
              ],
              "correct": 0
            },
            {
              "q": "What is traversal?",
              "a": "Traversal visits data structure elements according to the structure’s links or indices.",
              "options": [
                "Visiting elements systematically",
                "Deleting nodes",
                "Creating a class",
                "Sending packets"
              ],
              "correct": 0
            }
          ]
        },
        {
          "name": "Stacks and Queues",
          "summary": "Stacks follow LIFO while queues follow FIFO.",
          "notes": [
            "Push and pop",
            "Enqueue and dequeue",
            "Applications of stacks",
            "Applications of queues",
            "Exam focus: definitions, differences, examples and applications."
          ],
          "important": [
            "Define stack.",
            "Define queue.",
            "Differentiate LIFO and FIFO.",
            "Define the key concepts of Stacks and Queues with suitable examples.",
            "Explain the important principles covered in Stacks and Queues.",
            "Differentiate the major terms or techniques in Stacks and Queues.",
            "Write short notes on the most important topics of Stacks and Queues.",
            "Describe practical applications of Stacks and Queues.",
            "What are the common advantages, limitations or problems related to Stacks and Queues?",
            "Write an exam-oriented answer covering the main points of Stacks and Queues."
          ],
          "questions": [
            {
              "q": "A stack follows:",
              "a": "A stack follows Last In, First Out.",
              "options": [
                "FIFO",
                "LIFO",
                "Random only",
                "Priority only"
              ],
              "correct": 1
            },
            {
              "q": "What is a stack?",
              "a": "A stack is a linear structure that follows LIFO order.",
              "options": [
                "A LIFO structure",
                "A FIFO structure",
                "A database",
                "A network"
              ],
              "correct": 0
            },
            {
              "q": "What is push?",
              "a": "Push adds an element to the top of a stack.",
              "options": [
                "Add to stack top",
                "Remove from queue",
                "Sort a list",
                "Create a node only"
              ],
              "correct": 0
            },
            {
              "q": "What is pop?",
              "a": "Pop removes the top element from a stack.",
              "options": [
                "Remove stack top",
                "Add to queue",
                "Search a database",
                "Create a process"
              ],
              "correct": 0
            },
            {
              "q": "What is a queue?",
              "a": "A queue is a linear structure that follows FIFO order.",
              "options": [
                "A FIFO structure",
                "A LIFO structure",
                "A database",
                "A compiler"
              ],
              "correct": 0
            },
            {
              "q": "What is enqueue?",
              "a": "Enqueue adds an element to the rear of a queue.",
              "options": [
                "Add at queue rear",
                "Remove from stack",
                "Sort elements",
                "Delete a node"
              ],
              "correct": 0
            },
            {
              "q": "What is dequeue?",
              "a": "Dequeue removes an element from the front of a queue.",
              "options": [
                "Remove from queue front",
                "Add to stack",
                "Create a database",
                "Compile code"
              ],
              "correct": 0
            },
            {
              "q": "Give one stack application.",
              "a": "Stacks are useful for function-call management, undo operations and expression processing.",
              "options": [
                "Function-call management",
                "Only image display",
                "Only networking",
                "Only database storage"
              ],
              "correct": 0
            },
            {
              "q": "Give one queue application.",
              "a": "Queues are useful for scheduling, buffering and service systems.",
              "options": [
                "Scheduling or buffering",
                "Only CSS styling",
                "Only SQL joins",
                "Only file compression"
              ],
              "correct": 0
            }
          ]
        }
      ]
    }
  ]
};
