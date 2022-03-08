import "./ContentFood.scss";

export default function ContentFood() {
  const testeData = new Date();

  function EnviarPedido() {
    var checado = document.querySelectorAll("[type=checkbox]:checked");
    var pagamentos = document.querySelectorAll("[name=pagamentos]:checked");
    var troco = document.querySelectorAll("[name=troco]:checked");
    var totalTroco = document.getElementById("valorTroco").value;

    var pagValues = [];
    var values = [];
    var trocoValue = [];

    for (var k = 0; k < troco.length; k++) {
      trocoValue.push(troco[k].value);
    }

    for (var i = 0; i < checado.length; i++) {
      values.push(checado[i].value);
    }
    for (var j = 0; j < pagamentos.length; j++) {
      pagValues.push(pagamentos[j].value);
    }

    if (values.length > 2 && pagValues.length > 0) {
      // console.log(values);
      // console.log(pagValues);
      // console.log(fim);
      var fim =
        trocoValue == "sim"
          ? " Com troco para: " + totalTroco + " reais"
          : trocoValue == "nao"
          ? " Sem troco"
          : ".";

      window.location.href =
        `https://wa.me/+5522988545081?text=Olá, eu gostaria de pedir uma refeição com: *${values}*. Com a forma de pagamento em: ${pagValues}` +
        `${fim}`;
    } else if (values.length <= 2) {
      alert("Você precisa selecionar pelo menos 2 tipos de alimentos");
    } else {
      alert("Você precisa selecionar a forma de pagamento");
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
                <div className="cart mb-2 mt-1">
                  <h6>Crédito</h6>
                  <div className="d-flex align-items-center">
                    <input
                      type="radio"
                      name="pagamentos"
                      id="credito"
                      value="Cartão de Crédito/Débito"
                    />
                    <label className="ms-2" htmlFor="credito">
                      Visa, MasterCard, Maestro, Americanas, Elo
                    </label>
                  </div>
                </div>
                <div className="cart  mb-2 mt-1">
                  <h6>Vale Refeição</h6>
                  <div className="d-flex align-items-center">
                    <input
                      type="radio"
                      name="pagamentos"
                      id="refeicao"
                      value="Vale refeição"
                    />
                    <label className="ms-2" htmlFor="refeicao">
                      Sodexo, Ticket
                    </label>
                  </div>
                </div>
                <div className="cart  mb-2 mt-1">
                  <h6>Dinheiro</h6>
                  <div className="d-flex align-items-center">
                    <input
                      type="radio"
                      name="pagamentos"
                      id="dinheiro"
                      value="Dinheiro"
                      onChange={() => {
                        var troco = document.getElementById("troco");
                        troco.classList.remove("d-none");
                        troco.classList.add("d-flex");
                      }}
                    />
                    <label className="ms-2" htmlFor="dinheiro">
                      Dinheiro
                    </label>
                  </div>
                  <div className="d-none align-items-center" id="troco">
                    <label className="me-2">Troco necessário?</label>
                    <input
                      type="radio"
                      name="troco"
                      id="trocoSim"
                      value="sim"
                      onClick={() => {
                        var seTroco = document.getElementById("seTroco");
                        seTroco.classList.remove("d-none");
                        seTroco.classList.add("d-flex");
                      }}
                    />
                    <label htmlFor="trocoSim" className="ms-1">
                      Sim
                    </label>
                    <input
                      type="radio"
                      name="troco"
                      id="trocoNao"
                      value="nao"
                      className="ms-2"
                    />
                    <label htmlFor="trocoNao" className="ms-1">
                      Não
                    </label>
                  </div>
                  <div className="seTroco d-none" id="seTroco">
                    <input type="number" name="valorTroco" id="valorTroco" />
                  </div>
                </div>
                <div className="cart mb-2 mt-1">
                  <h6>QR Code</h6>
                  <div className="d-flex align-items-center">
                    <input
                      type="radio"
                      name="pagamentos"
                      id="qrCode"
                      value="QR Code"
                    />
                    <label className="ms-2" htmlFor="qrCode">
                      QR Code
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
