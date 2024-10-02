
            syntax :
                        { $set: {
                               <field1>: <value1>,
                                <field2>: <value2>,
                                 ...}}

---------------------------------------------------------------------------------------


                              updateOne() or updateMany()
- First parameter : query object to define which document to update
- Second paramter : what update to be made

-------------------------------------------------------------------------------------------------
- To update a document :

                                    db.students.updateOne({name:"Kishan"},{$set:{age:28}})

- This will update the very first document found with name Kishan.
- The $set replaces a field value with a specified value.
---------------------------------------------------------------------------------------------------     
- How to update all the fields in an embedded document:

[
  {
    _id: 4,
    name: 'SmartPad',
    spec: { ram: 8, screen: 9.7, cpu: 1.66 }
  }
]

                        db.products.updateOne({_id:4},{"spec.ram":10,"spec.screen":10,"spec.cpu":2})



---------------------------------------------------------------------------------------------------
These are the 2 documents, in this add an embedded document :

                              spec: { ram: 16, screen: 10.7, cpu: 2.66 }
      existing one :
[
  {
    _id: 1,
    name: 'Store A',
    items: [
      { name: 'Laptop', brand: 'Dell', price: 1000 },
      { name: 'Phone', brand: 'Samsung', price: 800 },
      { name: 'Laptop', brand: 'HP', price: 900 }
    ]
  },
  {
    _id: 2,
    name: 'Store B',
    items: [
      { name: 'Phone', brand: 'Dell', price: 500 },
      { name: 'Laptop', brand: 'HP', price: 1200 }
    ]
  }
]
                                    
                  after this query:

                  db.products.updateMany({},{$set:{spec:{"spec.ram":16,"spec.screen":10.7,"spec.cpu":2.66}}})

                 output:
[
  {
    _id: 1,
    name: 'Store A',
    items: [
      { name: 'Laptop', brand: 'Dell', price: 1000 },
      { name: 'Phone', brand: 'Samsung', price: 800 },
      { name: 'Laptop', brand: 'HP', price: 900 }
    ],
    spec: { ram: 8, screen: 9.7, cpu: 1.66 }
  },
  {
    _id: 2,
    name: 'Store B',
    items: [
      { name: 'Phone', brand: 'Dell', price: 500 },
      { name: 'Laptop', brand: 'HP', price: 1200 }
    ],
    spec: { ram: 8, screen: 9.7, cpu: 1.66 }
  }
]

--------------------------------------------------------------------------------------------------------------------------------

to the below 2 docs, add a new field of array of  storage:[16,32,64,1024]

[
  {
    _id: 1,
    name: 'Store A',
    items: [
      { name: 'Laptop', brand: 'Dell', price: 1000 },
      { name: 'Phone', brand: 'Samsung', price: 800 },
      { name: 'Laptop', brand: 'HP', price: 900 }
    ],
    spec: { ram: 8, screen: 9.7, cpu: 1.66 }
  },
  {
    _id: 2,
    name: 'Store B',
    items: [
      { name: 'Phone', brand: 'Dell', price: 500 },
      { name: 'Laptop', brand: 'HP', price: 1200 }
    ],
    spec: { ram: 8, screen: 9.7, cpu: 1.66 }
  }
]

            query:
                        db.products.updateMany({},{$set:{storage:[16,32,64,1024]}})


            output :

            [
  {
    _id: 1,
    name: 'Store A',
    items: [
      { name: 'Laptop', brand: 'Dell', price: 1000 },
      { name: 'Phone', brand: 'Samsung', price: 800 },
      { name: 'Laptop', brand: 'HP', price: 900 }
    ],
    spec: { ram: 8, screen: 9.7, cpu: 1.66 },
    storage: [ 16, 32, 64, 1024 ]
  },
  {
    _id: 2,
    name: 'Store B',
    items: [
      { name: 'Phone', brand: 'Dell', price: 500 },
      { name: 'Laptop', brand: 'HP', price: 1200 }
    ],
    spec: { ram: 8, screen: 9.7, cpu: 1.66 },
    storage: [ 16, 32, 64, 1024 ]
  }
]
big>


-------------------------------------------------------------------------------------------------------------------

To the above output  edit storage as [17,34,67,1024] for all docs.

                        db.products.updateMany({},{$set:{"storage.0":17,"storage.1":34,"storage.2":67}})

---------------------------------------------------------------------------------------------------------------------                        


                  $inc
                  syntax; 

                  {$inc:{
                        field1:amount1,
                        field2:amount2,
                        field3:amount3,
                        field4:amount4
                        }}



question: From the below , decrese ram to 8, decrease screen to 8, storage as [16,32,64,1024] 

big> db.products.find({name:"Store A"})
[
  {
    _id: 1,
    name: 'Store A',
    items: [
      { name: 'Laptop', brand: 'Dell', price: 1000 },
      { name: 'Phone', brand: 'Samsung', price: 800 },
      { name: 'Laptop', brand: 'HP', price: 900 }
    ],
    spec: { ram: 10, screen: 10, cpu: 1.66 },
    storage: [ 17, 33, 67, 1024 ]
  }
]


      query: 

                  db.products.updateOne({name:"Store A"},{$inc:{"spec.ram":-2,"spec.screen":-2,"storage.0":-1,"storage.1":-1,"storage.2":-3}})


                  output : 
[
  {
    _id: 1,
    name: 'Store A',
    items: [
      { name: 'Laptop', brand: 'Dell', price: 1000 },
      { name: 'Phone', brand: 'Samsung', price: 800 },
      { name: 'Laptop', brand: 'HP', price: 900 }
    ],
    spec: { ram: 8, screen: 8, cpu: 1.66 },
    storage: [ 16, 32, 64, 1024 ]
  }
]

------------------------------------------------------------------------------------------------------------------------


            Using the $ positional operator

                  db.products.updateOne({_id:1,storage:16},{$inc:{"storage.$":3}})            

                  output :
[
  {
    _id: 1,
    name: 'Store A',
    items: [
      { name: 'Laptop', brand: 'Dell', price: 1030 },
      { name: 'Phone', brand: 'Samsung', price: 800 },
      { name: 'Laptop', brand: 'HP', price: 900 }
    ],
    spec: { ram: 8, screen: 8, cpu: 1.66 },
    storage: [ 19, 32, 64, 1024 ]
  }
]

                  see the first array element of storage increased by 3.

---------------------------------------------------------------------------------------------------------------------                  