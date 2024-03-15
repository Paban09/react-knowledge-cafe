import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  
  const handleAddToBookmark=(blog)=>{
    const newBookmarks=[...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const [readingTime,setReadingTime]=useState(0);

  const handleMarkAsRead=(id,time)=>{
    const newReadingTime=time+readingTime;
    setReadingTime(newReadingTime);

    // remove blog from bookmark
    // console.log('remove bookmark',id);
    const remainingBookmark=bookmarks.filter(bookmark=>bookmark.id !== id);
    setBookmarks(remainingBookmark);
  }

  return (
    <>  
      <Header></Header>

      <div className='md:flex max-w-7xl mx-auto gap-5 py-5'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
