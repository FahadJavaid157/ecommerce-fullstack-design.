import { Outlet } from "react-router";
import { Header } from "../ui/header";
import { Footer } from "../ui/footer";
import { Navbar } from "../ui/navbar";
export function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      {/* <main>
        <Outlet />
      </main> */}
      <Footer />
    </>
  );
}
