import { PropTypes } from 'prop-types'
import { useState } from 'react'
const Card = ({ name, user }) => {
  const [data, setData] = useState(null)
  console.log(user)

  const getData = (x) => {
    fetch(`https://api.github.com/users/${x}`)
      .then((response) => response.json())
      .then(response => setData(response))
      .then(() => console.log('useEffect ran'))
      .catch(console.error)
  }

  getData(user)

  console.log(data)

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={data.avatar_url} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{data.bio}</p>
        <a href={data.blog} className="btn btn-outline-primary">
          Portfolio
        </a>
        <a href={data.html_url} className="btn btn-outline-primary">
          GitHub
        </a>
      </div>
    </div>
  )
}

export default Card

Card.propTypes = {
  name: PropTypes.string,
  user: PropTypes.string
}
