import Nav from '../Nav/Nav'
import Hello from '../Welcome/Hello'
import styled from 'styled-components'
import './Header.scss'

const GlassBox = styled.section`
  margin: 50px;
  background: rgba(186, 169, 169, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11.5px);
  -webkit-backdrop-filter: blur(11.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export default function Header() {
  return (
    <div className='header'>
      <Nav/>
        <GlassBox>
          <Hello/>
        </GlassBox>
      <div className='extra-padding'><p></p></div>
    </div>
  )
}
