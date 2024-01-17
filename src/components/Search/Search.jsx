import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Search.scss';
import { useDispatch } from 'react-redux';
import { fetchPlantsByName } from '../../store/slices/plantsSlice';

const Search = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState('');

  const inputHendler = (e) => {
    setInputVal(e);
    dispatch(fetchPlantsByName(e));
  };

  return (
    <div className='search-wrapper'>
      <input
        className='search'
        type='text'
        placeholder={t('search.placeholder')}
        value={inputVal}
        onChange={(e) => inputHendler(e.target.value)}
      />
    </div>
  );
};

export default Search;
