import styled from "styled-components"

import Brand from "../../atoms/Brand"
import ButtonMenu, { BarButton } from "../../atoms/ButtonMenu"

const Logo = styled(Brand)`
   width: 4rem;
   height: 4rem;
`

const NavButtonMenu = styled(ButtonMenu)`
   flex: 1;
   ${BarButton} {
      width: 2.4rem;
      height: 0.3rem;
      background-color: ${props => props.theme.colors.primary.main};
   }
`

const HeaderSection = styled.header`
   position: fixed;
   top: 0;
   width: 100%;
   height: 8.8rem;
background-color: rgba(0,0,0,0.9);

   display: flex;
   justify-content: space-between;
   align-items: center;

   padding: 0 2.4rem;
   z-index: 10;
`

export {
   HeaderSection,
   Logo,
   NavButtonMenu
}