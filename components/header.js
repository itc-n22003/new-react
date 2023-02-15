import Container from 'components/container'
import Logo from 'components/logo'
import Nav from 'components/nav'

const Header = () => {
  return (
    <header>
      <Container>
        <Logo boxOn />
        <Nav />
      </Container>
    </header>
  )
}
export default Header
