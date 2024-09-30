import "./SignUp.css"
import logo from '../assets/images/todoist-logo.png';
import google_logo from '../assets/images/google-logo.png';
import facebook_logo from '../assets/images/facebook-logo.png';
import appele_logo from '../assets/images/apple-logo.png';
import image_page from '../assets/images/login-image-page.png';
import inscription1 from '../assets/images/incription1.png';
import inscription2 from '../assets/images/incription2.png';
import inscription3 from '../assets/images/incription3.png';
import inscription4 from '../assets/images/incription4.png';


import { usePassword } from "../hooks/usePassword";
import { Link } from "react-router-dom";

function SignUp() {
    const {show, component} = usePassword();
    return(
        <>
           <div className="gobal-container">
                <div className="left">
                    <div className="header">
                        <div className="logo">
                            <img src={logo} alt="" width="40" height="40"/>
                        </div>

                        <div className="app-name">
                            <p>todoist</p>
                        </div>
                    </div>
                    <div className="inscription-container">
                        <div className="title" style={{margin:"0px 0px 50px 0px"}}>
                            <h1>Inscription</h1>
                        </div>

                        <div className="option-connexion">
                            <a className="option">
                             <img src={google_logo} alt="google" width="20" height="20"/>
                             Continuer avec Google
                            </a>
                        </div>

                        <div className="option-connexion">
                            <a className="option">
                             <img src={facebook_logo} alt="google" width="20" height="20"/>
                             Continuer avec Facebook
                            </a>
                        </div>
                        
                        <div className="option-connexion">
                            <a className="option">
                             <img src={appele_logo} alt="google" width="20" height="20"/>
                             Continuer avec Appele
                            </a>
                        </div>

                        <div className="form-container" style={{margin:"30px 0px 0px 0px"}}>
                            <form action="">
                                <div className="input-container">
                                    <p>E-mail</p>
                                    <input type="text" placeholder='Saisissez votre adresse e-mail ...'/>
                                </div>

                                <div className="input-container">
                                    <p>Mot de passe</p>
                                    <div>
                                        <input type={show ? 'text' : 'password'} placeholder='Saisissez votre adresse e-mail ...'/>
                                        {component}
                                    </div>
                                </div>
                                <button type="submit" className='btn_submit'>S'inscrire avec son e-mail</button>
                            </form>
                        </div>

                        <div className="informations">
                            <p className ="information">
                                En continuant avec Google, Apple ou une adresse e-mail, vous <br/>
                                acceptez les <span> Conditions générales </span> et la <span> Politique de confidentialité </span> <br/>
                                de Todoist.
                            </p>
                            <div style={{width: "400px", display: "flex", justifyContent: "center"}}>
                                <p className ="information">Déjà inscrit ? <span><Link to="/" style={{color: "black"}}>Connectez-vous</Link> </span></p>
                           </div>
                        </div>

                    </div>
                </div>
                <div className="right">

                    <div className="figure-container">
                        <div className="figure">
                            <div className="image">
                                 <img src={inscription1} alt="" height="130px" width="210px" />
                            </div>
                            <span className="caption-header">+30 millions</span>
                            <span className="caption">téléchargements</span>    
                        </div>

                        <div className="figure">
                            <div className="image">
                                <img src={inscription2} height="130px" width="210px"/>
                            </div>
                            <span className="caption-header">+15 ans</span>
                            <span className="caption">en équipe</span>
                        </div>

                        <div className="figure">
                            <div className="image">
                                 <img src={inscription3} alt="" height="130px" width="210px"/>
                            </div>
                            <span className="caption-header">+2 milliards</span>
                            <span className="caption">de tâches achevées</span>
                        </div>

                        <div className="figure">
                            <div className="image">
                                <img src={inscription4} alt="" height="130px" width="210px"/>
                            </div>
                            <span className="caption-header">+100000</span>
                            <span className="caption">utilisateurs d’équipe</span>
                        </div>


                    </div>
                </div>
           </div>
        </>
    );
}

export default SignUp;