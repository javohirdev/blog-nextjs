import { useState, useEffect } from 'react';
import Link from 'next/link';
import { db } from '../../firebase/config';

const Books = () => {

    const [ebooks, setEbooks] = useState([]);

    useEffect(() => {
        db.collection("ebooks").onSnapshot((snapshot) => setEbooks(snapshot.docs.map((doc) => doc.data())));
    }, [])

    return (
        <div className='container'>
            <div className='button-area'>
                <Link href={"/"} className="blogs-btn">
                    Ortga qaytish
                </Link>
                <h1>Elektron kitoblar</h1>
            </div>
            <div className='books'>
                {ebooks.slice(0).reverse().map((get, index) => (
                    <div className='books-card'>
                        <div className='book-head' key={index}>
                            <img className='book-img' src={get.picture} alt="ebook image" />
                        </div>
                        <div className='book-body'>
                            <h4 className='title'>{get.name}</h4>
                            <div className='button-area'>
                                <Link href={get.link} target="_blank" className='register-btn'>
                                    Ko'chirib olish
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Books;