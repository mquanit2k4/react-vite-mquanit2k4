// () => {  } is a function component
// JSX
// Using fragment <> </> to wrap multiple elements in a single parent element
// With JSX file, we change class to className, for, to htmlFor, onclick to onClick, tabindex to tabIndex, and so on
import "./style.css";

const MyComponent = () => {
  // const QuanVM = "Vu Minh Quan"; // string
  // const QuanVM = 20; // number
  // const QuanVM = true; // boolean
  // const QuanVM = null; // null
  // const QuanVM = undefined; // undefined
  // const QuanVM = [1, 2, 3]; // array
  const QuanVM = {
    name: "Vu Minh Quan",
    age: 20,
  };
  return (
    <>
      <div> {JSON.stringify(QuanVM)} Vu Minh Quan SoICT-HUST </div> //tag
      <div
        className="child"
        style={{
          borderRadius: "10px",
        }}
      >
        child
      </div>
    </>
  );
};

export default MyComponent;
