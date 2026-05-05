function Dashboard({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>waa logged in gareesantahay!</p>
      ) : (
        <p>Fadlan log in gareey.</p>
      )}
      {isLoggedIn ? <p>yes true</p> : <p>no false</p> }
    </div>
  );
}

export default Dashboard;
