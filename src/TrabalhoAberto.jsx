import Header from "./components/Header";
import Footer from "./components/Footer";
import img1 from "../src/assets/perfilvini.png";
import vid from "../src/assets/deixa eu jogar lol.mp4";
import { DefaultUi, Player, Video } from "@vime/react";

import "@vime/core/themes/default.css";

export default function TrabalhoAberto() {
  return (
    <>
      <Header />

      <section className="w-screen h-auto flex justify-center mt-16">
        <div className="w-2/6 flex flex-col gap-4">
          <h1 className="text-center text-3xl">Casos de Sucesso - Souzamaas</h1>
          <p className="text-gray-500 text-xl mt-6">
            Projeto idealizado por @gopulpo que tive o prazer de produzir
            inteiramente com eles. Nesse Projeto produzimos um vídeo
            institucional com sua versão resumida e seus cortes que puderam
            contar a história de superação da montevérgine com a ajuda do grupo
            souzamaas. Produção, Captação, Direção e Edição.
          </p>
        </div>
      </section>

      <section className="w-screen mt-20 flex justify-center">
        <div className="w-3/4 grid grid-cols-4 place-items-stretch gap-2  ">
          <img src={img1} alt="" className="w-full object-cover" />
          <img src={img1} alt="" className="w-full object-cover " />
          <img src={img1} alt="" className="w-full object-cover " />
          <img src={img1} alt="" className="w-full object-cover" />
          <img src={img1} alt="" className="w-full object-cover" />
          <img src={img1} alt="" className="w-full object-cover" />
          <img src={img1} alt="" className="w-full object-cover" />
          <img src={img1} alt="" className="w-full object-cover" />
          <img src={img1} alt="" className="w-full object-cover" />
        </div>
      </section>

      <section className="w-screen h-auto flex justify-center mt-16">
        <div className="w-3/5 flex flex-col gap-8 justify-center ">
          <div className="w-full ">
            <Player>
              <Video
                crossOrigin=""
                poster="https://media.vimejs.com/poster.png"
                preload="auto"
                mediaTitle="Teste"
              >
                <source data-src={vid} type="video/mp4" />
                <track default />
              </Video>
              <DefaultUi />
            </Player>
          </div>

          <div className="w-full">
            <Player>
              <Video
                crossOrigin=""
                poster="https://media.vimejs.com/poster.png"
                preload="auto"
              >
                <source data-src={vid} type="video/mp4" />
                <track default />
              </Video>
              <DefaultUi />
            </Player>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
