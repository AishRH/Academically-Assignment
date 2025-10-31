import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProfileBadge() {   
    
    return(
            <div className="flex items-center gap-2 bg-white shadow-md px-5 py-2 rounded-full border border-gray-200 ">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Jessica Park"
                      className="w-7 h-7 rounded-full"
                    />
                    <span className="text-gray-800 font-medium text-sm">
                      Jessica Park
                    </span>
            </div>
    );
}