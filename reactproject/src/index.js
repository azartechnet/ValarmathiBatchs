import React from "react";
import ReactDOM from "react-dom/client";

/*const App=()=>{
  return(
    <h1>This is Heading-1</h1>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Dynamic Rendering

/*const Sample=()=>{
  const name="azar";
  const age=25;
  return(
    <div>
      <h1>Hello,{name}</h1>
      <p>Your age is::{age}</p>
      <p>Today Date is::{new Date().toLocaleDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Sample/>)*/

//React List
/*const MyElem=()=>{
  return(
    <div>
      <h1>MyList</h1>
      <ul>
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
      </ul>
      <ol>
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
      </ol>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<MyElem/>)*/

//Conditional Rendering
/*const x=50
let text="";
if(x>10)
{
  text=`x is greater than ${x}`
}
else
{
  text=`x is less than 10`
}
const MyElem=()=>{
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)*/

//Conditional rendering-2
//Nested if else and Switch statement
/*const x=10;
let text="";
if(x>10)
{
  text="x is greater than 10"
}
else if(x==10)
{
   text="x is equal 10"
}
const MyElem=()=>{
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)*/

//Login Form
/*const Login=()=>{
  return(
  
    <>
       <form>
        <label>UserName</label>
        <input type="text"/>
        <label>Password</label>
        <input type="text"/>
        <input type="submit"/>
       </form>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Login/>)*/
//function component
/*function Sample()
{
  return(
    <div>
      <h1>This is Function Component</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Sample/>)*/

//function Component
/*import './index.css'
function Sample1()
{
  return(
    <div>
      <h1>This is Function Component</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample1/>)*/

/*function Greeting()
{
  const name="azar";
  const age=20;
  return(
    <div>
      <h1>Hello,{name}</h1>
      <p>your age is::{age}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Greeting/>)*/

//Using onClick()
/*function SimpleButton()
{
  function showMessage()
  {
    alert("Button was clicked")
  }
  return(
    <div>
      <button onClick={showMessage}>Click</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<SimpleButton/>)*/

//Function Component with props
/*function Sample(props)
{
  return(
    <div>
      <h1>Hello{props.name}{props.age}</h1>
      <p>This is Paragraph</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="Azar" age="25"/>)*/

//Compoent in component

/*function Component1()
{
  return(
    <div>
      <h1>Hello</h1>
      <p>Component1</p>
      <Component2/>
    </div>
  )
}
function Component2()
{
  return(
    <div>
      <h1>Component2</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>)*/

//class Components
/*class Sample extends React.Component
{
     render()
     {
         return(
             <h1>Welcome</h1>
         )
     }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Constructor using super

/*class Sample extends React.Component
{
  constructor()
  {
    super();
    this.state={name:"azar",age:20}
  }
  render()
  {
    return(
      <div>
        <h1>Hello,{this.state.name}</h1>
        <p>Your age is::{this.state.age}</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render('root')
r1.render(<Sample/>)*/

//Constructor with props

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={name:props.name,age:props.age}
  }
   render()
   {
    return(
      <div>
        <h1>Hello{this.state.name}</h1>
        <h1>Your age is::{this.state.age}</h1>

      </div>
    )
   }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="azar" age="30"/>)*/

/*class Counter extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={count:0}
  }
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  decrement=()=>{
    this.setState({count:this.state.count-1})
  }
  render()
  {
    return(
      <div style={{textAlign:'center'}}>
         <h1>Counter:{this.state.count}</h1>
         <button onClick={this.increment}>Increment</button>
         <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//Changing the state object

/*class Counter extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={name:"azar",age:30};
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange()
  {
    this.setState({name:"mohamed",age:35})
  }
  render()
  {
    return(
      <div style={{textAlign:'center'}}>
        <h1>Name:{this.state.name}</h1>
        <p>Age:{this.state.age}</p>
        <button onClick={this.handleChange}>Change</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//React event

/*function Football()
{
  const shoot=()=>{
    alert("Great Shot!!!")
  }
  return(
    <div>
      <button onClick={shoot}>Take the shoot</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//Event with argument

function Football()
{
  const shoot=(e)=>{
    alert("Great Shot!!!"+e)
  }
  return(
    <div>
      <button onClick={()=>shoot("welcome")}>Take the shoot</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)