import React, { useState } from "react";
import styled from 'styled-components';

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

import { Icone, Box, Botao, Saldo, Detalhe, IconeTema } from "../UI";

//Herdamos o estilo o Icone para complementa-lo.
//*** NUNCA *** crie componentes de styled dentro de componentes React pois isso gera problemas de performance.
const IconeMargin = styled(Icone)`
  margin-top: 2px;
`;

// ^^ Fora do componente React.
// VV Componente React.
const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <IconeTema src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalhe>R$</Detalhe> 0,00{" "}
          </Saldo>
        ) : null}
      </div>

      <Botao onClick={toggleHandler}>
        <IconeMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Botao>
    </Box>
  );
};

export default Conta;
