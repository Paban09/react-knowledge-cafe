import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    // console.log(blog);

    const {title,cover,author,author_img,reading_time,posted_date,hashtags}=blog;
    return (
        <div className='mb-20 space-y-5'>
            <img className='w-full' src={cover} alt={`Cover picture of ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-5'>
                        <h3 className='text-2xl'>{author}</h3>
                        <h5>{posted_date}</h5>
                    </div>
                </div>
                <div>
                    <span>{reading_time}</span> min read
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-red-600 text-3xl'><FaBookmark /></button>
                </div>
            </div>
            <h2 className='text-2xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=><span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-600 font-bold underline'>mark as read</button>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
}

export default Blog;