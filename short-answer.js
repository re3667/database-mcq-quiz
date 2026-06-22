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

(function enhanceForShortAnswers() {
  const style = document.createElement("style");
  style.textContent = `
    textarea { width: 100%; min-height: 110px; box-sizing: border-box; font: inherit; padding: 10px; border: 1px solid #aaa; }
    .rubric { margin-top: 8px; padding: 10px; background: #f7f7f7; border: 1px solid #ddd; line-height: 1.45; }
    .mode-note { font-size: 13px; color: #333; }
  `;
  document.head.appendChild(style);

  const panel = document.querySelector(".panel");
  const sectionLabel = document.createElement("label");
  sectionLabel.setAttribute("for", "sectionSelect");
  sectionLabel.innerHTML = "<b>Section</b>";
  const sectionSelect = document.createElement("select");
  sectionSelect.id = "sectionSelect";
  sectionSelect.innerHTML = '<option value="mcq">Multiple Choice (20 pts)</option><option value="short">Short Answer (35 pts)</option>';
  panel.insertBefore(sectionSelect, panel.firstChild);
  panel.insertBefore(sectionLabel, panel.firstChild);
  sectionSelect.addEventListener("change", loadSet);

  document.querySelector("h1").textContent = "Database Systems Mock Exam Practice";
  document.querySelector("header p").innerHTML = "Choose one of 10 mock sets, then choose <b>Multiple Choice</b> or <b>Short Answer</b>. MCQ is graded exactly. Short answers are scored by keyword match and include model answers for self-checking.";
})();

function activeMode() {
  return document.getElementById("sectionSelect")?.value || "mcq";
}

function currentShortSet() {
  return shortSets[Number(setSelect.value)];
}

const originalCurrentSet = currentSet;

loadSet = function() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = "";
  document.getElementById("score").textContent = "";
  if (activeMode() === "mcq") {
    originalCurrentSet().forEach((item, idx) => {
      const [topic, question, options] = item;
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
        <div class="feedback" id="f${idx}"></div>
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
      <div class="feedback" id="f${idx}"></div>
    `;
    quiz.appendChild(section);
  });
};

grade = function() {
  if (activeMode() === "mcq") {
    let score = 0;
    originalCurrentSet().forEach((item, idx) => {
      const answer = item[3];
      const selected = document.querySelector(`input[name="q${idx}"]:checked`);
      const fb = document.getElementById(`f${idx}`);
      if (selected && Number(selected.value) === answer) {
        score += 1;
        fb.textContent = "Correct.";
        fb.className = "feedback correct";
      } else {
        fb.textContent = `Wrong. Correct answer: ${letters[answer]}. ${item[2][answer]}`;
        fb.className = "feedback wrong";
      }
    });
    document.getElementById("score").textContent = `MCQ Score: ${score} / 20`;
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
    const fb = document.getElementById(`f${idx}`);
    fb.className = "feedback";
    fb.innerHTML = `<div>Estimated score: ${score} / 5. Matched keywords: ${hits}/${keywords.length}.</div><div class="rubric"><b>Model answer:</b> ${escapeHtml(model)}<br><b>Keywords:</b> ${keywords.map(escapeHtml).join(", ")}</div>`;
  });
  document.getElementById("score").textContent = `Short Answer Score: ${total} / 35`;
};

showAnswers = function() {
  if (activeMode() === "mcq") {
    originalCurrentSet().forEach((item, idx) => {
      const answer = item[3];
      const fb = document.getElementById(`f${idx}`);
      if (fb) {
        fb.textContent = `Answer: ${letters[answer]}. ${item[2][answer]}`;
        fb.className = "feedback";
      }
    });
    return;
  }
  currentShortSet().forEach((item, idx) => {
    const fb = document.getElementById(`f${idx}`);
    if (fb) {
      fb.className = "feedback";
      fb.innerHTML = `<div class="rubric"><b>Model answer:</b> ${escapeHtml(item[3])}<br><b>Keywords:</b> ${item[2].map(escapeHtml).join(", ")}</div>`;
    }
  });
};

resetSet = function() {
  loadSet();
};

loadSet();
