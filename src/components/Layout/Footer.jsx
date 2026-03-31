import { Link } from 'react-router-dom'
import { profile, navLinks } from '../../data/content'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-neutral-stone border-t border-navy-700">
      <div className="container-grid section-padding">
        <div className="col-span-12 lg:col-span-4 mb-8 lg:mb-0">
          <p className="font-serif text-xl font-semibold text-white mb-2">{profile.name}</p>
          <p className="text-sm">{profile.title} · {profile.affiliations[0]}</p>
          <p className="text-sm mt-1">{profile.location}</p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-mist mb-3">Quick links</p>
          <ul className="space-y-1">
            {navLinks.slice(0, 6).map(({ path, label }) => (
              <li key={path}>
                <Link to={path} className="text-sm hover:text-accent-emerald-light transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-mist mb-3">Connect</p>
          <ul className="space-y-1 text-sm">
            <li><a href={`mailto:${profile.email}`} className="hover:text-accent-emerald-light transition-colors">Email</a></li>
            <li><a href={profile.scholarUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-emerald-light transition-colors">Google Scholar</a></li>
            <li><a href={profile.researchGateUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-emerald-light transition-colors">ResearchGate</a></li>
          </ul>
        </div>
        <div className="col-span-12 pt-8 mt-8 border-t border-navy-700">
          <p className="text-xs text-neutral-stone/80">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
