import './TextBox.scss'

export default function TextBox(props) {
  return (
    <div className='simple-text'>
      <p>{props.text}</p>
    </div>
  )
}
