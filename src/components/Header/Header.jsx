import "./Header.scss";

export default function Header() {
  return (
    <header className="header bg-light">
      <div className="container">
        <div className="row">
          <div className="content-header">
            <div className="Logo">
              <div className="imgLogo">
                <img src="https://via.placeholder.com/70" alt="Logo" />
              </div>
              <div className="titleLogo">
                <h2>Minha Refeição</h2>
                <p className="d-lg-block d-none">
                  <i className="fa-solid fa-location-dot"></i> Av. Cristiano
                  Dias Lopes, 455 - Bom Jesus do Norte/ES
                </p>
              </div>
            </div>
            <div className="acessar">
              <a href="#">Entrar</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
