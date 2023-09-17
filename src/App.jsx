
import './App.css'

function App() {
  function handleClick() {
    alert('Button Clicked');
  }
  const handleClick2 = () => {
    alert('button 2 clicked')
  }
  const handleClick3 = (num) => {
    alert(num + 5);
  }



  return (
    <>

      <h3>React Core Concepts 2</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {
        alert('third clicked')
      }} >Click 3</button>
      <button onClick={() => handleClick3(3)} >Click 4</button>


    </>
  )
}

export default App
