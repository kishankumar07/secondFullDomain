 1)Component : Fundamental building block of React application.

 2)JSX (JavaScript XML) : Syntax extension of JavaScript, which allows to write HTML-like code within Javscript files.

3) Props(Properties) : 
-Short of properties, a way to pass data from parent to child component.
-They are read-only, so the component is reusable.

4)State: 
-built-in object that stores data which can change over time.
-Internal data of a component.
- Can be modified by that component itself. It is component specific and so it is local to that scope.
-When state changes , component re-renders the component to reflect new state.

5) Component Lifecycle :
- Series of phases a component goes through during its existance in the app. - mounting,updating,removal from DOM

-mounting :
      - Phase when component is first created and inserted into DOM.
      - #Created and inserted into the DOM

      eg:
        using useEffect Hook:
             useEffect(()=>{
                  //code here
            },[])

-updating:
      -component re-rendering.
      - A component re-render when its props or state changes.      
      - So this phase is when actually a component is updated either via state or props.

      eg:
            useEffect(()=>{
                  //code here
            },[dependency])
the useeffect hook allows side effect to run when the specified dependency changes

- unmount phase:
      -Phase when the component is removed from DOM.
      - Useful to remove any event listeners ,timers,subscriptions.

            useEffect(()=>{
                  return ()=>{
                        // clean up code
                  }
            },[])

summary of Lifecycle methods and hooks:
 -Mounting : componentDidMount() => useEffect(()=>{},[])      
 -Updating : componentDidUpdate() => useEffect(()=>{},[dependencies])
 -Unmounting : componentWillUnmount() => useEffect(()=>{return ()=>{}},[])


6) Why functional components was called as Stateless functional components ? 

- It was before the introduction of Hooks.

a) Did not have state : These are javaScript functions, that accepted props and returned JSX to render the UI. But it was not able to manage its own internal state. Class components has access to this.state and lifecycle methods, making them 'stateful'.

b) No Lifecycle methods : functional components has no lifecycle methods ( componentDidMount,componentDidUpdate,componentWillUnmount) so was not able to do any side effects like data fetching,subscriptions, dom manipulations. but possible in class components.

- When hooks was introduced,in React 16.8 useState and useEffect ,where useState can manage and update state . useEffect can handle the phases in lifecycles, similar to life cycles in class components.


7) Virtual DoM : When a prop or state changes, React compares virtual DOM with actual DOM and updates only the parts that have changed, minimizing expensive DOM operations.

8) Reconciliation: Crucial process with Reacts rendering algorithm, and this process is responsible for finding the right UI updation in the actual DOM.

9) Fragments : Without adding an extra node to the DOM, fragments help to group multiple children.
            In simple words, to return multiple elements from a component without adding extra node to the DOM.

10) Hook Rules: 
      3 hooks rules : 1) Hooks can be called only inside React function components.
                      2) Hooks can only be called at the top level of a component.
                      3) Hooks cannot be conditional.            

11) Value point in useState hook: 

      instead of this : 

                               const [brand, setBrand] = useState("Ford");
                              const [model, setModel] = useState("Mustang");
                              const [year, setYear] = useState("1964");
                              const [color, setColor] = useState("red");

      do like this:                               

                               const [car, setCar] = useState({
                              brand: "Ford",
                              model: "Mustang",
                              year: "1964", 
                              color: "red"
                              });

      now if like any onClick() to change only year to 1965 what to do ? 
      - if you do like onClick(()=>{SetCar({year:1965})}),then everything rest will be removed and finally only property year will be there in that object.
      -Right way : 

                                         const updateColor=()=>{
                                          setCar(prev => return{
                                                {...prev,year:1965};
                                          })
                                         };

12) This might be the right time to learn about spread operator

                              function adder(a,b,c){
                                    return a+b+c;
                              }
                              let adder = [1,2,3]
                              adder(...val)


13) Array.from(arraylike,mapFunction)

                a)  let str = 'hello world'
                  let newStr = Array.from(str,(x)=>x.toUpperCase())
                  console.log(newStr)

                b) let setN = new Set([1,2,3,3,3,3,7])
                  let newArray = Array.from(setN,(x)=> x*2)
                  console.log(newArray)

14) Array.of()               

                   Array.of(2)
                  This will create an array [2]
                  Array.of(3,4,5,7)
                  This will create an array [3,4,5,7]

So what is the advantage of using Array.of() because it is more simple to write [1,2,3] instead of Array.of(1,2,3).

            Advantage: 
                  let arr = new Array(3) is not same as  //[empty,empty,empty]
                  let arr = Array.of(3) //[3]




                        GOT a week back for second full domain! 

15) 10 core concepts of ReactJs

                                   1) Declarative UI
- Unlike other programming languages, which uses imperative code, React uses declarative code, like you are telling React what to do, but not telling how to do it.         

                                   2) Component based architecture
- React apps are made up of reusable components. Components are the building blocks of React application. Each component can manage its own state and logic of UI.

                                    3) Unidirectional flow of data ( One-way data binding)
- Data flows in one direction, from parent to child component, thus making it predictable for debugging purposes.

                                    4) Virtual DOM 
- Instead of updating the real-DOM every time for even a small change, React uses a lightweight copy virtual DOM and updates it first. So first virtual DOM is updated. Then it updates the virtual DOM with the real DOM , and only make changes to that part that has changed.
- Reconciliation : Through this reconciliation alogorithm, the actual DOM is getting updated. When a change happens, like if a props or state got changed, it creates a new virtual DOM representation of the UI, and compares the new UI with the previous UI using the diffing algorithm. And that change will be reflected to the actual DOM.
- this comparison takes place within the memory, and during that time nothing got changed in the browser.   

                                    5) State and props

                                    6) Immutability
-                                                  

                                    7) Lifecycle methods(class components)/ Hooks (functional components)
- React component go through a lifecycle of mounting , updating and unmounting. In class components, we use lifecycle methods (componentDidMount,componentDidUpdate,componentWillUnmount) and useEffect hook for functional component to handle lifecycle methods.

            useEffect(()=>{
                  //This runs when component mounts or updates
                  return ()=>{
                        //clean up function that runs when component unmounts.
                  }
            },[dependencies])

                                    8) JSX ( Javascript XML)
- JSX is a syntax extension, that allows to write HTML like code inside the Javascript.

                                    9) Hooks 
- Hooks were introduced in version 16.8 , before hooks functional components was called stateless functional components because they couldn't manage the state or use lifecycle methods within the component.
- State management was only possible with class components, they use this.state, this.setState methods.
- Lifecycle methods was not with functional components such as componentDidMount,componentDidUpdate,componentWillUnmount, for side effects.                                    

                                    10) Component composition
-React encourages component composition over inheritance. Components are composed to form complex UI.

                                    11) Single responsibility Principle
- Each component should have one responsibility, if a component grows in size, again breaks into smaller components. Example a component that fetch the data and display it can again be broken into one for fetching data and other to display the data.                                                                        

                  Controlled and Uncontrolled component

                  -value is stored in react state                                         -Value is stored in DOM(internal state)
                  -need to handle change manually                                         - Change happens automatically in DOM
                  - Full control of form element and value                                -Less control
                  - More code to keep track of state and update                           -Requires less code
                  -Ideal for form validation                                              - Simple forms or non-complex input handling
- It is all about who has control of over the data, DOM or React                  