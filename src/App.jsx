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
  const handleMarkAsRead=(time)=>{
    // console.log('Reading time ');
    // console.log('Reading time ',time);
    const newReadingTime=time+readingTime;
    // console.log(newReadingTime);
    setReadingTime(newReadingTime);
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
