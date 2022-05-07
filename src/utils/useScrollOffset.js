export default function useScrollOffset() {
  const computedFontSize = parseFloat(
    window.getComputedStyle(document.body).getPropertyValue('font-size')
  );
  return computedFontSize * -8;
}
