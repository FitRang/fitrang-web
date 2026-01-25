import { create } from "zustand"
import type { Dossier } from "@/services/models"

type DossierStore = {
  dossier: Dossier
  updateDossier: (data: Partial<Dossier>) => void
  resetDossier: () => void
}

export const useDossierStore = create<DossierStore>((set) => ({
  dossier: {
    preferredColors: [],
    dislikedColors: [],
  },

  updateDossier: (data) =>
    set((state) => ({
      dossier: {
        ...state.dossier,
        ...data,
      },
    })),

  resetDossier: () =>
    set({
      dossier: {
        preferredColors: [],
        dislikedColors: [],
      },
    }),
}))
