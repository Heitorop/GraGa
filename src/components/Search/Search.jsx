import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Search.scss';

const Search = () => {
  const { t } = useTranslation();
  const [inputVal, setInputVal] = useState('');

  return (
    <div className='search-wrapper'>
      <input
        className='search'
        type='text'
        placeholder={t('search.placeholder')}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
    </div>
  );
};

export default Search;
