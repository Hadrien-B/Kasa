import './stars.css'
import StarColor from '../../assets/StarColor.png'
import StarGrey from '../../assets/StarGrey.png'

export default function Stars(props) {
  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < props.rating) {
      stars.push(
        <img
          src={StarColor}
          alt="étoile orange"
          className="star--color"
          key={i}
        ></img>
      )
    } else {
      stars.push(
        <img
          src={StarGrey}
          alt="étoile grise"
          className="star--grey"
          key={i}
        ></img>
      )
    }
  }
  return <div className="stars">{stars}</div>
}
