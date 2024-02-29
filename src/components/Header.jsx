// a header child component with png image

// import investment-calculator-logo.png from assets folder
import Logo from '../assets/investment-calculator-logo.png';


export default function Header() {

  return (
    <header id="header">
      <img src={Logo} alt="Investment-calculator-logo" />
      <h1>Investment Calculator</h1>
    </header>
  )

}