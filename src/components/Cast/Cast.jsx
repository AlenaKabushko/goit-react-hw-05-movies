import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RequestActres } from '../Request/Request';
import { MdOutlineNoPhotography } from 'react-icons/md';
import { Notify } from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Box from 'components/Box';

function Cast() {
  const { id } = useParams();
  const [actres, setActres] = useState(null);

  useEffect(() => {
    Loading.pulse('Loading');

    RequestActres(id)
      .then(response => {
        setActres(response);
      })
      .catch(error =>
        Notify.failure(
          'Ooops, something broke. Try again please... ',
          error.messages
        )
      )
      .finally(Loading.remove());
  }, [id]);

  if (!actres) return;
  return (
    <Box flexWrap="wrap">
      {actres.cast.length === 0 ? (
        <p>Actres is absent today</p>
      ) : (
        actres.cast.map(act => {
          return (
            <Box
              key={act.id}
              flexDirection="column"
              mr={15}
              width={150}
              height={200}
              justifyContent="flex-end"
              alignItem="center"
            >
              {act.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w92/${act.profile_path}`}
                  alt={act.name}
                />
              ) : (
                <MdOutlineNoPhotography size={50} />
              )}
              <p>{act.name}</p>
            </Box>
          );
        })
      )}
    </Box>
  );
}

export default Cast;
