$eq is a comparison query operator, to match documents where value of field equals to a specified value.

                        { <field> :{ $eq: <value> } } 

                        same as 

                        { <field> : <value> }

--------------------------------------------------------------------------------------------------------------------                  

db.users.insertMany([
  {
    name: "Alice Johnson",
    age: 30,
    email: "alice.johnson@example.com",
    phone: "+123456789",
    address: {
      street: "123 Maple St",
      city: "New York",
      postalCode: 10001,
    },
    hobbies: ["reading", "traveling"],
    isActive: true,
    registeredAt: new Date("2020-01-15"),
    friends: [
      { name: "Bob", age: 28 },
      { name: "Carol", age: 35 },
    ],
    profileViews: 150
  },
  {
    name: "Bob Smith",
    age: 28,
    email: "bob.smith@example.com",
    phone: "+987654321",
    address: {
      street: "456 Oak St",
      city: "Los Angeles",
      postalCode: 90001,
    },
    hobbies: ["sports", "gaming"],
    isActive: true,
    registeredAt: new Date("2021-05-21"),
    friends: [
      { name: "Alice", age: 30 },
      { name: "Eve", age: 32 },
    ],
    profileViews: 200
  },
  {
    name: "Charlie Brown",
    age: 35,
    email: "charlie.brown@example.com",
    phone: "+192837465",
    address: {
      street: "789 Pine St",
      city: "Chicago",
      postalCode: 60601,
    },
    hobbies: ["photography", "cooking"],
    isActive: false,
    registeredAt: new Date("2019-07-10"),
    friends: [
      { name: "Daniel", age: 40 },
      { name: "Frank", age: 38 },
    ],
    profileViews: 350
  },
  {
    name: "Diana Prince",
    age: 29,
    email: "diana.prince@example.com",
    phone: "+123123123",
    address: {
      street: "987 Birch St",
      city: "San Francisco",
      postalCode: 94101,
    },
    hobbies: ["writing", "yoga"],
    isActive: true,
    registeredAt: new Date("2022-03-18"),
    friends: [
      { name: "Grace", age: 27 },
      { name: "Henry", age: 33 },
    ],
    profileViews: 100
  },
  {
    name: "Edward Norton",
    age: 40,
    email: "edward.norton@example.com",
    phone: "+321321321",
    address: {
      street: "321 Cedar St",
      city: "Miami",
      postalCode: 33101,
    },
    hobbies: ["hiking", "swimming"],
    isActive: false,
    registeredAt: new Date("2021-12-12"),
    friends: [
      { name: "Isaac", age: 36 },
      { name: "James", age: 29 },
    ],
    profileViews: 50
  },
  {
    name: "Fiona Gallagher",
    age: 32,
    email: "fiona.gallagher@example.com",
    phone: "+456789123",
    address: {
      street: "654 Spruce St",
      city: "Boston",
      postalCode: 02101,
    },
    hobbies: ["biking", "painting"],
    isActive: true,
    registeredAt: new Date("2020-06-09"),
    friends: [
      { name: "Kyle", age: 34 },
      { name: "Liam", age: 26 },
    ],
    profileViews: 500
  },
  {
    name: "George Lucas",
    age: 50,
    email: "george.lucas@example.com",
    phone: "+789456123",
    address: {
      street: "789 Main St",
      city: "Seattle",
      postalCode: 98101,
    },
    hobbies: ["cinema", "directing"],
    isActive: false,
    registeredAt: new Date("2018-01-20"),
    friends: [
      { name: "Michael", age: 55 },
      { name: "Sarah", age: 52 },
    ],
    profileViews: 600
  },
  {
    name: "Hannah Montana",
    age: 27,
    email: "hannah.montana@example.com",
    phone: "+147258369",
    address: {
      street: "456 Elm St",
      city: "Austin",
      postalCode: 73301,
    },
    hobbies: ["singing", "acting"],
    isActive: true,
    registeredAt: new Date("2020-10-30"),
    friends: [
      { name: "Nina", age: 30 },
      { name: "Oscar", age: 33 },
    ],
    profileViews: 120
  },
  {
    name: "Ivy Carter",
    age: 22,
    email: "ivy.carter@example.com",
    phone: "+369258147",
    address: {
      street: "987 Chestnut St",
      city: "Denver",
      postalCode: 80201,
    },
    hobbies: ["dancing", "fashion"],
    isActive: true,
    registeredAt: new Date("2023-04-19"),
    friends: [
      { name: "Paul", age: 24 },
      { name: "Quincy", age: 26 },
    ],
    profileViews: 80
  },
  {
    name: "Jake Peralta",
    age: 34,
    email: "jake.peralta@example.com",
    phone: "+852963741",
    address: {
      street: "123 King St",
      city: "Dallas",
      postalCode: 75201,
    },
    hobbies: ["comedy", "police work"],
    isActive: true,
    registeredAt: new Date("2019-02-15"),
    friends: [
      { name: "Rosa", age: 32 },
      { name: "Terry", age: 38 },
    ],
    profileViews: 450
  },
  {
    name: "Kara Thrace",
    age: 36,
    email: "kara.thrace@example.com",
    phone: "+753951456",
    address: {
      street: "987 Starbuck St",
      city: "Houston",
      postalCode: 77001,
    },
    hobbies: ["flying", "combat"],
    isActive: false,
    registeredAt: new Date("2021-07-07"),
    friends: [
      { name: "Sam", age: 35 },
      { name: "Lee", age: 37 },
    ],
    profileViews: 60
  },
  {
    name: "Luke Skywalker",
    age: 45,
    email: "luke.skywalker@example.com",
    phone: "+456123789",
    address: {
      street: "123 Jedi St",
      city: "Las Vegas",
      postalCode: 89101,
    },
    hobbies: ["sword fighting", "force training"],
    isActive: true,
    registeredAt: new Date("2018-11-23"),
    friends: [
      { name: "Leia", age: 40 },
      { name: "Han", age: 47 },
    ],
    profileViews: 750
  },
  {
    name: "Monica Geller",
    age: 31,
    email: "monica.geller@example.com",
    phone: "+951753852",
    address: {
      street: "456 Apartment St",
      city: "Philadelphia",
      postalCode: 19101,
    },
    hobbies: ["cooking", "cleaning"],
    isActive: true,
    registeredAt: new Date("2022-01-01"),
    friends: [
      { name: "Rachel", age: 30 },
      { name: "Chandler", age: 33 },
    ],
    profileViews: 320
  },
  {
    name: "Nina Simone",
    age: 38,
    email: "nina.simone@example.com",
    phone: "+456951852",
    address: {
      street: "789 Music St",
      city: "Atlanta",
      postalCode: 30301,
    },
    hobbies: ["singing", "songwriting"],
    isActive: false,
    registeredAt: new Date("2017-09-09"),
    friends: [
      { name: "Miles", age: 40 },
      { name: "Ella", age: 42 },
    ],
    profileViews: 900
  },
  {
    name: "Oscar Wilde",
    age: 42,
    email: "oscar.wilde@example.com",
    phone: "+654789321",
    address: {
      street: "987 Literature St",
      city: "Portland",
      postalCode: 97201,
    },
    hobbies: ["writing", "philosophy"],
    isActive: true,
    registeredAt: new Date("2019-04-20"),
    friends: [
      { name: "Mark", age: 39 },
      { name: "George", age: 41 },
    ],
    profileViews: 510
  },
  {
    name: "Peter Parker",
    age: 25,
    email: "peter.parker@example.com",
    phone: "+963258741",
    address: {
      street: "123 Spider St",
      city: "Queens",
      postalCode: 11101,
    },
    hobbies: ["photography", "crime fighting"],
    isActive: true,
    registeredAt: new Date("2021-08-08"),
    friends: [
      { name: "Mary", age: 24 },
      { name: "Harry", age: 26 },
    ],
    profileViews: 650
  },
  {
    name: "Quentin Tarantino",
    age: 58,
    email: "quentin.tarantino@example.com",
    phone: "+258741369",
    address: {
      street: "456 Director St",
      city: "Hollywood",
      postalCode: 90028,
    },
    hobbies: ["directing", "writing"],
    isActive: true,
    registeredAt: new Date("2015-12-12"),
    friends: [
      { name: "Uma", age: 50 },
      { name: "Samuel", age: 53 },
    ],
    profileViews: 800
  },
  {
    name: "Rachel Green",
    age: 30,
    email: "rachel.green@example.com",
    phone: "+852456987",
    address: {
      street: "456 Fashion St",
      city: "San Diego",
      postalCode: 92101,
    },
    hobbies: ["fashion", "shopping"],
    isActive: true,
    registeredAt: new Date("2020-02-02"),
    friends: [
      { name: "Monica", age: 31 },
      { name: "Phoebe", age: 29 },
    ],
    profileViews: 430
  },
  {
    name: "Sam Winchester",
    age: 37,
    email: "sam.winchester@example.com",
    phone: "+951852456",
    address: {
      street: "123 Hunter St",
      city: "New Orleans",
      postalCode: 70101,
    },
    hobbies: ["hunting", "research"],
    isActive: true,
    registeredAt: new Date("2018-10-10"),
    friends: [
      { name: "Dean", age: 39 },
      { name: "Bobby", age: 58 },
    ],
    profileViews: 320
  },
  {
    name: "Tony Stark",
    age: 48,
    email: "tony.stark@example.com",
    phone: "+321654987",
    address: {
      street: "789 Tech St",
      city: "Silicon Valley",
      postalCode: 94043,
    },
    hobbies: ["engineering", "technology"],
    isActive: false,
    registeredAt: new Date("2014-04-04"),
    friends: [
      { name: "Pepper", age: 45 },
      { name: "Rhodey", age: 46 },
    ],
    profileViews: 1000
  }
])

Next are the important areas : 
1)
-----------------------------------------------------------------------------------------------------------------------

- basic query : 
                                    
                                    db.users.find({age:{$eq:30}})

- same as                           

                                    db.users.find({age:30})
-----------------------------------------------------------------------------------------------------------------------                                   2)  


- to find a query on an embedded document- 


       address: { street: '123 Maple St', city: 'New York', postalCode: 10001 },
                    from this snippet, find the document with the city:"New York"

                                    db.users.find({"address.city":"New York"}) in case of normal query

      same as :

                                    db.users.find({"address.city":{$eq:"New York"}})


------------------------------------------------------------------------------------------------------------------------
3)

- To query on an array ;

      query snippet :  hobbies: [ 'reading', 'traveling' ],

                        db.users.find({hobbies:{$eq:"reading"}})

                        same as :

                        db.users.find({hobbies:'reading'})
-------------------------------------------------------------------------------------------------------------------

4) 

- To query based on a date object 

[
  {
    _id: ObjectId('66e9935fa27922fb44faa526'),
    name: 'Alice Johnson',
    age: 30,
    email: 'alice.johnson@example.com',
    phone: '+123456789',
    address: { street: '123 Maple St', city: 'New York', postalCode: 10001 },
    hobbies: [ 'reading', 'traveling' ],
    isActive: true,
    registeredAt: ISODate('2020-01-15T00:00:00.000Z'), this one    <-------------------------------
    friends: [ { name: 'Bob', age: 28 }, { name: 'Carol', age: 35 } ],
    profileViews: 150
  }
]

                        db.users.find({registeredAt:{$eq: new ISODate('2020-01-15') }})

--------------------------------------------------------------------------------------------------------------------------                    

