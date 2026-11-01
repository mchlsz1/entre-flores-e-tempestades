
"use client";

import { useEffect, useState } from "react";
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

  const anterior = n > 1 ? String(n - 1).padStart(2, "0") : null;
  const proximo = n < 36 ? String(n + 1).padStart(2, "0") : null;

  useEffect(() => {
    const fonteSalva = localStorage.getItem("ef_temp_fonte");
    const modoSalvo = localStorage.getItem("ef_temp_noturno");
    const progressoSalvo = localStorage.getItem(`ef_temp_progresso_${codigo}`);
    const posicaoSalva = localStorage.getItem(`ef_temp_posicao_${codigo}`);

    if (fonteSalva) setFonte(Number(fonteSalva));
    if (modoSalvo) setNoturno(modoSalvo === "true");

    if (progressoSalvo) setProgresso(Number(progressoSalvo));

    setCarregado(true);

    if (posicaoSalva) {
  const posicao = Number(posicaoSalva);

  window.history.scrollRestoration = "manual";

  setTimeout(() => {
    window.scrollTo({
      top: posicao,
      behavior: "instant"
    });
  }, 500);
}

  useEffect(() => {
    if (!carregado) return;

    localStorage.setItem("ef_temp_fonte", String(fonte));
    localStorage.setItem("ef_temp_noturno", String(noturno));
  }, [fonte, noturno, carregado]);

  useEffect(() => {
    if (!carregado) return;

    function atualizarProgresso() {
      const altura =
        document.documentElement.scrollHeight - window.innerHeight;

      const valor = altura > 0
        ? Math.min(100, Math.round((window.scrollY / altura) * 100))
        : 0;

      setProgresso(valor);

      localStorage.setItem(
        `ef_temp_progresso_${codigo}`,
        String(valor)
      );

      localStorage.setItem(
        `ef_temp_posicao_${codigo}`,
        String(window.scrollY)
      );
    }

    window.addEventListener("scroll", atualizarProgresso, { passive: true });

    window.addEventListener("pagehide", atualizarProgresso);

    return () => {
      atualizarProgresso();
      window.removeEventListener("scroll", atualizarProgresso);
      window.removeEventListener("pagehide", atualizarProgresso);
    };
  }, [codigo, carregado]);

  if (!Number.isInteger(n) || n < 1 || n > 36) {
    return (
      <main style={{ padding: 40 }}>
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
  return (
    <main style={{
      minHeight: "100vh",
      background: fundo,
      color: texto,
      padding: "25px 15px 110px",
      transition: "background 0.3s"
    }}>

      <header style={{
        maxWidth: 850,
        margin: "0 auto 20px",
        display: "flex",
        justifyContent: "space-between"
      }}>
        <Link href="/" style={{ color: verde }}>← Início</Link>
        <Link href="/livro" style={{ color: verde }}>Sumário</Link>
      </header>

      <section style={{
        maxWidth: 760,
        margin: "0 auto 20px",
        padding: 18,
        background: papel,
        border: `1px solid ${dourado}`,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 15
      }}>
        <div>
          <p style={{ color: verde, fontSize: 13, marginBottom: 8 }}>
            AJUSTES DE LEITURA
          </p>

          <button onClick={() => setFonte(v => Math.max(16, v - 2))} style={botao}>
            A−
          </button>

          <button onClick={() => setFonte(v => Math.min(30, v + 2))} style={botao}>
            A+
          </button>
        </div>

        <button onClick={() => setNoturno(v => !v)} style={botao}>
          {noturno ? "☀ Modo claro" : "☾ Modo noturno"}
        </button>
      </section>

      <article style={{
        maxWidth: 760,
        minHeight: 1100,
        margin: "0 auto",
        padding: "65px clamp(25px, 8vw, 85px)",
        background: papel,
        color: texto,
        border: `1px solid ${noturno ? "#6b634c" : "#d7c9a9"}`,
        boxShadow: "0 12px 35px rgba(50, 39, 20, 0.12)",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          inset: 12,
          border: `1px solid ${noturno ? "#554e3e" : "#e5d9bd"}`,
          pointerEvents: "none"
        }} />

        <div style={{ position: "relative", textAlign: "center" }}>
          <p style={{
            color: dourado,
            letterSpacing: 4,
            fontSize: 11,
            textTransform: "uppercase"
          }}>
            Entre Flores e Tempestades
          </p>

          <div style={{ margin: "38px auto", color: dourado, fontSize: 25 }}>
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

          <div style={{ margin: "45px auto", color: dourado, fontSize: 22 }}>
            ❦
          </div>

          <p style={{ color: dourado, fontSize: 14, lineHeight: 1.8 }}>
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

      <nav style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        background: noturno ? "#172119" : "#f4eedf",
        borderTop: `1px solid ${dourado}`,
        padding: "12px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
      }}>
        {anterior ? (
          <Link href={`/livro/${anterior}`} style={linkRodape}>
            ← Anterior
          </Link>
        ) : <span />}

        <Link href="/livro" style={linkRodape}>
          ☷ Sumário
        </Link>

        {proximo ? (
          <Link href={`/livro/${proximo}`} style={linkRodape}>
            Próximo →
          </Link>
        ) : <span />}
      </nav>

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

