import "./styles.css";
import AppBar from "./Components/Appbar";
import Card from "./Components/Card";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import img4 from "./image-4.png";
import img3 from "./image-3.png";
import img2 from "./image-2.png";
import img1 from "./image-1.png";
import img5 from "./app-store-download.png";

export default function App() {
  return (
    <>
      <div className="back">
        <div className="top">
          <img src={img4} id="right" />
          <div id="first">
            <h3>ABBONAMENTS AZIENDALI</h3>
            <h2 className={"font"}>Fai crescere la tua</h2>
            <h2 className={"font"}>organizzazione</h2>
            <h2 className={"font"}>(informata)</h2>
            <p style={{ fontSize: "20px" }}>
              Being informed means arriving before competitors.We have studied
              subscriptions for companies and working groups:choose the plan
              that best suits your team,you can activate the subscription in a
              few minutes.
            </p>
          </div>
        </div>
        <div className="two">
          <div className="head1">
            <img src={img1} height="100" />
            <h2 className={"font"}>Sempre informati</h2>
            <p className={"para"}>
              Mille parole di prima maltina per conoscere le notize fondamentali
              da tutto il mondo
            </p>
          </div>
          <div className={"head2"}>
            <img src={img2} height="100" width="100" />
            <h2 className={"font"}>Sempre informati</h2>
            <p className={"para"}>
              Mille parole di prima maltina per conoscere le notize fondamentali
              da tutto il mondo
            </p>
          </div>
          <div className={"head2"}>
            <img src={img3} height="100" width="100" />
            <h2 className={"font"}>Sempre informati</h2>
            <p className={"para"}>
              Mille parole di prima maltina per conoscere le notize fondamentali
              da tutto il mondo
            </p>
          </div>
        </div>
      </div>
      <h1 className="center">Calcola il tuo piano</h1>
      <p2 className="center1">
        Scegli la soluzione piu convienientate per tue esifenze,in base al
        numero di persone che vuoi{" "}
      </p2>
      <br />
      <p2 className="center1">
        isciverse e alla frequenza con curi preferisci pagare: piu crediti
        accquisti e piu risparmi
      </p2>
      <br />
      <br />
      <div className="card">
        <div className="card1">
          <h3 style={{ textAlign: "center" }}>20 crediti*</h3>

          <h1 style={{ textAlign: "center" }}>2.50 $</h1>

          <h3 style={{ textAlign: "center" }}>per utente/mese</h3>

          <p style={{ fontSize: "20px" }}>
            Accquista un pacchetto da 20 crediti per 5o$
          </p>
          <button className="btn">Scegli</button>
        </div>
        <div className="card1">
          <h3 style={{ textAlign: "center" }}>20 crediti*</h3>

          <h1 style={{ textAlign: "center" }}>2.50 $</h1>

          <h3 style={{ textAlign: "center" }}>per utente/mese</h3>

          <p style={{ fontSize: "20px" }}>
            Accquista un pacchetto da 20 crediti per 5o$
          </p>
          <button className="btn">Scegli</button>
        </div>
        <div className="card1">
          <h3 style={{ textAlign: "center" }}>20 crediti*</h3>

          <h1 style={{ textAlign: "center" }}>2.50 $</h1>

          <h3 style={{ textAlign: "center" }}>per utente/mese</h3>

          <p style={{ fontSize: "20px" }}>
            Accquista un pacchetto da 20 crediti per 5o$
          </p>
          <button className="btn">Scegli</button>
        </div>
        <div className="card1">
          <h3 style={{ textAlign: "center" }}>20 crediti*</h3>

          <h1 style={{ textAlign: "center" }}>2.50 $</h1>

          <h3 style={{ textAlign: "center" }}>per utente/mese</h3>

          <p style={{ fontSize: "20px" }}>
            Accquista un pacchetto da 20 crediti per 5o$
          </p>
          <button className="btn">Scegli</button>
        </div>
      </div>
      <br />
      <br />
      <div className="card2">
        <div className="card3">
          <h3 style={{ textAlign: "center" }}>20 crediti*</h3>

          <h1 style={{ textAlign: "center" }}>2.50 $</h1>

          <h3 style={{ textAlign: "center" }}>per utente/mese</h3>

          <p style={{ fontSize: "20px" }}>
            Accquista un pacchetto da 20 crediti per 5o$
          </p>
          <button className="btn">Scegli</button>
        </div>
        <div className="card3">
          <h3 style={{ textAlign: "center" }}>20 crediti*</h3>

          <h1 style={{ textAlign: "center" }}>2.50 $</h1>

          <h3 style={{ textAlign: "center" }}>per utente/mese</h3>

          <p style={{ fontSize: "20px" }}>
            Accquista un pacchetto da 20 crediti per 5o$
          </p>
          <button className="btn">Scegli</button>
        </div>
        <div className="card3">
          <h3 style={{ textAlign: "center" }}>20 crediti*</h3>

          <h1 style={{ textAlign: "center" }}>2.50 $</h1>

          <h3 style={{ textAlign: "center" }}>per utente/mese</h3>

          <p style={{ fontSize: "20px" }}>
            Accquista un pacchetto da 20 crediti per 5o$
          </p>
          <button className="btn">Scegli</button>
        </div>
        <div className="card3">
          <h3 style={{ textAlign: "center" }}>20 crediti*</h3>

          <h1 style={{ textAlign: "center" }}>2.50 $</h1>

          <h3 style={{ textAlign: "center" }}>per utente/mese</h3>

          <p style={{ fontSize: "20px" }}>
            Accquista un pacchetto da 20 crediti per 5o$
          </p>
          <button className="btn">Scegli</button>
        </div>
      </div>
      <p style={{ fontSize: "20px", marginLeft: "450px" }}>
        * Un credito equivale a un mese di abbonameto per utente
      </p>
      <br />
      <br />
      <div className="end">
        <h2 style={{ textAlign: "center", fontSize: "30px" }}>
          Domande e risposte frequenti
        </h2>
        <p
          style={{
            fontWeight: "bolder",
            color: `rgb(58, 150, 153)`,
            fontSize: "20px",
            marginLeft: "80px"
          }}
        >
          - Quando vengono scalati i news credits ?
        </p>

        <p style={{ fontSize: "18px", marginLeft: "80px" }}>
          Il primo glorono di ogni mese verrammo scalati dal tuo account unn
          numero di news credits corrispondente al numero di utenti
          associatialla tua azienda.
        </p>

        <p
          style={{
            fontWeight: "bolder",
            color: `rgb(32, 124, 128)`,
            fontSize: "20px",
            marginLeft: "80px"
          }}
        >
          + Cosa succede se cenom ci sono abbastanza news credits al momento del
          rinnovo?
        </p>

        <p
          style={{
            fontWeight: "bolder",
            color: `rgb(34, 151, 155)`,
            fontSize: "20px",
            marginLeft: "80px"
          }}
        >
          + Come posso aggiungers/togliere utensil ?
        </p>

        <p
          style={{
            fontWeight: "bolder",
            color: `rgb(39, 143, 146)`,
            fontSize: "20px",
            marginLeft: "80px"
          }}
        >
          + Quando posso cambiare paino ?
        </p>

        <p
          style={{
            fontWeight: "bolder",
            color: `rgb(31, 131, 134)`,
            fontSize: "20px",
            marginLeft: "80px"
          }}
        >
          + Posso avere un rimborso per i punti non usati ?
        </p>

        <p
          style={{
            fontWeight: "bolder",
            color: `rgb(29, 122, 126)`,
            fontSize: "20px",
            marginLeft: "80px"
          }}
        >
          + Posso avere una fattura ?
        </p>

        <p
          style={{
            fontWeight: "bolder",
            color: `rgb(27, 114, 117)`,
            fontSize: "20px",
            marginLeft: "80px"
          }}
        >
          + Quando avverranno i pagamenti ?
        </p>

        <p
          style={{
            fontWeight: "bolder",
            color: `rgb(27, 116, 119)`,
            fontSize: "20px",
            marginLeft: "80px"
          }}
        >
          + Quali metodi di pagamento posso uare ?
        </p>
        <br />
        <div className="end1">
          <div className="end2">
            <h1 style={{ textAlign: "center" }}>CONTATTI</h1>

            <h2 style={{ textAlign: "center", color: "cornsilk" }}>
              Email &ensp; &ensp; &ensp;&ensp;&ensp; mail@goodmorningitalia.it
            </h2>
            <h2 style={{ textAlign: "center", color: "cornsilk" }}>
              Facebook &ensp; &ensp; Facebook.com/goodmrningIT
            </h2>
            <h2 style={{ textAlign: "center", color: "cornsilk" }}>
              Twitter &ensp; &ensp; &ensp; Twitter.com/goodmorningIT
            </h2>
          </div>
          <div className="end3">
            <img src={img5} id="pic" />
            <h1 style={{ marginLeft: "30px" }}>GOOD MORNING ITALIA SRL</h1>

            <h2 style={{ color: "cornsilk", marginLeft: "30px" }}>
              Condizioni e Privacy
            </h2>
            <h2 style={{ color: "cornsilk", marginLeft: "30px" }}>
              (Riptoduzione riservata)
            </h2>
            <h2 style={{ color: "cornsilk", marginLeft: "30px" }}>
              ( ISSN 2532-1927
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
