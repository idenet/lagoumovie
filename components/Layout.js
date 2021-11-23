import Header from './Header'
import Navigation from './Navigation'
export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      {children}
    </>
  )
}
