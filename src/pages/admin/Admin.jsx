import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchActions } from '../../redux/actions';
import SearchResult from './SearchResult';

function AdminPage() {
  const dispatch = useDispatch();
  const searchUser = useSelector(({ search }) => search.searchUser);
  const isAdmin = useSelector(({ auth }) => auth.profile.isAdmin);

  const onChangeResult = (e) => {
    if (e.target.value.length > 2) {
      dispatch(searchActions.loadSearch(e.target.value));
    }
  };
  if (!isAdmin) {
    return <Redirect to="/профиль" />;
  }
  return (
    <div>
      <input
        onChange={onChangeResult}
        className="header__input"
        type="search"
        placeholder="Поиск"
        autoFocus
      />
      <div>
        <span>id</span>
        <span>ФИО</span>
      </div>
      {searchUser &&
        searchUser.map((item) => {
          return <SearchResult key={item.id} {...item} />;
        })}
    </div>
  );
}

export default AdminPage;
