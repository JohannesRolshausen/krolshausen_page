import { Link } from 'react-router-dom'
import { TILES } from '../data/routes'

export default function TileGrid() {
  return (
    <section className="tile-grid" aria-label="Themenbereiche">
      {TILES.map((tile) => (
        <Link
          key={tile.path}
          to={tile.path}
          className={`tile tile--${tile.color}`}
        >
          {tile.label}
        </Link>
      ))}
    </section>
  )
}
