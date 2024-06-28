import Headers from "./Header/Headers";

function App() {
  console.log(process.env.REACT_APP_NOT_SECRET_CODE)
  return (
    <Headers></Headers>
  )
}

export default App;
