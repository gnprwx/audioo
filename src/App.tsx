import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Backyard from "./Backyard";
import News from "./News";
import Footer from "./Footer";

function App() {
  return (
    <div className="h-[100dvh] bg-purple-950/30 text-slate-200">
      <div className="mx-auto w-5/6">
        <Header />
        <div className="bg-slate-950/50 grid grid-cols-1 md:grid-cols-3 gap-5 justify-center p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/backyard" element={<Backyard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;