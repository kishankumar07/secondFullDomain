mongoDB store data records as BSON documents, which are simply called documents.

Collection is analogous to Table in RDBMS.

Document is analogous to Rows.

Table has fixed Schema , collection has dynamic schema.

Namespace : databasename.collectionname

mongoDB stores documents in a collection and collections in database.

            -mongosh     
- mongosh the mongo shell is similar to mysql in MySQL and psql in PostgreSQL

- It can be used for 1) javaScript Interpreter 2) MongoDB client.

----------------------------------------------------------------------------------------------

- To show all the databases on the server :
                              
                              show dbs

---------------------------------------------------------------------------------------------

- To switch to another database:

                              use <database name>

----------------------------------------------------------------------------------------------

- To show all the collections of current database :
                              
                              show collections

---------------------------------------------------------------------------------------------

- To rename a field ;$rename

db.students.insertMany( [
   {
     "_id": 1,
     "alias": [ "The American Cincinnatus", "The American Fabius" ],
     "mobile": "555-555-5555",
     "nmae": { "first" : "george", "last" : "washington" }
   },
   {
     "_id": 2,
     "alias": [ "My dearest friend" ],
     "mobile": "222-222-2222",
     "nmae": { "first" : "abigail", "last" : "adams" }
   },
   {
     "_id": 3,
     "alias": [ "Amazing grace" ],
     "mobile": "111-111-1111",
     "nmae": { "first" : "grace", "last" : "hopper" }
   }
] )


to change nmae to name, then 

                  db.students.updateOne({nmae:{$ne:null}},{$rename:{nmae:"name"}})

------------------------------------------------------------------------------------------------------                  