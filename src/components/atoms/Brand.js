import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import imgLogo from "../../images/shared/logo.svg"

const LinkLogo = styled(Link)`
   width: auto;
   height: 100%;
   display: flex;
   align-items: center;
   cursor: pointer;
`

const LabelLogo = styled.span`
   display: none;
   text-indent: -9999px;
`

const Img = styled.img`
   width: 100%;
   height: auto;
   margin: 0;
`

const Brand = ({ className }) => {
   return (
      <LinkLogo to="/" className={className}>
         <LabelLogo>Space Tourism</LabelLogo>
         <Img src={imgLogo} alt="logo Space Tourism" />
      </LinkLogo>
   )
}

export default Brand