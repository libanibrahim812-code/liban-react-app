function Greeting(props) {
  return (
    <div style={{ backgroundColor: "red"}}>
      <h1>
        Hello, {props.name} {props.lastname}!
      </h1>
      <h2>This text was not there</h2>
    </div>
  );
}

export default Greeting;
