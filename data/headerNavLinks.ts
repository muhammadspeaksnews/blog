import { pathLabels as pathLabels } from '@/labels/site.en'
import paths from '@/data/paths'

const headerNavLinks = [
  { href: '/' + paths.tags, title: pathLabels.TagsPathTitle },
  { href: '/' + paths.projects, title: pathLabels.ProjectsPathTitle },
  { href: '/' + paths.about, title: pathLabels.MePathTitle },
]

export default headerNavLinks
