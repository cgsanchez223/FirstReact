- Chapter 41.2 of the Software Engineering Foundations Program at Stony Brook University introduces the final open source library learned in the course, React.Js
- React.js works with JavaScript and can be used to produce both frontend and backend frameworks
__________________________________________________________________________________________________
- You might need to use Babel to read html files
    - $ npm install @babel/core @babel/cli @babel/preset-react
    - $ node_modules/@babel/cli/bin/babel.js --presets @babel/react
            file.jsx > file.js

- Part 1:
    - Create 3 components - FirstComponent, NamedComponent, App

- Part 2:
    - Defines a Tweet component that has the username, name, data, and message that was tweeted
    - App.js renders 3 tweets

- Part 3:
    - Person component
    - App.js renders 3 persons
