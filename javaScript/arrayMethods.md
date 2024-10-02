                              Find method

1) const numbers = [1,10,20,30,50]            
const greaterThanTwenty = numbers.find((num)=>num>20);
console.log(greaterThanTwenty); // 30


2) const employees = [
      {id:1,name:'John'},{id:2,name:'Alice'},{id:3,name:'James'}
]

const findEmp = employees.find((emp)=>emp.id === 2);
console.log(findEmp); // {id:2,name:'Alice'};

3) const words = ['apple','orange','banana','cherry','strawberry','kiwi'];
     
     words.find(word => word.includes('e') && word.length > 5);
     To return the first word with letter 'e' and have more than 5 characters.


                  - if none of the condition are matched , it return : UNDEFINED
                  - Returns the first element in the array that satisfies the condition.

------------------------------------------------------------------------------------------------------   

                        Reduce method

const array = [1,2,3,4];

case 1 : if initial value not given,
 
      array.reduce((acc,curr)=>{
            return acc + curr; // output : 10
      })

case 2 : if initial value given ,

      array.reduce((acc,curr)=>{
            return acc + curr;
      },0) //output 10

- Both cases output is same just for finding sum.
- If initial value not provided, accumulator takes array[0] as initial value and callback function starts from 1st index
- no initial value then callback function will not consider array[0]

- For every value returned from each callback is the acc for next callback.

- Throws error if either of array is empty or initial value not there.//typeError

-------------------------------------------------------------------------

const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1

[1, 100].reduce(getMax); // 100

// callback is not invoked
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1

[].reduce(getMax); // TypeError

----------------------------------------------------------------------------


try running this code, it clearly says who are the accumulator , who are current value with index , when no initial value is provided.

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);

--------------------------------------------------------------------------------------

console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN

--------------------------------------------------------------------------------------