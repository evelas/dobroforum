import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function SearchResult(props) {
  console.log(props);
  const isAdmin = useSelector(({ auth }) => auth.profile.isAdmin);
  if (!isAdmin) {
    return <Redirect to="/профиль" />;
  }
  return (
    <div>
      <Link to={'/пользователь/' + props.id}>
        <span>{props.id}</span>
        <span>
          {props.lastname} {props.name}
          {props.middlename}
        </span>
      </Link>
    </div>
  );
}

export default SearchResult;
