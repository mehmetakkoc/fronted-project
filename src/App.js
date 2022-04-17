import "./App.css";
import {AppProvider} from "./context/Context";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
