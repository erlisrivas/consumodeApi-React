import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons' 


const Footer = () => {
  return (
    <footer className="bg-primary text-center text-light p-4 ">
        <p className="mb-0">Erlis Rivas</p>
        <div className="d-flex justify-content-center">
            <FontAwesomeIcon icon={faFacebook}/>
            <FontAwesomeIcon icon={faTwitter}/>
            <FontAwesomeIcon icon={faLinkedin}/>
            <FontAwesomeIcon icon={faYoutube}/>
            <FontAwesomeIcon icon={faGithub}/>
        </div>
    </footer>
  )
}

export default Footer