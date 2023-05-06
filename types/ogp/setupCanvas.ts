import { registerFont } from 'canvas';
import path from 'path';

export const setupCanvas = () => {
  const fontPath = path.resolve('assets', 'fonts', 'NotoSansJP-Medium.otf');
  const fnt = registerFont(fontPath, {
    family: 'NotoSansJP-Medium',
  });
};
