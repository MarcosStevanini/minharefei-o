import { useState } from "react";
import "./ContentFood.scss";

export default function ContentFood() {
  const testeData = new Date();

  const [produto, setProduto] = useState(
    document.querySelectorAll("[type=checkbox]:checked")
  );

  function EnviarPedido() {
    var checado = document.querySelectorAll("[type=checkbox]:checked");
    var values = [];

    for (var i = 0; i < checado.length; i++) {
      values.push(checado[i].value);
    }

    if (values.length > 2) {
      console.log(values);
      window.location.href = `https://wa.me/+5522988545081?text=Olá, eu gostaria de pedir uma refeição com: *${values}*`;
    } else {
      alert("Você precisa selecionar pelo menos 2 tipos de alimentos");
    }
  }

  return (
    <section className="ContentFood mt-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-8">
            <div className="cardContent bg-light">
              <div className="titleContent">
                <h2>Cardápio do dia</h2>
                <span>
                  {testeData.getDate()}/{testeData.getMonth()}/
                  {testeData.getFullYear()}
                </span>
              </div>
              <hr />
              <div className="productsContent">
                <div className="col-lg-4">
                  <div className="infoTitle mt-3">
                    <h5>Opções gerais</h5>
                  </div>

                  <div className="products">
                    <input
                      type="checkbox"
                      name="arroz"
                      id="arroz"
                      value=" Arroz"
                    />
                    <label htmlFor="arroz">Arroz</label>
                  </div>
                  <div className="products">
                    <input
                      type="checkbox"
                      name="feijao"
                      id="feijao"
                      value=" Feijão"
                    />
                    <label htmlFor="feijao">Feijão</label>
                  </div>
                  <div className="products">
                    <input
                      type="checkbox"
                      name="batata"
                      id="batata"
                      value=" Batata Frita"
                    />
                    <label htmlFor="batata">Batata Frita</label>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="infoTitle mt-3">
                    <h5>Opções de salada</h5>
                  </div>
                  <div className="products">
                    <input
                      type="checkbox"
                      name="alface"
                      id="alface"
                      value=" Alface"
                    />
                    <label htmlFor="alface">Alface</label>
                  </div>
                  <div className="products">
                    <input
                      type="checkbox"
                      name="tomate"
                      id="tomate"
                      value=" Tomate"
                    />
                    <label htmlFor="tomate">Tomate</label>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="infoTitle mt-3">
                    <h5>Opções de massas</h5>
                  </div>
                  <div className="products">
                    <input
                      type="checkbox"
                      name="lazanha"
                      id="lazanha"
                      value=" Lazanha"
                    />
                    <label htmlFor="lazanha">Lazanha</label>
                  </div>
                  <div className="products">
                    <input
                      type="checkbox"
                      name="empadao"
                      id="empadao"
                      value=" Empadão"
                    />
                    <label htmlFor="empadao">Empadão</label>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="infoTitle mt-3">
                    <h5>Opções de carnes</h5>
                  </div>
                  <div className="products">
                    <input
                      type="checkbox"
                      name="boi"
                      id="boi"
                      value=" Bife de boi"
                    />
                    <label htmlFor="boi" id="boiLabel">
                      Bife de boi
                    </label>
                  </div>
                  <div className="products">
                    <input
                      type="checkbox"
                      name="frango"
                      id="frango"
                      value=" Frango frito"
                    />
                    <label htmlFor="frango">Frango frito</label>
                  </div>
                  <div className="products">
                    <input
                      type="checkbox"
                      name="frangoGrelhado"
                      id="frangoGrelhado"
                      value=" Frango grelhado"
                    />
                    <label htmlFor="frangoGrelhado" id="frangoLabel">
                      Frango grelhado
                    </label>
                  </div>
                </div>
              </div>
              <hr />
              <div className="buttonContent">
                <button
                  type="submit"
                  id="btn"
                  name="btn"
                  onClick={EnviarPedido}
                >
                  Enviar pedido
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 mt-3 mt-lg-0">
            <div className="cardPay bg-light">
              <div className="titlePay mb-4">
                <h6>
                  <i className="fa-solid fa-hand-holding-dollar me-2"></i>{" "}
                  Formas de pagamentos
                </h6>
                <hr />
              </div>
              <div className="contentPay">
                <div className="cart">
                  <h6>Crédito</h6>
                  <p>Visa, MasterCard, Maestro, Americanas, Elo</p>
                </div>
                <div className="cart">
                  <h6>Débito</h6>
                  <p>Visa, MasterCard, Elo</p>
                </div>
                <div className="cart">
                  <h6>Vale Refeição</h6>
                  <p>Sodexo, Ticket</p>
                </div>
                <div className="cart">
                  <h6>Dinheiro</h6>
                </div>
                <div className="cart">
                  <h6>QR Code</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
