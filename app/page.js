
"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="abertura-realista">
      <video
        className="video-jardim"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src="/14531971_1080_1920_60fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="sombra-jardim" />

      <header className="cabecalho-jardim">
        <span className="marca-jardim">ENTRE FLORES E TEMPESTADES</span>

        <nav>
          <Link href="/login">Entrar</Link>
          <Link href="/cadastro">Criar conta</Link>
        </nav>
      </header>

      <section className="conteudo-abertura">
        <p className="pequeno-titulo">UMA JORNADA ENTRE SENTIMENTOS</p>

        <h1>
          Entre Flores
          <br />
          <span>e Tempestades</span>
        </h1>

        <div className="linha-dourada" />

        <p className="frase-abertura">
          Há sentimentos que não encontram palavras.
          <br />
          Talvez encontrem um jardim.
        </p>

        <Link href="/livro" className="botao-jardim">
          Entrar no jardim
          <span> →</span>
        </Link>
      </section>

      <footer className="rodape-jardim">
        <p>
          Que aos bons olhos o cair das folhas seja um começo e não o fim.
        </p>
        <span>Michel Rocha e ChatGPT</span>
      </footer>

      <style jsx>{`
        .abertura-realista {
          position: relative;
          min-height: 100vh;
          min-height: 100svh;
          overflow: hidden;
          background: #10251b;
          color: #f5eedf;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 28px 7%;
          box-sizing: border-box;
          isolation: isolate;
        }

        .video-jardim {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: -2;
        }

        .sombra-jardim {
          position: absolute;
          inset: 0;
          background:
  linear-gradient(
    180deg,
    rgba(3, 12, 7, 0.78),
    rgba(3, 12, 7, 0.58) 42%,
    rgba(3, 12, 7, 0.88)
  );
          z-index: -1;
        }

        .cabecalho-jardim {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        .marca-jardim {
          font-size: 11px;
          letter-spacing: 3px;
          color: #e2c58a;
        }

        nav {
          display: flex;
          gap: 20px;
        }

        nav a {
          color: #f5eedf;
          text-decoration: none;
          font-size: 13px;
        }

        .conteudo-abertura {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 850px;
          margin: auto;
          padding: 90px 0;
          text-align: center;
        }

        .pequeno-titulo {
  color: #fff0c9;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 4px;
  margin-bottom: 25px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
}

        h1 {
          font-family: Georgia, serif;
          font-size: clamp(43px, 9vw, 82px);
          line-height: 1.12;
          font-weight: normal;
          margin: 0;
          text-shadow: 0 3px 20px rgba(0, 0, 0, 0.35);
        }

        h1 span {
          font-style: italic;
          color: #e2c58a;
        }

        .linha-dourada {
          width: 65px;
          height: 1px;
          background: #c5a15b;
          margin: 32px auto;
        }

        .frase-abertura {
          font-family: Georgia, serif;
          font-style: italic;
          line-height: 1.9;
          font-size: 16px;
          color: #eee5d4;
          margin-bottom: 35px;
        }

        .botao-jardim {
          display: inline-block;
          padding: 15px 30px;
          border: 1px solid #d2b477;
          color: #fff7e8;
          text-decoration: none;
          letter-spacing: 1px;
          font-size: 13px;
          transition: background 0.3s;
        }

        .botao-jardim:hover {
          background: rgba(197, 161, 91, 0.2);
        }

        .rodape-jardim {
          position: relative;
          z-index: 1;
          text-align: center;
          color: #e2c58a;
          font-family: Georgia, serif;
          font-style: italic;
          font-size: 13px;
          line-height: 1.8;
          padding-bottom: 8px;
        }

        .rodape-jardim span {
          display: block;
          margin-top: 12px;
          font-family: Arial, sans-serif;
          font-style: normal;
          font-size: 10px;
          letter-spacing: 2px;
        }

        @media (max-width: 600px) {
          .abertura-realista {
            padding: 22px 6%;
          }

          .marca-jardim {
            font-size: 9px;
            letter-spacing: 2px;
          }

          nav {
            gap: 12px;
          }

          nav a {
            font-size: 12px;
          }

          .conteudo-abertura {
            padding: 70px 0;
          }

          .pequeno-titulo {
            font-size: 9px;
            letter-spacing: 3px;
          }

          .frase-abertura {
            font-size: 14px;
          }

          .rodape-jardim {
            font-size: 11px;
          }
        }
      `}</style>
    </main>
  );
}
