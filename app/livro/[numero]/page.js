
"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Capitulo() {
  const params = useParams();
  const n = Number(params.numero);
  const codigo = String(n).padStart(2, "0");

  const [fonte, setFonte] = useState(20);
  const [noturno, setNoturno] = useState(false);
  const [progresso, setProgresso] = useState(0);
  const [carregado, setCarregado] = useState(false);

  const saindoRef = useRef(false);

  const anterior = n > 1 ? String(n - 1).padStart(2, "0") : null;
  const proximo = n < 36 ? String(n + 1).padStart(2, "0") : null;

  // Salva a posição antes de navegar para outra página.
  function salvarAntesDeSair() {
    const altura =
      document.documentElement.scrollHeight - window.innerHeight;

    const posicao = window.scrollY;

    const valor =
      altura > 0
        ? Math.min(100, Math.max(0, Math.round((posicao / altura) * 100)))
        : 0;

    localStorage.setItem(
      `ef_temp_progresso_${codigo}`,
      String(valor)
    );

    localStorage.setItem(
      `ef_temp_posicao_${codigo}`,
      String(posicao)
    );

    saindoRef.current = true;
  }

  const botao = {
    background: "transparent",
    border: "1px solid #c5a15b",
    color: "#a18348",
    padding: "10px 14px",
    marginRight: 7,
    fontSize: 14,
    cursor: "pointer"
  };

  const linkRodape = {
    color: "#a18348",
    textDecoration: "none",
    fontSize: 13,
    padding: "7px 4px"
  };

  // Recupera preferências e posição salva.
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    saindoRef.current = false;

    const fonteSalva = localStorage.getItem("ef_temp_fonte");
    const modoSalvo = localStorage.getItem("ef_temp_noturno");

    const progressoSalvo = localStorage.getItem(
      `ef_temp_progresso_${codigo}`
    );

    const posicaoSalva = localStorage.getItem(
      `ef_temp_posicao_${codigo}`
    );

    if (fonteSalva) {
      setFonte(Number(fonteSalva));
    }

    if (modoSalvo !== null) {
      setNoturno(modoSalvo === "true");
    }

    if (progressoSalvo !== null) {
      setProgresso(Number(progressoSalvo));
    }

    const posicao = posicaoSalva ? Number(posicaoSalva) : 0;

    setCarregado(true);

    if (posicao > 0) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo(0, posicao);
        });
      });

      const temporizador = setTimeout(() => {
        window.scrollTo(0, posicao);
      }, 600);

      return () => clearTimeout(temporizador);
    }
  }, [codigo]);

  // Salva tamanho da fonte e modo de leitura.
  useEffect(() => {
    if (!carregado) return;

    localStorage.setItem("ef_temp_fonte", String(fonte));
    localStorage.setItem("ef_temp_noturno", String(noturno));
  }, [fonte, noturno, carregado]);

  // Salva e atualiza o progresso.
  useEffect(() => {
    if (!carregado) return;

    function atualizarProgresso() {
      if (saindoRef.current) return;

      const altura =
        document.documentElement.scrollHeight - window.innerHeight;

      const posicao = window.scrollY;

      const valor =
        altura > 0
          ? Math.min(100, Math.max(0, Math.round((posicao / altura) * 100)))
          : 0;

      setProgresso(valor);

      localStorage.setItem(
        `ef_temp_progresso_${codigo}`,
        String(valor)
      );

      localStorage.setItem(
        `ef_temp_posicao_${codigo}`,
        String(posicao)
      );
    }

    window.addEventListener("scroll", atualizarProgresso, {
      passive: true
    });

    window.addEventListener("pagehide", atualizarProgresso);

    document.addEventListener(
      "visibilitychange",
      atualizarProgresso
    );

    return () => {
      window.removeEventListener("scroll", atualizarProgresso);
      window.removeEventListener("pagehide", atualizarProgresso);

      document.removeEventListener(
        "visibilitychange",
        atualizarProgresso
      );
    };
  }, [codigo, carregado]);

  if (!Number.isInteger(n) || n < 1 || n > 36) {
    return (
      <main style={{
        padding: 40,
        background: "#f4eedf",
        minHeight: "100vh"
      }}>
        <h1>Capítulo não encontrado</h1>
        <Link href="/livro">Voltar ao sumário</Link>
      </main>
    );
  }

  const fundo = noturno ? "#202820" : "#e9e0cc";
  const papel = noturno ? "#29342b" : "#f8f3e7";
  const texto = noturno ? "#e8dfca" : "#302d25";
  const verde = noturno ? "#d4c49c" : "#173d2b";
  const dourado = "#c5a15b";

  return (
    <main style={{
      minHeight: "100vh",
      background: fundo,
      color: texto,
      padding: "55px 15px 100px",
      transition: "background 0.3s, color 0.3s"
    }}>

      {/* Cabeçalho */}
      <header style={{
        maxWidth: 850,
        margin: "0 auto 20px",
        display: "flex",
        justifyContent: "space-between",
        gap: 15
      }}>
        <Link
          href="/"
          onClick={salvarAntesDeSair}
          style={{ color: verde }}
        >
          ← Início
        </Link>

        <Link
          href="/livro"
          onClick={salvarAntesDeSair}
          style={{ color: verde }}
        >
          Sumário
        </Link>
      </header>

  

      {/* Página do livro */}
      <article style={{
        maxWidth: 760,
        minHeight: 1100,
        margin: "0 auto",
        padding: "65px clamp(25px, 8vw, 85px)",
        background: papel,
        color: texto,
        border: `1px solid ${noturno ? "#6b634c" : "#d7c9a9"}`,
        boxShadow: "0 12px 35px rgba(50, 39, 20, 0.12)",
        position: "relative",
        transition: "background 0.3s"
      }}>

        <div style={{
          position: "absolute",
          inset: 12,
          border: `1px solid ${noturno ? "#554e3e" : "#e5d9bd"}`,
          pointerEvents: "none"
        }} />

        <div style={{
          position: "relative",
          textAlign: "center"
        }}>
          <p style={{
            color: dourado,
            letterSpacing: 4,
            fontSize: 11,
            textTransform: "uppercase"
          }}>
            Entre Flores e Tempestades
          </p>

          <div style={{
            margin: "38px auto",
            color: dourado,
            fontSize: 25
          }}>
            ❧
          </div>

          <p style={{
            color: dourado,
            fontSize: 12,
            letterSpacing: 3,
            marginBottom: 18
          }}>
            CAPÍTULO
          </p>

          <h1 style={{
            color: verde,
            fontWeight: "normal",
            fontSize: 42,
            marginBottom: 25
          }}>
            {codigo}
          </h1>

          <div style={{
            width: 65,
            height: 1,
            background: dourado,
            margin: "0 auto 45px"
          }} />

          <p style={{
            color: noturno ? "#c9bea8" : "#756c5c",
            fontSize: fonte,
            lineHeight: 2,
            fontStyle: "italic",
            maxWidth: 470,
            margin: "0 auto"
          }}>
            Algumas páginas precisam esperar o momento certo para florescer.
          </p>

          <div style={{
            margin: "45px auto",
            color: dourado,
            fontSize: 22
          }}>
            ❦
          </div>

          <p style={{
            color: dourado,
            fontSize: 14,
            lineHeight: 1.8
          }}>
            Este capítulo está sendo preparado.
          </p>
        </div>

        <footer style={{
          position: "absolute",
          bottom: 35,
          left: 0,
          right: 0,
          textAlign: "center",
          color: dourado
        }}>
          ✦
        </footer>
      </article>

   
      {/* Barra inferior: leitura e navegação */}
      <nav style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        background: noturno ? "#172119" : "#f4eedf",
        borderTop: `1px solid ${dourado}`,
        padding: "9px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 8
      }}>

        {/* Controles de leitura */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 18
        }}>
          <button
            onClick={() => setFonte(v => Math.max(16, v - 2))}
            style={linkRodape}
          >
            A−
          </button>

          <span style={{
            color: verde,
            fontSize: 11
          }}>
            Tamanho da letra
          </span>

          <button
            onClick={() => setFonte(v => Math.min(30, v + 2))}
            style={linkRodape}
          >
            A+
          </button>

          <button
            onClick={() => setNoturno(v => !v)}
            style={{
              ...linkRodape,
              border: `1px solid ${dourado}`,
              borderRadius: 4,
              background: "transparent"
            }}
          >
            {noturno ? "☀ Claro" : "☾ Escuro"}
          </button>
        </div>

        {/* Navegação entre capítulos */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8
        }}>
          {anterior ? (
            <Link
              href={`/livro/${anterior}`}
              onClick={salvarAntesDeSair}
              style={linkRodape}
            >
              ← Anterior
            </Link>
          ) : <span />}

          <Link
            href="/livro"
            onClick={salvarAntesDeSair}
            style={linkRodape}
          >
            ☷ Sumário
          </Link>

          {proximo ? (
            <Link
              href={`/livro/${proximo}`}
              onClick={salvarAntesDeSair}
              style={linkRodape}
            >
              Próximo →
            </Link>
          ) : <span />}
        </div>
      </nav>


      {/* Barra fixa de progresso */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 30,
        background: noturno ? "#172119" : "#f4eedf",
        padding: "7px 12px",
        borderBottom: `1px solid ${dourado}`
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 11,
          color: verde,
          marginBottom: 5
        }}>
          <span>Progresso da leitura</span>
          <span>{progresso}%</span>
        </div>

        <div style={{
          height: 4,
          background: noturno ? "#455044" : "#d7c9a9",
          borderRadius: 10,
          overflow: "hidden"
        }}>
          <div style={{
            width: `${progresso}%`,
            height: "100%",
            background: dourado,
            transition: "width 0.2s"
          }} />
        </div>
      </div>

    </main>
  );
}
