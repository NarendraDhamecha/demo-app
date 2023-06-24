
const Greeting = ({setToken}) => {

  const onLogOutHandler = () => {
     localStorage.removeItem('token');
     setToken('');
  }
    return (
      <div>
        <h1>User has successfully logged in</h1>
        <button onClick={onLogOutHandler}>Log Out</button>
      </div>
    )
}

export default Greeting;