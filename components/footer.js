import Container from 'components/container'
import Logo from 'components/logo'
import Social from 'components/social'
import styles from 'styles/footer.module.css'

const Footer = () => {
  return (
    <Container>
      <footer className={styles.wrapper}>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </footer>
    </Container>
  )
}
export default Footer
