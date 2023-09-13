import Header from "./components/Header";

function Sobre() {
  return (
    <>
      <Header />
      <div className="w-screen flex flex-col justify-center items-center mt-20">
        <div className="w-2/6 flex flex-col ">
          <h1 className="w-full flex justify-center text-3xl">SOBRE MIM</h1>
          <p className="text-xl mt-6 text-center text-gray-500">
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
      </div>
    </>
  );
}

export default Sobre;
