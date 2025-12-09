export function formatTransmission(t: 'manual' | 'automatic') {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
