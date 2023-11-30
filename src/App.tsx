import React from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import useStore from './hooks/useStore';
import { LoginRoute, BoardRoute, BoardSettingsRoute, InstructionsRoute, AboutRoute } from './routes';
import { Header } from './components';

function App() {
  const { userAccess } = useStore();

  return (
    <div className="App">
      <Router>
        <Header />
        {!(userAccess.allowEnter || localStorage.getItem('allowEnter') === '1') && <Navigate to={'/login'} />}
        <Routes>
          <Route index element={<BoardRoute />} />
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/settings" element={<BoardSettingsRoute />} />
          <Route path="/instructions" element={<InstructionsRoute />} />
          <Route path="/about" element={<AboutRoute />} />
        </Routes>
      </Router>
    </div>
  );
}

export default observer(App);
