import React from 'react';

import CompletedPaths from '../CompletedPaths/CompletedPaths';
import CurrentPaths from '../CurrentPaths/CurrentPaths';
import SavedPaths from '../SavedPaths/SavedPaths';

export default function UserPaths(){
  return (
    <div>
      <CurrentPaths />
      <SavedPaths />
      <CompletedPaths />
    </div>
  )
}