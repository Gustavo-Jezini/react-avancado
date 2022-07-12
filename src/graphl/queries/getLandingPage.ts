import { gql } from 'graphql-request'


const GET_LANDING_PAGE = gql`
  fragment imageData on UploadFile {
    alternativeText
    url
  }

  fragment logo on LandingPage {
    logo {
      data {
        attributes {
          ...imageData
        }
      }
    }
  }


  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        data {
          attributes {
            ...imageData
          }
        }
      }
    }
  }

fragment sectionAboutProject on LandingPage {
  sectionAboutProject {
    title
    description
    image {
      data {
        attributes {
          ...imageData
        }
      }
    }
  }
}

fragment sectionTech on LandingPage {
  sectionTech {
    title
    techIcons {
      icon {
        data {
          attributes {
            ...imageData
          }
        }
      }
      name
    }
  }
}

fragment sectionConcepts on LandingPage {
  sectionConcepts {
    title
    concepts {
      title
    }
  }
}

fragment sectionModules on LandingPage {
  sectionModules {
    title
    modules {
      title
      subtitle
      description
    }
  }
}

fragment aboutUs on LandingPage {
  aboutUs {
    title
    authors {
      data {
        attributes {
          photo {
            data {
              attributes {
                ...imageData
              }
            }
          }
          name
          role
          socialLinks {
            title
            url
          }
          description
        }
      }
    }
  }
}

  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          ...header
          ...logo
          ...sectionAboutProject
          ...sectionTech
          ...sectionConcepts
          ...sectionModules
          ...aboutUs
        }
      }
    }
  }
`

export default GET_LANDING_PAGE;
