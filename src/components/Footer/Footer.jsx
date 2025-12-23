import { useEffect, useState } from 'react'
import './Footer.css'

export default function Footer() {
  const [visitCount, setVisitCount] = useState(null)
  const [clickCount, setClickCount] = useState(0)
  const [showCount, setShowCount] = useState(false)

  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/juin28.github.io/visits/up')
      .then((res) => res.json())
      .then((data) => setVisitCount(data.count))
      .catch((err) => console.error('Error fetching visit count:', err))
  }, [])

  const handleTitleClick = () => {
    const newClickCount = clickCount + 1
    setClickCount(newClickCount)
    
    if (newClickCount === 3) {
      setShowCount(true)
    } else if (newClickCount === 6) {
      setShowCount(false)
      setClickCount(0)
    }
  }

  return (
    <footer className='footer'>
      <h5 className='footer__title' onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
        Created By Juin Tan
      </h5>
      {showCount && visitCount !== null && (
        <span className='footer__count'>
          Profile Visits: {visitCount}
        </span>
      )}
    </footer>
  )
}
