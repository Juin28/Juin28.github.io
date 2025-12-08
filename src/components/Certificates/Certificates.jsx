import { useState } from 'react';
import { certificates } from '../../portfolio';
import './Certificates.css';


export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const [buttonWord, setButtonWord] = useState("Show More");

  return (
    <section id="certificates" className="section certificates">
      <h2 className="section__title">Certificates</h2>
      <div className="certificates-list-grid">
        {(showAll ? certificates : certificates.slice(0, 4)).map((certificate) => (
          <div className="certificate-card-modern" key={`${certificate.title}-${certificate.organization}`}>
            <div className="certificate-card-content">
              <h3 className="certificate-title-modern">{certificate.title}</h3>
              <p className="certificate-organization-modern">{certificate.organization}</p>
            </div>
          </div>
        ))}
      </div>
      {certificates.length > 4 && (
        <button
          className="btn btn--outline certificates__btn"
          type="button"
          onClick={() => {
            setShowAll(!showAll);
            setButtonWord(showAll ? "Show More" : "Show Less");
          }}
        >
          {buttonWord}
        </button>
      )}
    </section>
  );
}

