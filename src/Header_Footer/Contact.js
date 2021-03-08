import React, { Component } from "react";
import ReactDOM from "react-dom";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.popUpContainer = document.createElement("div");

    document.body.appendChild(this.popUpContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.popUpContainer);
  }

  render() {
      return ReactDOM.createPortal(
          <div className="modal" onClick={this.props.close}>
        <div>
          <p>
            Un probleme ? Une erreur dans notre site ? Une remarque ?<br /><br />
            Pour toute question ou remarque, veuillez nous contacter sur Slack (Théo, Imen, Alan) ou par mail
          </p>
          <button>Fermer</button>
        </div>
      </div>,
    this.popUpContainer
    );
  }
}

export default Modal;
