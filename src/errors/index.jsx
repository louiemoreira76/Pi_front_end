import './index.css';
import { Link } from 'react-router-dom';
function NotFound() {

    return (
        <article className='mae'>
            <div className='image'>
                <img src="/assets/images/404.gif" alt="" />
            </div>

            <div className="not-found-container">
                <h1 className='neon-text'>Ops! Parece que você se perdeu.</h1>
                <p>A página que você está procurando não foi encontrada.</p>
                <p>Que tal retornar à página inicial?!</p>
                <Link to="/" className="btn-home">Página Inicial</Link>
            </div>

        </article>
    )
}
export default NotFound;