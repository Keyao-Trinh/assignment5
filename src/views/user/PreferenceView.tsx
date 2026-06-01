import { useState } from "react";
import type { Genre } from "@/core";
import { useUserContext } from "@/hooks";

export const PreferenceView = () => {
  const { preferences, togglePreferences } = useUserContext();
  const [_value, _setValue] = useState();
  const [_error, _setError] = useState("");

  return (
    <section className="mx-auto max-w-7xl space-y-5 p-5">
      <div className="max-w-md space-y-4 rounded-2xl border border-gray-700 bg-gray-900 p-6">
        <div>
          <h2 className="font-semibold text-lg">Genre Preferences</h2>
        </div>
        <div className="space-y-2">
          <p className="text-gray-400 text-sm">Movies</p>

          <label className="pl-2">Action </label>
          <input
            className="pr-8"
            onClick={() => {
              (preferences: Genre) => (preferences.id === 28 ? togglePreferences : console.log(preferences));
              console.log(...preferences);
            }}
            type="checkbox"
          />

          <label className="pl-2">Adventure </label>
          <input
            className="p-8"
            // defaultChecked={true}
            onClick={() => {
              (preferences: Genre) => (preferences.id === 12 ? togglePreferences : console.log(preferences));
            }}
            type="checkbox"
          />
          <label className="pl-2">Animation </label>
          <input
            className="p-8"
            // defaultChecked={true}
            onClick={() => {
              (preferences: Genre) => (preferences.id === 16 ? togglePreferences : console.log(preferences));
            }}
            type="checkbox"
          />

          <label className="pl-2">Crime </label>
          <input
            className="p-8"
            // defaultChecked={true}
            onClick={() => {
              (preferences: Genre) => (preferences.id === 80 ? togglePreferences : console.log(preferences));
            }}
            type="checkbox"
          />

          <label className="pl-2">Family </label>
          <input
            className="p-8"
            // defaultChecked={true}
            onClick={() => {
              (preferences: Genre) => (preferences.id === 10551 ? togglePreferences : console.log(preferences));
            }}
            type="checkbox"
          />

          <label className="pl-2">Fantasy </label>
          <input
            className="p-8"
            // defaultChecked={true}
            onClick={() => {
              (preferences: Genre) => (preferences.id === 14 ? togglePreferences : console.log(preferences));
            }}
            type="checkbox"
          />

          <label className="pl-2">History </label>
          <input
            className="p-8"
            // defaultChecked={true}
            onClick={() => {
              (preferences: Genre) => (preferences.id === 36 ? togglePreferences : console.log(preferences));
            }}
            type="checkbox"
          />

          <label className="pl-2">Horror </label>
          <input
            className="p-8"
            // defaultChecked={true}
            onClick={() => {
              (preferences: Genre) => (preferences.id === 27 ? togglePreferences : console.log(preferences));
            }}
            type="checkbox"
          />

          <label className="pl-2">Mystery </label>
          <input
            className="p-8"
            // defaultChecked={true}
            onClick={() => {
              (preferences: Genre) => (preferences.id === 9648 ? togglePreferences : console.log(preferences));
            }}
            type="checkbox"
          />

          <label className="pl-2">Sci-fi </label>
          <input
            className="p-8"
            // defaultChecked={true}
            onClick={() => {
              (preferences: Genre) => (preferences.id === 878 ? togglePreferences : console.log(preferences));
            }}
            type="checkbox"
          />
          {/* {error && <p className="text-red-400 text-sm">{error}</p>}  */}
        </div>
        {/* onClick should turn off and on values for gernre vaule so it should send values over and those values should be used. THINK ABOUT THAT */}
      </div>
    </section>
  );
};

// { active: true, id: 28, label: "Action" },
// { active: true, id: 12, label: "Adventure" },
// { active: true, id: 16, label: "Animation" },
// { active: true, id: 80, label: "Crime" },
// { active: true, id: 10751, label: "Family" },
// { active: true, id: 14, label: "Fantasy" },
// { active: true, id: 36, label: "History" },
// { active: true, id: 27, label: "Horror" },
// { active: true, id: 9648, label: "Mystery" },
// { active: true, id: 878, label: "Sci-Fi" },
