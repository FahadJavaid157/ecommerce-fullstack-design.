import { Header } from "./components/ui/header";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/ui/navbar";
import { Footer } from "./components/ui/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
