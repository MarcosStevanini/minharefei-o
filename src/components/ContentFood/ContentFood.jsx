import React, { useState } from "react";
import "./ContentFood.scss";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContentFood() {
  const [listProducts, setListProducts] = useState([]);
  const [methodPay, setMethodPay] = useState();
  const [exchanged, setExchanged] = useState();
  const [amountExchanged, setAmountExchanged] = useState(0);
  const testeData = new Date();

  const onSubmit = () => {
    if (listProducts.length < 3) {
      return toast.error("Selecione pelo menos 3 alimentos");
    } else if (!methodPay) {
      return toast.error("Selecione um metodo de pagamento");
    } else {
      toast.success("Enviando pedido");
      window.location.href = `https://wa.me/+5522988545081?text=Olá, eu gostaria de pedir uma refeição com: *${listProducts.join(
        ", "
      )}*. ${!!methodPay && `Com a forma de pagamento em: ${methodPay}`} ${
        !!exchanged
          ? "com troco para: R$ " + Number(amountExchanged).toFixed(2)
          : ""
      }`;
    }
  };

  const productsFood = {
    allOption: [
      {
        name: "arroz",
        value: "Arroz",
      },
      {
        name: "feijao",
        value: "Feijão",
      },
      {
        name: "batata",
        value: "Batata",
      },
    ],

    saladOption: [
      {
        name: "alface",
        value: "Alface",
      },
      {
        name: "tomate",
        value: "Tomate",
      },
    ],
    pasOption: [
      {
        name: "macarrao",
        value: "Macarrão",
      },
      {
        name: "lazanha",
        value: "Lazanha",
      },
      {
        name: "empadao",
        value: "Empadão",
      },
    ],
    beefOption: [
      {
        name: "boi",
        value: "Carne de boi",
      },
      {
        name: "porco",
        value: "Carne de porco",
      },
      {
        name: "frango",
        value: "Carne de frango",
      },
    ],
  };

  const handleProducts = (e) => {
    setListProducts((prevState) => {
      const findItem = prevState.find((value) => value === e.target.value);
      if (!!findItem) return prevState.filter((value) => value !== findItem);

      return [...prevState, e.target.value];
    });
  };

  const handlePay = (e) => {
    setMethodPay(e.target.value);
  };

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

                  {productsFood.allOption.map((item) => {
                    return (
                      <div className="products" key={item.name}>
                        <input
                          type="checkbox"
                          name={item.name}
                          value={item.value}
                          // checked={listProducts.find(
                          //   (value) => value === item.value
                          // )}
                          onChange={handleProducts}
                        />
                        <label htmlFor={item.name}>{item.value}</label>
                      </div>
                    );
                  })}
                </div>

                <div className="col-lg-4">
                  <div className="infoTitle mt-3">
                    <h5>Opções de salada</h5>
                  </div>

                  {productsFood.saladOption.map((item) => {
                    return (
                      <div className="products" key={item.name}>
                        <input
                          type="checkbox"
                          name={item.name}
                          value={item.value}
                          onChange={handleProducts}
                        />
                        <label htmlFor={item.name}>{item.value}</label>
                      </div>
                    );
                  })}
                </div>

                <div className="col-lg-4">
                  <div className="infoTitle mt-3">
                    <h5>Opções de massas</h5>
                  </div>

                  {productsFood.pasOption.map((item) => {
                    return (
                      <div className="products" key={item.name}>
                        <input
                          type="checkbox"
                          name={item.name}
                          value={item.value}
                          onChange={handleProducts}
                        />
                        <label htmlFor={item.name}>{item.value}</label>
                      </div>
                    );
                  })}
                </div>

                <div className="col-lg-4">
                  <div className="infoTitle mt-3">
                    <h5>Opções de carnes</h5>
                  </div>

                  {productsFood.beefOption.map((item) => {
                    return (
                      <div className="products" key={item.name}>
                        <input
                          type="checkbox"
                          name={item.name}
                          value={item.value}
                          onChange={handleProducts}
                        />
                        <label htmlFor={item.name}>{item.value}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <hr />
              <div className="buttonContent">
                <button type="submit" name="btn" onClick={onSubmit}>
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
                      value="Cartão de Crédito/Débito"
                      onChange={handlePay}
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
                      value="Vale refeição"
                      onChange={handlePay}
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
                      value="Dinheiro"
                      onChange={handlePay}
                    />
                    <label className="ms-2" htmlFor="dinheiro">
                      Dinheiro
                    </label>
                  </div>
                  <label className="me-2">Troco necessário?</label>
                  <input
                    type="radio"
                    name="troco"
                    value="sim"
                    onChange={() => setExchanged(true)}
                  />
                  <label htmlFor="trocoSim" className="ms-1">
                    Sim
                  </label>
                  <input
                    type="radio"
                    name="troco"
                    value="nao"
                    onChange={() => setExchanged(false)}
                    className="ms-2"
                  />
                  <label htmlFor="trocoNao" className="ms-1">
                    Não
                  </label>

                  {!!exchanged && (
                    <input
                      type="number"
                      placeholder={"Digite o valor do troco:"}
                      onChange={(e) => setAmountExchanged(e.target.value)}
                    />
                  )}
                </div>
              </div>
            </div>
            {/* <div className="cart mb-2 mt-1">
              <h6>QR Code</h6>
              <div className="d-flex align-items-center">
                <input type="radio" name="pagamentos" value="QR Code" />
                <label className="ms-2" htmlFor="qrCode">
                  QR Code
                </label>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
