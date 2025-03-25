import { useState } from 'react';
import { certificates } from '../../portfolio';
import './Certificates.css';


export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const [buttonWord, setButtonWord] = useState("Show More")

  return (
    <section id="certificates" className='section certificates'>
      <h2 className='section__title'>Certificates</h2>
      <div className="certificates-list">
        {
          showAll ? (
            certificates.map(certificate => (
              <div className="certificate-card" key={`${certificate.title}-${certificate.organization}`}>
                <h3 className="certificate-title">{certificate.title}</h3>
                <p className="certificate-organization">{certificate.organization}</p>
              </div>
            )
            )) : (
            certificates.slice(0, 4).map(certificate => (
              <div className="certificate-card" key={`${certificate.title}-${certificate.organization}`}>
                <h3 className="certificate-title">{certificate.title}</h3>
                <p className="certificate-organization">{certificate.organization}</p>
              </div>
            ))
          )
        }
      </div>
      <button
        className='btn btn--outline projects__btn'
        type='button'
        onClick={() => {
          setShowAll(!showAll)
          setButtonWord(showAll ? "Show More" : "Show Less")
        }}
      >
        {buttonWord}
      </button>
    </section>
  );
}

