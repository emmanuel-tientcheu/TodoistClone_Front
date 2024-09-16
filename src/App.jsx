import './App.css'
import logo from './assets/images/todoist-logo.png';
import google_logo from './assets/images/google-logo.png';
import facebook_logo from './assets/images/facebook-logo.png';
import appele_logo from './assets/images/apple-logo.png';
import image_page from './assets/images/login-image-page.png'
import { usePassword } from './hooks/usePassword';

function App() {

  const {show, component} = usePassword();

  return (
    <>
      <div className="main-container">
        <div className="left-container">
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="" width="45" height="45"/>
          </div>
          <div className="app-name">todoist</div>
        </div>

        <div className="connexion-container">
          <div className="title" style={{margin: "0px 0px 50px 0px"}}>
            <h1>Connexion</h1>
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

        </div>

        <div className="form-container">
          <form action="">
            <div className="input-container">
              <p>E-mail</p>
              <input type="text" placeholder='Saisissez votre adresse e-mail ...' />
            </div>

            <div className="input-container">
              <p>Mot de passe</p>
              <div>
                <input type={show ? 'text' : 'password'}  placeholder='Saisissez votre adresse e-mail ...'/>
                 {component}
              </div>
            </div>
             <button type="submit" className='btn-submit'>Connexion</button>

          </form>
        </div>

        <div className="informations">
          <a className="information forget-password">Mot de passe oublié ?</a>
          <p className ="information" >
            En continuant avec Google, Apple ou une adresse e-mail, vous <br /> 
            acceptez les <span> Conditions générales</span> 
            et la <span> Politique de </span><br /> confidentialité de Todoist.
          </p>

          <div style={{width: "400px", display: "flex", justifyContent: "center"}}>
            <p className ="information">Vous n'avez pas de compte ? <span> Abonnez-vous</span></p>
          </div>
        </div>
        </div>

        <div className="right-container">
          <img src={image_page} alt="" width="400px" height="230"/>
        </div>

      </div>
    </>
  )
}

export default App
