import React from 'react';
import { awards } from '../../portfolio';
import './Awards.css'; 

export default function Awards(){
    return (
        <section id="awards" className="section awards">
            <h2 className="section__title">Awards</h2>
            <div className="awards-list">
                {awards.map(award => (
                    <div className="award-item" key={`${award.title}-${award.organization}`}> 
                        <div className="award-card-content">
                            <h3 className="award-title">{award.title}</h3>
                            <p className="award-organization">{award.organization}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
