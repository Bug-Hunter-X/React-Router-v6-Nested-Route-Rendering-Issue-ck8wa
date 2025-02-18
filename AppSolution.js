```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
          <Link to="about">About</Link>
      </nav>
    </div>
  );
}

function About() {
  return <h1>About</h1>;
}

function NotFound() {
  return <h1>Not Found</h1>;
}

export default App;
```