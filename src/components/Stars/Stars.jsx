import './stars.css' //Importation du style
import StarColor from '../../assets/StarColor.png' //Importation des images
import StarGrey from '../../assets/StarGrey.png' //Importation des images

//Fonction gérant la notation
export default function Stars(props) {
  const stars = [] //Création d'un tableau vide
  //Boucle récupérant la notation
  for (let i = 0; i < 5; i++) {
    //Tant que i n'a pas atteint la notation, une étoile de couleur est ajoutée
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
      //Lorsque le nombre de la notation a été atteint, on complète avec des étoiles grises
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
  return <div className="stars">{stars}</div> //On retourne le nombre d'étoiles (de couleur et grise) récupéré
}
