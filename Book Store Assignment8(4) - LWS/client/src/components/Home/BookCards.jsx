import BookCard from "./BookCard"

const BookCards = () => {
  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
        <BookCard />
    </div>
  )
}

export default BookCards