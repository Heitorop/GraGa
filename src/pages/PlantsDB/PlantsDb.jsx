import { useEffect, useCallback, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { fetchPlants } from '../../store/slices/plantsSlice';
import Search from '../../components/Search/Search';
import PlantCard from '../../components/PlantCard/PlantCard';
import NotFound from '../../components/NotFound/NotFound';
import { Each } from '../../components/Each/Each';
import './PlantsDB.scss';

const PlantsDb = () => {
  const dispatch = useDispatch();
  const plants = useSelector((state) => state.plants.plants);
  const isLoading = useSelector((state) => state.plants.loading);
  const batchSize = 10;

  const requestCondition = useCallback(
    () =>
      Math.round(window.innerHeight + document.documentElement.scrollTop) ===
        document.body.offsetHeight &&
      plants &&
      !isLoading, // кінець сторінки ,є данні, закінчилось завантаження
    [isLoading, plants]
  );

  const loadMorePlants = useCallback(() => {
    const startIndex = plants.length;
    dispatch(fetchPlants({ startIndex, batchSize, signal: false }));
  }, [dispatch, plants.length]);

  useInfiniteScroll(loadMorePlants, requestCondition);

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(
      fetchPlants({ startIndex: 0, batchSize, signal: abortController.signal })
    );
    return () => abortController.abort();
  }, [dispatch]);
  return (
    <div className='cards-wrapper'>
      <Search />
      <div className='cards'>
        {plants.length !== 0 && (
          <Each
            of={plants}
            render={(item, index) => (
              <PlantCard
                key={index}
                title={item.name}
                images={item.images}
                wiki={item.wikipedia_url}
                classification={item.classification}
              />
            )}
          />
        )}
      </div>
      {plants.length === 0 && !isLoading && <NotFound />}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default PlantsDb;
