import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import { sortedBlogPost, allCoreContent } from '@/lib/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allEntries } from 'contentlayer/generated'
import LayoutWrapper from '@/components/LayoutWrapper'

export const POSTS_PER_PAGE = 5

export const getStaticProps = async () => {
  const posts = sortedBlogPost(allEntries)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      initialDisplayPosts: allCoreContent(initialDisplayPosts),
      posts: allCoreContent(posts),
      pagination,
    },
  }
}

export default function Blog({
  posts,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <LayoutWrapper hideNav={true} hideFooter={true}>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} />
    </LayoutWrapper>
  )
}
