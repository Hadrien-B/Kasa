import './tag.css'

export default function Tag(props) {
  return (
    <div className="tag">
      <div className="content__tag">{props.tag}</div>
    </div>
  )
}
