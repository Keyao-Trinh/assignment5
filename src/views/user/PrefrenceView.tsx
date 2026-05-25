import { useState } from "react";
import { Button } from "@/components";
import { useUserContext } from "@/hooks";

export const SettingsView = () => {
  const { userName, setUserName } = useUserContext();
  const [value, setValue] = useState(userName);
  const [error, setError] = useState("");

  return (
    <section className="mx-auto max-w-7xl space-y-5 p-5">
      <div className="max-w-md space-y-4 rounded-2xl border border-gray-700 bg-gray-900 p-6">
        <div>
          <h2 className="font-semibold text-lg">Genre Preferences</h2>
        </div>
        <div className="space-y-2">
          {/* <input
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(event) => {
              setValue(event.target.value);
              setError("");
            }}
            placeholder="Enter your name"
            type="text"
            value={value}
          />
          {error && <p className="text-red-400 text-sm">{error}</p>} */}
        </div>
        <div className="flex justify-end gap-2"/>
{/* <div>
<input type="checkbox" onClick={}>
thing
</input>
</div> */}
{/* onClick should turn off and on values for gernre vaule so it should send values over and those values should be used. THINK ABOUT THAT */}
      </div>
    </section>
  );
};
