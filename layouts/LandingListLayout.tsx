import Link from '@/components/Link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'
import { ListProps } from './ListLayout'
import { messages, postLabels, titles } from '@/labels/site.en'
import paths from '@/data/paths'
import Tags from '@/data/tags'

const MAX_DISPLAY = 5

export default function LandingListLayout({ posts }: ListProps) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {titles.LandingPageTitle}
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && messages.NoEntriesFound}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, readingTime } = post
            const fontClass = tags.includes(Tags.Journal) ? 'font-serif' : ''
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">{postLabels.PublishedOn}</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/${paths.blog}/${slug}`}
                              className={`${fontClass} text-gray-900 dark:text-gray-100`}
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            (
                            {tags.map((tag, i) => (
                              <div key={tag}>
                                {i > 0 && <span className="mr-1">,</span>}
                                <Tag text={tag} />
                              </div>
                            ))}
                            )
                          </div>
                        </div>
                        <div
                          className={`prose ${fontClass} max-w-none text-gray-500 dark:text-gray-400`}
                        >
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/${paths.blog}/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          {postLabels.ReadIn} {Math.ceil(readingTime.minutes)} {postLabels.Minutes}{' '}
                          &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
