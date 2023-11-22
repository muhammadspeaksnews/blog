import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { CoreContent } from '@/lib/utils/contentlayer'
import { ReactNode } from 'react'
import type { Entry, Authors } from 'contentlayer/generated'
import paths from '@/data/paths'
import { messages, postLabels } from '@/labels/site.en'
import PostHeader from '@/components/PostHeader'
import PostAuthorBox from '@/components/PostAuthorBox'
import Tags from '@/data/tags'

interface Props {
  content: CoreContent<Entry>
  authorDetails: CoreContent<Authors>[]
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: Props) {
  const { slug, date, title, tags } = content
  const fontClass = tags.includes(Tags.Journal) ? 'font-serif' : ''

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/${paths.blog}/${slug}`}
        authorDetails={authorDetails}
        {...content}
      />
      <ScrollTopAndComment />
      <article>
        <div>
          <PostHeader date={date} title={title} tags={tags} />
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <PostAuthorBox authors={authorDetails} />
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className={`prose prose-lg ${fontClass} max-w-none pt-10 pb-8 dark:prose-dark`}>
                {children}
              </div>
              <Comments frontMatter={content} />
            </div>
            <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <div key={tag} className="mr-3">
                          <Tag text={tag} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          {messages.PreviousArticle}
                        </h2>
                        <Link
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          href={`/${paths.blog}/${prev.slug}`}
                        >
                          {prev.title}
                        </Link>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          {messages.NextArticle}
                        </h2>
                        <Link
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          href={`/${paths.blog}/${next.slug}`}
                        >
                          {next.title}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; {postLabels.BackToHome}
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
