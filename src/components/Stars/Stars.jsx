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
          alt="star full"
          className="star-full"
          key={i}
        ></img>
      )
    } else {
      stars.push(
        <img
          src={StarGrey}
          alt="star empty"
          className="star-empty"
          key={i}
        ></img>
      )
    }
  }
  return <div className="stars">{stars}</div>
}
