'use client';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
const Navbar = () => {
  const options = ['Home', 'Projects', 'Technologies', 'About'];
  const [open, setOpen] = useState<boolean>(false);
  const nameDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(nameDivRef.current, {
      keyframes: [
        { x: 150, y: 0 },
        { x: 150, y: -30 },
        { x: -20, y: -30 },
        { x: -20, y: 0 },
      ],
      duration: 2,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  const displayMenuItems = () => {
    return options.map((opt) => (
      <div
        onClick={() => setOpen(false)}
        key={opt}
        className="hover:cursor-pointer hover:scale-110 transition duration-200 hover:border-b hover:border-b-red-200 "
      >
        <p className="text-6xl">
          <a href={`#${opt.toLowerCase()}`}>{opt}</a>
        </p>
      </div>
    ));
  };
  return (
    <div className="pt-2 md:pt-8 sticky top-0 z-999 bg-black/30">
      <div className="flex justify-center items-center md:justify-around">
        {/* Mobile nav view */}
        <div className="md:hidden">
          {!open ? (
            <div
              className="p-2 absolute top-0 left-0"
              onClick={() => setOpen((prev) => !prev)}
            >
              <Menu size={40} strokeWidth={0.5} />
            </div>
          ) : (
            <div className="w-screen h-screen inset-0 z-50 bg-black/80 ">
              <div onClick={() => setOpen((prev) => !prev)} className="w-fit">
                <X size={40} strokeWidth={0.5} />
              </div>
              <div>
                <div className="flex flex-col justify-center items-center space-y-2 ">
                  {displayMenuItems()}
                </div>
              </div>
            </div>
          )}
        </div>

        {!open && (
          <a href="#">
            <div>
              <p className=" italic text-4xl hover:cursor-pointer font-extrabold">
                Pouria Rezaei
              </p>
              <div
                ref={nameDivRef}
                className="absolute w-2 h-1 bg-cyan-400 rounded-full top-10 md:top-19"
              ></div>
            </div>
          </a>
        )}

        {/* Below empty div is filler for flex alignment */}

        {/* Desktop nav view */}
        <div className="hidden gap-12 md:flex">{displayMenuItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
