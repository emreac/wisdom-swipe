import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { schoolDetails } from "@/data/philosophers";
import { ChevronDown, BookOpen } from "lucide-react";

const schools = Object.entries(schoolDetails);

export default function LearnPage() {
  const [openSchool, setOpenSchool] = useState<string | null>(null);

  return (
    <div className="px-4 pt-6 pb-24 max-w-lg mx-auto space-y-5">
      <div className="text-center mb-2">
        <h1 className="text-2xl font-serif text-gold">Learn</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Explore the schools of thought
        </p>
      </div>

      <div className="space-y-3">
        {schools.map(([name, info]) => {
          const isOpen = openSchool === name;
          return (
            <motion.div
              key={name}
              layout
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenSchool(isOpen ? null : name)}
                className="w-full flex items-center gap-3 p-4 text-left"
              >
                <span className="text-2xl">{info.icon}</span>
                <div className="flex-1">
                  <h3 className="font-serif text-lg text-foreground">{name}</h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-5 space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {info.description}
                      </p>

                      <div>
                        <h4 className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                          Key Ideas
                        </h4>
                        <ul className="space-y-1.5">
                          {info.keyIdeas.map((idea) => (
                            <li key={idea} className="flex items-start gap-2 text-sm text-foreground">
                              <span className="text-gold mt-0.5">•</span>
                              {idea}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                          Key Figures
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {info.keyFigures.map((figure) => (
                            <span
                              key={figure}
                              className="text-xs bg-surface-elevated text-foreground px-3 py-1 rounded-full border border-border"
                            >
                              {figure}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
