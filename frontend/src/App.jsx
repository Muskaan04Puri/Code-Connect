import "./App.css";
// Stick to clerk-react as it is the standard for Vite
import { 
  SignInButton, 
  UserButton, 
  SignedIn, 
  SignedOut 
} from "@clerk/clerk-react"; 

function App() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>WELCOME TO CODE-CONNECT</h1>
      
      <SignedOut>
        <p>You are logged out.</p>
        <SignInButton mode="modal">
          <button style={{ padding: "10px 20px", cursor: "pointer" }}>
            Sign In / Sign Up
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <p>You are logged in!</p>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default App;