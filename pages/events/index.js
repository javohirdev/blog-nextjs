import { useState, useEffect } from 'react';
import Link from 'next/link';
import db from '../../firebase/config';

const Events = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        db.collection("events").onSnapshot((snapshot) => setEvents(snapshot.docs.map((doc) => doc.data())));
    }, [])

    return (
        <div className='container'>
            <div className='button-area'>
                <Link href={"/"} className="blogs-btn">
                    Ortga qaytish
                </Link>
            </div>
            <h1 className='page-title'>Yaqin davrdagi tadbirlar</h1>
            <div className='events'>
                {events.map((get, index) => (
                    <div className='events-card' key={index}>
                        <div className='card-head'>
                            <div className='theme'>
                                <h4 className='title'>{get.title}</h4> <span className='price'>{get.price}</span>
                            </div>
                            <p className='description'>{get.description}</p>
                            <span className='date'>{get.date}</span>
                        </div>
                        <div className='card-body'>
                            <Link href={get.register} target="_blank" className='register-btn'>
                                Register
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Events;