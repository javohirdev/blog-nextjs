import Link from 'next/link'
import Head from 'next/head'

export default function Header() {
  return (
    <>
      <Head>
        <title>Dasturlashga oid foydali resurslar (TEST rejimida)</title>
      </Head>
      <div className='header'>
        <h2 className='welcome-text'>
          Hi <span class="wave">👋</span> Men <span className='myname'>Javohir Hakimov</span>,
          ushbu blogda frontend bo'yicha o'z tajribam, shuningdek React, Next, JavaScript kabi mavzulardagi
          bilimlarimni ulashib boraman
        </h2>
        <div className='button-area'>
          <Link href={"/blogs"} className="blogs-btn">Bloglar</Link>
        </div>
      </div>
    </>
  )
}
