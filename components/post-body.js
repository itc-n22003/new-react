import styles from 'styles/post-body.module.css'

const PostBoby = ({ children }) => {
  return (
    <div className={styles.stack}>{children}</div>)
}
export default PostBoby
