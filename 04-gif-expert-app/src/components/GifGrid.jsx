import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from ".";
import PropTypes from 'prop-types'


export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <div key={category}>
            <h3>{category}</h3>
            {isLoading && <h2>Cargando...</h2>}
            <div className='card-grid'>
                {images.map(image => <GifItem key={image.id} {...image} />)}
            </div>
        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}