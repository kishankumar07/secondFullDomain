$gt is a comparison query operator

                                    { field : { $gt: value} }


-------------------------------------------------------------------------------------------------------------------------

 {
    _id: ObjectId('66e9935fa27922fb44faa539'),
    name: 'Tony Stark',
    age: 48,
    email: 'tony.stark@example.com',
    phone: '+321654987',
    address: {
      street: '789 Tech St',
      city: 'Silicon Valley',
      postalCode: 94043
    },
    hobbies: [ 'engineering', 'technology' ],
    isActive: false,
    registeredAt: ISODate('2014-04-04T00:00:00.000Z'),
    friends: [ { name: 'Pepper', age: 45 }, { name: 'Rhodey', age: 46 } ],
    profileViews: 1000
  }

  1)

  question : from this query out doc with age greater than 50, imagine there are 20 documents like this :

                        db.users.find({ age : {$gt : 50 } })

  ------------------------------------------------------------------------------------------------------------------------------

  2) Case of embedded document : 

  db.products.insertMany([
    { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
    { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
    { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
    { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
    { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
 ])

From this find those with ram spec greater than 12

                                    db.products.find( { "spec.ram" : { $gt : 12 } } )

-----------------------------------------------------------------------------------------------------------------------------------

3) to check if an array element is greater than a value:

                                    db.products.find( { storage : { $gt : 120 } } )

-----------------------------------------------------------------------------------------------------------------------------------------                                    
