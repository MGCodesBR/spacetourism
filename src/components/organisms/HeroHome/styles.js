import styled from "styled-components"

import Section from "../../atoms/Section"
import Container from "../../atoms/Container"

import { HeroGrid, HeroLeftSide, HeroRightSide } from "../../molecules/Hero"

import Title, { TitleStyles } from "../../atoms/Title"
import SubTitle, { SubTitleStyles } from "../../atoms/SubTitle"
import Paragraph, { ParagraphStyles } from "../../atoms/Paragraph"
import ButtonCta from "../../atoms/ButtonCta"

import BackImageMobile from "../../../images/home/background-home-mobile.jpg"


const HomeSection = styled(Section)`
   height: 100vh;
   min-height: 60rem;
   background-image: url(${BackImageMobile});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: 0 0;
`
       
const HomeContainer = styled(Container)`
   height: 100%;
   padding: 11.1rem 2.4rem 4.6rem;
   margin: 0;
   background-color: transparent;
`

const HomeGrid = styled(HeroGrid)``

const HomeLeftSide = styled(HeroLeftSide)`
   height: 100%;
`

const HomeRightSide = styled(HeroRightSide)`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`

const HomeTitle = styled(Title)`
   ${TitleStyles}
   margin-bottom: 2.5rem;
`

const HomeSubTitle = styled(SubTitle)`
   ${SubTitleStyles}
   margin-bottom: 2rem;
`

const HomeParagraph = styled(Paragraph)`
   ${ParagraphStyles};
`

const HomeButtonCta = styled(ButtonCta)`
   width: 15rem;
   height: 15rem;
`


export {
   HomeSection,
   HomeContainer,
   HomeGrid,
   HomeLeftSide,
   HomeRightSide,
   HomeTitle,
   HomeSubTitle,
   HomeParagraph,
   HomeButtonCta
}