import styled, { css } from "styled-components"

import Grid2 from "../../atoms/Grid2"

const side = css`
   position: relative;
   width: 100%;
   height: auto;
   margin: 0;
   padding: 0;
`

const HeroGrid = styled(Grid2)`
`

const HeroLeftSide = styled.div`
   ${side}
`

const HeroRightSide = styled.div`
   ${side}
`

export {
   HeroGrid,
   HeroLeftSide,
   HeroRightSide
}