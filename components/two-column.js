import styles from 'styles/two-column.module.css'

const TwoColumn = ({ children }) => {
  return (
    <div className={styles.flexContainer}>{children}</div>
  )
}
export default TwoColumn

TwoColumn.Main = function Main ({ children }) {
  return (
    <div className={styles.main}>{children}</div>
  )
}
TwoColumn.Sidebar = function Sidebar ({ children }) {
  return (
    <div className={styles.sidebar}>{children}</div>
  )
}
