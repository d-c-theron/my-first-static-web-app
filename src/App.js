import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { author } = await( await fetch(`/api/message`)).json();
      setData(author);
    })();
  });

  return <div>{data}</div>;
}

export default App;