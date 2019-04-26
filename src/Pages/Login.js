
import React, { Component } from "react";
import { parseJwt } from '../Services/Auth';

import Axios from 'axios';

class longin extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      erroMensagem: ''
    }
  }

  atualizaEstadoEmail(event) {
    
    this.setState({ email: event.target.value });
  }

  atualizaEstadoSenha(event) {
    this.setState({ senha: event.target.value });
  }


  bondedoLogin(event) {
    event.preventDefault();

    Axios.post("http://localhost:64582/api/Login",
      {
        email: this.state.email,
        senha: this.state.senha
      })
      .then(data => {
        if (data.status === 200) {
          console.log(data);
          localStorage.setItem("usuario-logado", data.data.token);

          this.props.history.push("/consultas");
        }
      })

  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.bondedoLogin.bind(this)}>
          <input type="text"
            className="email"
            placeholder="Usuário"
            value={this.state.email}
            onChange={this.atualizaEstadoEmail.bind(this)}
          ></input>
          <input
            type="password"
            className="password"
            placeholder="Senha"
            value={this.state.senha}
            onChange={this.atualizaEstadoSenha.bind(this)}
          >
          </input>
          <button type="submit" className="login" id="btn_login">
            Login
        </button>
        </form>
      </div>

    );
  }

}
export default longin;