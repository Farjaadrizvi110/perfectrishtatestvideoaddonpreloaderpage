import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTrackRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLSpanElement>(null);
  const goldLineTopRef = useRef<HTMLDivElement>(null);
  const goldLineBottomRef = useRef<HTMLDivElement>(null);
  const decorativeCircleRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const [progress, setProgress] = useState(0);
  const onCompleteCalled = useRef(false);
  const safetyTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    hasAnimated.current = true;

    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }

    const safeOnComplete = () => {
      if (onCompleteCalled.current) return;
      onCompleteCalled.current = true;
      if (safetyTimeoutRef.current) {
        clearTimeout(safetyTimeoutRef.current);
        safetyTimeoutRef.current = null;
      }
      setTimeout(() => {
        onComplete();
      }, 200);
    };

    safetyTimeoutRef.current = window.setTimeout(() => {
      safeOnComplete();
    }, 16000);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          safeOnComplete();
        },
      });

      // Phase 1: Video fade in with slow zoom
      tl.fromTo(
        videoWrapRef.current,
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.2, ease: 'power2.out' }
      );

      // Phase 2: Gold decorative lines sweep in
      tl.fromTo(
        goldLineTopRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1.2, ease: 'expo.out' },
        '-=1.6'
      );
      tl.fromTo(
        goldLineBottomRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1.2, ease: 'expo.out' },
        '-=1.0'
      );

      // Phase 3: Logo elastic bounce
      tl.fromTo(
        logoRef.current,
        { scale: 0.3, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 1.8, ease: 'elastic.out(1, 0.6)' },
        '-=0.8'
      );

      // Phase 4: Decorative circle spins in
      tl.fromTo(
        decorativeCircleRef.current,
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 1.2, ease: 'back.out(1.7)' },
        '-=1.2'
      );

      // Phase 5: Tagline fades up
      tl.fromTo(
        taglineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out' },
        '-=0.6'
      );

      // Phase 6: Progress track reveals
      tl.fromTo(
        progressTrackRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.4'
      );

      // Phase 7: Progress bar fills
      tl.to(
        progressBarRef.current,
        {
          scaleX: 1,
          duration: 2.5,
          ease: 'power2.inOut',
          onUpdate: function () {
            setProgress(Math.round(this.progress() * 100));
          },
        },
        '-=0.2'
      );

      // Phase 8: Percentage fades in
      tl.fromTo(
        percentageRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=2.3'
      );

      // Phase 9: Hold moment
      tl.to({}, { duration: 0.6 });

      // Phase 10: Exit - everything fades out smoothly
      tl.to(
        [logoRef.current, taglineRef.current, percentageRef.current, progressTrackRef.current, decorativeCircleRef.current, goldLineTopRef.current, goldLineBottomRef.current],
        { y: -30, opacity: 0, duration: 0.8, stagger: 0.05, ease: 'power2.in' }
      );

      // Video fades out
      tl.to(
        videoWrapRef.current,
        { opacity: 0, duration: 1.0, ease: 'power2.inOut' },
        '-=0.4'
      );

      // Container fades out
      tl.to(
        containerRef.current,
        { opacity: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );
    }, containerRef);

    return () => {
      ctx.revert();
      hasAnimated.current = false;
      onCompleteCalled.current = false;
      if (safetyTimeoutRef.current) {
        clearTimeout(safetyTimeoutRef.current);
        safetyTimeoutRef.current = null;
      }
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{ backgroundColor: '#0f0202' }}
    >
      {/* Background image fallback */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/preloader-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)',
        }}
      />

      {/* Video on top */}
      <div
        ref={videoWrapRef}
        className="absolute inset-0"
        style={{ opacity: 0 }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/preloader-bg.jpg"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.55)' }}
        >
          <source src="/images/preloader-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
        {/* Top Gold Line */}
        <div
          ref={goldLineTopRef}
          className="w-full max-w-md h-px mb-10 origin-left"
          style={{
            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
            opacity: 0,
          }}
        />

        {/* Decorative Circle */}
        <div
          ref={decorativeCircleRef}
          className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full"
          style={{
            border: '1px solid rgba(212, 175, 55, 0.2)',
            boxShadow: '0 0 80px rgba(212, 175, 55, 0.1), inset 0 0 80px rgba(212, 175, 55, 0.05)',
            opacity: 0,
          }}
        />

        {/* Logo */}
        <div
          ref={logoRef}
          className="relative z-10"
          style={{ opacity: 0 }}
        >
          <img
            src="/images/pr-logo.jpg"
            alt="PerfectRishta"
            className="h-28 md:h-40 w-auto object-contain rounded-xl"
            style={{
              filter: 'brightness(1.15) drop-shadow(0 8px 32px rgba(0,0,0,0.5))',
            }}
          />
        </div>

        {/* Tagline */}
        <div
          ref={taglineRef}
          className="mt-6"
          style={{ opacity: 0 }}
        >
          <span
            className="font-body text-sm md:text-base tracking-[0.35em] uppercase"
            style={{ color: '#F3E5AB' }}
          >
            The beginning of your love story
          </span>
        </div>

        {/* Progress Section */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <div
            ref={progressTrackRef}
            className="w-48 md:w-64 h-0.5 rounded-full origin-left overflow-hidden"
            style={{
              backgroundColor: 'rgba(212, 175, 55, 0.2)',
              opacity: 0,
            }}
          >
            <div
              ref={progressBarRef}
              className="h-full rounded-full origin-left"
              style={{
                background: 'linear-gradient(90deg, #D4AF37, #F3E5AB, #D4AF37)',
                backgroundSize: '200% 100%',
                transform: 'scaleX(0)',
                animation: 'shimmer 1.5s ease-in-out infinite',
              }}
            />
          </div>
          <span
            ref={percentageRef}
            className="font-body text-xs tracking-[0.2em]"
            style={{
              color: 'rgba(243, 229, 171, 0.6)',
              opacity: 0,
            }}
          >
            {progress}%
          </span>
        </div>

        {/* Bottom Gold Line */}
        <div
          ref={goldLineBottomRef}
          className="w-full max-w-md h-px mt-10 origin-right"
          style={{
            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
            opacity: 0,
          }}
        />
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-gold/30 z-10 opacity-40" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-gold/30 z-10 opacity-40" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-gold/30 z-10 opacity-40" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-gold/30 z-10 opacity-40" />

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
