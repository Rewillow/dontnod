import './CarouselItem.css'

const CarouselItem = ({item}) => {

    return (
        <div className="carousel-item">
        <div></div>
        <img className="carousel-img" src={item.image}></img>
        </div>
    )
}

export default CarouselItem