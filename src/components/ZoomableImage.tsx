import { useEffect, useRef, useState } from "react";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface Props {
  src: string;
  alt: string;
}

const MIN = 1;
const MAX = 5;
const STEP = 0.5;

const ZoomableImage = ({ src, alt }: Props) => {
  const [scale, setScale] = useState(1);
  const [, force] = useState(0);
  const tx = useRef(0);
  const ty = useRef(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const dragging = useRef(false);
  const moved = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const pinch = useRef<{ dist: number; scale: number } | null>(null);
  const rafId = useRef<number | null>(null);

  const clamp = (s: number) => Math.min(MAX, Math.max(MIN, s));

  const scheduleRender = () => {
    if (rafId.current != null) return;
    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      force((n) => n + 1);
    });
  };

  const reset = () => {
    tx.current = 0;
    ty.current = 0;
    setScale(1);
    scheduleRender();
  };

  const zoomBy = (delta: number) => {
    setScale((s) => {
      const next = clamp(s + delta);
      if (next === 1) { tx.current = 0; ty.current = 0; }
      return next;
    });
  };

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    zoomBy(e.deltaY > 0 ? -0.2 : 0.2);
  };

  const onImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (moved.current) { moved.current = false; return; }
    zoomBy(STEP);
  };

  const onDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scale > 1) reset();
    else setScale(2);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    e.preventDefault();
    dragging.current = true;
    moved.current = false;
    setIsInteracting(true);
    last.current = { x: e.clientX, y: e.clientY };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;
    if (Math.abs(dx) + Math.abs(dy) > 2) moved.current = true;
    last.current = { x: e.clientX, y: e.clientY };
    tx.current += dx;
    ty.current += dy;
    scheduleRender();
  };
  const stopDrag = () => {
    if (!dragging.current) return;
    dragging.current = false;
    setIsInteracting(false);
  };

  const dist = (a: React.Touch, b: React.Touch) =>
    Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      pinch.current = { dist: dist(e.touches[0], e.touches[1]), scale };
      setIsInteracting(true);
    } else if (e.touches.length === 1 && scale > 1) {
      dragging.current = true;
      moved.current = false;
      setIsInteracting(true);
      last.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinch.current) {
      e.preventDefault();
      const d = dist(e.touches[0], e.touches[1]);
      setScale(clamp(pinch.current.scale * (d / pinch.current.dist)));
    } else if (e.touches.length === 1 && dragging.current) {
      const dx = e.touches[0].clientX - last.current.x;
      const dy = e.touches[0].clientY - last.current.y;
      if (Math.abs(dx) + Math.abs(dy) > 2) moved.current = true;
      last.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      tx.current += dx;
      ty.current += dy;
      scheduleRender();
    }
  };
  const onTouchEnd = () => {
    pinch.current = null;
    dragging.current = false;
    setIsInteracting(false);
    if (scale <= 1) { tx.current = 0; ty.current = 0; scheduleRender(); }
  };

  useEffect(() => { reset(); }, [src]);
  useEffect(() => () => { if (rafId.current) cancelAnimationFrame(rafId.current); }, []);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden touch-none"
      onClick={(e) => e.stopPropagation()}
      onWheel={onWheel}
      onMouseMove={onMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        onClick={onImageClick}
        onDoubleClick={onDoubleClick}
        onMouseDown={onMouseDown}
        style={{
          transform: `translate3d(${tx.current}px, ${ty.current}px, 0) scale(${scale})`,
          transition: isInteracting ? "none" : "transform 0.2s ease-out",
          cursor: scale > 1 ? (isInteracting ? "grabbing" : "grab") : "zoom-in",
          willChange: "transform",
        }}
        className="max-w-full max-h-full object-contain select-none animate-scale-in"
      />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[105] flex items-center gap-2 bg-foreground/70 backdrop-blur-sm rounded-full px-2 py-2">
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); zoomBy(-STEP); }}
          aria-label="Diminuir zoom"
          className="w-10 h-10 flex items-center justify-center text-background hover:bg-background/10 rounded-full transition-colors disabled:opacity-40"
          disabled={scale <= MIN}
        >
          <ZoomOut className="w-5 h-5" strokeWidth={1.5} />
        </button>
        <span className="text-background/80 text-xs tabular-nums w-10 text-center">
          {Math.round(scale * 100)}%
        </span>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); zoomBy(STEP); }}
          aria-label="Aumentar zoom"
          className="w-10 h-10 flex items-center justify-center text-background hover:bg-background/10 rounded-full transition-colors disabled:opacity-40"
          disabled={scale >= MAX}
        >
          <ZoomIn className="w-5 h-5" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); reset(); }}
          aria-label="Resetar zoom"
          className="w-10 h-10 flex items-center justify-center text-background hover:bg-background/10 rounded-full transition-colors"
        >
          <RotateCcw className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export default ZoomableImage;
