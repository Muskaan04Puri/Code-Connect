import "./App.css";
import { SignInButton } from "@clerk/react";

function App() {
  return (
    <>
      <h1>WELCOME</h1>
      <SignInButton mode="modal" />
    </>
  );
}

export default App;
