// src/utils/colorUtils.ts

export const colorUtils = {
  getRandomColor(number: number): string {
    // Use a simple hash function to convert the number to a seed
    const seed = this.hashCode((Math.random() * number).toString());

    // Use the seed to generate a "random" color
    const hue = seed % 360;
    const saturation = 70 + (seed % 30); // 70-100%
    const lightness = 45 + (seed % 30); // 45-75%

    // Convert HSL to Hex
    return this.hslToHex(hue, saturation, lightness);
  },

  // Simple hash function
  hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
  },

  // Convert HSL values to Hex
  hslToHex(h: number, s: number, l: number): string {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  },
};
