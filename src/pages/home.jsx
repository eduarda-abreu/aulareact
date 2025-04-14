import joia from "./img/joia.png"

export default function Home() {
  return (
    <>
      <style>{`
        .home-container {
          text-align: center;
          padding: 20px;
        }
      `}</style>
      <div className="home-container">
        <h1>Bem-vindo à Home</h1>
        <p>Escolha um dos projetos no menu acima.</p>
        <img src={joia} alt=""/>
      </div>
    </>
  );
}