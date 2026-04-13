import './App.scss'

const navItems = [
  {
    title: 'Events',
    blurb: 'Find local events, gatherings, and activities happening in Featherston.',
  },
  {
    title: 'Skills',
    blurb: 'Share your skills or find someone with the expertise you need.',
  },
  {
    title: 'Transport',
    blurb: 'Carpooling, ride sharing, and transport options in the area.',
  },
  {
    title: 'Needs',
    blurb: 'Post or browse community needs and requests for help.',
  },
  {
    title: 'Organisations',
    blurb: 'Discover local clubs, groups, and organisations near you.',
  },
  {
    title: 'Goods & Services',
    blurb: 'Buy, sell, swap, or give away goods and services locally.',
  },
  {
    title: 'Social Services',
    blurb: 'Access social support, welfare, and community care services.',
  },
  {
    title: 'About this site',
    blurb: 'Learn how this community hub works and how to get involved.',
  },
]

function App() {
  return (
    <div>
      <header className="site-header">
        <h1 className="site-header__title">Featherston</h1>
        <p className="site-header__subtitle">Community Information Hub</p>
      </header>
      <nav className="nav-grid">
        {navItems.map((item) => (
          <button key={item.title} className="nav-card">
            <div className="nav-card__image" />
            <div className="nav-card__content">
              <h2 className="nav-card__title">{item.title}</h2>
              <p className="nav-card__blurb">{item.blurb}</p>
            </div>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default App
