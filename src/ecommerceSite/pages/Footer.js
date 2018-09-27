import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="social">
                <a href="https://www.facebook.com/"><i className="fa fa-instagram fa-3x fa-fw"></i></a>
                <a href="https://www.instagram.com/"><i className="fa fa-facebook-square fa-3x fa-fw"></i></a>
                <a href="https://www.twitter.com/"><i className="fa fa-twitter fa-3x fa-fw"></i></a>
            </div>
            <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
            <p className="copyright">&copy; 2018 No Strings Attached. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;