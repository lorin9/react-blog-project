import BookMark from "./BookMark";

const BookMarks = ({bookMarks, readingTime}) => {
    console.log(bookMarks)
    return (
        
        <div className="w-1/3 pl-10 ">
            <div className="ml-6 p-6 bg-red-100 rounded-xl my-8">
                <h2 className="text-4xl">Reading Time: {readingTime}</h2>
            </div>
            <div className=" bg-rose-200 ml-6 rounded-xl p-6">
            <h2 className="text-3xl text-center">BookMarked Blogs:{bookMarks.length}</h2>
            {
                bookMarks.map(bookMark => <BookMark key={bookMark.id} bookMark ={bookMark}></BookMark>)
            }
            </div>
        </div>
    );
};

export default BookMarks;