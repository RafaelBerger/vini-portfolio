import Footer from "./components/Footer";
import Header from "./components/Header";
import img from "../src/assets/logovini.png";
import img2 from "../src/assets/perfilvini.png";

function App() {
  return (
    <>
      <Header />

      <section className="w-screen mt-16 flex justify-center">
        <div className="w-[85%] max-w-[1632px] gap-6 grid grid-cols-2  place-items-center">
          <img
            src={img}
            alt=""
            className="border-solid border-4 w-full max-h-[500px] max-w-[805px] min-w-[675px] object-cover "
          />
          <img
            src={img2}
            alt=""
            className="border-solid border-4 w-full max-h-[500px] max-w-[805px] min-w-[675px] object-cover "
          />
          <img
            src={img2}
            alt=""
            className="border-solid border-4 w-full max-h-[500px] max-w-[805px] min-w-[675px] object-cover "
          />
          <img
            src={img}
            alt=""
            className="border-solid border-4 w-full max-h-[500px] max-w-[805px] min-w-[675px] object-cover "
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
