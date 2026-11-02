
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const partes = [
  { numero: "I", nome: "O despertar", inicio: 1 },
  { numero: "II", nome: "Entre raízes e lembranças", inicio: 7 },
  { numero: "III", nome: "A estação das tempestades", inicio: 13 },
  { numero: "IV", nome: "O florescer das descobertas", inicio: 19 },
  { numero: "V", nome: "Aquilo que permanece", inicio: 25 },
  { numero: "VI", nome: "Depois da última folha", inicio: 31 }
];
function DesenhosDoJardim({ cor = "#8b7655" }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "35px",
      margin: "30px auto",
      opacity: 0.72
    }}>
      {/* Rosa desenhada à mão */}
      <svg width="85" height="95" viewBox="0 0 85 95" fill="none">
        <g stroke={cor} strokeWidth="1.3" strokeLinecap="round">
          <path d="M43 48 C30 35 37 20 48 24 C61 28 55 42 43 48Z"/>
          <path d="M43 48 C25 47 24 32 34 29 C42 27 47 37 43 48Z"/>
          <path d="M43 48 C51 31 67 38 62 48 C58 57 48 55 43 48Z"/>
          <path d="M43 48 C30 56 36 68 45 64 C54 60 51 51 43 48Z"/>
          <path d="M43 48 C42 61 42 77 43 91"/>
          <path d="M43 69 C28 55 19 63 29 72 C34 76 40 73 43 69Z"/>
          <path d="M43 79 C57 64 67 71 57 80 C52 84 47 82 43 79Z"/>
          <path d="M35 24 C28 17 38 12 44 19"/>
          <path d="M48 24 C54 14 65 20 60 28"/>
        </g>
      </svg>

      {/* Borboleta desenhada à mão */}
      <svg width="85" height="95" viewBox="0 0 85 95" fill="none">
        <g stroke={cor} strokeWidth="1.3" strokeLinecap="round">
          <path d="M42 45 C22 9 4 19 17 45 C24 57 34 54 42 45Z"/>
          <path d="M43 45 C62 9 81 19 68 45 C61 57 51 54 43 45Z"/>
          <path d="M42 49 C20 49 22 77 38 66 C42 62 43 55 42 49Z"/>
          <path d="M43 49 C65 49 63 77 47 66 C43 62 42 55 43 49Z"/>
          <path d="M42 39 C39 31 39 25 35 22"/>
          <path d="M43 39 C46 31 47 25 51 22"/>
          <path d="M42 40 L43 66"/>
          <path d="M13 32 C20 34 25 40 28 47"/>
          <path d="M72 32 C65 34 60 40 57 47"/>
        </g>
      </svg>
    </div>
  );
}
export default function Livro() {
  const [noturno, setNoturno] = useState(false);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const temaSalvo = localStorage.getItem("ef_temp_noturno");
    setNoturno(temaSalvo === "true");
    setCarregado(true);
  }, []);

  function alternarTema() {
    const novoTema = !noturno;
    setNoturno(novoTema);
    localStorage.setItem("ef_temp_noturno", String(novoTema));
  }

  const cores = {
    fundo: noturno ? "#202820" : "#f4eedf",
    texto: noturno ? "#e8dfca" : "#302d25",
    verde: noturno ? "#d4c49c" : "#173d2b",
    suave: noturno ? "#c9bea8" : "#756c5c",
    linha: noturno ? "#554e3e" : "#d8cdb8",
    dourado: "#c5a15b"
  };

  if (!carregado) {
    return (
      <main style={{ minHeight: "100vh", background: "#f4eedf" }} />
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: cores.fundo,
        color: cores.texto,
        padding: "25px 7%",
        transition: "background 0.3s, color 0.3s"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap"
        }}
      >
        <Link href="/" style={{ color: cores.verde, textDecoration: "none" }}>
          ← Voltar ao jardim
        </Link>

        <button
          onClick={alternarTema}
          style={{
            background: "transparent",
            border: `1px solid ${cores.dourado}`,
            color: cores.texto,
            padding: "10px 14px",
            borderRadius: "3px",
            cursor: "pointer",
            fontSize: "13px"
          }}
        >
          {noturno ? "☀ Modo claro" : "☾ Modo noturno"}
        </button>
      </div>

            </header>

      <DesenhosDoJardim cor={cores.suave} />

      <section style={{ maxWidth: "720px", margin: "0 auto" }}>
          textAlign: "center",
          maxWidth: "700px",
          margin: "75px auto 60px"
        }}
      >
        <p
          style={{
            color: cores.dourado,
            letterSpacing: "4px",
            fontSize: "12px"
          }}
        >
          SUMÁRIO
        </p>

        <h1
          style={{
            color: cores.verde,
            fontSize: "clamp(36px, 7vw, 58px)",
            fontWeight: "normal",
            margin: "25px 0",
            fontFamily: "Georgia, serif"
          }}
        >
          Entre Flores e Tempestades
        </h1>

        <p
          style={{
            lineHeight: "1.9",
            fontStyle: "italic",
            color: cores.suave
          }}
        >
          Toda jornada possui suas estações. Algumas florescem, outras ensinam.
        </p>

        <div
          style={{
            width: "65px",
            height: "1px",
            background: cores.dourado,
            margin: "35px auto"
          }}
        />
      </header>

      <section style={{ maxWidth: "720px", margin: "0 auto" }}>
        {partes.map((parte) => (
          <details
            key={parte.numero}
            style={{
              borderBottom: `1px solid ${cores.linha}`,
              padding: "22px 5px"
            }}
          >
            <summary
              style={{
                cursor: "pointer",
                listStyle: "none",
                display: "flex",
                alignItems: "center",
                gap: "20px"
              }}
            >
              <span style={{ color: cores.dourado, fontSize: "25px" }}>
                {parte.numero}
              </span>

              <span style={{ color: cores.verde, fontSize: "20px" }}>
                {parte.nome}
              </span>
            </summary>

            <div style={{ padding: "20px 0 0 48px", lineHeight: "2.5" }}>
              {Array.from({ length: 6 }, (_, i) => {
                const numero = parte.inicio + i;
                const codigo = String(numero).padStart(2, "0");

                return (
                  <p key={numero}>
                    <Link
                      href={`/livro/${codigo}`}
                      style={{
                        color: cores.suave,
                        textDecoration: "none"
                      }}
                    >
                      Capítulo {codigo} →
                    </Link>
                  </p>
                );
              })}
            </div>
          </details>
        ))}
      </section>

      <footer
        style={{
          textAlign: "center",
          margin: "75px auto 30px",
          color: cores.dourado,
          fontStyle: "italic",
          lineHeight: "1.8"
        }}
      >
        Que aos bons olhos o cair das folhas seja um começo e não o fim.

        <p style={{ marginTop: "20px" }}>Michel Rocha e ChatGPT</p>
      </footer>
    </main>
  );
}
