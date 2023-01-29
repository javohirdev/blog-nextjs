import Link from 'next/link'
import Head from 'next/head'

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>Dasturlashga oid foydali resurslar (TEST rejimida)</title>
      </Head>
      <ul className='post-list'>
        <li className='post-featured'>
          <Link href={`/blogs/blog/${post.slug}`}>
            <div className='card'>
              <div className='card-body'>
                <div className='post-date'>{post.frontmatter.date}</div>
                <h3>{post.frontmatter.title}</h3>
                <p>{post.frontmatter.excerpt}</p>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </>
  )
}
