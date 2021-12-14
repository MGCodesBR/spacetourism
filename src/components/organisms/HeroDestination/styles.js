import styled from "styled-components"
import Image from "gatsby-image"
import media from "../../../foundation/breakPoints"

import Section from "../../atoms/Section"
import Container from "../../atoms/Container"
import { HeroGrid, HeroLeftSide, HeroRightSide } from "../../molecules/Hero"
import Title, { TitleStyles } from "../../atoms/Title"
import SubTitle, { SubTitleStyles } from "../../atoms/SubTitle"
import Paragraph, { ParagraphStyles } from "../../atoms/Paragraph"

import BackImageMobile from "../../../images/destination/background-destination-mobile.jpg"
import BackImageTablet from "../../../images/destination/background-destination-tablet.jpg"
import BackImageDesktop from "../../../images/destination/background-destination-desktop.jpg"

const DestinationSection = styled(Section)`
   height: 100vh;
   min-height: 85rem;
   background-image: url(${BackImageMobile});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: 0 0;

   /* ${media.greaterThan("md")`
      min-height: 90rem;
      background-image: url(${BackImageTablet});
   `}

   ${media.greaterThan("xl")`
      min-height: 70rem;
      background-image: url(${BackImageDesktop});
   `} */

`
       
const DestinationContainer = styled(Container)`
   height: 100%;
   display: block;
   padding: 8.8rem 2.4rem 5.8rem;
   margin: 0;
   background-color: transparent;

   /* ${media.greaterThan("md")`
      max-width: 44.5rem;
      padding: 20.2rem 0 9rem;
   `}

   ${media.greaterThan("xl")`
      max-width: ${props => props.theme.maxWidth.xl};
      padding: 20.2rem 0 13.1rem;
   `} */

`

const DestinationPageTitle = styled(SubTitle)`
   ${SubTitleStyles}
   color: ${props => props.theme.colors.secondary.main};
   margin-bottom: 3.2rem;
`

const DestinationPageNumber = styled.span`
   ${SubTitleStyles}
   color: ${props => props.theme.colors.secondary.dark};
   font-weight: bold;
   margin-right: 1.8rem;
`

const DestinationLeftSide = styled(HeroLeftSide)`
   width: 100%;
   height: auto;
   margin: 0;
   padding-bottom: 2rem;
   text-align: center;
`

const DestinationRightSide = styled(HeroRightSide)`
`

const DestinationGrid = styled(HeroGrid)`

   /* ${media.greaterThan("xl")`
      justify-content: space-between;
      ${DestinationLeftSide} {
         width: 45rem;
         display: flex;
         flex-direction: column;
         justify-content: flex-end;
      }
      ${DestinationRightSide} {
         justify-content: flex-end;
      }
   `} */

`

// IMAGE (LEFT SIDE)
const TabImage = styled(Image)`
   max-width: 17rem;
   max-height: 17rem;
`


// NAV TABS (RIGHT SIDE)
const DestinationTabs = styled.div`
   width: 100%;
   height: auto;
`

const TabNav = styled.nav`
   width: 100%;
   max-width: 23.8rem;
   height: auto;
   margin: 0 auto 2rem;
   padding: 0;
`

const ListItems = styled.ul`
   width: 100%;
   height: 100%;
   list-style: none;
   margin: 0;
   padding: 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const Item = styled.li`
   display: block;
   margin: 0;
   padding: 0;
`

const Action = styled.button`
   display: block;
   font-family: ${props => props.theme.fonts.family.subheading}; 
   font-size: ${props => props.theme.fonts.size.navlink2};
   font-weight: normal;
   letter-spacing: ${props => props.theme.fonts.charspace.navlink};
   text-transform: uppercase;
   text-decoration: none;
   border: none;
   background-color: transparent;
   cursor: pointer;
   border-bottom: 3px solid transparent;
   color: ${props => props.active ? "#FFFFFF" : "#D0D6F9"};
   border-color: ${props => props.active ? "#FFFFFF" : "transparent"};
   transition: border-bottom .3s ease;
   padding: 0 0 1rem;
   &:hover,
   &:active,
   &:focus {
      color: ${props => props.theme.colors.secondary.main};
      border-bottom: 3px solid ${props => props.theme.colors.secondary.main};
      transition: border-bottom .3s ease;
   }
`

const DestinationTitle = styled(Title)`
   ${TitleStyles}
   font-size: ${props => props.theme.fonts.size.heading2xs};
   margin-bottom: 0.5rem;

   /* ${media.greaterThan("md")`
      font-size: ${props => props.theme.fonts.size.heading1md};
      margin-bottom: 2rem;
   `}

   ${media.greaterThan("xl")`
      text-align: left;
   `} */

`

const DestinationSubTitle = styled(SubTitle)`
   ${SubTitleStyles}
   margin-bottom: 3rem;

   /* ${media.greaterThan("md")`
      font-size: ${props => props.theme.fonts.size.subheading1md};
      letter-spacing: ${props => props.theme.fonts.charspace.subheadingmd};
   `}

   ${media.greaterThan("xl")`
      font-size: ${props => props.theme.fonts.size.subheading1xl};
      letter-spacing: ${props => props.theme.fonts.charspace.subheadingxl};
      text-align: left;
      margin-bottom: 3.2rem;
   `} */

`

const DestinationParagraph = styled(Paragraph)`
   ${ParagraphStyles};
   margin-bottom: 3.2rem;

   /* ${media.greaterThan("md")`
      font-size: ${props => props.theme.fonts.size.bodymd};
      line-height: 2.8rem;
   `}

   ${media.greaterThan("xl")`
      font-size: ${props => props.theme.fonts.size.bodyxl};
      text-align: left;
      line-height: 3.2rem;
   `} */

`

// BOOKMARKS (RIGHT SIDE)
const BookMarks = styled.div`
   width: 100%;
   height: auto;
   border-top: 1px solid ${props => props.theme.colors.stroke};
   text-align: center;
`

const ScoreItem = styled.div`
   width: 100%;
   margin: 0;
   padding-top: 2.8rem;
`

const ScoreTitle = styled.p`
   ${SubTitleStyles}
   font-size: ${props => props.theme.fonts.size.bookmarktitle};
   letter-spacing: ${props => props.theme.fonts.charspace.bookmarktitle};
   color: ${props => props.theme.colors.primary.main};
   margin: 0;
`

const ScoreValue = styled.p`
   ${TitleStyles}
   font-size: ${props => props.theme.fonts.size.bookmarkvalue};
   color: ${props => props.theme.colors.secondary.main};
   margin: 0;
   padding: 0.2rem 0;
`

export {
   DestinationSection,
   DestinationContainer,
   DestinationPageTitle,
   DestinationPageNumber,
   DestinationGrid,
   DestinationLeftSide,
   DestinationRightSide,
   DestinationTitle,
   DestinationSubTitle,
   DestinationParagraph,
   DestinationTabs,
   TabNav,
   TabImage,
   ListItems,
   Item,
   Action,
   BookMarks,
   ScoreItem,
   ScoreTitle,
   ScoreValue
}