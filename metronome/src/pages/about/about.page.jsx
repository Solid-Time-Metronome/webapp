import React from 'react'
import FoundingTeam from '../../components/FoundingTeam/FoundingTeam.component'
import useDocumentTitle from '../../Util/useDocumentTitle'

const AboutPage = () => {
  useDocumentTitle('About Us')
  return (
      <section>
         <FoundingTeam />
      </section>
  )
}

export default AboutPage
