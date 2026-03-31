import { Outlet } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'
import Nav from './Nav'
import Footer from './Footer'
import PageLoad from '../PageLoad'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-paper dark:bg-navy-950">
      <ScrollToTop />
      <Nav />
      <main id="main" className="flex-1">
        <PageLoad>
          <Outlet />
        </PageLoad>
      </main>
      <Footer />
    </div>
  )
}
