import Header from "./components/Header";
import {
  LinkedinLogo,
  InstagramLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import PerfilVini from "./assets/perfilvini.png";
import Footer from "./components/Footer";

function Sobre() {
  return (
    <>
      <Header />
      <section className="w-screen flex flex-col justify-center items-center mt-20 sm:mt-10">
        <div className=" sm:w-[80%] w-2/6 2xl:w-3/6 max-w-[960px] flex flex-col ">
          <h1 className="w-full flex justify-center text-3xl">SOBRE MIM</h1>
          <p className="text-xl mt-6 text-center text-gray-500 ">
            Vinicius Berger <br />
            Videomaker - Produtor Audiovisual
            <br /> São Paulo - SP <br />
            <br />
            Amante do esporte e acredito que o mesmo salva vidas. Inserido no
            mercado audiovisual através do BMX. <br />
            <br />
            Tenho 2 anos de mercado, atualmente atuo como Videomaker, Editor,
            Produtor da @gopulpo, Fotógrafo na @quintoandar e com os nichos de
            esporte, documentário, videoclipe e lifestyle compondo meu
            portfólio. <br />
            <br />
            Encontrei no meio do audiovisual uma forma de comunicar a visão que
            todo mundo pode se relacionar com o esporte através do sentimento de
            pertencimento por exemplo, onde consequentemente a gente consegue
            atingir mais pessoas.
            <br /> <br /> Meu foco é transparecer verdade, sentimento e
            intensidade através dos frames.
          </p>
        </div>
        <div className="flex gap-8 mt-16">
          <a
            href="https://www.linkedin.com/in/-vberger/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo size={40} color="#2c2a2a" />
          </a>
          <a
            href="http://instagram.com/vberger_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogo size={40} color="#2c2a2a" />
          </a>
          <a href="mailto:viniciusaberger@gmail.com">
            <EnvelopeSimple size={40} color="#2c2a2a" />
          </a>
        </div>
      </section>

      <section className="w-screen flex justify-center mt-24 pb-24">
        <img
          src={PerfilVini}
          alt="Foto de Perfil de Vinicius"
          className="w-2/4 sm:w-3/4 max-w-[960px] object-cover"
        />
      </section>

      <Footer />
    </>
  );
}

export default Sobre;
