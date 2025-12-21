'use client';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const options = ['Home', 'Projects', 'About'];
  const [open, setOpen] = useState<boolean>(false);

  const displayMenuItems = () => {
    return options.map((opt) => (
      <div
        onClick={() => setOpen((prev) => !prev)}
        key={opt}
        className="hover:cursor-pointer hover:scale-125 "
      >
        <p className="text-3xl">{opt}</p>
      </div>
    ));
  };
  return (
    <>
      <div className="flex justify-between items-center md:justify-around">
        {/* Mobile nav view */}
        <div className="md:hidden">
          {!open ? (
            <div className="p-1" onClick={() => setOpen((prev) => !prev)}>
              <Menu size={40} />
            </div>
          ) : (
            <div className="w-screen h-screen inset-0 z-50 bg-black/80 ">
              <div onClick={() => setOpen((prev) => !prev)} className="w-fit">
                <X size={50} />
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
          <div>
            <p className="text-4xl hover:cursor-pointer">
              Pouria{' '}
              <span className="bg-linear-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Rezaei
              </span>
            </p>
          </div>
        )}

        {/* Below empty div is filler for flex alignment */}
        <div className="md:hidden"></div>

        {/* Desktop nav view */}
        <div className="hidden gap-12 md:flex">{displayMenuItems()}</div>
      </div>
    </>
  );
};

export default Navbar;
