//render <p> displays  “Learn some information about this person”. Each person should have name and age properties.

//conditional component
//if age>18 display h3 "please go vote!"
//else dislplay h3 "you must be 18"

const Person = (props) => {
  let reply;
  if (props.age > 18) {
    reply = "Please go vote!";
  } else {
    reply = <h3>You must be 18.</h3>;
  }

  return (
    <div>
      <p>Learn some information about this person</p>
      <p>How old are you?</p>
      <p>I am {props.age} years old</p>
      <p>{reply}</p>
    </div>
  );
};
