import Link from "next/link";

export default function Livro() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#f4eedf",
      padding: "40px 8%",
      color: "#302d25"
    }}>

      <Link href="/" style={{
        color: "#173d2b"
      }}>
        ← Voltar ao jardim
      </Link>

      <section style={{
        maxWidth: "750px",
        margin: "100px auto",
        textAlign: "center"
      }}>

        <p style={{
          color: "#a18348",
          letterSpacing: "4px"
        }}>
          UMA OBRA PARA SENTIR
        </p>

        <h1 style={{
          fontSize: "clamp(36px, 7vw, 60px)",
          color: "#173d2b",
          fontWeight: "normal",
          margin: "30px 0"
        }}>
          Entre Flores e Tempestades
        </h1>

        <p style={{
          fontSize: "19px",
          lineHeight: "1.9"
        }}>
          Existem jardins que não podem ser vistos.
          Precisam ser sentidos, compreendidos e,
          principalmente, cultivados.
        </p>

        <p style={{
          marginTop: "50px",
          color: "#a18348",
          fontStyle: "italic"
        }}>
          Michel Rocha e ChatGPT
        </p>

      </section>
    </main>
  );
}
