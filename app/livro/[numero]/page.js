
import Link from "next/link";

export default async function Capitulo({ params }) {
  const { numero } = await params;
  const n = Number(numero);

  if (!Number.isInteger(n) || n < 1 || n > 36) {
    return (
      <main style={{ padding: "60px 8%", background: "#f4eedf", minHeight: "100vh" }}>
        <h1>Capítulo não encontrado</h1>
        <Link href="/livro">Voltar ao sumário</Link>
      </main>
    );
  }

  const anterior = n > 1 ? String(n - 1).padStart(2, "0") : null;
  const proximo = n < 36 ? String(n + 1).padStart(2, "0") : null;
  const codigo = String(n).padStart(2, "0");

  return (
    <main style={{
      minHeight: "100vh",
      background: "#f4eedf",
      color: "#302d25",
      padding: "35px 8%"
    }}>
      <Link href="/livro" style={{ color: "#173d2b" }}>
        ← Voltar ao sumário
      </Link>

      <article style={{
        maxWidth: "720px",
        margin: "100px auto",
        textAlign: "center"
      }}>
        <p style={{
          color: "#a18348",
          letterSpacing: "4px",
          fontSize: "12px"
        }}>
          ENTRE FLORES E TEMPESTADES
        </p>

        <div style={{
          width: "55px",
          height: "1px",
          background: "#c5a15b",
          margin: "35px auto"
        }} />

        <h1 style={{
          color: "#173d2b",
          fontWeight: "normal",
          fontSize: "36px",
          marginBottom: "25px"
        }}>
          Capítulo {codigo}
        </h1>

        <p style={{
          fontStyle: "italic",
          lineHeight: "2",
          color: "#756c5c",
          fontSize: "18px"
        }}>
          Algumas páginas precisam esperar
          o momento certo para florescer.
        </p>

        <p style={{
          marginTop: "35px",
          color: "#a18348"
        }}>
          Este capítulo está sendo preparado.
        </p>
      </article>

      <nav style={{
        maxWidth: "720px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        gap: "15px"
      }}>
        {anterior ? (
          <Link href={`/livro/${anterior}`} style={{ color: "#173d2b" }}>
            ← Capítulo anterior
          </Link>
        ) : <span />}

        {proximo ? (
          <Link href={`/livro/${proximo}`} style={{ color: "#173d2b" }}>
            Próximo capítulo →
          </Link>
        ) : <Link href="/livro" style={{ color: "#173d2b" }}>
          Finalizar leitura
        </Link>}
      </nav>
    </main>
  );
}
