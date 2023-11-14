
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookMark, handleMarkAsRead}) => {
  const {title,cover,author, posted_date ,author_img, reading_time, hashtags} = blog
    return (
        <div className='mb-20 space-y-6'>
            <img className='w-full mb-6 rounded-xl' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center '>
              <img className='w-14' src={author_img} alt="" />
              <div className='ml-6'>
            <h3 className='text-xl font-bold'>{author}</h3>
            <p>{posted_date}</p>
              </div>
                </div>
                <div>
            <span>{reading_time} min reading</span>
            <button onClick={() => handleAddToBookMark(blog)} className='text-red-600 text-2xl ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mt-4 mb-2">{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, idx) =><span key={idx}> <a href="">#{hashtag}</a></span>)
                }
            </p>
            <button onClick={ () =>handleMarkAsRead(reading_time)} className='font-bold text-purple-700 underline'>Mark As Read</button>
        </div>
    );
};

export default Blog;