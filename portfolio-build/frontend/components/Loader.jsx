import { useEffect, useState } from 'react';

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1050);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loader" className={done ? 'done' : ''}>
      <div className="loader-name">
        Tharunkaarthik <span>Gopinath</span>
      </div>
      <div className="loader-bar-wrap">
        <div className="loader-bar" />
      </div>
    </div>
  );
}
