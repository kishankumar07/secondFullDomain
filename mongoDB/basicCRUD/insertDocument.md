- To add a document to a collection, use insertOne() method.

                  db.students.inserOne(
                          {
                              name:"Rahul",
                              age:25,
                              gender:"male"
                          }
                  )

------------------------------------------------------------------------------------------------

- To add more than one document to a collection:

                  db.students.inserMany(
                        [
                              {
                                    name:"Kishan",age:27,gender:"male"
                              },
                              {
                                    name:"Rahul",age:24,gender:"male"
                              },
                              {
                                    name:"Mellissa,age:25,gender:"Female"
                              }
                        ]
                  )

----------------------------------------------------------------------------------------------
- To search for very first document in a collection :  
                                    
                                    db.students.findOne()

---------------------------------------------------------------------------------------------

- To get all docs :

                                    db.students.find()                  

-----------------------------------------------------------------------------------------------

- To get a document by a field 

                                    db.students.find({"fieldname":"value"})

-----------------------------------------------------------------------------------------------
                               
- if while inserting a document , if it is a non-existing collection, then first collection will be created then insert that document into it.

-------------------------------------------------------------------------------------------------

- What if it is an embedded document, like to find the document by giving a condition to check about in embedded document.


            db.students.insertMany(
             [
            {
        name:"Kishan",
        age:27,
        address:{
          pin:680306,post:"ponnukkara",land:"village"
        }
         },{
         name:"Daniel",
        age:24,
        address:{
          pin:623306,post:"Trikkakkara",land:"city"
        }
         },{
         name:"Jacky",
        age:20,
        address:{
          pin:68406,post:"English",land:"city"
        }
           }
        ])      
  
  
            To get only people in cities, but as an embedded document, this is how to query it.

             db.students.find({"address.land":"city"})
  
  
  ---------------------------------------------------------------------------------------------------------------------------------
  
  - another example of embedded document:

  db.students.insertMany(
  [
      {
        name:"Kishan",
        age:27,
        address:{
          pin:680306,post:"ponnukkara",land:"village"
        }
      },{
         name:"Daniel",
        age:24,
        address:{
          pin:623306,post:"Trikkakkara",land:"city"
        }
      },{
         name:"Jacky",
        age:20,
        address:{
          pin:68406,post:"English",land:"city"
        }
      }
    ])
  
  
  
  db.students.find({"address.land":"city"},{_id:0,name:1,"address.land":1})
  
  

  Output:

{
	"acknowledged" : true,
	"insertedIds" : [
		ObjectId("66e96ff29ff4c13637e7708e"),
		ObjectId("66e96ff29ff4c13637e7708f"),
		ObjectId("66e96ff29ff4c13637e77090")
	]
}
{ "name" : "Daniel", "address" : { "land" : "city" } }
{ "name" : "Jacky", "address" : { "land" : "city" } }

----------------------------------------------------------------------------------------------------------------
  
  
  save for later : 
  db.students.find(
  { color: 'red' },
  { _id: 0, name: 1, color: { $elemMatch: { $eq: 'red' } } }
)
---------------------------------------------------------------------------------------------------------------