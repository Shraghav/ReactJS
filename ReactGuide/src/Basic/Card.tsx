import picture from './assets/ove.png'
function Card() {
    return (
        <div className='card'>
            <img className="image" alt="3 big brothers" src={picture} height={'200px'} width={'200px'}></img>
            <p className='text'>A man called Ove</p>
            <p className='description'>A sweet heartwarming picture of 3 legends</p>
        </div>
    )
}
export default Card