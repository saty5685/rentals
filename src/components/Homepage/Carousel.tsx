import book1 from '../../Images/BooksImages/book-im1.jpg';
import book2 from '../../Images/BooksImages/book-img2.jpg';
import book3 from '../../Images/BooksImages/book-img3.jpg'
import '../../css/Homepage.css'
import { BookCarousel } from './BookCarousel';
export const Carousel = () => {
    return (
        <div className='container mt-5' style={{ height: 550 }} >
            <div className='homepage-carousel-title'>
                <h3> Find your next "I stayed up too late reading" book.</h3>
            </div>
            <div id="carouselExampleAutoplaying" className="carousel carousel-dark mt-5 slide d-none d-lg-block" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='row d-flex justify-content-center align-item-center'>
                            <BookCarousel book={book1}/>
                            <BookCarousel book={book1}/>
                            <BookCarousel book={book1}/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row d-flex justify-content-center align-item-center'>
                        <BookCarousel book={book2}/>
                        <BookCarousel book={book2}/>
                        <BookCarousel book={book2}/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row d-flex justify-content-center align-item-center'>
                        <BookCarousel book={book3}/>
                        <BookCarousel book={book3}/>
                        <BookCarousel book={book3}/>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Mobile */}
            <div className='d-lg-none mt-3'>
                <div className='row d-flex justify-content-center align-item-center'>
                <BookCarousel book={book2}/>
                </div>
            </div>
            <div className='homepage-carousel-title mt-3'>
                <a className='btn btn-outline-secondary btn-lg' href="#"> View More</a>
            </div>


        </div>
    );
}