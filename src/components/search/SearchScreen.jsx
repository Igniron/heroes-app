import { useNavigate, useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm'
import HeroCard from '../hero/HeroCard';
import queryString from 'query-string'
import { useMemo } from 'react';

const SearchScreen = () => 
{
  const navigate = useNavigate();
  const location = useLocation();
  const busqueda = (e)=>
  {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  }

  const {q = ''} = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });
  const {searchText} = formValues;

  const heroesFiltrados = useMemo(()=> getHeroesByName(q),[q]);
 
  return (
    <>
        <h1>Search</h1>
        <hr/>

        <div className='row'>
          <div className='col-5'>
            <h4>Buscar</h4>
            <hr/>
            <form onSubmit={busqueda}>
              <input
                type="text"
                placeholder="Buscar un héroe"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={handleInputChange}
              />
              <button 
                className='btn btn-outline-primary mt-2'
                type='submit'
              >
                Buscar
              </button>
            </form>
            
          </div>
          <div className='col-7'>
            <h4>Results</h4>
            <hr/>
            {
              (q==='')
                ? <div className='alert alert-info'>Buscar un héroe</div>
                : (heroesFiltrados.length === 0) 
                  && <div className='alert alert-danger'>No hay resultados de: {q}</div>
            }

            {
              heroesFiltrados.map(hero => (
                <HeroCard
                  key= {hero.id}
                  {...hero}
                />
              ))
            }
          </div>
        </div>
    </>
  )
}

export default SearchScreen