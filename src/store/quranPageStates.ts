"use client";

import { create } from "zustand";
import { combine, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useQuranStates = create(
  persist(
    immer(
      combine(
        {
          isEnTranslation: false,
        },
        (set) => {
          return {
            setIsEnTranslation: (isEnTranslation: boolean) =>
              set((state) => {
                state.isEnTranslation = isEnTranslation;
              }),
          };
        },
      ),
    ),
    {
      name: "quranStates",
    },
  ),
);
