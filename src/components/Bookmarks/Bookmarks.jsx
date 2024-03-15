import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    // const {}=bookmarks;
    return (
        <div className="md:w-1/3  bg-gray-300 space-y-5">
            <div className='bg-gray-900 text-white text-center'>
                <h3 className='text-3xl'>Reading time : {readingTime} min</h3>
            </div>
            <h2 className='text-3xl text-center'>Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array.isRequired,
    readingTime:PropTypes.number.isRequired
}

export default Bookmarks;