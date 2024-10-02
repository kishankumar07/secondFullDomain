//Reference , in the same directory there is restaurants.json , paste it in the text editor and start the process

1) Write a MongoDB query to display all the documents in the collection restaurants.

            db.restaurants.find()

--------------------------------------------------------------------------------------------------------
2) Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant.

            db.restaurants.find({},{_id:1,name:1,borough:1,cuisine:1})

----------------------------------------------------------------------------------------------------------
3) Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, but exclude the field _id for all the documents in the collection restaurant.

            db.restaurants.find({},{_id:0,name:1,borough:1,cuisine:1,restaurant_id:1})

----------------------------------------------------------------------------------------------------------
4) Write a MongoDB query to display the fields restaurant_id, name, borough and zip code, but exclude the field _id for all the documents in the collection restaurant.

            db.restaurants.find({},{restaurant_id:1,name:1,borough:1,"address.zipcode":1,_id:0})

            output: 
            [
  {
    _id: ObjectId('66fd5879cd699e529b95a20f'),
    address: { zipcode: '10462' },
    borough: 'Bronx',
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    _id: ObjectId('66fd5917cd699e529b95a210'),
    address: { zipcode: '11225' },
    borough: 'Brooklyn',
    name: "Wendy'S",
    restaurant_id: '30112340'
  }
]

-----------------------------------------------------------------------------------------------------------------------
5) Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx

            db.restaurant.find({borough:"Bronx"}).limit(5)

------------------------------------------------------------------------------------------------------------------

6) Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.

            db.restaurant.find({borough:"Bronx"}).skip(5).limit(5)

----------------------------------------------------------------------------------------------------------------------
7) Write a MongoDB query to find the restaurants who achieved a score more than 90

            db.restaurant.find({grades:{$elemMatch:{score:{$gt:90}}}})

---------------------------------------------------------------------------------------------------------------------
8) Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100.

            db.restaurant.find({grades:{$elemMatch:{score:{$gt:80,$lt:100}}}})

-------------------------------------------------------------------------------------------------------------------
9) Write a MongoDB query to find the restaurants which locate in latitude value less than -95.754168.      

            db.restaurant.find({"address.coord":{$lt:-73.961704}})

                  or
            db.restaurant.find({"address.coord":{$elemMatch:{$eq:-73.961704}}})// but this one is not needed, as it is just a value instead of array of object

-------------------------------------------------------------------------------------------------------------------------            

10) Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and latitude less than -65.754168.

            db.restaurant.find({$and:[{cuisine:{$ne:'American'}},{"grades.score":{$gt:70}},{"address.coord":{$lt:-65.754168}}]})


---------------------------------------------------------------------------------------------------------------------------

11) Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than -65.754168.
Note : Do this query without using $and operator.

            db.restaurant.find({cuisine:{$ne:'American'},"grades.score":{$gt:70},"address.coord":{$lt:-65.754168}})

---------------------------------------------------------------------------------------------------------------------------

12) Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a grade point 'A' not belongs to the borough Brooklyn. The document must be displayed according to the cuisine in descending order.

            db.restaurant.find({cuisine:{$ne:'American'}, "grades.grade":{$eq:'A'}, borough:{$ne:'Brooklyn'}}).sort({cuisine:-1})

--------------------------------------------------------------------------------------------------------------------------

13) Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name.
            
             db.restaurant.find({name:{$regex:"^Wil",$options:'i'}},{_id:1,name:1,borough:1,cuisine:1})

--------------------------------------------------------------------------------------------------------------------------         
14) Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name.

            db.restaurant.find({name:{$regex:'ces$',$options:'i'}},{restaurant_id:1,name:1,borough:1,cuisine:1})

------------------------------------------------------------------------------------------------------------------------

15) Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name.


            db.restaurant.find({name:{$regex:'Reg'}},{restaurant_id:1,name:1,borough:1,cuisine:1})

-----------------------------------------------------------------------------------------------------------------------------
16) Write a MongoDB query to find the restaurants which belong to the borough Bronx and prepared either American or Chinese dish.

            db.restaurant.find({borough:'Bronx',cuisine:{$in:['American','Chinese']}})

                        or

            db.restaurant.find({borough:'Bronx',$or:[{cuisine:'American'},{cuisine:'Chinese'}]})                        

------------------------------------------------------------------------------------------------------------------------------

