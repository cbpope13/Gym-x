import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="bg-neutral-900 px-20 py-10 flex flex-col space-y-10">
			<div className="flex justify-between">
				<div className="flex flex-col items-center">
					<a href="/" className="text-red-600 font-bold text-6xl">
						<i>GYM-X</i>
					</a>
					<div className="flex space-x-3">
						<Link href="/">
							<Image src="/fb.png" width={25} height={30} />
						</Link>
						<Link href="/">
							<Image src="/ig.png" width={25} height={30} />
						</Link>
						<Link href="/">
							<Image src="/tw.png" width={25} height={30} />
						</Link>
					</div>
				</div>
				<div className="flex space-x-8">
					<div className="flex flex-col space-y-2">
						<div className="border-b-2 border-red-600 w-48">
							<i className="text-white text-3xl">QUICK LINKS</i>
						</div>
						<div className="flex flex-col space-y-3">
							<a
								href="#home"
								className="text-red-600 text-lg font-sans hover:text-neutral-300 transition duration-500"
							>
								Home
							</a>
							<a
								href="#memberships"
								className="text-red-600 text-lg font-sans hover:text-neutral-300 transition duration-500"
							>
								Memberships
							</a>
							<a
								href="#personal-training"
								className="text-red-600 text-lg font-sans hover:text-neutral-300 transition duration-500"
							>
								Personal Training
							</a>
						</div>
					</div>
					<div className="flex flex-col space-y-2">
						<div className="border-b-2 border-red-600 w-48">
							<i className="text-white text-3xl">Company Info</i>
						</div>
						<div className="flex flex-col space-y-3 text-white font-sans">
							<p>
								123 Fake Road St. <br /> Nowhere, NW 01234
							</p>
							<div>
								<p>
									P: <span className="text-red-600">401-555-1234</span>
								</p>
								<p className="text-red-600">fakeemail@fake.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p className="text-sm text-neutral-300 text-center tracking-wider">
				Created By{' '}
				<Link href="/" className="text-red-600">
					Cade Pope
				</Link>
			</p>
		</footer>
	);
};

export default Footer;
