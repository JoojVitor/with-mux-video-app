import Link from "../_components/Link";
import { MUX_HOME_PAGE_URL } from "../constants";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="mb-8">
        <h1 className="font-bold text-4xl lg:text-5xl mb-2">
          Multimídia
        </h1>
        <p className="italic">Upload e playback de vídeo</p>
      </header>
      <p className="mb-4">
        Esse trabalho utiliza o{" "}
        <Link
          href={MUX_HOME_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Mux
        </Link>
        , que fornece uma API para trabalhar com vídeos:
        <br />
      </p>
      <ul className="list-disc pl-8 mb-4">
        <li>Vídeos para serviços on-demand como Youtube ou Netflix</li>
        <li>
          Plataforma para upload de vídeos
        </li> 
        <li>Web pages para multimídia personalizada</li>
      </ul>
      <p className="mb-4">
        Fazer upload usa a{" "}
        <Link href="https://docs.mux.com/docs/direct-upload">
          API de upload direta do Mux
        </Link>
        . Quando um upload é completo, o Mux processa seu vídeo e fornece uma URL para playback.
      </p>
      <hr className="my-8 bg-gray-500" />
      {children}
    </>
  );
}
