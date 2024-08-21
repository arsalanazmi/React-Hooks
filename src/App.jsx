import "./App.css";
import Parent from "./components/Parent";
import UseCallback from "./components/UseCallback/UseCallback";
import CleanUp from "./components/UseEffect/CleanUp";
import UseEffect from "./components/UseEffect/UseEffect";
import UseLayoutEffect from "./components/UseLayoutEffect/UseLayoutEffect";
import UseMemo from "./components/UseMemo/UseMemo";
import UseMemo1 from "./components/UseMemo/UseMemo1";
import UseReducer from "./components/UseReducer/UseReducer";
import UseRef from "./components/UseRef/UseRef";
import UseRef1 from "./components/UseRef/UseRef1";
import UseState from "./components/UseState/UseState";
import UseStateObject from "./components/UseState/UseStateObject";
import CustomHook from "./components/CustomHook/CustomHook";

function App() {
  return (
    <>
      <UseState />
      <UseStateObject />
      <UseEffect />
      <CleanUp />
      <Parent />
      <UseReducer />
      <UseRef />
      <UseRef1 />
      <UseLayoutEffect />
      <UseMemo />
      <UseMemo1 />
      <UseCallback />
      <CustomHook />
    </>
  );
}

export default App;
