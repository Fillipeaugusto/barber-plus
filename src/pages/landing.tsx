import PricingCards from '../Components/PricingCards';

export default function Landing() {
    return (
        <div>
            <header className="header-area">
                <div className="navbar-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand" href="index.html">
                                        <img src="#" alt="Logo" />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ml-auto">

                                            <li className="nav-item">
                                                <a className="page-scroll" href="#mais">Saiba mais</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#sobre">Sobre</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#experiencia">Experiência</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#pricing">Preços</a>
                                            </li>

                                        </ul>
                                    </div>

                                    <div className="navbar-btn d-none d-sm-inline-block">
                                        <a className="main-btn" data-scroll-nav="0" href="#pricing">Entrar</a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="home" className="header-hero bg_cover" >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="header-hero-content text-center">
                                    <h3 className="header-sub-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Barber Plus </h3>
                                    <h2 className="header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">Uma nova forma de fazer a barba</h2>
                                    <p className="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">De qualquer lugar do Brasil e a qualquer hora</p>
                                    <a href="#" className="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">Cadastrar</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-hero-image text-center wow fadeIn" data-wow-duration="1.3s" data-wow-delay="1.4s">
                                    <img src="assets/images/header-hero.png" alt="hero" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="particles-1" className="particles"></div>
                </div>
            </header>


            <div className="brand-area pt-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="brand-logo d-flex align-items-center justify-content-center justify-content-md-between">
                                <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <img src="#" alt="marcas" />
                                </div>
                                <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                    <img src="#" alt="marcas" />
                                </div>
                                <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                    <img src="#" alt="marcas" />
                                </div>
                                <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.4s">
                                    <img src="#" alt="marcas" />
                                </div>
                                <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                    <img src="#" alt="marcas" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section id="mais" className="services-area pt-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center pb-40">
                                <div className="line m-auto"></div>
                                <h3 className="title">Com o Barber + você poderá, <span> Ter acesso a milhares de barbearias em todo o Brasil!</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-7 col-sm-8">
                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                <div className="services-icon">
                                    <img className="shape" src="assets/images/services-shape.svg" alt="shape" />
                                    <img className="shape-1" src="assets/images/services-shape-1.svg" alt="shape" />
                                    <i className="lni-baloon"></i>
                                </div>
                                <div className="services-content mt-30">
                                    <h4 className="services-title"><a href="#">Simples</a></h4>
                                    <p className="text">Cada detalhe do nosso sistema foi cuidadosamente pensado, para que fosse possível o acesso a todos
                                    os tipos de clientes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-7 col-sm-8">
                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="services-icon">
                                    <img className="shape" src="assets/images/services-shape.svg" alt="shape" />
                                    <img className="shape-1" src="assets/images/services-shape-2.svg" alt="shape" />
                                    <i className="lni-cog"></i>
                                </div>
                                <div className="services-content mt-30">
                                    <h4 className="services-title"><a href="#">Rápido</a></h4>
                                    <p className="text">Com o Barber + você acha um local para fazer a sua barba ou corte de cabelo em segundos.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-7 col-sm-8">
                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                                <div className="services-icon">
                                    <img className="shape" src="assets/images/services-shape.svg" alt="shape" />
                                    <img className="shape-1" src="assets/images/services-shape-3.svg" alt="shape" />
                                    <i className="lni-bolt-alt"></i>
                                </div>
                                <div className="services-content mt-30">
                                    <h4 className="services-title"><a href="#">Prático</a></h4>
                                    <p className="text">A praticidade está em nosso lema, quando estiver viajando e precisar de algum local para se manter na moda, o Barber + está aqui para te ajudar.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="sobre" className="about-area pt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="section-title">
                                    <div className="line"></div>
                                    <h3 className="title">De qualquer lugar  <span>a qualquer hora</span></h3>
                                </div>
                                <p className="text">Com o Barber + você terá disponível barbearias em todo o Brasil,e com um simples
                                click você poderá ver todas as informações sobre qualquer barbearia, verificar avaliações, endereços
                                e telefones de contato das barbearias cadastradas em nosso sistema.</p>
                                <p className="text">O nosso foco é a praticidade, já imaginou perder aquele compromisso por não conseguir
                                fazer a barba ou cortar o seu cabelo a tempo, crie já a sua conta e tenha liberdade de cortar o cabelo e fazer
                                sua barba mesmo quando estiver com pouco tempo.</p>
                                <a href="#" className="main-btn">Cadastre-se</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                <img src="assets/images/about1.svg" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-shape-1">
                    <img src="assets/images/about-shape-1.svg" alt="shape" />
                </div>
            </section>

            <section className="about-area pt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="section-title">
                                    <div className="line"></div>
                                    <h3 className="title"><span>Feito</span> especialmente para você</h3>
                                </div>
                                <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                                <a href="#" className="main-btn">Experimente já</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                <img src="assets/images/about3.svg" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-shape-1">
                    <img src="assets/images/about-shape-1.svg" alt="shape" />
                </div>
            </section>



            <section id="experiencia" className="testimonial-area pt-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="section-title text-center pb-40">
                                <div className="line m-auto"></div>
                                <h3 className="title">Experiência <span> de quem já usou o nosso sistema</span></h3>
                            </div>
                        </div>
                    </div>

                    <div className="row testimonial-active wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.8s">
                        <div className="col-lg-4">
                            <div className="single-testimonial">
                                <div className="testimonial-review d-flex align-items-center justify-content-between">
                                    <div className="quota">
                                        <i className="lni-quotation"></i>
                                    </div>
                                    <div className="star">
                                        <ul>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="testimonial-text">
                                    <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                                </div>
                                <div className="testimonial-author d-flex align-items-center">
                                    <div className="author-image">
                                        <img className="shape" src="assets/images/textimonial-shape.svg" alt="shape" />
                                        <img className="author" src="assets/images/author-1.png" alt="author" />
                                    </div>
                                    <div className="author-content media-body">
                                        <h6 className="holder-name">Teste 1</h6>
                                        <p className="text">Rio de janeiro</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-testimonial">
                                <div className="testimonial-review d-flex align-items-center justify-content-between">
                                    <div className="quota">
                                        <i className="lni-quotation"></i>
                                    </div>
                                    <div className="star">
                                        <ul>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="testimonial-text">
                                    <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                                </div>
                                <div className="testimonial-author d-flex align-items-center">
                                    <div className="author-image">
                                        <img className="shape" src="assets/images/textimonial-shape.svg" alt="shape" />
                                        <img className="author" src="assets/images/author-2.png" alt="author" />
                                    </div>
                                    <div className="author-content media-body">
                                        <h6 className="holder-name">Teste 2</h6>
                                        <p className="text">São paulo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-testimonial">
                                <div className="testimonial-review d-flex align-items-center justify-content-between">
                                    <div className="quota">
                                        <i className="lni-quotation"></i>
                                    </div>
                                    <div className="star">
                                        <ul>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="testimonial-text">
                                    <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                                </div>
                                <div className="testimonial-author d-flex align-items-center">
                                    <div className="author-image">
                                        <img className="shape" src="assets/images/textimonial-shape.svg" alt="shape" />
                                        <img className="author" src="assets/images/author-3.png" alt="author" />
                                    </div>
                                    <div className="author-content media-body">
                                        <h6 className="holder-name">Teste 3</h6>
                                        <p className="text">Brasília-df</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <PricingCards />

            <footer id="footer" className="footer-area pt-120">
                <div className="container">
                    <div className="subscribe-area wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="subscribe-content mt-45">
                                    <h2 className="subscribe-title">Cadastre-se agora mesmo<span>e tenha acesso a mais de 1000 barbearias</span></h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="subscribe-form mt-50">
                                    <form action="#">
                                        <input type="text" placeholder="Email" />
                                        <button className="main-btn">Cadastrar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-widget pb-100">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="footer-about mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <a className="logo" href="#">
                                        <img src="#" alt="logo" />
                                    </a>
                                    <p className="text">Barber + um jeito diferente de fazer a barba</p>
                                    <ul className="social">
                                        <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                                        <li><a href="#"><i className="lni-twitter-filled"></i></a></li>
                                        <li><a href="#"><i className="lni-instagram-filled"></i></a></li>
                                        <li><a href="#"><i className="lni-linkedin-original"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-5 col-sm-5">
                                <div className="footer-contact mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                                    <div className="footer-title">
                                        <h4 className="title">Nosso contato</h4>
                                    </div>
                                    <ul className="contact">
                                        <li>(61) 1234-5679</li>
                                        <li>info@gmail.com</li>

                                        <li>Brasília-DF.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="particles-2"></div>
            </footer>

        </div>
    )
}