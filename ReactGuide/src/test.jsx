// interface RealProps{
//     text: string
// }
function Test(props) {
  const person = {
    theme: {
      color: "green",
    },
  };
  return (
    //here we can reference only objjects inside class
    <div style={person.theme}>Hello {props.text.name}</div>
  );
}
export default Test;
