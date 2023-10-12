import Header from "./components/Header";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Footer from "./components/Footer";

function Contato() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y0mxser",
        "template_qq50rwb",
        form.current,
        "1FcA1HfYczf6JfBil"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <>
      <Header />
      <section className="mt-20 sm:mt-10 w-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl">CONTATO</h1>
        <p className="text-gray-500 text-xl mt-6">
          Solicite seu orçamento ou mande seu material aqui
        </p>

        <form ref={form} onSubmit={sendEmail} className="mt-12">
          <div className="flex flex-col h-[400px] justify-evenly sm:w-9/12">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              className="w-full max-w-[640px] min-w-[480px] h-12 px-4 rounded-md text-dark-100 sm:min-w-0 border-solid border-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full max-w-[640px] min-w-[480px] h-12 px-4 rounded-md text-dark-100 sm:min-w-0 border-solid border-2"
              required
            />
            <textarea
              name="message"
              placeholder="Mensagem"
              className="w-full resize-none max-w-[640px] min-w-[480px] py-3 h-32 px-4 rounded-md text-dark-100 sm:min-w-0 border-solid border-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-56 h-12 border-solid border-2 border-slate-900 text-dark-200 font-bold rounded-md hover:bg-black hover:text-white transition-colors ease-in"
          >
            Mandar mensagem
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Contato;
