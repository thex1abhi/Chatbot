"use client";
import axios from "axios";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function DashboardClient({ ownerId }: { ownerId: string }) {
    const navigate = useRouter();
    const [businessName, setbusinessName] = useState("");
    const [supportEmail, setSupportEmail] = useState("");
    const [knowledge, setknowledge] = useState("");
    const [Loading, setLoading] = useState(false);
    const [Saved, setSaved] = useState(false);

    const handleSettings = async () => {
        setLoading(true)
        try {
            const result = await axios.post("/api/settings", {
                ownerId, businessName,
                supportEmail, knowledge
            })
            console.log(result.data)
            setLoading(false)
            setSaved(true)
            setTimeout(() => setSaved(false), 3000);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        if (ownerId) {
            const handleGetDetails = async () => {
                try {
                    const result = await axios.post("/api/settings/get", { ownerId })
                    setbusinessName(result.data.businessName)
                    setSupportEmail(result.data.supportEmail)
                    setknowledge(result.data.knowledge)
                } catch (error) {
                    console.log(error)
                }
            }
            handleGetDetails()
        }
    }, [ownerId]);

    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900">
            <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-xl 
                  border-b   border-zinc-200 "
            >
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between ">
                    <div onClick={() => navigate.push("/")} className=" cursor-pointer text-2xl  font-semibold tracking-tight">
                        Chat<span className="text-teal-900">Bot</span>
                    </div>
                    <button onClick={() => navigate.push("/embed")} className="px-4 py-2 font-semibold  rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition  cursor-pointer ">
                        Embed ChatBot
                    </button>
                </div>
            </motion.div>
            <div className="flex justify-center px-4 mt-25 ">
                <motion.div
                    className="w-full max-w-3xl  bg-white rounded-2xl shadow-xl p-10 "
                >
                    <div className="mb-10 ">
                        <h1 className="text-2xl font-semibold">ChatBot Settings</h1>
                        <p className="text-zinc-500 mt-1">
                            Manage your AI chatbot knowledge and business details
                        </p>
                    </div>
                    <div className="mb-10">
                        <h1 className="text-lg font-medium mb-4 ">Business Details</h1>
                        <div className="space-y-4">
                            <input type="text"
                                value={businessName}
                                onChange={(e) => setbusinessName(e.target.value)}
                                className="w-full rounded-xl border 
                             border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80" placeholder="Enter Business Name" />
                            <input type="email"
                                value={supportEmail}
                                onChange={(e) => setSupportEmail(e.target.value)}
                                className="w-full rounded-xl border 
                             border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 
                             focus:ring-black/80" placeholder=" Support E-mail" />
                        </div>

                    </div>
                    <div className="mb-10">
                        <h1 className="text-lg font-medium mb-4 ">Business Knowledge</h1>
                        <p className="text-sm text-zinc-500 mb-4 ">Add FAQ&apos;s , policies, delivery info, refunds ,etc.</p>
                        <div className="space-y-4">
                            <textarea
                                onChange={(e) => setknowledge(e.target.value)}
                                value={knowledge}
                                className="w-full h-54 text-left rounded-xl border border-zinc-300  
                            px-4 py-3 text-sm focus:outline-none 
                             focus:ring-2 focus:ring-black/80" placeholder={` 
                         Example: 
                             •Refund Policy: 7 days return available  
                             • Delivery Time: 3-5 days working days 
                             •Cash on delivery available 
                             •Support hours  `} />
                        </div>
                    </div>
                    <div className="flex items-center gap-5 ">
                        <motion.button
                            disabled={Loading}
                            onClick={handleSettings}
                            whileHover={{ scale: 0.97 }}
                            whileTap={{ scale: 0.97 }}
                            className=" px-7 py-3 rounded-xl bg-black text-white text-sm 
                             font-medium hover:bg-zinc-800 transition disables:opacity-60">
                            {Loading ? "Saving..." : "Save "}

                        </motion.button>

                        {Saved && <motion.span
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm font-medium text-emerald-600" >
                            ✔ Settings Saved
                        </motion.span>}


                    </div>
                </motion.div>
            </div>
        </div>

    )
}

export default DashboardClient;
