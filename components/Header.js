import Link from 'next/link'
import { NextSeo } from 'next-seo';

export default function Header() {
  return (
    <>
      <NextSeo
        title="Dasturlashga oid foydali resurslar (TEST rejimida)"
        description="Dasturlashga oid foydali resurslar"
      />
      <div className='header'>
        <h2 className='welcome-text'>
          Salom <span class="wave">👋</span> <br />
          Men <span className='myname'>Javohir Hakimov</span>,
          ushbu blogda frontend bo'yicha o'z tajribam, shuningdek React, Next, JavaScript kabi mavzulardagi
          bilimlarimni ulashib boraman
        </h2>
        <div className='buttons-box'>
          <div className='button-area'>
            <Link href={"/blogs"} className="blogs-btn">Bloglar</Link>
          </div>
          <div className='button-area'>
            <Link href={"/ebooks"} className="blogs-btn">E-kitoblar</Link>
          </div>
          <div className='button-area'>
            <Link href={"/events"} className="blogs-btn">Tadbirlar</Link>
          </div>
        </div>
      </div>
    </>
  )
}
