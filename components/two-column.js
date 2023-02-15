const TwoColumn = ({ children }) => {
  return (
    <div>{children}</div>
  )
}
export default TwoColumn

TwoColumn.Main = function Main ({ children }) {
  return (
    <div>{children}</div>
  )
}
TwoColumn.Sidebar = function Sidebar ({ children }) {
  return (
    <div>{children}</div>
  )
}
