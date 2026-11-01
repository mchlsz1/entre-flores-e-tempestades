import Link from "next/link";

export default async function Capitulo({ params }) {
  const { numero } = await params;
  const n = Number(numero);

  if (!Number.isInteger(n) || n < 1 || n > 36) {
    return (
      <main style={{
        minHeight: "100vh",
        background: "#f4eedf",
        padding: "60px 8%",
        color: "#173d2b"
      }}>
        <h1>Capítulo não encontrado</h1>
        <Link href="/livro">Voltar ao sumário</Link>
      </main>
    );
  }

  const codigo = String(n).padStart(2, "0");
  const anterior = n > 1 ? String(n - 1).padStart(2, "0") : null;
  const proximo = n < 36 ? String(n + 1).padStart(2, "0") : null;

  return (
    <main style={{
      minHeight: "100vh",
      background: "#e9e0cc",
      padding: "35px 15px",
      color: "#302d25"
    }}>

      <header style={{
        maxWidth: "850px",
        margin: "0 auto 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "15px"
      }}>
        <Link href="/" style={{
          color: "#173d2b",
          fontSize: "14px"
        }}>
          ← Início
        </Link>

        <Link href="/livro" style={{
          color: "#173d2b",
          fontSize: "14px"
        }}>
          Sumário
        </Link>
      </header>

      <article style={{
        maxWidth: "760px",
        minHeight: "780px",
        margin: "0 auto",
        padding: "65px clamp(25px, 8vw, 85px)",
        background: "#f8f3e7",
        border: "1px solid #d7c9a9",
        boxShadow: "0 12px 35px rgba(50, 39, 20, 0.12)",
        position: "relative"
      }}>

        <div style={{
          position: "absolute",
          inset: "12px",
          border: "1px solid #e5d9bd",
          pointerEvents: "none"
        }} />

        <div style={{
          position: "relative",
          textAlign: "center"
        }}>

          <p style={{
            color: "#9b7a3f",
            letterSpacing: "4px",
            fontSize: "11px",
            textTransform: "uppercase"
          }}>
            Entre Flores e Tempestades
          </p>

          <div style={{
            margin: "38px auto",
            color: "#b08c4b",
            fontSize: "25px"
          }}>
            ❧
          </div>

          <p style={{
            color: "#a18348",
            fontSize: "12px",
            letterSpacing: "3px",
            marginBottom: "18px"
          }}>
            CAPÍTULO
          </p>

          <h1 style={{
            color: "#173d2b",
            fontWeight: "normal",
            fontSize: "42px",
            marginBottom: "25px"
          }}>
            {codigo}
          </h1>

          <div style={{
            width: "65px",
            height: "1px",
            background: "#c5a15b",
            margin: "0 auto 45px"
          }} />

          <p style={{
            color: "#756c5c",
            fontSize: "19px",
            lineHeight: "2",
            fontStyle: "italic",
            maxWidth: "470px",
            margin: "0 auto"
          }}>
            Algumas páginas precisam esperar
            o momento certo para florescer.
          </p>

          <div style={{
            margin: "45px auto",
            color: "#b08c4b",
            fontSize: "22px"
          }}>
            ❦
          </div>

          <p style={{
            color: "#9b7a3f",
            fontSize: "13px",
            lineHeight: "1.8"
          }}>
            Este capítulo está sendo preparado.
          </p>

        </div>

        <footer style={{
          position: "absolute",
          bottom: "35px",
          left: "0",
          right: "0",
          textAlign: "center",
          color: "#a18348",
          fontSize: "12px"
        }}>
          ✦
        </footer>
      </article>

      <nav style={{
        maxWidth: "760px",
        margin: "30px auto",
        display: "flex",
        justifyContent: "space-between",
        gap: "15px",
        color: "#173d2b",
        fontSize: "14px"
      }}>
        {anterior ? (
          <Link href={`/livro/${anterior}`}>
            ← Capítulo anterior
          </Link>
        ) : <span />}

        {proximo ? (
          <Link href={`/livro/${proximo}`}>
            Próximo capítulo →
          </Link>
        ) : (
          <Link href="/livro">
            Voltar ao sumário
          </Link>
        )}
      </nav>

    </main>
  );
}
