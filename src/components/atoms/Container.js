import React from "react"
import styled from "styled-components";
import media from "../../foundation/breakPoints"

const ContainerArea = styled.div`
   width: 100%;
   max-width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
   padding: 0;
background-color: green;

   ${media.greaterThan("md")`
      max-width: ${({ theme }) => theme.maxWidth.md};
background-color: blue;
   `}

   ${media.greaterThan("xl")`
      max-width: ${({ theme }) => theme.maxWidth.xl};
background-color: purple;
   `}

`

const Container = ({ children, className }) => {
   return (
      <ContainerArea className={className}>
         {children}
      </ContainerArea>
   )
}

export default Container