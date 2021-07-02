import React, { useState } from "react";
import "../CSS/Start.css";
import Accordion from "../Components/Accordion";
import { Link } from "react-router-dom";

export default function Home() {
	const [active, setActive] = useState("");
	return (
		<div>
			<header className='cover'>
				<div className='cover-fade' />
				<div className='cover-contents'>
					<div className='cover-header'>
						<h1>Unlimited Movies , TV Shows and more.</h1>
						<h2>Watch anywhere. Cancel time.</h2>
					</div>
					<div className='button'>
						<Link to='/login'>
							<button className='cover-button'>Login</button>
						</Link>
						<Link to='/signup'>
							<button className='cover-button'>Sign Up</button>
						</Link>
					</div>
				</div>
				<div className='cover-fade2' />
			</header>
			<div className='faq'>
				<h1 className='faq-header'>Frequently asked questions</h1>
				<Accordion
					title='What is Netflix'
					active={active}
					setActive={setActive}
					content={`Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime,
                        documentaries and more – on thousands of internet-connected devices. \n
                        You can watch as much as you want, whenever you want, without a single ad – all for one low monthly
                        price. There's always something new to discover, and new TV shows and movies are added every week!`}
				/>
				<Accordion
					title='How much does Netflix cost?'
					active={active}
					setActive={setActive}
					content={` Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed
                    monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.`}
				/>
				<Accordion
					title='Where can I watch?'
					active={active}
					setActive={setActive}
					content={`Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to
                    watch instantly on the web at netflix.com from your personal computer or on any internet-connected
                    device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media
                    players and game consoles.
                    
                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads
                    to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`}
				/>
				<Accordion
					title='How do I cancel?'
					active={active}
					setActive={setActive}
					content={`Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your
                    account online in two clicks. There are no cancellation fees – start or stop your account anytime.`}
				/>
				<Accordion
					title='What can I watch on Netflix?'
					active={active}
					setActive={setActive}
					content={`Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning
                    Netflix originals, and more. Watch as much as you want, anytime you want.`}
				/>
			</div>
		</div>
	);
}
