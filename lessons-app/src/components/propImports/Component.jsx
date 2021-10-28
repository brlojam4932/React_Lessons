import propTypes from "prop-types";
//https://youtu.be/cx0S8JyiVxc

// react has only one child example
// return null
function Component ({ name, age}) {
  return `In 5 years ${name} will be ${age + 5}`
}

Component.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number.isRequired
}

export default Component;

// Renderable
// ex. to test what is renderable
// renderable: propTypes.node
// renderable: propTypes.element

// react only has one child component
// children: propTypes.element.isRequired

// as: propTypes.elementType (React Router)
// example:
// function App() {
// return <Component as={Link} />

// name: propTypes.any.isRequred
// stringOrNumber: propTypes.oneOfType([
//  propTypes.string,
//  propTypes.number
//])
// example:
// function App() {
// return <Component stringOrNumber="sdfdfd" />
// return <Component stringOrNumber=[147] />
// return <Component stringOrNumber={[123]} /> --ERROR / string or number

// Good for enums
// state: propTypes.oneOf(
//  ["Loading", "Ready"]
//)
// example:
// function App() {
// return <Component state="Loading" />
// return <Component state="Ready" />

// Arrays
// state: propTypes.array
// example:
// function App() {
// return <Component array={[1,2,3]} />

// state: propTypes.arrayOf(PropTypes.number)
// example:
// function App() {
// return <Component array={["a", "b", "c"]} /> --ERROR

// Combine
// state: propTypes.arrayOf(PropTypes.oneOfType(PropTypes.number))
// either number or string
// example:
// function App() {
// return <Component array={["a", "b", "c", 12, 2]} /> --Okay

// Shape -- one can replace .shape with .exact 
// state: propTypes.shape({
//  name: propTypes.string
//  age: propTypes.number
//}).isRequired // ...can be combined
// example:
// function App() {
// return <Component person={{name: "Kyle", age: 25 }} />
// add more props
// return <Component person={{name: "Kyle", age: 25, favoriteFood: 'watermelon' }} />