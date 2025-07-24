import { Header } from "./components/ui/header";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/ui/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
      </BrowserRouter>
    </>
  );
}
export default App;
