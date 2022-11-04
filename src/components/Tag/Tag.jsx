import './tag.css' //Importation du style

//Composant 'Tag'
export default function Tag(props) {
  return (
    <div className="tag">
      <div className="content__tag">{props.tag}</div>
    </div>
  )
}
