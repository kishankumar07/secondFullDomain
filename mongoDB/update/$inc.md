

Purpose: $inc will increments a field by a specified value

 Syntax:
      
       { $inc : { field 1 : amount 2 ,
              field 2 : amount 2 ,
            field 3 : amount 3 
         } }

- Accepts positive and negative values, there is no $dec to decrement a value of a field.

---------------------------------------------------------------------------------------------------------------------

-  If $inc operation is done on a field that does not exist, it will create a field with that value.



This is the actual field , which does not has an age field, but accidentally queried as: 
                        
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
                  storage: [ 16, 32, 64, 1024 ]
            }
      ]

            accident query : 
                        big> db.products.updateOne({_id:1},{$inc:{age:3}})

acknowledgement output:                         
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
now when I did a query to view that document separately : 

big> db.products.find({_id:1})
                  
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
                              storage: [ 16, 32, 64, 1024 ],
                              age: 3      <---------- see this field was created instead of expected increment operation
                        }
                  ]


----------------------------------------------------------------------------------------------------------------------

- Use of $inc on a null value will throw an error.

----------------------------------------------------------------------------------------------------------------------


db.products.insertOne(
   {
     _id: 1,
     sku: "abc123",
     quantity: 10,
     metrics: { orders: 2, ratings: 3.5 }
   }
)

question : In this example , increase quantity by 2 and orders inside metrics by -2

                  db.products.updateOne({_id:1},{$inc:{quantity:2,"metrics.orders":-2}})

-----------------------------------------------------------------------------------------------------------------------                  