import React from 'react'
import ReactDOM from 'react-dom'


/*const Header = ({course}) =>   <h1>{course}</h1>*/

const Header = (props) =>{
  console.log(props)
  return   <h1>{props.course}</h1>
}
const Part = (props) =>{
  return <p>{props.part} {props.exercises}</p>

}
const Content  = (props) =>{

    return (
      <div>
        <Part part={props.part[0]} exercises={props.exercises[0]}/>
        <Part part={props.part[1]} exercises={props.exercises[1]}/>
        <Part part={props.part[2]} exercises={props.exercises[2]}/>
    </div>
    
    )
}

const Total = (props) =>{
  return   <p>Number of exercises {props.suma}</p>

}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
/*Lista entre []*/
/* Suma  como una suma*/
  return (
    <div>
      <Header course={course}/>    

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))