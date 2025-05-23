import { Route, Routes } from 'react-router';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello, World!</h1>} />
    </Routes>
  );
}
