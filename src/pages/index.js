import React from "react"

import Layout from "../components/atoms/Layout";
import Seo from "../components/atoms/Seo"

import HeroHome from "../components/organisms/HeroHome"

const IndexPage = () => {
   return (
      <Layout>
         <Seo 
            lang="pt-BR"
            title="MGCodes Template | GatsbyJS v1.0"
            keywords=""
         />
         <HeroHome />
      </Layout>
   )
}

export default IndexPage