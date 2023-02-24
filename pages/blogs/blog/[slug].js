import Link from 'next/link'
import Head from 'next/head';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  TelegramShareButton,
  TelegramIcon, 
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton 
} from 'react-share';

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <div className='container'>
      <Head>
        <title>Dasturlashga oid foydali resurslar (TEST rejimida)</title>
      </Head>
      <div className='button-area'>
        <Link href={"/blogs"} className="blogs-btn">
          Ortga qaytish
        </Link>
      </div>
      <div className='post'>
        <h1 className='post-title'>{title}</h1>
        <div className='post-date'>{date}</div>
        <LazyLoadImage
          src={cover_image}
          effect="blur"
        />
        <div className='post-body'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
        <div className='share'>
          <p>Maqolani ulashing:</p>
          <TelegramShareButton
            url={`https://javohirdev.netlify.app/blogs/blog/${slug}`}
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          <LinkedinShareButton
            url={`https://javohirdev.netlify.app/blogs/blog/${slug}`}
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <FacebookShareButton
            url={`https://javohirdev.netlify.app/blogs/blog/${slug}`}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
