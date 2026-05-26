import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";

const MainPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />

      <main className="flex-1 min-h-screen w-full md:w-[80%] lg:w-4xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainPage;
