[
  {
    numbers:[2,4,5]
  },
  {
    numbers:[4,9,8]
  }
]

              db.collections.find({numbers:{$elemMatch:{$eq:2}}})

//To find the documents which have the number 2 inside the number array, this is how $elemMatch uses to query it.

//But this was also possible without $elemMatch , 

              here it is : db.collection.find({numbers:2})

//Do a query to find the documents, which has value greater than 0 and less than 5, this will be the best method

              db.collection.find({numbers:{$elemMatch:{$gt:0,$lt:5}}})


---------------------------------------------------------------------------------------------     


Best example : 

    [
    {
        animals: [
        {
            name: 'Beerus',
            animal: 'cat'
        }, 
        {
            name: 'Jackson',
            animal: 'dog'
        }, 
        {
            name: 'Jerry',
            animal: 'mouse'
        }]
    },
    {
        animals: [ 
        {
            name: 'Jerry',
            animal: 'dog'
        }, 
        {
            name: 'Micky',
            animal: 'mouse'
        }]
    }
]

//Question : return all the mouse with the name "Jerry", so the result have to be the first document.

            db.collection.find({animals:{$elemMatch:{name:'Jerry',animal:'Mouse'}}})

  //Here $elemMatch checked both the conditions in a single iteration,but if we use dot notation, it takes two separate iteration to get the result.

---------------------------------------------------------------------------------------------------------------            