import './styles.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" required />
        </div>
        <p>Não possui conta? <spam className="signup">Cadastre-se</spam></p>
        <button className="button" type="submit">Entrar</button>
        <button className="button back-button" onClick={handleBackClick}>
          Voltar
        </button>
      </form>
    </div>
  );
}