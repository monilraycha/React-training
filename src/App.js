import './App.css';




// function App(){
//   const name = "Monil";
//   const age = 21;
//   const job = "Software Developer";

// return(
//   <section>
//   <h1 style={{
//     color : 'red',
//     backgroundColor : 'black'
//   }}>Amazing photos {name} , {age} , {job}</h1>
//   <Profile />
//   <Profile />
//   <Profile />
//   </section>

// )

// }
// function Items({name , isPacked}){
// // return <li className='item'>{name}</li>
// // return isPacked ? <li className='item'>{name} </li> : <li className='item'>{name} (Not Packed)</li> ;
// return (<li className='item'>
// {isPacked ? <del>{name + ' (packed)'} </del>: name}
// </li>)
// }
function Items({name , isPacked}){
  return (
    <li className="items">
      {name} {isPacked &&  "(Packed)"}
    </li>
  )
}





function App(){

  return(
    <section>
      <h1>Heres the list</h1>
      <ul>
        <Items
        isPacked={true}
        name="monil"
        />
        <Items
        isPacked={true}
        name="raj"
        />
        <Items
        isPacked={false}
        name="john"
        />


      </ul>
    </section>
  )


}




export default App;
