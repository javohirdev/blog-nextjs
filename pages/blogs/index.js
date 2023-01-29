import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Link from 'next/link'
import Post from '../../components/Post'
import { sortByDate } from '../../utils/index'

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontmatter } = matter(markdownWithMeta)
    return { slug, frontmatter }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}

const Blogs = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Dasturlashga oid foydali resurslar</title>
      </Head>
      <div className="container">
        <div className='button-area'>
          <Link href={"/"} className="blogs-btn">
            Bosh sahifa
          </Link>
        </div>
        <div className="posts">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Blogs;