import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlants } from '../../store/slices/plantsSlice';
import Search from '../../components/Search/Search';
import PlantCard from '../../components/PlantCard/PlantCard';
import './PlantsDB.scss';

const PlantsDb = () => {
  const dispatch = useDispatch();
  const plants = useSelector((state) => state.plants.plants);
  const isLoading = useSelector((state) => state.plants.loading);
  const [startIndex, setStartIndex] = useState(0);
  const batchSize = 18;

  const handleScroll = useCallback(() => {
    const scrolledElement = document.body;
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        scrolledElement.offsetHeight &&
      plants
    ) {
      setStartIndex(plants.length);
      console.log(startIndex);
      dispatch(fetchPlants({ startIndex, batchSize, signal: false }));
    }
  }, [dispatch, plants, startIndex]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(
      fetchPlants({ startIndex, batchSize, signal: abortController.signal })
    );
    return () => abortController.abort();
  }, [dispatch, startIndex]);
  return (
    <div className='cards-wrapper'>
      <Search />
      <div className='cards'>
        {plants &&
          plants.map((plant) => (
            <PlantCard
              key={plant.name.length + Math.random()}
              title={plant.name}
              images={plant.images}
              wiki={plant.wikipedia_url}
              classification={plant.classification}
            />
          ))}
      </div>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default PlantsDb;
