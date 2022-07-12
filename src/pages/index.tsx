import React from 'react'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'

import { GetStaticProps } from 'next'
import client from 'graphl/client'
import GET_LANDING_PAGE from 'graphl/queries/getLandingPage'
import { LandingPageProps } from 'types/api'

const Index = ({ logo, header, sectionAboutProject, sectionTech, sectionConcepts, sectionModules, aboutUs }: LandingPageProps) => (
  <>
    <SectionHero logo={logo} header={header} />
    <SectionAboutProject {...sectionAboutProject} />
    <SectionTech {...sectionTech} />
    <SectionConcepts {...sectionConcepts} />
    <SectionModules {...sectionModules} />
    <SectionAgenda />
    <PricingBox />
    <SectionAboutUs {...aboutUs}/>
    <SectionReviews />
    <SectionFaq />
    <Footer />
    <JsonSchema />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const info = await client.request(GET_LANDING_PAGE)
    .then((res) => res.landingPage.data.attributes)

  console.log(info)


  return {
    props: {
      ...info
    }
  }
}

export default Index
