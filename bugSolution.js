```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  console.log('Current location:', location);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}
export default App;
```