import React from "react"

import { HomeSection,
         HomeContainer,
         HomeGrid,
         HomeLeftSide,
         HomeRightSide,
         HomeTitle,
         HomeSubTitle,
         HomeParagraph,
         HomeButtonCta } from "./styles"

const HeroHome = ({ className }) => {
   return (
      <HomeSection className={className}>
         <HomeContainer>
            <HomeGrid>
               <HomeLeftSide>
                  <HomeSubTitle>So, You want to travel to</HomeSubTitle>
                  <HomeTitle>Space</HomeTitle>
                  <HomeParagraph>
                     Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                  </HomeParagraph>
               </HomeLeftSide>
               <HomeRightSide>
                  <HomeButtonCta label="Explore" target="/" />
               </HomeRightSide>
            </HomeGrid>
         </HomeContainer>
      </HomeSection>
   )
}

export default HeroHome