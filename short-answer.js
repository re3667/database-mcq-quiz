const shortSets = [
  [
    ["Why Databases", "Explain two problems of using separate file-processing systems instead of a DBMS.", ["redundancy", "inconsistency", "isolation", "concurrent access", "recovery"], "Separate files often cause duplicated data and inconsistent updates. They also make data harder to share, query, protect, and recover after failures."],
    ["Relational Model", "Define primary key, candidate key, and foreign key using your own words.", ["primary key", "candidate key", "foreign key", "unique", "referential"], "A candidate key uniquely identifies tuples. A primary key is the candidate key chosen as the main identifier. A foreign key refers to a key in another relation and supports referential integrity."],
    ["Relational Algebra", "What is the difference between selection and projection?", ["selection", "rows", "condition", "projection", "columns"], "Selection chooses rows that satisfy a condition. Projection chooses columns or attributes from a relation and may remove duplicates."],
    ["SQL", "Explain the difference between WHERE and HAVING.", ["where", "before grouping", "having", "after grouping", "group"], "WHERE filters individual rows before grouping. HAVING filters groups after GROUP BY and aggregate functions have been applied."],
    ["Normalization", "Why can redundancy cause update anomalies? Give one example.", ["redundancy", "update", "insertion", "deletion", "anomaly"], "If the same fact is stored many times, updating only one copy creates inconsistency. For example, changing a department name in one row but not another causes an update anomaly."],
    ["B+ Trees", "Why are B+ trees useful for database indexes?", ["balanced", "fan-out", "range", "leaf", "disk"], "B+ trees stay balanced, have high fan-out, and keep leaf entries ordered. This reduces disk I/O and supports both point lookup and range search."],
    ["Transactions", "Explain the meaning of atomicity and durability in ACID.", ["atomicity", "all-or-nothing", "durability", "committed", "failure"], "Atomicity means a transaction completes fully or has no effect. Durability means committed changes survive system failures."]
  ],
  [
    ["Schemas and Views", "Explain external, conceptual, and internal schemas.", ["external", "conceptual", "internal", "view", "physical"], "The external schema is a user's view. The conceptual schema is the overall logical structure. The internal schema describes physical storage."],
    ["JDBC", "Describe the basic JDBC steps for sending a SELECT query and reading the result.", ["connection", "statement", "executequery", "resultset", "close"], "A program opens a connection, creates a Statement or PreparedStatement, executes a query, reads rows from a ResultSet, and closes resources."],
    ["ER Model", "What is a weak entity? How is it identified?", ["weak entity", "owner", "partial key", "identifying relationship", "foreign key"], "A weak entity cannot be uniquely identified by its own attributes only. It depends on an owner entity and uses an owner key plus a partial key."],
    ["2NF", "What problem does Second Normal Form try to remove?", ["2nf", "partial dependency", "composite key", "non-prime", "whole key"], "2NF removes partial dependencies, where a non-prime attribute depends on only part of a composite candidate key."],
    ["Files", "What is a blocking factor and why does it matter?", ["blocking factor", "records", "block", "disk", "i/o"], "The blocking factor is the number of records that fit in one disk block. It matters because disk I/O is usually measured by block transfers."],
    ["Hashing", "Why is hashing good for exact-match search but weak for range search?", ["hash", "exact match", "bucket", "range", "order"], "Hashing maps a key directly to a bucket, so exact match can be fast. But hashing does not preserve key order, so range queries are not efficient."],
    ["Locking", "What is two-phase locking and why is it used?", ["two-phase locking", "growing", "shrinking", "serializable", "locks"], "Two-phase locking has a growing phase for acquiring locks and a shrinking phase for releasing locks. It is used to guarantee conflict serializability."]
  ],
  [
    ["Relational Model", "Explain entity integrity and referential integrity.", ["entity integrity", "primary key", "not null", "referential integrity", "foreign key"], "Entity integrity means primary key values cannot be null. Referential integrity means a foreign key must match a referenced key value or be null if allowed."],
    ["SQL", "What is GROUP BY used for? Give an example situation.", ["group by", "aggregate", "count", "sum", "group"], "GROUP BY forms groups of rows so aggregate functions can be calculated for each group, such as counting students in each department."],
    ["Views", "Give two reasons why SQL views are useful.", ["view", "security", "simplify", "hide", "user"], "Views can hide sensitive columns or rows, simplify complex queries, and provide different users with different representations of the same data."],
    ["3NF/BCNF", "Compare 3NF and BCNF briefly.", ["3nf", "bcnf", "functional dependency", "superkey", "prime"], "BCNF is stricter: every non-trivial determinant must be a superkey. 3NF may allow some dependencies if the dependent attribute is prime."],
    ["Indexing", "What is the difference between dense and sparse indexes?", ["dense", "sparse", "entry", "search key", "ordered"], "A dense index has an entry for every search-key value or record. A sparse index has entries for some values, usually possible when the data file is ordered."],
    ["B+ Trees", "Describe what happens when a B+ tree leaf node overflows.", ["overflow", "split", "leaf", "separator", "parent"], "The leaf is split into two nodes, entries are redistributed, and a separator key is inserted into the parent. This may propagate upward."],
    ["Transactions", "What is a dirty read? Why is it dangerous?", ["dirty read", "uncommitted", "rollback", "transaction", "inconsistent"], "A dirty read happens when one transaction reads data written by another uncommitted transaction. If the writer rolls back, the read value was invalid."]
  ],
  [
    ["ER Model", "How is a many-to-many relationship usually mapped into relations?", ["many-to-many", "separate relation", "foreign keys", "primary key", "relationship"], "A separate relation is created for the relationship. It usually contains the primary keys of participating entity sets as foreign keys, often forming a composite key."],
    ["Relational Algebra", "Explain natural join and one possible risk when using it.", ["natural join", "same name", "attributes", "matches", "risk"], "Natural join automatically matches attributes with the same name. A risk is that unintended same-name attributes may be joined accidentally."],
    ["JDBC", "Why is PreparedStatement often preferred over building SQL strings manually?", ["preparedstatement", "parameter", "sql injection", "parse", "reuse"], "PreparedStatement supports parameters, reduces SQL injection risk, and can be reused more efficiently than manually concatenated SQL strings."],
    ["Normalization", "What is a transitive dependency? Why can it be a problem?", ["transitive dependency", "key", "non-key", "3nf", "anomaly"], "A transitive dependency exists when a key determines a non-key attribute through another non-key attribute. It can cause redundancy and update anomalies."],
    ["File Organization", "Compare heap files and sorted files.", ["heap", "sorted", "insert", "range", "search"], "Heap files are easy for insertion but may need linear search. Sorted files support ordered scans and range queries but are more expensive to maintain after insertions."],
    ["Hashing", "What is bucket overflow and how can it be handled?", ["bucket overflow", "collision", "overflow chain", "split", "hash"], "Bucket overflow happens when too many records map to the same bucket. It can be handled with overflow chains or dynamic hashing methods such as extendible or linear hashing."],
    ["Concurrency", "What is a precedence graph used for?", ["precedence graph", "schedule", "conflict", "cycle", "serializable"], "A precedence graph represents conflicts between transactions. If the graph has no cycle, the schedule is conflict-serializable."]
  ],
  [
    ["Relational Model", "What is a domain in the relational model?", ["domain", "allowed values", "attribute", "type", "constraint"], "A domain is the set of allowed values for an attribute, such as integers, dates, or a defined set of valid strings."],
    ["SQL", "Explain the role of aggregate functions and name two examples.", ["aggregate", "count", "sum", "avg", "group"], "Aggregate functions compute one value from multiple rows. Examples include COUNT, SUM, AVG, MIN, and MAX."],
    ["Views", "Why can updating a view be difficult?", ["view", "update", "base table", "ambiguous", "join"], "A view update can be difficult when one view row does not clearly map to one base-table row, especially if the view uses joins, grouping, or derived columns."],
    ["BCNF", "State the BCNF condition in terms of functional dependencies.", ["bcnf", "non-trivial", "functional dependency", "determinant", "superkey"], "For every non-trivial functional dependency X -> Y, X must be a superkey."],
    ["Indexing", "What is a secondary index? Give a likely use case.", ["secondary index", "non-ordering", "attribute", "search", "pointer"], "A secondary index is built on an attribute that is not necessarily the physical ordering key. It helps queries search by that attribute, such as searching employees by department."],
    ["Transactions", "Explain isolation using a simple example.", ["isolation", "concurrent", "transaction", "interfere", "serial"], "Isolation means concurrent transactions should behave as if they were executed safely, without incorrect interference. For example, one transfer should not read another transfer's half-finished update."],
    ["Locking", "What is the difference between shared and exclusive locks?", ["shared", "exclusive", "read", "write", "conflict"], "A shared lock is usually for reading and can coexist with other shared locks. An exclusive lock is for writing and conflicts with shared or exclusive locks on the same item."]
  ],
  [
    ["Why Databases", "What is program-data independence?", ["program-data independence", "programs", "storage", "schema", "change"], "Program-data independence means application programs are less affected by changes in data storage or logical structure."],
    ["ER Model", "Explain total participation with an example.", ["total participation", "every entity", "relationship", "must", "example"], "Total participation means every entity in an entity set must participate in a relationship. For example, every employee must belong to a department."],
    ["SQL", "What is a subquery and where might it be used?", ["subquery", "nested", "select", "where", "from"], "A subquery is a query inside another query. It can be used in WHERE, FROM, or SELECT to express conditions based on another result."],
    ["2NF", "Give a short example of a partial dependency.", ["partial dependency", "composite key", "student", "course", "non-key"], "If the key is (StudentID, CourseID) and StudentID determines StudentName, then StudentName depends on only part of the key, so it is a partial dependency."],
    ["Files", "Why is disk I/O a major cost in database systems?", ["disk i/o", "slow", "memory", "block", "cost"], "Disk access is much slower than memory access, so reading and writing blocks often dominates query cost."],
    ["B+ Trees", "Why is high fan-out useful in a B+ tree?", ["fan-out", "height", "disk i/o", "children", "search"], "High fan-out means each node has many children, making the tree height small. A smaller height usually means fewer disk I/Os during search."],
    ["Recovery", "Why does a DBMS keep a transaction log?", ["log", "recovery", "undo", "redo", "failure"], "A transaction log records actions so the DBMS can undo uncommitted work or redo committed work after a failure."]
  ],
  [
    ["Relational Algebra", "What does union compatibility mean?", ["union compatibility", "same number", "attributes", "domains", "union"], "Two relations are union-compatible if they have the same number of attributes and corresponding attributes have compatible domains."],
    ["JDBC", "What is autocommit, and why might a program disable it?", ["autocommit", "commit", "transaction", "disable", "rollback"], "Autocommit commits each statement automatically. A program may disable it to group several statements into one transaction that can commit or roll back together."],
    ["ER Model", "What is a composite attribute? Give an example.", ["composite attribute", "subattributes", "name", "address", "example"], "A composite attribute can be divided into smaller parts, such as Address being divided into street, city, and postcode."],
    ["3NF", "Why is lossless decomposition important?", ["lossless", "decomposition", "join", "original", "spurious"], "Lossless decomposition ensures that joining the decomposed relations can reconstruct the original relation without losing information or creating spurious tuples."],
    ["Files", "Explain fixed-length and variable-length records.", ["fixed-length", "variable-length", "record", "fields", "storage"], "Fixed-length records have the same size and are easier to locate. Variable-length records can store fields of different sizes but need extra management such as offsets."],
    ["Hashing", "What is extendible hashing?", ["extendible hashing", "directory", "bucket", "split", "dynamic"], "Extendible hashing is a dynamic hashing method that uses a directory. Buckets can split, and the directory may double when needed."],
    ["Concurrency", "What is deadlock in lock-based concurrency control?", ["deadlock", "wait", "cycle", "locks", "transactions"], "Deadlock happens when transactions wait for each other's locks in a cycle, so none of them can continue unless one is aborted."]
  ],
  [
    ["Relational Model", "Why should a primary key be minimal as well as unique?", ["primary key", "minimal", "unique", "candidate key", "attributes"], "A key should uniquely identify tuples without unnecessary attributes. If an attribute can be removed and uniqueness remains, the original set was not minimal."],
    ["SQL", "Explain the difference between COUNT(*) and COUNT(attribute).", ["count", "count(*)", "null", "attribute", "rows"], "COUNT(*) counts all rows. COUNT(attribute) counts non-null values of that attribute."],
    ["Views", "Give one security use of a view.", ["view", "security", "hide", "columns", "rows"], "A view can hide sensitive columns or rows, allowing users to query only the data they are permitted to see."],
    ["Normalization", "What is a deletion anomaly?", ["deletion anomaly", "delete", "lose", "fact", "redundancy"], "A deletion anomaly occurs when deleting one fact also unintentionally removes another fact that should be kept."],
    ["Indexing", "Why do indexes speed up reads but slow down updates?", ["index", "read", "update", "insert", "maintenance"], "Indexes provide faster search paths for reads, but insertions, deletions, and updates must also update the index structure."],
    ["Hashing", "Compare static hashing and dynamic hashing.", ["static hashing", "dynamic hashing", "bucket", "grow", "overflow"], "Static hashing has a fixed bucket structure and may develop long overflow chains. Dynamic hashing grows by splitting buckets or changing directories."],
    ["Transactions", "What is a recoverable schedule?", ["recoverable", "schedule", "commit", "read from", "transaction"], "A recoverable schedule ensures that if one transaction reads data from another, it commits only after the transaction it read from has committed."]
  ],
  [
    ["Schemas", "Explain physical data independence.", ["physical data independence", "storage", "internal", "change", "applications"], "Physical data independence means changes in physical storage, such as indexes or file organization, should not require changes to applications."],
    ["Relational Algebra", "How can a join be understood using Cartesian product and selection?", ["join", "cartesian product", "selection", "condition", "combine"], "A join can be seen as a Cartesian product followed by a selection condition that keeps matching tuple combinations."],
    ["JDBC", "Why should JDBC resources be closed?", ["close", "connection", "statement", "resultset", "resources"], "Connections, statements, and result sets use system and database resources. Closing them prevents resource leaks."],
    ["ER Mapping", "How is a multivalued attribute usually mapped to relations?", ["multivalued", "separate relation", "foreign key", "attribute", "entity"], "A multivalued attribute is usually mapped to a separate relation containing the owner's key and the multivalued attribute."],
    ["B+ Trees", "Explain why B+ tree leaves are linked.", ["leaf", "linked", "range", "ordered", "scan"], "Leaf nodes are linked so the system can scan records in key order efficiently, especially for range queries."],
    ["Transactions", "What is cascading rollback?", ["cascading rollback", "uncommitted", "read", "rollback", "transaction"], "Cascading rollback occurs when one transaction must roll back because it read data from another transaction that later rolled back."],
    ["Locking", "What is lock granularity?", ["lock granularity", "row", "page", "table", "item"], "Lock granularity is the size of the object being locked, such as a row, page, table, or whole database."]
  ],
  [
    ["Why Databases", "What does the DBMS query processor do?", ["query processor", "parse", "optimize", "execute", "sql"], "The query processor parses SQL, chooses an execution plan, optimizes the plan, and executes the query."],
    ["Relational Model", "Explain the difference between a relation schema and a relation instance.", ["schema", "instance", "structure", "current data", "relation"], "The schema is the structure, including relation name and attributes. The instance is the current set of tuples stored at a specific time."],
    ["SQL", "Why can NULL values make SQL conditions tricky?", ["null", "unknown", "condition", "comparison", "three-valued"], "NULL represents unknown or missing information, so comparisons with NULL often produce UNKNOWN rather than true or false."],
    ["Normalization", "What are insertion, update, and deletion anomalies?", ["insertion", "update", "deletion", "anomalies", "redundancy"], "They are problems caused by poor design: difficulty inserting facts, inconsistent updates, and losing facts accidentally during deletion."],
    ["Indexing", "What does it mean for an index to be clustered?", ["clustered", "physical order", "index", "records", "range"], "A clustered index is related to the physical ordering of records, so records with nearby key values are stored close together."],
    ["Transactions", "Explain conflict serializability in simple words.", ["conflict serializable", "equivalent", "serial", "conflict", "schedule"], "A schedule is conflict-serializable if its conflicting operations can be reordered to produce an equivalent serial schedule."],
    ["2PL", "Why does strict two-phase locking help recovery?", ["strict 2pl", "exclusive locks", "commit", "abort", "dirty read"], "Strict 2PL holds write locks until commit or abort, preventing other transactions from reading uncommitted data and reducing cascading rollback."]
  ]
];

const compSets = [
  [
    {
      topic: "B+ Tree Index Analysis",
      caseText: "A STUDENT file has 80,000 records and a B+ tree index on StudentID. Leaf nodes are linked. Common queries are exact lookup by StudentID and range lookup for StudentID between 20000 and 26000.",
      subs: [
        ["Explain how the B+ tree handles exact search and range search.", 8, ["root", "internal", "leaf", "range", "linked leaves", "studentid"], "Exact search starts at the root, follows separator keys through internal nodes, and reaches the target leaf. Range search first finds the starting key in a leaf, then scans linked leaves in sorted key order until the upper bound is passed."],
        ["Why is a B+ tree better than a hash index for the range query?", 7, ["b+ tree", "range", "ordered", "hash", "bucket"], "A B+ tree keeps keys ordered at the leaf level, so range scanning is efficient. A hash index maps keys to buckets and does not preserve order, so it is mainly suitable for exact-match lookup."]
      ]
    },
    {
      topic: "ER Model and Mapping",
      caseText: "A university has STUDENT, COURSE, and INSTRUCTOR. Students enroll in many courses; each course has many students. Each course is taught by one instructor, and one instructor can teach many courses.",
      subs: [
        ["Draw or describe the ER relationships and cardinalities.", 8, ["student", "course", "instructor", "many-to-many", "one-to-many", "enroll"], "STUDENT and COURSE have a many-to-many relationship ENROLL. INSTRUCTOR and COURSE have a one-to-many relationship: one instructor teaches many courses, and each course has one instructor."],
        ["Map the ER model into relations with primary keys and foreign keys.", 7, ["student", "course", "instructor", "enroll", "primary key", "foreign key"], "Use STUDENT(SID, ...), INSTRUCTOR(IID, ...), COURSE(CourseID, ..., IID), and ENROLL(SID, CourseID, Grade). COURSE.IID references INSTRUCTOR. ENROLL.SID references STUDENT and ENROLL.CourseID references COURSE; (SID, CourseID) can be the primary key of ENROLL."]
      ]
    }
  ],
  [
    {
      topic: "B-Tree vs B+ Tree",
      caseText: "A database designer is choosing between a B-tree and a B+ tree for an index on ProductID. The workload has exact searches and frequent ordered scans over ProductID ranges.",
      subs: [
        ["Compare B-tree and B+ tree structure for database indexing.", 8, ["b-tree", "b+ tree", "internal", "leaf", "data entries"], "In a B-tree, search keys and data pointers may appear in internal nodes and leaves. In a B+ tree, internal nodes mainly guide search, while data entries are stored at the leaf level. This makes leaf-level scans simpler."],
        ["Choose the better structure for ordered range scans and justify.", 7, ["b+ tree", "linked leaves", "range scan", "ordered", "leaf"], "A B+ tree is usually better for ordered range scans because all data entries are at ordered linked leaves. After finding the first key, the system can scan leaf nodes sequentially."]
      ]
    },
    {
      topic: "Weak Entity ER Mapping",
      caseText: "A library stores BOOK(BookID, Title) and COPY(CopyNo, Shelf). CopyNo is unique only within the same book. Members borrow copies.",
      subs: [
        ["Explain why COPY is a weak entity and identify its owner and partial key.", 8, ["weak entity", "book", "owner", "partial key", "copyno"], "COPY is weak because CopyNo alone is not globally unique. BOOK is the owner entity, and CopyNo is the partial key. A copy is identified by BookID plus CopyNo."],
        ["Map BOOK, COPY, MEMBER, and LOAN into relations.", 7, ["book", "copy", "member", "loan", "foreign key", "primary key"], "BOOK(BookID, Title). COPY(BookID, CopyNo, Shelf) with primary key (BookID, CopyNo) and BookID as foreign key. MEMBER(MemberID, ...). LOAN(MemberID, BookID, CopyNo, LoanDate, ReturnDate) references MEMBER and COPY."]
      ]
    }
  ],
  [
    {
      topic: "B+ Tree Insertion",
      caseText: "A B+ tree leaf node is full. A new search key must be inserted into this leaf. The parent may also become full after receiving the separator key.",
      subs: [
        ["Describe the insertion steps when the leaf overflows.", 8, ["insert", "overflow", "split", "leaf", "separator"], "Insert the key in sorted order, split the overflowing leaf into two leaves, redistribute entries, keep leaf links correct, and copy/promote a separator key to the parent."],
        ["Explain what happens if the parent also overflows.", 7, ["parent", "overflow", "split", "propagate", "root"], "If the parent overflows, it is also split and a separator key is propagated upward. If the root splits, a new root is created and the tree height increases by one."]
      ]
    },
    {
      topic: "ER Constraints",
      caseText: "A hospital database has PATIENT, DOCTOR, APPOINTMENT, and PRESCRIPTION. A patient can have many appointments. Each appointment is with exactly one doctor.",
      subs: [
        ["Identify main entity sets and relationships with cardinalities.", 8, ["patient", "doctor", "appointment", "one-to-many", "many"], "PATIENT and APPOINTMENT have a one-to-many relationship: one patient can have many appointments. DOCTOR and APPOINTMENT also have one-to-many: one doctor can appear in many appointments, but each appointment has one doctor."],
        ["Suggest relations and keys for this ER model.", 7, ["patient", "doctor", "appointment", "prescription", "primary key", "foreign key"], "PATIENT(PID,...), DOCTOR(DID,...), APPOINTMENT(AppID, PID, DID, DateTime,...) with PID and DID as foreign keys, and PRESCRIPTION(PrescID, AppID, Drug, Dose,...) referencing APPOINTMENT."]
      ]
    }
  ],
  [
    {
      topic: "Index Selection with B+ Tree",
      caseText: "EMP(EmpID, Dept, Salary, Age) has 1,000,000 records. Queries often search EmpID exactly and Salary ranges such as Salary BETWEEN 50000 AND 70000.",
      subs: [
        ["Choose suitable indexes for EmpID and Salary.", 8, ["empid", "hash", "b+ tree", "salary", "range"], "EmpID exact lookup can use a hash index or primary index. Salary range lookup should use a B+ tree because the ordered leaf level supports range scans."],
        ["Explain why the same index type may not be best for both queries.", 7, ["exact match", "range", "hash", "b+ tree", "ordered"], "Hashing is strong for exact-match queries but does not preserve order. B+ trees support exact lookup and range lookup, but may have slightly more traversal cost for pure exact matches."]
      ]
    },
    {
      topic: "ER to Relational Schema",
      caseText: "A company has EMPLOYEE, DEPARTMENT, and PROJECT. Each employee works for one department. Employees can work on many projects, and each project can have many employees.",
      subs: [
        ["Describe the ER relationships and cardinalities.", 8, ["employee", "department", "project", "one-to-many", "many-to-many"], "DEPARTMENT to EMPLOYEE is one-to-many. EMPLOYEE to PROJECT is many-to-many through a WORKS_ON relationship."],
        ["Map the model into relations.", 7, ["employee", "department", "project", "works_on", "foreign key"], "DEPARTMENT(DeptID,...), EMPLOYEE(EmpID,...,DeptID) where DeptID is a foreign key, PROJECT(ProjectID,...), and WORKS_ON(EmpID, ProjectID, Hours) with foreign keys to EMPLOYEE and PROJECT."]
      ]
    }
  ],
  [
    {
      topic: "B+ Tree and File I/O",
      caseText: "A B+ tree index has height 3. Each node is stored in one disk block. Assume the root is not cached.",
      subs: [
        ["Estimate the number of block reads for one exact search.", 8, ["height", "3", "block", "root", "leaf"], "An exact search reads one node per level: root, internal level, and leaf. With height 3 and no cached root, about 3 index block reads are needed, plus possible data block read if the data record is stored separately."],
        ["Explain why high fan-out reduces search cost.", 7, ["fan-out", "height", "block", "i/o", "children"], "High fan-out means each internal node has many child pointers. More children per node reduce tree height, and lower height means fewer disk I/Os."]
      ]
    },
    {
      topic: "ER Model with Attributes",
      caseText: "A cinema database has MOVIE, SCREEN, SHOWTIME, and TICKET. A movie can have many showtimes. A ticket is sold for one showtime and one seat.",
      subs: [
        ["Identify entities, relationships, and important attributes.", 8, ["movie", "showtime", "ticket", "screen", "seat"], "Entities include MOVIE, SCREEN, SHOWTIME, and TICKET. SHOWTIME relates MOVIE and SCREEN with time/date attributes. TICKET relates to one SHOWTIME and has seat and price attributes."],
        ["Map the ER design into relations.", 7, ["movie", "screen", "showtime", "ticket", "foreign key"], "MOVIE(MovieID,...), SCREEN(ScreenID,...), SHOWTIME(ShowID, MovieID, ScreenID, StartTime,...) with foreign keys to MOVIE and SCREEN, and TICKET(TicketID, ShowID, SeatNo, Price,...) referencing SHOWTIME."]
      ]
    }
  ],
  [
    {
      topic: "B+ Tree Deletion",
      caseText: "A B+ tree entry is deleted from a leaf. After deletion, the leaf has fewer entries than the minimum occupancy requirement.",
      subs: [
        ["Describe possible actions after underflow.", 8, ["underflow", "redistribute", "merge", "sibling", "parent"], "The tree can redistribute entries from a sibling if possible. If redistribution is not possible, it merges the leaf with a sibling and updates the parent separator key."],
        ["Explain why the tree must remain balanced.", 7, ["balanced", "same length", "root-to-leaf", "search", "height"], "A B+ tree keeps all root-to-leaf paths at the same length. This balance guarantees predictable search cost and avoids degeneration into a long chain."]
      ]
    },
    {
      topic: "ER Generalization",
      caseText: "A university stores PERSON. STUDENT and INSTRUCTOR are special types of PERSON. All persons have PID and Name; students have Major; instructors have Office.",
      subs: [
        ["Explain the ER generalization/specialization.", 8, ["person", "student", "instructor", "superclass", "subclass"], "PERSON is the superclass. STUDENT and INSTRUCTOR are subclasses that inherit PID and Name and add their own attributes such as Major and Office."],
        ["Give one possible relational mapping.", 7, ["person", "student", "instructor", "primary key", "foreign key"], "One mapping is PERSON(PID, Name), STUDENT(PID, Major), and INSTRUCTOR(PID, Office). STUDENT.PID and INSTRUCTOR.PID are primary keys and foreign keys referencing PERSON."]
      ]
    }
  ],
  [
    {
      topic: "B+ Tree vs Sorted File",
      caseText: "A sorted file and a B+ tree index are both available for records ordered by AccountNo. The table receives frequent insertions.",
      subs: [
        ["Compare insertion cost in sorted files and B+ tree indexes.", 8, ["sorted file", "insertion", "b+ tree", "split", "maintain order"], "A sorted file may require moving records or managing overflow areas to keep order. A B+ tree handles insertions by inserting into a leaf and splitting nodes when needed, while preserving balance."],
        ["Explain which structure is more flexible for a growing file.", 7, ["b+ tree", "dynamic", "growing", "split", "balanced"], "A B+ tree is more flexible for growth because it dynamically splits nodes and remains balanced. A sorted file can become expensive to maintain with many insertions."]
      ]
    },
    {
      topic: "ER Relationship Attributes",
      caseText: "Students enroll in courses. Each enrollment has Semester and Grade. A student can enroll in the same course in different semesters.",
      subs: [
        ["Explain why Semester and Grade belong to the relationship.", 8, ["enrollment", "relationship", "semester", "grade", "student course"], "Semester and Grade describe a student's enrollment in a course, not the student alone or the course alone. They are attributes of the ENROLL relationship."],
        ["Map this into relations and choose a key for ENROLL.", 7, ["student", "course", "enroll", "semester", "primary key"], "Use STUDENT(SID,...), COURSE(CourseID,...), and ENROLL(SID, CourseID, Semester, Grade). Because the same student can repeat a course in different semesters, a suitable key is (SID, CourseID, Semester)."]
      ]
    }
  ],
  [
    {
      topic: "B+ Tree Composite Index",
      caseText: "A relation ORDER(OrderID, CustomerID, OrderDate, Amount) has a B+ tree index on (CustomerID, OrderDate).",
      subs: [
        ["Which queries benefit from this composite B+ tree index?", 8, ["customerid", "orderdate", "composite", "prefix", "range"], "Queries filtering by CustomerID benefit, especially with an OrderDate range for that customer. The index follows the left-prefix rule, so CustomerID alone or CustomerID plus OrderDate can be useful."],
        ["Explain one query that would not use this index well.", 7, ["orderdate only", "left prefix", "customerid", "not efficient"], "A query filtering only by OrderDate may not use the composite index well because the leading attribute CustomerID is missing. The ordering is primarily by CustomerID, then OrderDate."]
      ]
    },
    {
      topic: "ER Participation Constraints",
      caseText: "Every order must be placed by exactly one customer. A customer may have zero or many orders.",
      subs: [
        ["Describe the participation and cardinality constraints.", 8, ["order", "customer", "total participation", "one-to-many", "zero or many"], "ORDER has total participation in the PLACED_BY relationship because every order must have a customer. CUSTOMER to ORDER is one-to-many, and a customer may have zero or many orders."],
        ["Map CUSTOMER and ORDER into relations.", 7, ["customer", "order", "foreign key", "customerid", "not null"], "CUSTOMER(CustomerID, ...). ORDER(OrderID, CustomerID, OrderDate, ...), where ORDER.CustomerID is a non-null foreign key referencing CUSTOMER."]
      ]
    }
  ],
  [
    {
      topic: "B+ Tree and Covering Index",
      caseText: "SALES(SaleID, StoreID, SaleDate, Amount). Query: SELECT StoreID, SaleDate, Amount FROM SALES WHERE StoreID = 10 AND SaleDate BETWEEN '2026-01-01' AND '2026-01-31'.",
      subs: [
        ["Suggest a B+ tree index for this query.", 8, ["storeid", "saledate", "amount", "b+ tree", "range"], "A useful index is on (StoreID, SaleDate), possibly including Amount if the DBMS supports covering indexes. StoreID supports equality filtering and SaleDate supports range scanning inside that store."],
        ["Explain what a covering index means here.", 7, ["covering index", "all needed attributes", "storeid", "saledate", "amount"], "A covering index contains all attributes needed by the query, so the DBMS can answer using the index without fetching full table records. Here StoreID, SaleDate, and Amount are needed."]
      ]
    },
    {
      topic: "ER Model to Normalized Tables",
      caseText: "A supplier database stores SUPPLIER, PART, and SHIPMENT. A supplier can ship many parts, and a part can be shipped by many suppliers. Each shipment has Quantity and ShipDate.",
      subs: [
        ["Identify the ER relationship and its attributes.", 8, ["supplier", "part", "shipment", "many-to-many", "quantity", "shipdate"], "SUPPLIER and PART have a many-to-many relationship SHIPMENT. Quantity and ShipDate are attributes of that relationship because they describe a specific supplier-part shipment."],
        ["Map it into normalized relations.", 7, ["supplier", "part", "shipment", "primary key", "foreign key"], "SUPPLIER(SupplierID,...), PART(PartID,...), and SHIPMENT(SupplierID, PartID, ShipDate, Quantity). SupplierID and PartID are foreign keys; the primary key may include SupplierID, PartID, and ShipDate if multiple shipments over time are allowed."]
      ]
    }
  ],
  [
    {
      topic: "B+ Tree and Hash Index Choice",
      caseText: "A system has queries: Q1 UserID = 12345, Q2 UserID BETWEEN 10000 AND 20000, Q3 ORDER BY UserID.",
      subs: [
        ["Choose between hash index and B+ tree index for these queries.", 8, ["hash", "b+ tree", "exact match", "range", "order by"], "A hash index is good for Q1 exact lookup. A B+ tree is better for Q2 range lookup and Q3 ordered output because it preserves key order."],
        ["If only one index can be built, which one is safer overall?", 7, ["b+ tree", "exact", "range", "order", "general"], "A B+ tree is safer overall because it supports exact search reasonably well and also supports range queries and ordered scans. Hashing is narrower because it mainly supports exact match."]
      ]
    },
    {
      topic: "Full ER Design",
      caseText: "An online store has CUSTOMER, ORDER, PRODUCT, and ORDER_LINE. An order belongs to one customer. An order contains many products, and each product can appear in many orders.",
      subs: [
        ["Describe the ER entities and relationships.", 8, ["customer", "order", "product", "order_line", "one-to-many", "many-to-many"], "CUSTOMER to ORDER is one-to-many. ORDER and PRODUCT are many-to-many, resolved by ORDER_LINE. ORDER_LINE represents each product item inside an order."],
        ["Map the ER model into relations with keys.", 7, ["customer", "order", "product", "order_line", "primary key", "foreign key"], "CUSTOMER(CustomerID,...), ORDER(OrderID, CustomerID,...), PRODUCT(ProductID,...), ORDER_LINE(OrderID, ProductID, Quantity, Price). ORDER.CustomerID references CUSTOMER; ORDER_LINE references ORDER and PRODUCT; (OrderID, ProductID) can be the key if each product appears once per order."]
      ]
    }
  ]
];

(function enhanceForShortAnswers() {
  const style = document.createElement("style");
  style.textContent = `
    textarea { width: 100%; min-height: 110px; box-sizing: border-box; font: inherit; padding: 10px; border: 1px solid #aaa; }
    .rubric { margin-top: 8px; padding: 10px; background: #f7f7f7; border: 1px solid #ddd; line-height: 1.45; }
    .explanation { margin-top: 8px; padding: 10px; background: #f7f7f7; border: 1px solid #ddd; line-height: 1.5; font-weight: normal; }
    .explanation b { font-weight: 700; }
    .wrongbook-empty { padding: 18px; background: #fff; border: 1px solid #ddd; }
    .wrongbook-actions { display: flex; gap: 8px; flex-wrap: wrap; margin: 10px 0; }
    .tag { display: inline-block; border: 1px solid #bbb; padding: 2px 7px; margin-right: 6px; font-size: 12px; background: #fafafa; }
    .casebox { padding: 12px; background: #fafafa; border: 1px solid #ccc; margin: 8px 0 14px; line-height: 1.5; }
    .subq { border-top: 1px solid #ddd; padding-top: 12px; margin-top: 12px; }
    .mode-note { font-size: 13px; color: #333; }
  `;
  document.head.appendChild(style);

  const panel = document.querySelector(".panel");
  const sectionLabel = document.createElement("label");
  sectionLabel.setAttribute("for", "sectionSelect");
  sectionLabel.innerHTML = "<b>Section</b>";
  const sectionSelect = document.createElement("select");
  sectionSelect.id = "sectionSelect";
  sectionSelect.innerHTML = '<option value="mcq">Multiple Choice (20 pts)</option><option value="short">Short Answer (35 pts)</option><option value="comp">Comprehensive (15 pts)</option><option value="wrongbook">Wrong Book 错题本</option>';
  panel.insertBefore(sectionSelect, panel.firstChild);
  panel.insertBefore(sectionLabel, panel.firstChild);
  sectionSelect.addEventListener("change", loadSet);
  setSelect.addEventListener("change", loadSet);

  document.querySelector("h1").textContent = "Database Systems Mock Exam Practice";
  document.querySelector("header p").innerHTML = "Choose one of 10 mock sets, then choose <b>Multiple Choice</b>, <b>Short Answer</b>, or <b>Comprehensive</b>. MCQ is graded exactly. Written answers are scored by keyword match and include detailed explanations for self-checking.";
})();

const WRONG_BOOK_KEY = "databaseQuizWrongBookV1";

function wrongBookItems() {
  try {
    return JSON.parse(localStorage.getItem(WRONG_BOOK_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveWrongBook(items) {
  localStorage.setItem(WRONG_BOOK_KEY, JSON.stringify(items));
}

function wrongKey(type, setIndex, questionIndex) {
  return `${type}:${setIndex}:${questionIndex}`;
}

function addWrongItem(item) {
  const items = wrongBookItems();
  const key = wrongKey(item.type, item.setIndex, item.questionIndex);
  const next = items.filter(existing => existing.key !== key);
  next.unshift({ ...item, key, savedAt: new Date().toISOString() });
  saveWrongBook(next.slice(0, 200));
}

function flashManualButton(buttonId) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;
  const old = btn.textContent;
  btn.textContent = "Added to Wrong Book";
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = old;
    btn.disabled = false;
  }, 1200);
}

function manualAddWrong(type, questionIndex) {
  const setIndex = Number(setSelect.value);
  if (type === "mcq") {
    const item = displayedMcqItem(originalCurrentSet()[questionIndex], questionIndex);
    addWrongItem({
      type: "mcq",
      setIndex,
      questionIndex,
      topic: item[0],
      question: item[1],
      options: item[2],
      answer: item[3]
    });
    flashManualButton(`add-mcq-${questionIndex}`);
    return;
  }
  if (type === "comp") {
    const [bigIndex, subIndex] = String(questionIndex).split("-").map(Number);
    const big = currentCompSet()[bigIndex];
    const sub = big.subs[subIndex];
    addWrongItem({
      type: "comp",
      setIndex,
      questionIndex: `${bigIndex}-${subIndex}`,
      topic: big.topic,
      caseText: big.caseText,
      question: sub[0],
      points: sub[1],
      keywords: sub[2],
      model: sub[3],
      score: "manual"
    });
    flashManualButton(`add-comp-${bigIndex}-${subIndex}`);
    return;
  }
  const item = currentShortSet()[questionIndex];
  addWrongItem({
    type: "short",
    setIndex,
    questionIndex,
    topic: item[0],
    question: item[1],
    keywords: item[2],
    model: item[3],
    score: "manual"
  });
  flashManualButton(`add-short-${questionIndex}`);
}

function removeWrongIfMastered(type, setIndex, questionIndex) {
  const key = wrongKey(type, setIndex, questionIndex);
  saveWrongBook(wrongBookItems().filter(item => item.key !== key));
}

function renderWrongBook() {
  const quiz = document.getElementById("quiz");
  const items = wrongBookItems();
  document.getElementById("score").textContent = `Wrong Book: ${items.length} item${items.length === 1 ? "" : "s"}`;
  if (!items.length) {
    quiz.innerHTML = '<div class="wrongbook-empty"><b>No wrong questions yet.</b><p>Submit an MCQ set or Short Answer set first. Wrong MCQs and short answers below full score will be saved here automatically.</p></div>';
    return;
  }
  quiz.innerHTML = `
    <section class="question">
      <h2>Wrong Book 错题本</h2>
      <p>This list is saved in this browser. Correctly answered MCQs are removed automatically when you submit that set again. You can also remove items manually.</p>
      <div class="wrongbook-actions">
        <button type="button" onclick="clearWrongBook()">Clear Wrong Book</button>
      </div>
    </section>
  `;
  items.forEach((item, idx) => {
    const section = document.createElement("section");
    section.className = "question";
    if (item.type === "mcq") {
      section.innerHTML = `
        <div class="meta"><span class="tag">MCQ</span><span class="tag">Set ${item.setIndex + 1}</span><span class="tag">Q${item.questionIndex + 1}</span><span class="tag">${escapeHtml(item.topic)}</span></div>
        <h2>${escapeHtml(item.question)}</h2>
        <div>${item.options.map((op, i) => `<p>${letters[i]}. ${escapeHtml(op)}</p>`).join("")}</div>
        ${mcqExplanation([item.topic, item.question, item.options, item.answer])}
        <div class="wrongbook-actions"><button type="button" onclick="removeWrongItem('${item.key}')">Remove</button></div>
      `;
    } else {
      section.innerHTML = `
        <div class="meta"><span class="tag">${item.type === "comp" ? "Comprehensive" : "Short Answer"}</span><span class="tag">Set ${item.setIndex + 1}</span><span class="tag">Q${String(item.questionIndex).includes("-") ? item.questionIndex : item.questionIndex + 1}</span><span class="tag">${escapeHtml(item.topic)}</span><span class="tag">Last score ${item.score}/${item.points || 5}</span></div>
        <h2>${escapeHtml(item.question)}</h2>
        ${item.caseText ? `<div class="casebox"><b>Case:</b> ${escapeHtml(item.caseText)}</div>` : ""}
        ${writtenExplanation(item.topic, item.keywords, item.model, item.points || 5)}
        <div class="wrongbook-actions"><button type="button" onclick="removeWrongItem('${item.key}')">Remove</button></div>
      `;
    }
    quiz.appendChild(section);
  });
}

function removeWrongItem(key) {
  saveWrongBook(wrongBookItems().filter(item => item.key !== key));
  renderWrongBook();
}

function clearWrongBook() {
  if (confirm("Clear all wrong questions?")) {
    saveWrongBook([]);
    renderWrongBook();
  }
}

const topicNotes = {
  "Why Databases": [
    "This question tests why DBMSs are used: they reduce uncontrolled redundancy, support shared access, query processing, integrity, security, and recovery.",
    "本题考查为什么使用数据库管理系统：DBMS 可以减少无控制冗余，支持共享访问、查询处理、完整性、安全性和故障恢复。"
  ],
  "Database basics": [
    "A DBMS is not just a storage file. It manages data definition, querying, updates, constraints, concurrency, recovery, and security.",
    "DBMS 不只是存文件，而是负责数据定义、查询、更新、约束、并发、恢复和安全控制。"
  ],
  "Relational Model": [
    "The relational model organizes data as relations. Important ideas include tuples, attributes, domains, keys, foreign keys, and integrity constraints.",
    "关系模型把数据组织成关系表，核心概念包括元组、属性、域、键、外键和完整性约束。"
  ],
  "Data models": [
    "The three-schema architecture separates user views, the conceptual logical design, and internal physical storage to support data independence.",
    "三级模式结构把用户视图、概念逻辑结构和内部物理存储分开，用来支持数据独立性。"
  ],
  "Schemas and Views": [
    "Schemas and views separate what users see from how data is logically and physically stored. Views can simplify queries and support security.",
    "模式和视图把用户看到的数据与逻辑/物理存储分开。视图可以简化查询，也可以用于权限和安全控制。"
  ],
  "Schemas": [
    "Schema questions usually focus on data independence: applications should not change just because storage details change.",
    "模式相关题通常考数据独立性：存储细节变化时，应用程序不应被迫大改。"
  ],
  "Views": [
    "A view is a query-defined representation. It may hide columns or rows, simplify repeated queries, and sometimes creates update ambiguity.",
    "视图是由查询定义出来的表示，可以隐藏列或行、简化重复查询，但有时会带来更新歧义。"
  ],
  "Relational Algebra": [
    "Relational algebra is a formal query language. Selection filters rows; projection keeps columns; joins combine related tuples.",
    "关系代数是形式化查询语言。选择筛选行，投影保留列，连接把相关元组组合起来。"
  ],
  "SQL": [
    "SQL questions often test the logical order of query processing: WHERE filters rows before grouping, while HAVING filters groups after aggregation.",
    "SQL 常考查询逻辑顺序：WHERE 在分组前筛选行，HAVING 在分组和聚合后筛选组。"
  ],
  "JDBC": [
    "JDBC connects Java programs to databases through Connection, Statement or PreparedStatement, ResultSet, and proper resource closing.",
    "JDBC 通过 Connection、Statement/PreparedStatement、ResultSet 等对象让 Java 程序访问数据库，并且要及时关闭资源。"
  ],
  "ER Model": [
    "ER modeling describes entities, attributes, relationships, cardinality, participation, weak entities, and mapping rules into relations.",
    "ER 模型描述实体、属性、联系、基数、参与约束、弱实体，以及如何映射成关系表。"
  ],
  "ER Mapping": [
    "ER-to-relational mapping turns entity sets and relationships into tables, usually using primary keys and foreign keys.",
    "ER 到关系模型的映射会把实体集和联系转换成表，通常依靠主键和外键表达关联。"
  ],
  "Normalization": [
    "Normalization uses functional dependencies to reduce redundancy and avoid insertion, update, and deletion anomalies.",
    "规范化利用函数依赖来减少冗余，避免插入异常、更新异常和删除异常。"
  ],
  "2NF": [
    "Second Normal Form removes partial dependencies of non-prime attributes on only part of a composite candidate key.",
    "第二范式消除非主属性对复合候选键一部分的部分依赖。"
  ],
  "3NF": [
    "Third Normal Form reduces transitive dependency problems while preserving a practical balance between normalization and dependency preservation.",
    "第三范式主要减少传递依赖问题，同时在规范化和依赖保持之间取得实用平衡。"
  ],
  "3NF/BCNF": [
    "BCNF is stricter than 3NF: every non-trivial determinant must be a superkey. 3NF has limited exceptions for prime attributes.",
    "BCNF 比 3NF 更严格：每个非平凡函数依赖的决定因素都必须是超键。3NF 对主属性有一定例外。"
  ],
  "BCNF": [
    "BCNF checks every non-trivial functional dependency X -> Y and requires X to be a superkey.",
    "BCNF 检查每个非平凡函数依赖 X -> Y，并要求 X 必须是超键。"
  ],
  "Files": [
    "File organization questions focus on records, blocks, disk I/O, blocking factor, record pointers, and free-space management.",
    "文件组织题关注记录、磁盘块、磁盘 I/O、块因子、记录指针和空闲空间管理。"
  ],
  "File Organization": [
    "Heap, sorted, and hashed files support different access patterns. Heap files insert easily; sorted files help range scans; hashed files help exact match.",
    "堆文件、排序文件和哈希文件适合不同访问模式：堆文件便于插入，排序文件便于范围扫描，哈希文件便于等值查找。"
  ],
  "Secondary Indexes": [
    "A secondary index is an auxiliary access path on an attribute that is not necessarily the file ordering key. It speeds search but adds update cost.",
    "辅助索引是在不一定作为文件排序键的属性上建立的访问路径。它能加速查询，但会增加更新维护成本。"
  ],
  "Indexing": [
    "Indexes trade extra storage and maintenance cost for faster lookup. Dense, sparse, primary, secondary, and clustering indexes differ by entries and ordering.",
    "索引用额外存储和维护成本换取更快查找。稠密、稀疏、主索引、辅助索引和聚簇索引的区别在于索引项数量和物理排序关系。"
  ],
  "Dense Index": [
    "A dense index has an entry for every search-key value or record, so it is easy to find records but may require more space.",
    "稠密索引为每个搜索键值或每条记录建立索引项，查找方便但占用空间较多。"
  ],
  "Sparse Index": [
    "A sparse index has fewer entries and is usually possible when the data file is ordered on the search key.",
    "稀疏索引的索引项更少，通常要求数据文件按搜索键有序。"
  ],
  "B+ Trees": [
    "B+ trees are balanced multi-level indexes. High fan-out reduces height, and linked leaves support efficient range search.",
    "B+ 树是平衡的多级索引。高扇出降低树高，叶子节点链表支持高效范围查询。"
  ],
  "Hashing": [
    "Hashing maps a search key to a bucket. It is strong for exact-match queries but weak for range queries because key order is not preserved.",
    "哈希把搜索键映射到桶，适合等值查询；由于不保持键的顺序，不适合范围查询。"
  ],
  "Transactions": [
    "Transaction questions usually test ACID: atomicity, consistency, isolation, and durability, plus commit, rollback, and logging.",
    "事务题通常考 ACID：原子性、一致性、隔离性和持久性，以及提交、回滚和日志。"
  ],
  "Recovery": [
    "Recovery uses logs to undo uncommitted changes and redo committed changes after failures.",
    "恢复机制利用日志在故障后撤销未提交修改、重做已提交修改。"
  ],
  "Concurrency": [
    "Concurrency control checks whether interleaved transactions are still correct, often using serializability, conflict graphs, and recoverability.",
    "并发控制判断交错执行的事务是否仍然正确，常用可串行化、冲突图和可恢复性分析。"
  ],
  "Locking": [
    "Locking controls concurrent access. Shared locks are for reads, exclusive locks are for writes, and two-phase locking helps guarantee serializability.",
    "锁用于控制并发访问。共享锁用于读，排他锁用于写，两段锁协议有助于保证可串行化。"
  ],
  "2PL": [
    "Strict two-phase locking holds important locks until commit or abort, preventing dirty reads and helping recovery.",
    "严格两段锁会把关键锁保持到提交或回滚，防止脏读，并帮助恢复。"
  ]
};

function topicExplanation(topic) {
  return topicNotes[topic] || [
    "This question checks a core database concept. Focus on the definition, when it is used, and what problem it solves.",
    "本题考查数据库核心概念。复习时要抓住定义、使用场景，以及它解决的问题。"
  ];
}

function displayedMcqItem(item, questionIndex) {
  const [topic, question, options, answer] = item;
  const setIndex = Number(setSelect.value);
  const shift = (setIndex * 2 + questionIndex * 3 + 1) % options.length;
  const displayedOptions = options.slice(shift).concat(options.slice(0, shift));
  const displayedAnswer = (answer - shift + options.length) % options.length;
  return [topic, question, displayedOptions, displayedAnswer];
}

function wrongOptionReason(optionText, topic) {
  const lower = optionText.toLowerCase();
  if (/\balways\b|\bonly\b|\bnever\b|\ball\b|\bno\b/.test(lower)) {
    return "This option is too absolute or too narrow for this concept. Database rules usually depend on the model, constraint, access path, or transaction context.";
  }
  if (lower.includes("unrelated") || lower.includes("random")) {
    return "This option does not describe the database concept being tested by the question.";
  }
  if (topic.includes("SQL") && !/(where|having|group|select|count|order|query|subquery|null|update|distinct|foreign)/i.test(optionText)) {
    return "This option is not the SQL clause or SQL behavior required by the question.";
  }
  if (topic.includes("B+") && !/(tree|leaf|root|node|split|height|fan|range|key|pointer)/i.test(optionText)) {
    return "This option describes another database topic, not the B+ tree index rule in the question.";
  }
  if (topic.includes("Hash") && !/(hash|bucket|exact|collision|overflow|directory|split|range|key)/i.test(optionText)) {
    return "This option is not about how hash indexes map keys to buckets.";
  }
  if (topic.includes("Transaction") && !/(transaction|acid|atomic|commit|rollback|durability|isolation|schedule|log|failure)/i.test(optionText)) {
    return "This option belongs to another part of the course, not transaction processing.";
  }
  if (topic.includes("Lock") || topic.includes("Concurrency")) {
    if (!/(lock|serial|schedule|conflict|read|write|transaction|deadlock|phase|shared|exclusive)/i.test(optionText)) {
      return "This option does not explain the concurrency-control rule being tested.";
    }
  }
  if (topic.includes("Normalization") || topic.includes("2NF") || topic.includes("3NF") || topic.includes("BCNF")) {
    if (!/(dependency|key|attribute|normal|anomal|superkey|prime|lossless|decompos)/i.test(optionText)) {
      return "This option is not about functional dependencies or normalization rules.";
    }
  }
  return "This option does not match the exact definition or rule asked in the question. It may mention a related database idea, but it answers a different question.";
}

function mcqExplanation(item) {
  const [topic, question, options, answer] = item;
  const [en, zh] = topicExplanation(topic);
  const correct = `${letters[answer]}. ${options[answer]}`;
  const optionRows = options.map((option, idx) => {
    if (idx === answer) {
      return `<li><b>${letters[idx]}.</b> ${escapeHtml(option)}<br><b>Why it is correct:</b> This directly answers the question focus and matches the course rule for ${escapeHtml(topic)}.<br><b>为什么对：</b>该选项直接回应题干考点，符合 ${escapeHtml(topic)} 这一部分的定义或规则。</li>`;
    }
    return `<li><b>${letters[idx]}.</b> ${escapeHtml(option)}<br><b>Why it is wrong:</b> ${escapeHtml(wrongOptionReason(option, topic))}<br><b>为什么错：</b>这个选项没有准确回答题干要求，通常是概念不对应、条件说反、范围过大/过小，或把其他章节的知识点混进来了。</li>`;
  }).join("");
  return `<div class="explanation"><b>Correct answer:</b> ${escapeHtml(correct)}<br><b>Question focus:</b> ${escapeHtml(question)}<br><b>English explanation:</b> ${escapeHtml(en)} The correct option matches the exact definition, condition, or use case asked by the question.<br><b>中文解析：</b>${escapeHtml(zh)} 本题要先判断题干考的是定义、条件还是应用场景，再排除与该考点不匹配的选项。<br><b>Option analysis / 选项讲解：</b><ol>${optionRows}</ol></div>`;
}

function shortChineseExplanation(topic, keywords) {
  const [, zh] = topicExplanation(topic);
  return `${zh} 作答时应覆盖这些关键词或同义表达：${keywords.join("，")}。如果答案只写结论但没有解释作用、条件或例子，通常不能拿满分。`;
}

function writtenExplanation(topic, keywords, model, points) {
  const [en, zh] = topicExplanation(topic);
  const pointText = points ? `${points} points` : "full points";
  return `<div class="rubric"><b>Answering approach:</b> First identify the topic (${escapeHtml(topic)}), then state the key definition/rule, apply it to the case or question, and give a short justification. For ${escapeHtml(pointText)}, do not only write isolated keywords; connect them into a clear explanation.<br><b>Key scoring points:</b> ${keywords.map(escapeHtml).join(", ")}<br><b>English model answer:</b> ${escapeHtml(model)}<br><b>中文解析：</b>${escapeHtml(zh)} 本题答题时要先点明考点，再把关键词用于题目场景。得分点包括：${escapeHtml(keywords.join("，"))}。只背概念但不结合题干，通常会丢应用分析分。</div>`;
}

function activeMode() {
  return document.getElementById("sectionSelect")?.value || "mcq";
}

function currentShortSet() {
  return shortSets[Number(setSelect.value)];
}

function currentCompSet() {
  return compSets[Number(setSelect.value)];
}

const originalCurrentSet = currentSet;

loadSet = function() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = "";
  document.getElementById("score").textContent = "";
  if (activeMode() === "wrongbook") {
    renderWrongBook();
    return;
  }
  if (activeMode() === "mcq") {
    originalCurrentSet().forEach((item, idx) => {
      const displayItem = displayedMcqItem(item, idx);
      const [topic, question, options] = displayItem;
      const section = document.createElement("section");
      section.className = "question";
      section.innerHTML = `
        <div class="meta">Set ${Number(setSelect.value) + 1} · MCQ ${idx + 1} · ${topic} · 1 point</div>
        <h2>${escapeHtml(question)}</h2>
        <div class="options">
          ${options.map((op, i) => `
            <label><input type="radio" name="q${idx}" value="${i}"> ${letters[i]}. ${escapeHtml(op)}</label>
          `).join("")}
        </div>
        <div class="wrongbook-actions"><button type="button" id="add-mcq-${idx}" onclick="manualAddWrong('mcq', ${idx})">Add to Wrong Book</button></div>
        <div class="feedback" id="f${idx}"></div>
      `;
      quiz.appendChild(section);
    });
    return;
  }

  if (activeMode() === "comp") {
    currentCompSet().forEach((big, bigIdx) => {
      const section = document.createElement("section");
      section.className = "question";
      section.innerHTML = `
        <div class="meta">Set ${Number(setSelect.value) + 1} · Comprehensive Question ${bigIdx + 1} · ${escapeHtml(big.topic)} · 15 points</div>
        <h2>${escapeHtml(big.topic)}</h2>
        <div class="casebox"><b>Case:</b> ${escapeHtml(big.caseText)}</div>
        ${big.subs.map((sub, subIdx) => `
          <div class="subq">
            <h2>${bigIdx + 1}.${subIdx + 1} (${sub[1]} pts) ${escapeHtml(sub[0])}</h2>
            <textarea name="comp${bigIdx}_${subIdx}" placeholder="Type your answer in English..."></textarea>
            <div class="wrongbook-actions"><button type="button" id="add-comp-${bigIdx}-${subIdx}" onclick="manualAddWrong('comp', '${bigIdx}-${subIdx}')">Add to Wrong Book</button></div>
            <div class="feedback" id="fc${bigIdx}_${subIdx}"></div>
          </div>
        `).join("")}
      `;
      quiz.appendChild(section);
    });
    return;
  }

  currentShortSet().forEach((item, idx) => {
    const [topic, question] = item;
    const section = document.createElement("section");
    section.className = "question";
    section.innerHTML = `
      <div class="meta">Set ${Number(setSelect.value) + 1} · Short Answer ${idx + 1} · ${topic} · 5 points</div>
      <h2>${escapeHtml(question)}</h2>
      <textarea name="sa${idx}" placeholder="Type your answer in English..."></textarea>
      <div class="wrongbook-actions"><button type="button" id="add-short-${idx}" onclick="manualAddWrong('short', ${idx})">Add to Wrong Book</button></div>
      <div class="feedback" id="f${idx}"></div>
    `;
    quiz.appendChild(section);
  });
};

grade = function() {
  if (activeMode() === "mcq") {
    let score = 0;
    originalCurrentSet().forEach((item, idx) => {
      const displayItem = displayedMcqItem(item, idx);
      const answer = displayItem[3];
      const selected = document.querySelector(`input[name="q${idx}"]:checked`);
      const fb = document.getElementById(`f${idx}`);
      if (selected && Number(selected.value) === answer) {
        score += 1;
        removeWrongIfMastered("mcq", Number(setSelect.value), idx);
        fb.innerHTML = `Correct.${mcqExplanation(displayItem)}`;
        fb.className = "feedback correct";
      } else {
        addWrongItem({
          type: "mcq",
          setIndex: Number(setSelect.value),
          questionIndex: idx,
          topic: displayItem[0],
          question: displayItem[1],
          options: displayItem[2],
          answer
        });
        fb.innerHTML = `Wrong.${mcqExplanation(displayItem)}`;
        fb.className = "feedback wrong";
      }
    });
    document.getElementById("score").textContent = `MCQ Score: ${score} / 20`;
    return;
  }

  if (activeMode() === "comp") {
    let total = 0;
    currentCompSet().forEach((big, bigIdx) => {
      big.subs.forEach((sub, subIdx) => {
        const [question, points, keywords, model] = sub;
        const answerText = (document.querySelector(`textarea[name="comp${bigIdx}_${subIdx}"]`)?.value || "").toLowerCase();
        const hits = keywords.filter(k => answerText.includes(k.toLowerCase())).length;
        const score = Math.min(points, Math.round((hits / keywords.length) * points));
        total += score;
        if (score < points) {
          addWrongItem({
            type: "comp",
            setIndex: Number(setSelect.value),
            questionIndex: `${bigIdx}-${subIdx}`,
            topic: big.topic,
            caseText: big.caseText,
            question,
            points,
            keywords,
            model,
            score
          });
        } else {
          removeWrongIfMastered("comp", Number(setSelect.value), `${bigIdx}-${subIdx}`);
        }
        const fb = document.getElementById(`fc${bigIdx}_${subIdx}`);
        fb.className = "feedback";
        fb.innerHTML = `<div>Estimated score: ${score} / ${points}. Matched keywords: ${hits}/${keywords.length}.</div>${writtenExplanation(big.topic, keywords, model, points)}`;
      });
    });
    document.getElementById("score").textContent = `Comprehensive Score: ${total} / 30`;
    return;
  }

  let total = 0;
  currentShortSet().forEach((item, idx) => {
    const keywords = item[2];
    const model = item[3];
    const answerText = (document.querySelector(`textarea[name="sa${idx}"]`)?.value || "").toLowerCase();
    const hits = keywords.filter(k => answerText.includes(k.toLowerCase())).length;
    const score = Math.min(5, Math.round((hits / keywords.length) * 5));
    total += score;
    if (score < 5) {
      addWrongItem({
        type: "short",
        setIndex: Number(setSelect.value),
        questionIndex: idx,
        topic: item[0],
        question: item[1],
        keywords,
        model,
        score
      });
    } else {
      removeWrongIfMastered("short", Number(setSelect.value), idx);
    }
    const fb = document.getElementById(`f${idx}`);
    fb.className = "feedback";
    fb.innerHTML = `<div>Estimated score: ${score} / 5. Matched keywords: ${hits}/${keywords.length}.</div>${writtenExplanation(item[0], keywords, model, 5)}`;
  });
  document.getElementById("score").textContent = `Short Answer Score: ${total} / 35`;
};

showAnswers = function() {
  if (activeMode() === "wrongbook") {
    renderWrongBook();
    return;
  }
  if (activeMode() === "mcq") {
    originalCurrentSet().forEach((item, idx) => {
      const displayItem = displayedMcqItem(item, idx);
      const fb = document.getElementById(`f${idx}`);
      if (fb) {
        fb.innerHTML = mcqExplanation(displayItem);
        fb.className = "feedback";
      }
    });
    return;
  }
  if (activeMode() === "comp") {
    currentCompSet().forEach((big, bigIdx) => {
      big.subs.forEach((sub, subIdx) => {
        const fb = document.getElementById(`fc${bigIdx}_${subIdx}`);
        if (fb) {
          fb.className = "feedback";
          fb.innerHTML = writtenExplanation(big.topic, sub[2], sub[3], sub[1]);
        }
      });
    });
    return;
  }
  currentShortSet().forEach((item, idx) => {
    const fb = document.getElementById(`f${idx}`);
    if (fb) {
      fb.className = "feedback";
      fb.innerHTML = writtenExplanation(item[0], item[2], item[3], 5);
    }
  });
};

resetSet = function() {
  loadSet();
};

loadSet();
