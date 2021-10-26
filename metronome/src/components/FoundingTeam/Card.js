import { PropTypes } from 'prop-types'
const Card = ({ name, avatar, bio, blog, link }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={avatar} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{bio}</p>
        <a href={blog} className="btn btn-outline-primary">
          Portfolio
        </a>
        <a href={link} className="btn btn-outline-primary">
          GitHub
        </a>
      </div>
    </div>
  )
}

export default Card

Card.propTypes = {
  name: PropTypes.string,
  user: PropTypes.string,
  avatar: PropTypes.string,
  bio: PropTypes.string,
  blog: PropTypes.string,
  link: PropTypes.string

}
