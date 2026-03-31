import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Sun, Moon, FileDown, Menu, X } from 'lucide-react'
import { navMenu } from '../../data/content'
import Resume_Pranab from "../../assets/Resume_Pranab Panday.pdf"

function isActivePath(path, current) {
  if (!path) return false
  return current === path || (path !== '/' && current.startsWith(path))
}

function hasActiveChild(children, current) {
  return children?.some((c) => isActivePath(c.path, current))
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(null)
  const [dark, setDark] = useState(true)
  const location = useLocation()
  const dropdownRef = useRef(null)

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) setDark(saved === 'dark')
  }, [])

  // Apply theme
  useEffect(() => {
    const root = document.getElementById('html-root')
    if (root) {
      if (dark) root.classList.add('dark')
      else root.classList.remove('dark')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    setOpen(false)
    setDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-navy-900/95 backdrop-blur-md border-b border-navy-700/50">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <h3 className="font-semibold text-lg text-white">
              Dr. Pranab Kumar Panday
            </h3>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-1" ref={dropdownRef}>
          {navMenu.map((item) => {
            if (item.children) {
              const active = hasActiveChild(item.children, location.pathname)
              return (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setDropdown(dropdown === item.label ? null : item.label)}
                    className={`flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? 'text-accent-emerald bg-navy-800'
                        : 'text-neutral-stone hover:text-white hover:bg-navy-800'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>

                  {dropdown === item.label && (
                    <ul className="absolute top-full left-0 mt-1 py-2 min-w-[200px] rounded-xl bg-navy-800 border border-navy-700 shadow-xl">
                      {item.children.map((sub) => (
                        <li key={sub.path}>
                          <Link
                            to={sub.path}
                            className={`block px-4 py-2.5 text-sm ${
                              isActivePath(sub.path, location.pathname)
                                ? 'text-accent-emerald bg-navy-700/50'
                                : 'text-neutral-stone hover:text-white hover:bg-navy-700/50'
                            }`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium ${
                  isActivePath(item.path, location.pathname)
                    ? 'text-accent-emerald bg-navy-800'
                    : 'text-neutral-stone hover:text-white hover:bg-navy-800'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 flex-shrink-0">

          {/* Contact */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-medium text-neutral-stone hover:text-white hover:bg-navy-800"
          >
            Contact
          </Link>

          {/* Dark / Light Toggle */}
          <button
            onClick={() => setDark((prev) => !prev)}
            className="p-2.5 rounded-lg text-neutral-stone hover:text-white hover:bg-navy-800 transition"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Download CV */}
          <a
            href={Resume_Pranab}
            download="Pranab_Panday_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent-emerald text-white font-medium text-sm hover:bg-accent-emerald-light transition"
          >
            <FileDown className="w-4 h-4" />
            <span className="hidden sm:inline">Download CV</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 text-neutral-mist hover:text-white rounded-lg"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${open ? 'block' : 'hidden'} border-t border-navy-700 bg-navy-900`}>
        <ul className="max-w-7xl mx-auto px-6 py-4 space-y-1">
          {navMenu.map((item) => {
            if (item.children) {
              return (
                <li key={item.label}>
                  <span className="block px-4 py-2 text-xs font-semibold uppercase text-neutral-stone">
                    {item.label}
                  </span>
                  {item.children.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={() => setOpen(false)}
                      className="block py-2 pl-6 pr-4 rounded-lg text-sm text-neutral-mist hover:bg-navy-800"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </li>
              )
            }

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 rounded-lg text-sm text-neutral-mist hover:bg-navy-800"
                >
                  {item.label}
                </Link>
              </li>
            )
          })}

          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 rounded-lg text-sm text-neutral-mist hover:bg-navy-800"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}