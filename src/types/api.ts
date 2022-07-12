export type ImageProps = {
  data: {
    attributes: {
      alternativeText: string,
      url: string
    }
  }
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url?: string
  }
  image: ImageProps
}

export type AboutProjectProps = {
    title: string
    description:string
    image: ImageProps
}

export type SectionTechProps = {
  title: string
  techIcons: {
    icon: ImageProps
    name: string
  }[]
}

export type SectionConceptsProps = {
  title:string
  concepts: {
    title:string
  }[]
}

export type SectionModulesProps = {
  title: string
  modules: {
    title: string
    subtitle: string
    description: string
  }[]
}

export type AboutUsProps = {
  title: string
  authors: {
    data: {
      attributes: {
        photo: ImageProps
        name: string
        role: string
        socialLinks: {
          title: string
          url: string
        }[]
        description: string
      }
    }[]
  }
}

export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  sectionAboutProject: AboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  aboutUs: AboutUsProps
}
