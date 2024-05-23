import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
		<div className='flex'>
			<div className='bg-[#576BB2] h-80 w-48'></div>
			<div className='bg-white h-80 w-56'>
				<ul>
					<li className='py-[1px] flex justify-between items-center px-2'>
						<a href='#'>Mens Shopping</a>
						<FaChevronRight className='opacity-60 text-xs' />
                    </li>
					<li className='py-[1px] flex justify-between items-center px-2'>
						<a href='#'>Womens Fashion</a>
						<FaChevronRight className='opacity-60 text-xs' />
                    </li>
					<li className='py-[1px] flex justify-between items-center px-2'>
						<a href='#'>Household</a>
						<FaChevronRight className='opacity-60 text-xs' />
                    </li>
					<li className='py-[1px] flex justify-between items-center px-2'>
						<a href='#'>Kitchen And Dining</a>
						<FaChevronRight className='opacity-60 text-xs' />
                    </li>
					<li className='py-[1px] flex justify-between items-center px-2'>
						<a href='#'>Computer Accessories</a>
						<FaChevronRight className='opacity-60 text-xs' />
                    </li>
					<li className='py-[1px] flex justify-between items-center px-2'>
						<a href='#'>Gadgets</a>
						<FaChevronRight className='opacity-60 text-xs' />
                    </li>
					<li className='py-[1px] flex justify-between items-center px-2'>
						<a href='#'>Jewellery</a>
						<FaChevronRight className='opacity-60 text-xs' />
                    </li>
					<li className='py-[1px] flex justify-between items-center px-2'>
						<a href='#'>Home Decor</a>
						<FaChevronRight className='opacity-60 text-xs' />
                    </li>
					<li className='py-[1px] flex justify-between items-center px-2'>
						<a href='#'>Cosmetics</a>
						<FaChevronRight className='opacity-60 text-xs' />
                    </li>
					<li className='py-[1px] flex justify-between items-center px-2'>
						<a href='#'>All Categories >></a>
						<FaChevronRight className='opacity-60 text-xs' />
                    </li>
				</ul>
			</div>
			<img className='w-full h-80 ' src={banner} alt='' />
		</div>
	);
};

export default Banner;