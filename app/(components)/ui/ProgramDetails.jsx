'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useLayoutEffect } from 'react';
import { Minus, Plus } from 'lucide-react';

export default function ProgramDetails({ title, children, isOpen, onToggle }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  // Measure content height when open/close changes
  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [isOpen, children]);

  return (
    <div className="border border-gray-200 rounded-md shadow-sm overflow-hidden">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none"
      >
        <span className="font-inter font-semibold text-primaryheading">{title}</span>
        {isOpen ? (
          <Minus size={18} className="text-primarycolor " />
        ) : (
          <Plus size={18} className="text-primarycolor " />
        )}
      </button>

      {/* Animated Content */}
      <AnimatePresence initial={false}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? height : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="overflow-hidden"
        >
          <div ref={ref} className="px-5 pb-4">
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
