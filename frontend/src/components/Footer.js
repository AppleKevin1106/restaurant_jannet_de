import './Footer.css'

function Footer(){
    return(
        <div className="footer">
            <div className="footer__main">
                <div className="footer__nav">
                    <div className="footer__box">
                        <div className="footer__box__main">
                            <p style={{margin: "3px"}}>Lagerstrasse 23</p>
                            <p style={{margin: "3px"}}>82178 Puchheim</p>
                            <p style={{margin: "3px"}}>jannatlagerstr@gmail.com</p>
                            <p style={{margin: "3px"}}>+ 49 8961203673</p>
                        </div>
                    </div>
                    <div className="footer__box">
                        <div className='footer__box__main'>
                            <a href='#' className='footer__box__link'>
                                <font>online  ordering system</font>
                            </a>
                            <p className='footer__box__font'>powered by</p>
                            <a href='#' className='footer__box__mark'>
                                <div className='footer__box__mark__main'>
                                    <span className='footer__box__mark__span'>
                                        <img className='footer__mark__img' src='../FLKSA.png' />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="footer__box">
                        <div className='footer__box__main'>
                            <div className='footer__box__icon'>
                                <div className='footer__box__icon__set'>
                                    <a href='#'> <img src='../twitter.png'/> </a>
                                    <a href='#'> <img src='../facebook.png'/> </a>
                                    <a href='#'> <img src='../instergram.png'/> </a>
                                    <a href='#'> <img src='../play.png'/> </a>
                                    <a href='#'> <img src='../apps.png'/> </a>
                                    <a href='#'> <img src='../eatarian.png'/> </a>
                                </div>
                                <p className='footer__content'>
                                ©️2023 Fleksa | Terms and Conditions | Privacy Policy | imprint
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}  

export default Footer