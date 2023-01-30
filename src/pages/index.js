import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<div id="home" className="bg-red-600 flex items-center justify-between">
					<Image src="/gym2-removebg.png" alt="Hero" width="600" height="500" />
					<div className="text-white mr-32 flex flex-col items-center">
						<h1 className="text-[80px]">
							<i>your world class</i>
						</h1>
						<p className="text-[30px] font-sans font-light -mt-4">
							FITNESS CENTER AND HEALTH CLUB
						</p>
						<button className="bg-neutral-900 w-48 py-3 mt-6 rounded-sm text-xl text-red-600 hover:shadow-2xl">
							<i>Sign up today!</i>
						</button>
					</div>
				</div>
				{/*What we do section*/}
				<div className="bg-neutral-800 flex p-6 relative">
					<div className="grayscale">
						<Image src="/girls.webp" alt="Hero" width="800" height="500" />
					</div>
					<div className="">
						<div className="bg-neutral-900 bg-opacity-50 text-white p-4 max-w-xl flex flex-col space-y-6 absolute right-6">
							<p className="text-6xl">
								<i> What we do</i>
							</p>
							<p className="font-sans">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
								atque iusto nihil culpa. Id perferendis at eligendi deserunt
								molestiae facere est illum facilis aut sunt repellat harum dolor
								autem, reiciendis aliquid rem molestias reprehenderit aspernatur
								maxime consequuntur iusto obcaecati vero quidem? Dolor,
								temporibus doloremque? Quae officia esse voluptatibus vero et
								itaque. Ratione, rerum! Dolore tempora tempore fugit libero
								totam iusto?
							</p>
						</div>
					</div>
				</div>
				{/*CTA*/}
				<div className="bg-red-600 flex justify-between items-center px-48 py-8">
					<button className="bg-neutral-900 rounded-sm text-red-600 text-xl flex space-x-3 items-center px-8 py-2 hover:shadow-2xl">
						<i>Start today</i>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2.5}
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
							/>
						</svg>
					</button>
					<div className="flex flex-col items-center">
						<i className="text-3xl tracking-widest">
							THE BEST GYM MEMBERSHIPS AROUND
						</i>
						<p className="font-sans">
							There’s a reason people consider us the best gym in the area—try
							us out today!
						</p>
					</div>
				</div>
				{/*About us*/}
				<div className="bg-neutral-900 text-white text-center p-28 flex flex-col space-y-10">
					<div className="flex flex-col space-y-3">
						<i className="text-6xl tracking-wide">Welcome to gym-x</i>
						<p className="font-sans font-extralight text-xl">
							YOUR WORLD CLASS FITNESS CENTER AND HEALTH CLUB
						</p>
						<p className="font-sans font-medium">
							Gym-X offers one-on-one personal training to help you achieve your
							fitness goals. Our certified trainers will create challenging
							workout programs for you; they will also ensure that movements are
							executed with quality form and that the process is fun,
							challenging, and rewarding. We are more than a fitness center;
							we’re a health club in the truest sense of the word.
						</p>
					</div>
					<div className="flex justify-center">
						<button className="bg-red-600 rounded-sm text-white text-xl flex space-x-3 items-center px-6 py-1 hover:bg-red-700 transition duration-200">
							<i>Get Started</i>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2.5}
								stroke="currentColor"
								className="w-4 h-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
								/>
							</svg>
						</button>
					</div>
				</div>
				{/*Memberships*/}
				<div
					id="memberships"
					className="bg-white p-10 flex flex-col space-y-4 items-center"
				>
					<i className="text-6xl">Memberships</i>
					<div className="flex flex-col space-y-6 w-full">
						<div className="border-dashed border-black border px-6 py-4 flex items-center justify-between rounded-xl w-full">
							<div>
								<p className="text-3xl tracking-wide">
									0 Down 29.99 Per Month 12 Month Membership
								</p>
								<p className="text-neutral-600 font-sans">
									Our $0 Down Plan at $29.99 per month
								</p>
							</div>
							<button className="bg-red-600 rounded-sm text-white text-xl px-6 py-1 hover:bg-red-700 transition duration-200">
								<i>Join Now</i>
							</button>
						</div>
						<div className="border-dashed border-black border px-6 py-4 flex items-center justify-between rounded-xl w-full">
							<div>
								<p className="text-3xl tracking-wide">
									19.99 Per Month 12 Month Membership
								</p>
								<p className="text-neutral-600 font-sans">
									Our regular membership is our most popular option at only
									$19.99 per month.
								</p>
							</div>
							<button className="bg-red-600 rounded-sm text-white text-xl px-6 py-1 hover:bg-red-700 transition duration-200">
								<i>Join Now</i>
							</button>
						</div>
						<div className="border-dashed border-black border px-6 py-4 flex items-center justify-between rounded-xl w-full">
							<div>
								<p className="text-3xl tracking-wide">
									24.99 Month to Month Membership
								</p>
								<p className="text-neutral-600 font-sans">
									Month to Month Membership option gives you the flexibility to
									be a member on a month to month basis. Can cancel anytime with
									30 day written notice.
								</p>
							</div>
							<button className="bg-red-600 rounded-sm text-white text-xl px-6 py-1 hover:bg-red-700 transition duration-200">
								<i>Join Now</i>
							</button>
						</div>
					</div>
				</div>
				{/*Personal training*/}
				<div id="personal-training" className="bg-red-600 relative">
					<Image
						src="/girls.png"
						width={1200}
						height={200}
						className="-translate-x-48"
					/>
					<div className="absolute top-10 right-24 flex flex-col items-center space-y-6">
						<i className="text-white text-6xl text-center">
							ONE-ON-ONE <br /> PERSONAL <br /> TRAINING
						</i>
						<div className="bg-neutral-900 p-6 flex flex-col space-y-6">
							<p className="text-red-600 text-2xl text-center font-sans font-extralight">
								Try us out
							</p>
							<form action="" className="flex flex-col space-y-6">
								<div className="flex flex-col space-y-2">
									<p className="text-white text-xl">Name</p>
									<div className="font-sans flex space-x-4">
										<input
											type="text"
											className="bg-neutral-700 outline-none px-4 py-2 focus:text-red-600 focus:border-red-600 border border-neutral-700"
											placeholder="First"
										/>
										<input
											type="text"
											className="bg-neutral-700 outline-none px-4 py-2 focus:text-red-600 focus:border-red-600 border border-neutral-700"
											placeholder="Last"
										/>
									</div>
								</div>
								<div className="flex flex-col space-y-2">
									<div className="flex space-x-4">
										<div className="flex flex-col space-y-2">
											<p className="text-white text-xl">Phone</p>
											<input
												type="text"
												className="bg-neutral-700 outline-none px-4 py-2 focus:text-red-600 focus:border-red-600 border border-neutral-700 font-sans"
											/>
										</div>
										<div className="flex flex-col space-y-2">
											<p className="text-white text-xl">Email</p>
											<input
												type="text"
												className="bg-neutral-700 outline-none px-4 py-2 focus:text-red-600 focus:border-red-600 border border-neutral-700 font-sans"
											/>
										</div>
									</div>
								</div>
								<div className="flex flex-col space-y-2">
									<p className="text-white text-xl">
										What are your fitness goals?
									</p>
									<div className="font-sans flex space-x-4">
										<textarea className="bg-neutral-700 outline-none px-4 py-2 focus:text-red-600 focus:border-red-600 border border-neutral-700 w-full h-32" />
									</div>
								</div>
							</form>
							<div className="flex justify-center">
								<button className="bg-red-600 rounded-sm text-white text-xl flex space-x-3 items-center px-6 py-1 hover:bg-red-700 transition duration-200">
									<i>Get Started today!</i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
