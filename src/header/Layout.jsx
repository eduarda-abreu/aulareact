import Header from "./header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </>
  );
}