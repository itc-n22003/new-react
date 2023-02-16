import Social from 'components/social'
import styles from 'styles/contact.module.css'

const Contact = () => {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize="30px"/>
      <addredd>cube@web.mail.address</addredd>
    </div>
  )
}
export default Contact
