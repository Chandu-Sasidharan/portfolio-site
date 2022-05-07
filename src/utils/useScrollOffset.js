import { useState, useEffect } from 'react';

export default function useScrollOffset() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const computedFontSize = parseFloat(
      window.getComputedStyle(document.body).getPropertyValue('font-size')
    );
    setOffset(computedFontSize * -8);
  }, []);

  return offset;
}
