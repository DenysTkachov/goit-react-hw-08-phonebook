import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactsSlice';
import { selectFilter } from '../../redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Пошук контактів..."
      />
    </div>
  );
};

export default Filter;
