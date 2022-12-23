import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Podcast = lazy(() => import('@zara/podcast'));

export function App() {
  return (
    <Routes>
      <Route exact path="/*" element={<Podcast/>}/>
    </Routes>
  );
}

export default App;
