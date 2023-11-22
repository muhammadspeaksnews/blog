import { CoreContent } from '@/lib/utils/contentlayer'
import Image from '@/components/Image'
import Link from '@/components/Link'
import { Authors } from 'contentlayer/generated'

interface Props {
  authors: CoreContent<Authors>[]
}

export default function PostAuthorBox({ authors }: Props) {
  return (
    <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
      <dt className="sr-only">Authors</dt>
      <dd>
        <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
          {authors.map((author) => (
            <li className="flex items-center space-x-2" key={author.name}>
              {author.avatar && (
                <Image
                  src={author.avatar}
                  width="38px"
                  height="38px"
                  alt="avatar"
                  className="h-10 w-10 rounded-full"
                />
              )}
              <dl className="whitespace-nowrap text-sm font-medium leading-5">
                <dt className="sr-only">Name</dt>
                <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                <dt className="sr-only">Twitter</dt>
                <dd>
                  {author.mastodon && (
                    <Link
                      href={author.mastodon}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {author.mastodon.replace(/https:\/\/[a-zA-Z\\.]*\//, '')}
                    </Link>
                  )}
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      </dd>
    </dl>
  )
}
