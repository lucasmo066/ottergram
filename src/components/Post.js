function Post({ image, name, setSelectedPostName }) {

    const handleClick = () => {
        setSelectedPostName(name);
    }

    return (
        <li className='post'>
         <button onClick={handleClick}>
          <img src={image} alt={name}/>
            <p>{name}</p>
          </button>
        </li>
    )
}

export default Post;