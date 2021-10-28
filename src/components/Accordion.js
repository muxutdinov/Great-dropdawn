import React from "react";
import { Data } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
// import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div``;
const Container = styled.div``;

const Accordion = () => {
  return (
    <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
      <AccordionSection>
        <Container>
          {Data.map((value, index) => {
            return (
              <>
                <h1>{value.question}</h1>
                <p>{value.answer}</p>
              </>
            );
          })}
        </Container>
      </AccordionSection>
      ;
    </IconContext.Provider>
  );
};

export default Accordion;
