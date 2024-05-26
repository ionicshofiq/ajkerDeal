import { BsThreeDotsVertical } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";
import { IoIosHeartEmpty } from "react-icons/io";

// import logo from '../../assets/logo.svg';
const Navbar2 = () => {
	return (
		<div>
			<div className=' bg-base-100 md:-w-full px-4 mx-auto flex justify-center items-center md:pt-10'>
				<div className='flex-1'>
					<img
						className='md:w-32 w-20 lg:ml-36'
						src='http://static.ajkerdeal.com/images/dealdetails/ad-logo.svg'
						alt=''
					/>
				</div>

				{/* search start */}
				<div className='flex justify-center items-center'>
					<div className='navbar-end flex justify-center pt-2'>
						<div className='form-control'>
							<input
								type='text'
								placeholder='Search'
								className='input input-bordered lg:w-[350px] md:w-[200px] w-24 rounded-none rounded-l-lg bg-[#F5F5F5] md:block hidden'
							/>
						</div>
						<div className="flex justify-center items-center">
							<button className=' md:bg-black bg-transparent md:border-2 md:btn border-none md:text-white md:rounded-r-md md:rounded-none rounded-none rounded-r-lg md:mr-32'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
									/>
								</svg>
							</button>
						</div>

						{/* search end */}

						<div className='flex-none'>
							<div className='dropdown dropdown-end'>
								<div
									tabIndex={0}
									role='button'
									className='btn btn-ghost btn-circle md:mr-20'
								>
									<div className='indicator '>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-5 w-5'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
											/>
										</svg>
										<span className='badge badge-sm indicator-item md:block hidden'>
											8
										</span>
									</div>
								</div>

								<div
									tabIndex={0}
									className='mt-3 z-[1] card card-compact dropdown-content md:w-52 w-40 bg-base-100 shadow'
								>
									<div className='card-body'>
										<span className='font-bold text-lg'>
											8 Items
										</span>
										<span className='text-info'>
											Subtotal: $999
										</span>
										<div className='card-actions '>
											<button className='btn btn-primary btn-block '>
												View cart
											</button>
										</div>
									</div>
								</div>
								
							</div>
							
						</div>
						<div className="flex justify-center items-center gap-1">
						<div className="md:hidden"><IoIosHeartEmpty /></div>
						<div className="md:hidden"><GrUserManager /></div>
						<div className="md:hidden"><BsThreeDotsVertical /></div>
						</div>
						

					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar2;
