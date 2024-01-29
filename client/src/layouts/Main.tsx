import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <main>
      <header>
        <h1>birDiary</h1>
      </header>
      <Outlet />
      <footer>&copy; 2024 Birdiary</footer>
    </main>
  );
}
