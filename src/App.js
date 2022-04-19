import "./App.css";
import AuthContext from "./context/AuthContext";
import ContextProvider from "./context/Context";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <AuthContext>
        <ContextProvider>
        <AppRouter />
        </ContextProvider>
      </AuthContext>
    </div>
  );
}

export default App;
