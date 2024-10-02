- useRef is used to access a DOM Element, interact with it. 
- Persist values across render without causing re-render.

- useRef can be imagined like a container, that stores a value over every render, or store a reference of a DOM Element.

When to Use useRef?
- To access DOM elements directly (like accessing an input field or a video player).
- To store mutable values that you don’t want to trigger a re-render when changed (like a timer or a counter).
- To persist data across renders without changing the component's state.

syntax : const myRef = useRef(initialValue);
- myRef will hold the current value. 
- The initial value is optional, if passed a value to it, that value will be stored in myRef.current


Key Points about useRef:
- It returns a mutable object with a single property: current.
- Changing the value of current does not cause a re-render.
- You can use it to persist values across renders (like a cache).
- You can use it to directly access DOM elements.


Key Differences Between useState and useRef:
useState:
- Triggers a re-render when the state value changes.
- Suitable when the UI needs to reflect changes.
useRef:
- Does not trigger a re-render when the current value changes.
- Suitable for values that need to persist across renders but don’t need to affect the UI (e.g., timers, caching values).

When Not to Use useRef
- When you need a re-render: If changing a value should cause the component to re-render (e.g., updating UI based on user input), you should use useState instead of useRef.
- For complex logic: If you need to perform complex operations, it’s better to manage the logic with state, reducers, or context.


Summary
- useRef stores a mutable object that persists across renders, but changing the value of current does not cause re-renders.
It is most commonly used for:
- Accessing DOM elements directly (e.g., focusing an input, playing a video).
- Storing mutable values (e.g., a counter that you don’t want to trigger a re-render).
- Tracking previous values across renders (like previous state)