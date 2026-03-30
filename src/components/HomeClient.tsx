"use client";
import { motion } from "motion/react";

function HomeClient() {
  const handleLogin = () => {
    window.location.href = "/api/auth/login"
  }
  return (
    <div
      className="min-h-screen bg-linear-to-b from-white to-zinc-50 
     text-zinc-900 overflow-x-hidden"
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-xl  border-b 
      border-zinc-200 "
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between ">
          <div className=" text-2xl  font-semibold tracking-tight">
            Chat<span className="text-teal-900">Bot</span>
          </div>
          <motion.button
            onClick={handleLogin}
            className="px-5 py-2 rounded-full 
           bg-black text-white text-sm font-semibold cursor-pointer
            hover:bg-zinc-900 transition disabled:opacity-60 flex items-center gap-2  "
          >
            Login
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default HomeClient;
