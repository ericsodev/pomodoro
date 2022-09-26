import { useTitle } from "./hooks/useTitle";
import Home from "./pages/Home";

function App(): JSX.Element {
  useTitle("Pomodoro");
  return <Home></Home>;
}

export default App;
