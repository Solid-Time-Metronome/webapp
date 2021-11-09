import { PropTypes } from 'prop-types'
import { useEffect, useState } from 'react'

const Card = ({ user, name }) => {
  console.log('name', name)
  console.log('user', user)
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/{user}')
      .then(response => response.json()) //Converting the response to a JSON object
      .then(data => document.body.append())
      .catch(error => console.error(error));
    // fetch(`https://api.github.com/users/${user}`)
    //   .then((response) => {
    //     // response.json()
    //     console.log('response')
    //   }
    //   )
    //   .then(setData(response.json()))
    //   .catch(err => (console.log('error', err)))
  }, [])

  console.log(data)

  return (
    <div className="card" style={{ width: '18rem' }}>
      {/* <img src={} className="card-img-top" alt="..."></img> */}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {/* {data.bio} */}
        </p>
        <a href="" className="btn btn-outline-primary">
          GitHub
        </a>
      </div>
    </div>
  )
}

export default Card

Card.propTypes = {
  user: PropTypes.string,
  name: PropTypes.string
}

