import { useEffect, useState } from 'react'
import './Footer.css'

export default function Footer() {
  const [visitCount, setVisitCount] = useState(null)

  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/juin28.github.io/visits/up')
      .then((res) => res.json())
      .then((data) => setVisitCount(data.count))
      .catch((err) => console.error('Error fetching visit count:', err))
  }, [])

  return (
    <footer className='footer'>
      <h5 className='footer__title'>Created By Juin Tan</h5>
      {visitCount !== null && (
        <span className='footer__count'>
          Profile Visits: {visitCount}
        </span>
      )}
    </footer>
  )
}
