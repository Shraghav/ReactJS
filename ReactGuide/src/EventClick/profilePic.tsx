function profilePic() {
    const img = './src/assets/book.jpg'
    const handleClick = (e) => {
        e.target.style.display = "none"
    }
    return (
        <img onClick={(e) => handleClick(e)} src={img}></img>
    )
}
export default profilePic;