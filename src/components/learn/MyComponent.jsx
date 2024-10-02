// () => {  } is a function component
// JSX
// Using fragment <> </> to wrap multiple elements in a single parent element
// With JSX file, we change class to className, for, to htmlFor, onclick to onClick, tabindex to tabIndex, and so on
import "./style.css";

const MyComponent = () => {
  return (
    <>
      <div> Vu Minh Quan SoICT-HUST </div> //tag
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
