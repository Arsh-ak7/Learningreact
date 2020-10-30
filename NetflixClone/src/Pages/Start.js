import React from 'react'
import '../CSS/Start.css'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';

export default function Home() {

    function handleClick(item){
        console.log(item)
    }

    return (
        <div>
            <header className = "cover">
                <div className="cover-fade" />
                <div className="cover-contents">
                    <div className="cover-header">
                        <h1>Unlimited Movies , TV Shows and more.</h1>
                        <h2>Watch anywhere. Cancel time.</h2>
                    </div>
                    <div className="button">
                        <Link to = "/login">
                            <button className="cover-button">Login</button>
                        </Link>
                        <Link to= "/signup">
                            <button className="cover-button">Sign Up</button>
                        </Link>
                    </div>
                </div>
                <div className="cover-fade2" />
            </header>
            <div className="faq">
                <h1 className="faq-header">
                    Frequently asked questions
                </h1>
                <ul className="faq-list">
                    <li className="faq-list-item">
                        <button className="faq-list-btn">What is Netflix?
                        <AddIcon className="list-btn-icon"/>
                        </button>
                        <div className="faq-answer closed">
                            <span className="faq-answer-details">
                                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                                <br/><br/>
                                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                            </span>
                        </div>
                    </li>
                    <li className="faq-list-item">
                        <button className="faq-list-btn">How much does Netflix cost?
                         <AddIcon className="list-btn-icon"/>
                        </button>
                        <div className="faq-answer closed">
                            <span className="faq-answer-details">
                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.
                            </span>
                        </div>
                    </li>
                    <li className="faq-list-item">
                        <button className="faq-list-btn">How do I watch?
                        <AddIcon className="list-btn-icon"/>
                        </button>
                        <div className="faq-answer closed">
                            <span className="faq-answer-details">
                               Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                               <br/><br/>
                                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                            </span>
                        </div>
                    </li>
                     <li className="faq-list-item">
                        <button className="faq-list-btn">How do I cancel?
                        <AddIcon className="list-btn-icon"/>
                        </button>
                        <div className="faq-answer closed">
                            <span className="faq-answer-details">
                                Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                            </span>
                        </div>
                    </li>
                    <li className="faq-list-item">
                        <button className="faq-list-btn" onClick={(e)=>handleClick(e.target)}>What can I watch on Netflix?
                        <AddIcon className="list-btn-icon"/>
                        </button>
                        <div className="faq-answer closed">
                            <span className="faq-answer-details">
                                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
