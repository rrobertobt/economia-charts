// the key is the stock id (from the URL) and the value is the stock data (fill later)
import { BsGoogle, BsNvidia, CoBrandBitcoin, HeOutlineMedicines, MdTwoToneVaccines, SiIbm, SiIntel, SiMcdonalds, SiMicrosoft, SiShell, SiStarbucks, SiTesla } from "@kalimahapps/vue-icons";

export const stocksIdInfo = {
  intel: {
    name: "Intel Corporation",
    code: "INTC",
    icon: SiIntel,
    class: "text-indigo-500"
  },
  pfizer: {
    name: "Pfizer Inc",
    code: "PFE",
    icon: HeOutlineMedicines,
    class: "text-blue-500"
  },
  shell: {
    name: "Shell Corporation",
    code: "SHEL",
    icon: SiShell,
    class: "text-yellow-500"
  },
  moderna: {
    name: "Moderna Inc",
    code: "MRNA",
    icon: MdTwoToneVaccines,
    class: "text-blue-500"
  },
  ibm: {
    name: "IBM Corporation",
    code: "IBM",
    icon: SiIbm,
    class: "text-blue-500"
  },
  starbucks: {
    name: "Starbucks",
    code: "SBUX",
    icon: SiStarbucks,
    class: "text-green-500"
  },
  nvidia: {
    name: "NVIDIA Corporation",
    code: "NVDA",
    icon: BsNvidia,
    class: "text-green-500"
  },
  google: {
    name: "Alphabet Inc (Google)",
    code: "GOOGL",
    icon: BsGoogle,
    class: "text-red-500"
  },
  tesla: {
    name: "Tesla Inc",
    code: "TSLA",
    icon: SiTesla,
    class: "text-red-500"
  },
  mcdonalds: {
    name: "McDonald's",
    code: "MCD",
    icon: SiMcdonalds,
    class: "text-yellow-500"
  },
  microsoft: {
    name: "Microsoft Corporation",
    code: "MSFT",
    icon: SiMicrosoft,
    class: "text-blue-500"
  },
  bitcoin: {
    name: "Bitcoin",
    code: "BTC",
    icon: CoBrandBitcoin,
    class: "text-yellow-500"
  },

}