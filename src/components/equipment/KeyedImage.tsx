import { useEffect, useState } from 'react';

interface KeyedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const keyedImageCache = new Map<string, string>();

const isBgCandidate = (r: number, g: number, b: number) => {
  const brightness = (r + g + b) / 3;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const saturation = max === 0 ? 0 : (max - min) / max;

  return brightness > 226 && saturation < 0.16;
};

const createKeyedImage = (img: HTMLImageElement) => {
  const maxSide = 480;
  const scale = Math.min(1, maxSide / Math.max(img.naturalWidth, img.naturalHeight));
  const width = Math.max(1, Math.round(img.naturalWidth * scale));
  const height = Math.max(1, Math.round(img.naturalHeight * scale));

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return img.src;

  ctx.drawImage(img, 0, 0, width, height);
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const total = width * height;
  const visited = new Uint8Array(total);
  const queue: number[] = [];

  const pushIfCandidate = (idx: number) => {
    if (visited[idx]) return;

    const pixelOffset = idx * 4;
    if (isBgCandidate(data[pixelOffset], data[pixelOffset + 1], data[pixelOffset + 2])) {
      visited[idx] = 1;
      queue.push(idx);
    }
  };

  for (let x = 0; x < width; x += 1) {
    pushIfCandidate(x);
    pushIfCandidate((height - 1) * width + x);
  }

  for (let y = 0; y < height; y += 1) {
    pushIfCandidate(y * width);
    pushIfCandidate(y * width + (width - 1));
  }

  for (let pointer = 0; pointer < queue.length; pointer += 1) {
    const idx = queue[pointer];
    const x = idx % width;
    const y = Math.floor(idx / width);

    if (x > 0) pushIfCandidate(idx - 1);
    if (x < width - 1) pushIfCandidate(idx + 1);
    if (y > 0) pushIfCandidate(idx - width);
    if (y < height - 1) pushIfCandidate(idx + width);
  }

  for (let i = 0; i < total; i += 1) {
    const pixelOffset = i * 4;

    if (visited[i]) {
      data[pixelOffset + 3] = 0;
      continue;
    }

    const x = i % width;
    const y = Math.floor(i / width);
    const neighbors = [i - 1, i + 1, i - width, i + width];

    let bgNeighbors = 0;
    for (const neighbor of neighbors) {
      if (neighbor < 0 || neighbor >= total) continue;
      if ((x === 0 && neighbor === i - 1) || (x === width - 1 && neighbor === i + 1)) continue;
      if ((y === 0 && neighbor === i - width) || (y === height - 1 && neighbor === i + width)) continue;
      if (visited[neighbor]) bgNeighbors += 1;
    }

    if (bgNeighbors > 0 && isBgCandidate(data[pixelOffset], data[pixelOffset + 1], data[pixelOffset + 2])) {
      const fade = bgNeighbors >= 2 ? 0.25 : 0.5;
      data[pixelOffset + 3] = Math.round(data[pixelOffset + 3] * fade);
    }
  }

  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL('image/png');
};

export const KeyedImage = ({ src, alt, className }: KeyedImageProps) => {
  const [resolvedSrc, setResolvedSrc] = useState(src);

  useEffect(() => {
    if (!src) return;

    const cached = keyedImageCache.get(src);
    if (cached) {
      setResolvedSrc(cached);
      return;
    }

    const img = new Image();
    img.decoding = 'async';
    img.src = src;

    img.onload = () => {
      const keyed = createKeyedImage(img);
      keyedImageCache.set(src, keyed);
      setResolvedSrc(keyed);
    };

    img.onerror = () => setResolvedSrc(src);
  }, [src]);

  return <img src={resolvedSrc} alt={alt} className={className} loading="lazy" />;
};
