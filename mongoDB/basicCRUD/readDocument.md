findOne()  returns a single document from the collection that satisfies a specific condition.

                  ----------------------------------------

                  db.students.findOne(query,projection)

                  --------------------------------------

- By default mongoDB returns all documents with _id field, to hide that, use _id:0 in projection.          

-----------------------------------------------------------------------------------------------------

                  db.students.findOne({_id:2},{_id:0,name:1,age:1,gender:1})

-In this, the document is selected by _id, but ignored using _id:0 using projection 2nd argument

-----------------------------------------------------------------------------------------------------