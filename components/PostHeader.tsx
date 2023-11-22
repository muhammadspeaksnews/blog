import PageTitle from '@/components/PageTitle'
import Tags from '@/data/tags'
import formatDate from '@/lib/utils/formatDate'

interface Props {
  date: string
  title: string
  tags: string[]
}

export default function PostHeader({ date, title, tags }: Props) {
  const fontClass = tags.includes(Tags.Journal) ? 'font-serif' : ''

  return (
    <header className="pt-6 xl:pb-6">
      <div className="space-y-1 border-b border-gray-200 dark:border-gray-700 pb-10 text-center">
        <div className={`${fontClass}`}>
          <PageTitle>{title}</PageTitle>
        </div>
        <dl>
          <div>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{formatDate(date)}</time>
            </dd>
          </div>
        </dl>
      </div>
    </header>
  )
}
