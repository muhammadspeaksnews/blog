import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import { messages } from '@/labels/site.en'

interface Props {
  slug: string
}
const editUrl = (slug) => `${siteMetadata.siteRepo}/blob/master/data/entries/${slug}`

export default function PostOnGithub({ slug }: Props) {
  return <Link href={editUrl(slug)}>{messages.ViewOnGitHub}</Link>
}
