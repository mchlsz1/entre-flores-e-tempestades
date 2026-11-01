
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header style={{
        background: "#102b20",
        color: "#f4eedf",
        padding: "25px 8%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "15px"
      }}>
        <h2>Entre Flores e Tempestades</h2>

        <nav style={{
          display: "flex",
          gap: "20px"
        }}>
          <Link href="/login">Entrar</Link>
          <Link href="/cadastro" style={{
            color: "#c5a15b"
          }}>
            Criar conta
          </Link>
        </nav>
      </header>

      <section style={{
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
        background: "#f4eedf"
      }}>

        <p style={{
          color: "#a18348",
          letterSpacing: "4px",
          marginBottom: "25px"
        }}>
          UMA JORNADA ENTRE SENTIMENTOS
        </p>

        <h1 style={{
          fontSize: "clamp(38px, 7vw, 76px)",
          color: "#173d2b",
          maxWidth: "850px",
          fontWeight: "normal",
          marginBottom: "25px"
        }}>
          Entre Flores e Tempestades
        </h1>

        <p style={{
          fontSize: "19px",
          lineHeight: "1.8",
          maxWidth: "600px",
          color: "#625c4e"
        }}>
          Algumas coisas não encontram palavras.
          Por isso, florescem em metáforas.
        </p>

        <Link href="/livro" style={{
          marginTop: "40px",
          padding: "16px 35px",
          background: "#173d2b",
          color: "#f4eedf",
          border: "1px solid #c5a15b"
        }}>
          Entrar no jardim
        </Link>

        <p style={{
          marginTop: "70px",
          color: "#a18348",
          fontSize: "14px",
          fontStyle: "italic"
        }}>
          Que aos bons olhos o cair das folhas seja um começo e não o fim.
        </p>

      </section>
    </main>
  );
}
