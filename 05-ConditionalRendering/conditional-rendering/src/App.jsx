import UserGreeting from "./UserGreeting"
import TernaryGreeting from "./TernaryGreeting"

function App() {

  return (
    <>
        <UserGreeting isLoggedIn={true} userName="V1 Test User" />
        <TernaryGreeting isLoggedIn={true} userName="V2 Test User"/>
    </>
  )
}

export default App
