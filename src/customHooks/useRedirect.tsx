// unused

import React from 'react';
import { Redirect } from 'react-router-dom';

function useRedirect(boolean: boolean, to: string) {
  if (boolean) {
    return <Redirect to={to} />;
  }
}

export default useRedirect;
