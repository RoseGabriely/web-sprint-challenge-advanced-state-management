# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
   Context API provides a way to share props throughout nested components without having to pass the props down through many components where they aren't needed.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   Actions are objects that will be dispatched into a reducer. These objects tell the reducer what "type" it should run, and give it the data it may need.

   Reducers take in a state and an action. It uses the action to update the state while keeping immutability principles in mind.

   A store holds the application state and methods such as dispatch. It is also where middlewares can be applied.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
   Thunk uses middleware to allow action creators to make asynchronous API calls before getting dispatched into the reducer.

4. What is your favorite state management system you've learned and this sprint? Please explain why!  
   Reducers are great due to their ability to apply middleware, and separation of concerns keeps the code very organized and easy to update.
