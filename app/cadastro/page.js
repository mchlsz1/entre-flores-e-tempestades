
import Link from "next/link";

export default function Cadastro() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#102b20",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "25px"
    }}>

      <section style={{
        background: "#f4eedf",
        padding: "40px 30px",
        width: "100%",
        maxWidth: "430px",
        textAlign: "center",
        border: "1px solid #c5a15b"
      }}>

        <p style={{
          color: "#a18348",
          letterSpacing: "3px",
          fontSize: "12px"
        }}>
          UM NOVO COMEÇO
        </p>

        <h1 style={{
          color: "#173d2b",
          fontSize: "36px",
          fontWeight: "normal",
          margin: "25px 0"
        }}>
          Cultive seu jardim
        </h1>

        <p style={{
          color: "#625c4e",
          lineHeight: "1.8",
          marginBottom: "30px"
        }}>
          Crie sua conta gratuitamente e tenha
          um espaço para guardar suas leituras,
          pensamentos e descobertas.
        </p>

        <form style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}>

          <input
            type="text"
            placeholder="Como deseja ser chamado?"
            required
            style={campo}
          />

          <input
            type="email"
            placeholder="Seu e-mail"
            required
            style={campo}
          />

          <input
            type="password"
            placeholder="Crie uma senha"
            required
            style={campo}
          />

          <button
            type="button"
            disabled
            style={{
              padding: "16px",
              background: "#173d2b",
              color: "#f4eedf",
              border: "none",
              opacity: 0.7
            }}
          >
            Cadastro em breve
          </button>

        </form>

        <p style={{
          marginTop: "25px",
          fontSize: "14px",
          color: "#625c4e"
        }}>
          Já possui uma conta?
        </p>

        <Link href="/login" style={{
          display: "inline-block",
          marginTop: "12px",
          color: "#173d2b"
        }}>
          Fazer login
        </Link>

        <div style={{ marginTop: "30px" }}>
          <Link href="/" style={{ color: "#a18348" }}>
            ← Voltar ao jardim
          </Link>
        </div>

      </section>
    </main>
  );
}

const campo = {
  padding: "15px",
  border: "1px solid #c5a15b",
  background: "transparent",
  fontSize: "16px",
  width: "100%"
};
