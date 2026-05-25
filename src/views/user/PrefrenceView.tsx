import { useState } from "react";
import { Button } from "@/components";
import { useUserContext } from "@/hooks";

export const SettingsView = () => {
  const { genre, toggleGenre } = useUserContext();
  const [error, setError] = useState("");

  return (
    <section className="mx-auto max-w-7xl space-y-5 p-5">
      <div className="max-w-md space-y-4 rounded-2xl border border-gray-700 bg-gray-900 p-6">
        <div>
          <h2 className="font-semibold text-lg">Genre Preferences</h2>
        </div>
        <div className="space-y-2">
           <input
            className="rotate-180"         genra={genra} 
            onChange={(event) => {
((genra: string) => genra.has(genra.id), toggleGenra)]} 
            type="checkbox" />
              
            }}
          />
          {/* {error && <p className="text-red-400 text-sm">{error}</p>}  */}

        </div>
        <p className="text-gray-400 text-sm">Movies</p>
{/* onClick should turn off and on values for gernre vaule so it should send values over and those values should be used. THINK ABOUT THAT */}
     
     
      </div>
    </section>
  );
};
