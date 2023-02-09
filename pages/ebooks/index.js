import Link from 'next/link';

const Books = () => {
    return (
        <div className='container'>
            <div className='button-area'>
                <Link href={"/"} className="blogs-btn">
                    Ortga qaytish
                </Link>
            </div>
            <h1>Elektron kitoblar</h1>
        </div>
    );
};


export default Books;