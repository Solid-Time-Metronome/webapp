import Card from './Card'
import { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'

const CardData = ({ name, user }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error)
  }, [user])

  console.log('data', data)

  return (
        <Card
            name={name}
            avatar={data.avatar_url}
            bio={data.bio}
            blog={data.blog}
            link={data.html_url}
            />
  )
}

export default CardData

CardData.propTypes = {
  name: PropTypes.string,
  user: PropTypes.string
}
