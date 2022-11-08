import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RequestActres } from '../Request/Request';

function Cast() {
  const { id } = useParams();
  console.log('Cast');
  const [actres, setActres] = useState(null);

  useEffect(() => {
    console.log('useEffect show IDParams', id);

    RequestActres(id).then(response => {
      console.log('actres', response);
      setActres(response);
    });
  }, [id]);

  if (!actres) return;
  return (
    <div>
      {actres.cast.map(act => {
        return (
          <div key={act.id}>
            <img
              src={`https://image.tmdb.org/t/p/w92/${act.profile_path}`}
              alt={act.name}
            />
            <p>{act.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Cast;
