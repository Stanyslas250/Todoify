import { Toaster } from "react-hot-toast";
import Login from "./views/Login";
function App() {
  return (
    <div className="flex justify-center w-full h-full place-items-center">
      <Login />
      <Toaster />
    </div>
  );
}

export default App;
