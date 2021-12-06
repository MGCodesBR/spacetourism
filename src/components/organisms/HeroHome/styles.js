import styled from "styled-components"

import Section from "../../atoms/Section"
import Container from "../../atoms/Container"

import { HeroGrid, HeroLeftSide, HeroRightSide } from "../../molecules/Hero"

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
color:white;
`

const HomeGrid = styled(HeroGrid)``

const HomeLeftSide = styled(HeroLeftSide)``

const HomeRightSide = styled(HeroRightSide)``

const HomeButtonCta = styled(ButtonCta)``


export {
   HomeSection,
   HomeContainer,
   HomeGrid,
   HomeLeftSide,
   HomeRightSide,
   HomeButtonCta
}