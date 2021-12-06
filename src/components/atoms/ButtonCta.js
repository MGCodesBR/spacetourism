import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ButtonLink = styled(Link)`
   width: 15rem;
   height: 15rem;

   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 5;

   font-family: ${props => props.theme.fonts.family.heading};
   font-size: ${props => props.theme.fonts.size.ctaxs};
   font-weight: normal;
   letter-spacing: ${props => props.theme.fonts.charspace.ctaxs};
   color: ${props => props.theme.colors.background.main};
   text-decoration: none;
   text-transform: uppercase;

   border-radius: 50%;
   background-color: white;
`

const ButtonCta = ({ label, target, className }) => {
   return (
      <ButtonLink to={target} className={className}>
         {label}
      </ButtonLink>
   )
}

export default ButtonCta