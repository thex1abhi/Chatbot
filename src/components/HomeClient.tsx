"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

function HomeClient({ email }: { email: string }) {
  const handleLogin = () => {
    window.location.href = "/api/auth/login"
  }
  const [open, setOpen] = useState(false);
  const popupref = useRef<HTMLDivElement>(null)
  const firstletter = email ? email[0].toUpperCase() : ""

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (popupref.current && !popupref.current.contains(e.target as Node))
        setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div
      className="min-h-screen bg-linear-to-b from-white to-zinc-50 
     text-zinc-900 overflow-x-hidden"
    >
      {/* nav bar  */}
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
          {email ? <div className="relative " ref={popupref} >
            <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold hover:scale-105 transition "
              onClick={() => setOpen(!open)}
            >  {firstletter}
            </button>
            <AnimatePresence>
              {open && (<motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-xl border border-zinc-200 overflow-hidden  " >
                <button className="w-full text-left px-4 py-3 text-sm hover:bg-zinc-100 "
                >Dashboard</button>
                <button className="  w-full text-left hover:bg-zinc-100 px-4 py-3 text-sm text-red-600  "
                > Logout</button>

              </motion.div>)}
            </AnimatePresence>

          </div> :
            <button
              onClick={handleLogin}
              className="px-5 py-2 rounded-full 
           bg-black text-white text-sm font-semibold cursor-pointer
            hover:bg-zinc-900 transition disabled:opacity-60 flex items-center gap-2  "
            >
              Login
            </button>}

        </div>
      </motion.div>
      {/* hero section  */}
      <section className="pt-36 pb-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1  md:grid-cols-2 gap-20 items-center">
          {/* left div  */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="">
            <h1 className="text-4xl  md:text-5xl leading-tight  text-semibold">
              AI customer SupportBot  <br />
              Built for Modern Websites
            </h1>
            <p className="mt-6 text-lg  text-zinc-600 max-w-xl">
              Add a powerful chatbot to your website in minutes,
              Let your customer get instant answers using your own business Knowledge </p>
            <div className="mt-10 flex gap-4">
              {email ? (<button className="px-7 py-3 rounded-xl bg-black text-white font-medium
              hover:bg-zinc-800 transition disabled:opacity-60  
              "
              >Go to Dashboard</button>) :

                <button className="px-7 py-3 rounded-xl bg-black text-white font-medium
              hover:bg-zinc-800 transition disabled:opacity-60   "
                  onClick={handleLogin}
                >Get Started</button>}

              <button className="px-7 py-3 rounded-xl border border-zinc-300 text-zinc-700  font-medium
              hover:bg-zinc-100 transition"> Learn More </button>
            </div>
          </motion.div>
          {/* right div  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative">
            <div className="rounded-2xl bg-white shadow-2xl border border-zinc-200 p-6 ">

              <div className="text-sm mb-3 text-zinc-500">Live Chat Preview </div>

              <div className="space-y-3"  >
                {/* user meassge chat  */}
                <div className="bg-black text-white rounded-lg px-4 py-2 text-sm ml-auto w-fit ">     Do you offer cash on deliver ??  </div>

                {/* ai response chat   */}
                <div className="bg-zinc-100 rounded-lg px-4 py-2 w-fit text-sm">
                  Yes , cash on delivery is available   </div>
              </div>

            </div>
            <motion.div

              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-6 -right-6 w-14 h-14 rounded-full bg-black text-white 
               flex items-center justify-center shadow-xl  "

            >
              💬
            </motion.div>

          </motion.div>
        </div>

      </section>
    </div>
  );
}

export default HomeClient;
