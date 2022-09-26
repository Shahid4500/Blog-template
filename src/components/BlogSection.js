import { blogData } from '../utils/blogsData'
import { FaLongArrowAltRight } from 'react-icons/fa'
const BlogSection = () => {
  return (
    <div className='w-full lg:w-full flex flex-col justify-center items-center gap-10 mt-10'>
    <h2 className='text-[25px] lg:self-start mr-44 lg:ml-20  font-bold lg:text-[45px] text-overViewColor'>Jessica's Blog</h2>
    <div className=' w-[335px] lg:w-full flex flex-wrap items-center justify-center'>
    {blogData.map((item)=>(
        
    <div className='lg:w-[30%] w-[335px] mt-5 lg:mt-10 ' key={item.id}>
    <img className='w-[382px] h-[256px] ' src={item.img} alt="" />
    <p className='text-[15px] opacity-50'>{item.desc}</p>
    <p className='text-cardText text-[15px] lg:text-[25px] font-semibold'>{item.heading}</p>
    <div className='flex items-center gap-x-4 '>
    <p className='cursor-pointer text-moreText'>Read More</p>
    <span className='text-moreText text-sm'><FaLongArrowAltRight/></span>
    </div>
    </div>
    ))}
    </div>
    <button className='bg-buttonColor text-textColor block lg:hidden w-[335px] h-[50px] rounded-[6px] uppercase text-[17px] font-semibold '>Load More</button>
    </div>
  )
}

export default BlogSection