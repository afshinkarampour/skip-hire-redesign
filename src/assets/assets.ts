import fourYardImage from "./4-yarder-skip.webp"
import fiveTofourteenYardImage from "./5-14-yarder-skip.webp"
import sixteenYardImage from "./16-yarder-skip.webp"
import towentyToFourtyYardImage from "./20-40-yarder-skip.webp"

export const skipImages: Record<string, string> = {
  four: fourYardImage,
  fiveToFourteen: fiveTofourteenYardImage,
  sixteen: sixteenYardImage,
  twentyToFourty: towentyToFourtyYardImage,
};

export function getSkipImage(size: number): string {
  if (size === 4) return skipImages.four;
  else if (size > 4 && size <= 14) return skipImages.fiveToFourteen;
  else if (size === 16) return skipImages.sixteen;
  else return skipImages.twentyToFourty;
}