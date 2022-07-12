import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import content from './content'
import * as S from './styles'
import { AboutUsProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionAboutUs = ({title, authors}: AboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.data.map(({attributes: profile}) => (
        <ProfileCard
          key={profile.name}
          name={profile.name}
          role={profile.role}
          photo={getImageUrl(profile.photo.data.attributes.url)}
          socialLinks={profile.socialLinks}
          description={profile.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
