import "../SignUpPage/SignUp.css"
import React, { Component } from "react";
import Input from "../components/Input";
import { ERREURS_ETIQUETTES } from "../constantes/ERRORS_LABELS"
import { LABELS, ETIQUETTES } from "../constantes/LABELS"


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: {},
            errors: {},
            hide: true
        };
    }

    showHide = () => {
        this.setState({
            hide: !this.state.hide,
        });
    };

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
            input[ETIQUETTES.PRENOM] = "";
            input[ETIQUETTES.NOM] = "";
            input[ETIQUETTES.EMAIL_INVALIDE] = "";
            input[ETIQUETTES.MOT_DE_PASSE] = "";
            input[ETIQUETTES.MOT_DE_PASSE_CONFIRMER] = "";

            this.setState({ input: input });
            alert("Bienvenue sur ALLO Critiques!");
        }
    };

    validate = () => {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input[ETIQUETTES.PRENOM]) {
            isValid = false;
            errors[ETIQUETTES.PRENOM] = ERREURS_ETIQUETTES.PRENOM;
        }
        if (!input[ETIQUETTES.NOM]) {
            isValid = false;
            errors[ETIQUETTES.NOM] = ERREURS_ETIQUETTES.NOM;
        }
        if (!input[ETIQUETTES.EMAIL_INVALIDE]) {
            isValid = false;
            errors[ETIQUETTES.EMAIL_INVALIDE] = ERREURS_ETIQUETTES.EMAIL_INVALIDE;
        }
        if (typeof input[ETIQUETTES.EMAIL_INVALIDE] !== "undefined") {
            let pattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );
            if (!pattern.test(input[ETIQUETTES.EMAIL_INVALIDE])) {
                isValid = false;
                errors[ETIQUETTES.EMAIL_INVALIDE] = ERREURS_ETIQUETTES.EMAIL_INVALIDE;
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
        const { hide } = this.state
        const { input } = this.state
        const { errors } = this.state

        return (
            <div className="profileContainer">

                <div className="Titles">
                    <h2>Inscription</h2>
                    <p>Tous les champs sont obligatoires.</p>
                </div>

                <form className='form'>
                    <div className='name'>
                        <div className='firstName'>
                            <Input
                                type="text"
                                name={ETIQUETTES.PRENOM}
                                value={input.prenom}
                                onChange={this.handleChange}
                                placeholder="Prénom"
                            />
                            <div className='ERRORS'>
                                {errors.prenom}
                            </div>
                        </div>
                        <div className='lastName'>
                            <Input
                                type="text"
                                name={ETIQUETTES.NOM}
                                placeholder="Nom"
                                value={input.name}
                                onChange={this.handleChange}
                            />
                            <div className='ERRORS'>
                                {errors.nom}
                            </div>
                        </div>
                    </div>

                    <div className='email'>
                        <Input
                            name={ETIQUETTES.EMAIL_INVALIDE}
                            placeholder="Adresse Email"
                            value={input.email}
                            onChange={this.handleChange}
                        />

                        <div className='ERRORS'>
                            {errors.email}
                        </div>
                    </div>

                    <div className='password'>

                        <div className='visibility'>
                            <input
                                type={hide ? "password" : "text"}
                                name={ETIQUETTES.MOT_DE_PASSE}
                                placeholder="Mot de passe"
                                value={input.password}
                                onChange={this.handleChange}
                            />

                            {hide ?
                                (<i className="material-icons" onClick={this.showHide}>visibility_off</i>) :
                                (<i className="material-icons" onClick={this.showHide}>visibility</i>)}
                        </div>

                        <div className='ERRORS'>
                            {errors.motDePasse}
                        </div>
                    </div>

                    <div className='confirmPassword'>
                        <input
                            type={LABELS.PASSWORD}
                            name={ETIQUETTES.MOT_DE_PASSE_CONFIRMER}
                            value={input.confirmerMotDePasse}
                            onChange={this.handleChange}
                            placeholder="Confirmez votre mot de passe"
                        />

                        <div className='ERRORS'>
                            {errors.confirmerMotDePasse}
                        </div>
                    </div>
                </form>

                <div className='button'>
                    <button type="submit" onClick={this.handleSubmit}>Valider</button>
                </div>

            </div>
        );
    }
}

export default App;
