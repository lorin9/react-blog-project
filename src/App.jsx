
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/header/Header'

function App() {
const [bookMarks, setBookMarks] = useState([])
const [readingTime, setReadingTime] = useState(0)

const handleAddToBookMark = blog =>{
const newBookMarks = [...bookMarks, blog]
setBookMarks(newBookMarks)
}

const handleMarkAsRead = time =>{
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime)
}
  return (
    <>
      
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs
     handleAddToBookMark = {handleAddToBookMark}
     handleMarkAsRead = {handleMarkAsRead}></Blogs>
    <BookMarks
    readingTime ={readingTime}
    bookMarks = {bookMarks}></BookMarks>
    </div>
    </>
  )
}

export default App
