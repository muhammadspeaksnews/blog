import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { CoreContent } from '@/lib/utils/contentlayer'
import { ReactNode } from 'react'
import type { Entry } from 'contentlayer/generated'
import paths from '@/data/paths'
import PostHeader from '@/components/PostHeader'
import CustomLink from '@/components/Link'
import Logo from '@/data/logo.svg'
import Tags from '@/data/tags'

interface Props {
  content: CoreContent<Entry>
  children: ReactNode
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
}

export default function PostLayout({ content, next, prev, children }: Props) {
  const { slug, date, title, tags } = content
  const fontClass = tags.includes(Tags.Journal) ? 'font-serif' : ''

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/${paths.blog}/${slug}`} {...content} />
      <ScrollTopAndComment />
      <article>
        <div>
          <PostHeader date={date} title={title} tags={tags} />
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className={`prose prose-lg ${fontClass} max-w-none pt-10 pb-8 dark:prose-dark`}>
                {children}
              </div>
            </div>
            <Comments frontMatter={content} />
            <footer>
              <div className="items-center flex flex-col text-sm font-medium sm:flex-row sm:justify-center sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${paths.blog}/${prev.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                <CustomLink href="/">
                  <Logo />
                </CustomLink>
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${paths.blog}/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
