import './TextBox.scss'

interface IProps {
  text: string;
}

export default function TextBox(props:IProps) {
  return (
    <div className='simple-text'>
      <p>{props.text}</p>
    </div>
  )
}
