import './App.css'
import React from 'react'
import reactDOM from 'react-dom'
import { ERREURS_ETIQUETTES } from './constantes/ERRORS_LABELS'
import { ETIQUETTES } from './constantes/LABELS'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false
        };
    }

    showLoginBox = () => {
        this.setState({ isLoginOpen: true, isRegisterOpen: false })
    }
    showRegisterBox = () => {
        this.setState({ isRegisterOpen: true, isLoginOpen: false })
    }

    render() {

        return (
            <div className="root-container">

                <div className="box-controller">

                    <div
                        className={"controller " + (this.state.isLoginOpen
                            ? "selected-controller"
                            : "")}
                        onClick={this.showLoginBox}>
                        Connexion
          </div>

                    <div

                        className={"controller " + (this.state.isRegisterOpen
                            ? "selected-controller"
                            : "")}

                        onClick={this.showRegisterBox}>
                        Inscription
          </div>
                </div>

                <div className="box-container">

                    {this.state.isLoginOpen && <LoginBox />}
                    {this.state.isRegisterOpen && <RegisterBox />}
                </div>

            </div>
        );
    }
}

class LoginBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: {},
            errors: {},
        };
    }

    handleChange = (event) => {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
        this.setState({
            input
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validate()) {
            console.log(this.state);

            let input = {};
            input[ETIQUETTES.IDENTIFIANT] = "";
            input[ETIQUETTES.MOT_DE_PASSE] = "";

            this.setState({ input: input });
            alert("Form submited");
        }
    };

    validate = () => {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input[ETIQUETTES.IDENTIFIANT]) {
            isValid = false;
            errors[ETIQUETTES.IDENTIFIANT] = ERREURS_ETIQUETTES.IDENTIFIANT;
        }

        if (!input[ETIQUETTES.MOT_DE_PASSE]) {
            isValid = false;
            errors[ETIQUETTES.MOT_DE_PASSE] = ERREURS_ETIQUETTES.MOT_DE_PASSE;
        }
        this.setState({ errors: errors });
        return isValid;
    };


    render() {
        const { input } = this.state
        const { errors } = this.state
        return (
            <div className="inner-container">

                <div className="header">
                    Connexion
        </div>

                <div className="box">

                    <div className="input-group">
                        <label htmlFor={ETIQUETTES.IDENTIFIANT}>Identifiant</label>
                        <input
                            type="text"
                            name={ETIQUETTES.IDENTIFIANT}
                            className="login-input"
                            placeholder={ERREURS_ETIQUETTES.IDENTIFIANT}
                            onChange={this.handleChange}
                        />
                        <small className="danger-error">{errors.identifiant}</small>
                    </div>


                    <div className="input-group">
                        <label htmlFor={ETIQUETTES.MOT_DE_PASSE}>Mot de passe</label>
                        <input
                            type="password"
                            name={ETIQUETTES.MOT_DE_PASSE}
                            className="login-input"
                            placeholder={ERREURS_ETIQUETTES.MOT_DE_PASSE}
                            onChange={this.handleChange}
                        />
                        <small className="danger-error"> {errors.motDePasse}</small>
                    </div>



                    <button type="button" className="login-btn" onClick={this.handleSubmit}>
                        Se connecter
          </button>

                </div>

            </div>
        )
    }
}

class RegisterBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: {},
            errors: {},
        };
    }

    handleChange = (event) => {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
        this.setState({
            input
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validate()) {
            console.log(this.state);

            let input = {};
            input[ETIQUETTES.IDENTIFIANT] = "";
            input[ETIQUETTES.EMAIL_INVALIDE] = "";
            input[ETIQUETTES.MOT_DE_PASSE] = "";
            input[ETIQUETTES.MOT_DE_PASSE_CONFIRMER] = "";

            this.setState({ input: input });
            alert("Form submited");
        }
    };

    validate = () => {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input[ETIQUETTES.IDENTIFIANT]) {
            isValid = false;
            errors[ETIQUETTES.IDENTIFIANT] = ERREURS_ETIQUETTES.IDENTIFIANT;
        }
        if (!input[ETIQUETTES.EMAIL]) {
            isValid = false;
            errors[ETIQUETTES.EMAIL] = ERREURS_ETIQUETTES.EMAIL_INVALIDE;
        }
        if (typeof input[ETIQUETTES.EMAIL] !== "undefined") {
            let pattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );
            if (!pattern.test(input[ETIQUETTES.EMAIL])) {
                isValid = false;
                errors[ETIQUETTES.EMAIL] = ERREURS_ETIQUETTES.EMAIL_INVALIDE;
            }
        }
        if (typeof input[ETIQUETTES.MOT_DE_PASSE] !== "undefined") {
            let pattern = new RegExp(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            );
            if (!pattern.test(input[ETIQUETTES.MOT_DE_PASSE])) {
                isValid = false;
                errors[ETIQUETTES.MOT_DE_PASSE] = ERREURS_ETIQUETTES.MOT_DE_PASSE_REGLE;
            }
        }
        console.log(input[ETIQUETTES.MOT_DE_PASSE]);

        if (!input[ETIQUETTES.MOT_DE_PASSE]) {
            isValid = false;
            errors[ETIQUETTES.MOT_DE_PASSE] = ERREURS_ETIQUETTES.MOT_DE_PASSE;
        }

        if (!input[ETIQUETTES.MOT_DE_PASSE_CONFIRMER]) {
            isValid = false;
            errors[ETIQUETTES.MOT_DE_PASSE_CONFIRMER] = ERREURS_ETIQUETTES.MOT_DE_PASSE_CONFIRMER;
        }
        if (
            typeof input[ETIQUETTES.MOT_DE_PASSE] !== "undefined" &&
            typeof input[ETIQUETTES.MOT_DE_PASSE_CONFIRMER] !== "undefined"
        ) {
            if (input[ETIQUETTES.MOT_DE_PASSE] !== input[ETIQUETTES.MOT_DE_PASSE_CONFIRMER]) {
                isValid = false;
                errors[ETIQUETTES.MOT_DE_PASSE] = ERREURS_ETIQUETTES.MOT_DE_PASSE_DIFFERENT;
            }
        }

        this.setState({ errors: errors });
        return isValid;
    };

    render() {
        const { input } = this.state
        const { errors } = this.state
        return (
            <div className="inner-container">

                <div className="header">
                    Inscription
        </div>

                <div className="box">

                    <div className="input-group">
                        <label htmlFor={ETIQUETTES.IDENTIFIANT}>Identifiant</label>
                        <input
                            type="text"
                            name={ETIQUETTES.IDENTIFIANT}
                            className="login-input"
                            placeholder={ERREURS_ETIQUETTES.IDENTIFIANT}
                            onChange={this.handleChange}
                        />
                        <small className="danger-error">{errors.identifiant}</small>
                    </div>

                    <div className="input-group">
                        <label htmlFor={ETIQUETTES.EMAIL}>Adresse email</label>
                        <input
                            type="text"
                            name={ETIQUETTES.EMAIL}
                            className="login-input"
                            placeholder={ERREURS_ETIQUETTES.EMAIL}
                            onChange={this.handleChange}
                        />
                        <small className="danger-error">{errors.email}</small>
                    </div>


                    <div className="input-group">
                        <label htmlFor={ETIQUETTES.MOT_DE_PASSE}>Mot de passe</label>
                        <input
                            type="password"
                            name={ETIQUETTES.MOT_DE_PASSE}
                            className="login-input"
                            placeholder={ERREURS_ETIQUETTES.MOT_DE_PASSE}
                            onChange={this.handleChange}
                        />
                        <small className="danger-error"> {errors.motDePasse}</small>
                    </div>

                    <div className="input-group">
                        <label htmlFor={ETIQUETTES.MOT_DE_PASSE_CONFIRMER}>Confirmez le mot de passe</label>
                        <input
                            type="password"
                            name={ETIQUETTES.MOT_DE_PASSE_CONFIRMER}
                            className="login-input"
                            placeholder={ERREURS_ETIQUETTES.MOT_DE_PASSE_CONFIRMER}
                            onChange={this.handleChange}
                        />
                        <small className="danger-error"> {errors.confirmerMotDePasse}</small>

                    </div>

                    <button type="button" className="login-btn" onClick={this.handleSubmit}>
                        S'inscrire
          </button>

                </div>

            </div>
        )
    }
}

export default App;
reactDOM.render(
    <App />, document.getElementById("root"));