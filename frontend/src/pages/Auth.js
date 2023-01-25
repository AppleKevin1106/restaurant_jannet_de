import './Auth.css'

function Auth() {
    return (
        <div className='auth'>
            <section className='section'>
                <div className='auth__main'>
                    <div className='auth__box'>
                        <div className='auth__window'>
                            <div className='auth__main__box'>
                                <div className='auth__run'>
                                    <section className='auth__section__left'>
                                        <span className='auth__section__left__span'>
                                            <img className='auth__login__img' src='https://www.restaurant-jannat.de/_next/image?url=https%3A%2F%2Fd1nfw7b4288zmf.cloudfront.net%2Fshop%2Fimg%2Fcover%2Fjannat%2Fcb9e13a9e2f1a111.jpg&w=1920&q=75' />
                                        </span>
                                    </section>
                                    <section className='auth__section__right'>
                                        <h1 className='login__title'>Register</h1>
                                        <h2 className='login__desc'>Please enter your mobile number or email for a one-time password(OTP)</h2>
                                        <button className='login__button'></button>
                                        <div>
                                            <div className='auth__button__main'>
                                                <div className='auth__button__box'>
                                                    <button className='auth__button__email'>
                                                        <font>Registeration with email</font>
                                                    </button>
                                                </div>
                                                <div className='auth__button__box'>
                                                    <button className='auth__button'>
                                                        <font>Registeration with mobile phone</font>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div></div>
                                        <div></div>
                                    </section>
                                    <div></div>
                                    <button></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src='http://www.w3.org/2000/svg' />
                </div>
            </section>
        </div>
    )
}

export default Auth