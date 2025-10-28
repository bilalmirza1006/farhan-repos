"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function ProgramDetails({ title, children }) {
    const [open, setOpen] = useState(true);

    return (
        <div className="bg-white rounded-[6px] drop-shadow-sm border border-[#53535333]">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center p-4 text-left text-secondary font-normal hover:bg-gray-50 transition"
            >
                {title}
                <span className="text-gray-500">{open ? <ChevronUp /> : <ChevronDown />}</span>
            </button>
            {open && <div className="p-4 border-t border-gray-100 text-gray-600">{children}</div>}
        </div>
    );
}
