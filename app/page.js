
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [noturno, setNoturno] = useState(false);
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    const salvo = localStorage.getItem("ef_inicio_tema");
    if (salvo === "noturno") setNoturno(true);
    setPronto(true);
  }, []);

  function alternarTema() {
    const novoTema = !noturno;
    setNoturno(novoTema);
    localStorage.setItem("ef_inicio_tema", novoTema ? "noturno" : "claro");
  }

  return (
    <main className={`abertura ${noturno ? "noite" : "dia"}`}>
      <style jsx global>{`
        * { box-sizing: border-box; }

        .abertura {
          min-height: 100svh;
          position: relative;
          overflow: hidden;
          font-family: Georgia, serif;
          transition: background 1s, color 1s;
        }

        .abertura.dia {
          color: #f4eedf;
          background: linear-gradient(180deg, #173d2b 0%, #31543b 48%, #172c20 100%);
        }

        .abertura.noite {
          color: #eee6d3;
          background: linear-gradient(180deg, #071a17 0%, #102b25 55%, #091712 100%);
        }

        .cabecalho-jardim {
          position: relative;
          z-index: 5;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 7%;
          gap: 15px;
        }

        .marca-jardim {
          color: #d5b775;
          font-size: 17px;
          letter-spacing: 1px;
        }

        .acoes-jardim {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 14px;
        }

        .acoes-jardim a { color: inherit; }

        .tema-botao {
          border: 1px solid #c5a15b;
          background: transparent;
          color: inherit;
          border-radius: 30px;
          padding: 9px 14px;
          font-size: 13px;
        }

        .paisagem {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .luz {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: #d6b66b;
          opacity: .13;
          filter: blur(70px);
          top: 15%;
          left: calc(50% - 210px);
          animation: respirar 7s ease-in-out infinite alternate;
        }

        .noite .luz {
          background: #a6c5b2;
          opacity: .09;
        }

        .colina {
          position: absolute;
          width: 130%;
          height: 38%;
          left: -15%;
          bottom: -17%;
          border-radius: 50% 50% 0 0;
          background: #102b20;
        }

        .colina.segunda {
          width: 110%;
          height: 29%;
          left: 20%;
          bottom: -12%;
          background: #1b3827;
          opacity: .9;
        }

        .arvore {
          position: absolute;
          bottom: 7%;
          width: 150px;
          height: 310px;
          opacity: .55;
        }

        .arvore.esquerda { left: -35px; }
        .arvore.direita { right: -35px; transform: scaleX(-1); }

        .tronco {
          position: absolute;
          bottom: 0;
          left: 48%;
          width: 17px;
          height: 230px;
          background: #10251b;
          border-radius: 50%;
          transform: rotate(5deg);
        }

        .copa {
          position: absolute;
          width: 130px;
          height: 130px;
          top: 0;
          left: 0;
          border-radius: 50%;
          background: #10251b;
          box-shadow: 45px 55px 0 -15px #10251b, -22px 70px 0 -18px #10251b;
        }

        .folha {
          position: absolute;
          top: -10%;
          left: var(--x);
          width: 13px;
          height: 22px;
          border-radius: 100% 0 100% 0;
          background: #c5a15b;
          opacity: 0;
          animation: cair var(--tempo) linear var(--atraso) infinite;
        }

        .noite .folha { background: #9caf8c; }

        .conteudo-abertura {
          position: relative;
          z-index: 2;
          min-height: 76svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 45px 22px 90px;
          animation: surgir 1.5s ease both;
        }

        .sobretitulo {
          color: #d5b775;
          letter-spacing: 4px;
          font-size: 11px;
          margin-bottom: 27px;
        }

        .titulo-jardim {
          color: #f4eedf;
          font-size: clamp(39px, 8vw, 76px);
          line-height: 1.12;
          font-weight: normal;
          max-width: 900px;
          text-shadow: 0 5px 30px #071a17;
        }

        .linha-dourada {
          width: 90px;
          height: 1px;
          background: #c5a15b;
          margin: 30px auto;
        }

        .frase-abertura {
          max-width: 550px;
          font-size: clamp(16px, 3vw, 20px);
          line-height: 1.8;
          color: #e4ddca;
        }

        .entrar-jardim {
          margin-top: 38px;
          display: inline-block;
          padding: 16px 34px;
          border: 1px solid #c5a15b;
          background: #173d2b;
          color: #f4eedf;
          letter-spacing: 1px;
          transition: .3s;
        }

        .entrar-jardim:hover {
          background: #c5a15b;
          color: #102b20;
          transform: translateY(-3px);
        }

        .dedicatoria-jardim {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 10px 20px 30px;
          color: #d5b775;
          font-size: 13px;
          font-style: italic;
        }

        @keyframes cair {
          0% { transform: translate(0, -10vh) rotate(0deg); opacity: 0; }
          15% { opacity: .8; }
          85% { opacity: .6; }
          100% { transform: translate(65px, 110vh) rotate(480deg); opacity: 0; }
        }

        @keyframes respirar {
          from { transform: scale(.85); opacity: .08; }
          to { transform: scale(1.15); opacity: .18; }
        }

        @keyframes surgir {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 600px) {
          .cabecalho-jardim { padding: 20px 5%; }
          .marca-jardim { font-size: 13px; }
          .acoes-jardim { gap: 12px; font-size: 12px; }
          .tema-botao { padding: 8px 10px; }
          .arvore { opacity: .35; transform: scale(.75); }
          .arvore.direita { transform: scaleX(-1) scale(.75); }
        }

        @media (prefers-reduced-motion: reduce) {
          .folha, .luz, .conteudo-abertura { animation: none; }
        }
      `}</style>

      <div className="paisagem">
        <div className="luz" />
        <div className="arvore esquerda">
          <div className="copa" />
          <div className="tronco" />
        </div>
        <div className="arvore direita">
          <div className="copa" />
          <div className="tronco" />
        </div>
        <div className="colina" />
        <div className="colina segunda" />
        {Array.from({ length: 22 }, (_, i) => (
          <span
            key={i}
            className="folha"
            style={{
              "--x": `${(i * 47) % 100}%`,
              "--tempo": `${9 + (i % 7) * 2}s`,
              "--atraso": `${(i % 11) * -2}s`
            }}
          />
        ))}
      </div>

      <header className="cabecalho-jardim">
        <div className="marca-jardim">✦ Entre Flores e Tempestades</div>
        <nav className="acoes-jardim">
          <Link href="/login">Entrar</Link>
          <Link href="/cadastro">Criar conta</Link>
          <button className="tema-botao" onClick={alternarTema}>
            {noturno ? "☀ Dia" : "☾ Noite"}
          </button>
        </nav>
      </header>

      <section className="conteudo-abertura">
        <p className="sobretitulo">UMA JORNADA ENTRE SENTIMENTOS</p>
        <h1 className="titulo-jardim">
          Entre Flores
          <br />
          e Tempestades
        </h1>
        <div className="linha-dourada" />
        <p className="frase-abertura">
          Algumas coisas não encontram palavras.
          Por isso, florescem em metáforas.
        </p>
        <Link href="/livro" className="entrar-jardim">
          Entrar no jardim
        </Link>
      </section>

      <footer className="dedicatoria-jardim">
        Que aos bons olhos o cair das folhas seja um começo e não o fim.
      </footer>
    </main>
  );
}
