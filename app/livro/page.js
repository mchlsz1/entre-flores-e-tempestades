
import Link from "next/link";

const partes = [
  { numero: "I", nome: "O despertar", inicio: 1 },
  { numero: "II", nome: "Entre raízes e lembranças", inicio: 7 },
  { numero: "III", nome: "A estação das tempestades", inicio: 13 },
  { numero: "IV", nome: "O florescer das descobertas", inicio: 19 },
  { numero: "V", nome: "Aquilo que permanece", inicio: 25 },
  { numero: "VI", nome: "Depois da última folha", inicio: 31 }
];

export default function Livro() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#f4eedf",
      color: "#302d25",
      padding: "35px 7%"
    }}>
      <Link href="/" style={{ color: "#173d2b" }}>
        ← Voltar ao jardim
      </Link>

      <header style={{
        textAlign: "center",
        maxWidth: "700px",
        margin: "75px auto 60px"
      }}>
        <p style={{
          color: "#a18348",
          letterSpacing: "4px",
          fontSize: "12px"
        }}>
          SUMÁRIO
        </p>

        <h1 style={{
          color: "#173d2b",
          fontSize: "clamp(36px, 7vw, 58px)",
          fontWeight: "normal",
          margin: "25px 0"
        }}>
          Entre Flores e Tempestades
        </h1>

        <p style={{
          lineHeight: "1.9",
          fontStyle: "italic",
          color: "#756c5c"
        }}>
          Toda jornada possui suas estações.
          Algumas florescem, outras ensinam.
        </p>

        <div style={{
          width: "65px",
          height: "1px",
          background: "#c5a15b",
          margin: "35px auto"
        }} />
      </header>

      <section style={{
        maxWidth: "720px",
        margin: "0 auto"
      }}>
        {partes.map((parte) => (
          <details key={parte.numero} style={{
            borderBottom: "1px solid #d8cdb8",
            padding: "22px 5px"
          }}>
            <summary style={{
              cursor: "pointer",
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              gap: "20px"
            }}>
              <span style={{
                color: "#c5a15b",
                fontSize: "25px"
              }}>
                {parte.numero}
              </span>

              <span style={{
                color: "#173d2b",
                fontSize: "20px"
              }}>
                {parte.nome}
              </span>
            </summary>

            <div style={{
              padding: "20px 0 0 48px",
              lineHeight: "2.5"
            }}>
              {Array.from({ length: 6 }, (_, i) => {
                const numero = parte.inicio + i;
                const codigo = String(numero).padStart(2, "0");

                return (
                  <p key={numero}>
                    <Link
                      href={`/livro/${codigo}`}
                      style={{ color: "#756c5c" }}
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

      <footer style={{
        textAlign: "center",
        margin: "75px auto 30px",
        color: "#a18348",
        fontStyle: "italic",
        lineHeight: "1.8"
      }}>
        Que aos bons olhos o cair das folhas seja
        um começo e não o fim.
        <p style={{ marginTop: "20px" }}>
          Michel Rocha e ChatGPT
        </p>
      </footer>
    </main>
  );
}
