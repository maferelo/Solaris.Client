export function addAlpha(hex: string, alpha: number): string {
  // coerce values so it is between 0 and 1.
  const opacity = Math.round(Math.min(Math.max(alpha ?? 1, 0), 1) * 255);
  return hex + opacity.toString(16).toUpperCase();
}
