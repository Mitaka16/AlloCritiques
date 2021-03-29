import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DATAS } from "../../constantes/MOCKDATA";
import './contact.css'

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
          <div className="modal" >
        <div>
          <p>
           {DATAS.BTN_CONTACT}
          </p>
          <button onClick={this.props.close}>{DATAS.FERMER}</button>
        </div>
      </div>,
    this.popUpContainer
    );
  }
}

export default Modal;
