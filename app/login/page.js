
import Link from "next/link";

export default function Login() {
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
        padding: "45px 30px",
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
          SEU ESPAÇO PARTICULAR
        </p>

        <h1 style={{
          color: "#173d2b",
          fontSize: "34px",
          fontWeight: "normal",
          margin: "25px 0 12px"
        }}>
          Bem-vindo de volta
        </h1>

        <p style={{
          color: "#625c4e",
          lineHeight: "1.7",
          marginBottom: "30px"
        }}>
          Seu jardim continua aqui.
          Entre para continuar sua jornada.
        </p>

        <form style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}>

          <input
            type="email"
            placeholder="Seu e-mail"
            required
            style={{
              padding: "15px",
              border: "1px solid #c5a15b",
              background: "transparent",
              fontSize: "16px"
            }}
          />

          <input
            type="password"
            placeholder="Sua senha"
            required
            style={{
              padding: "15px",
              border: "1px solid #c5a15b",
              background: "transparent",
              fontSize: "16px"
            }}
          />

          <button
            type="button"
            disabled
            style={{
              padding: "16px",
              background: "#173d2b",
              color: "#f4eedf",
              border: "none",
              fontSize: "16px",
              opacity: 0.7
            }}
          >
            Entrar em breve
          </button>

        </form>

        <p style={{
          marginTop: "30px",
          color: "#625c4e",
          fontSize: "14px"
        }}>
          Ainda não tem uma conta?
        </p>

        <p style={{
          marginTop: "12px",
          color: "#173d2b"
        }}>
          O cadastro gratuito estará disponível em breve.
        </p>

        <div style={{ marginTop: "35px" }}>
          <Link href="/" style={{ color: "#a18348" }}>
            ← Voltar ao jardim
          </Link>
        </div>

      </section>
    </main>
  );
}
