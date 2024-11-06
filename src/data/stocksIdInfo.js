// the key is the stock id (from the URL) and the value is the stock data (fill later)
import { BsGoogle, BsNvidia, CaPortfolio, CoBrandBitcoin, FlFilledMoneyHand, HeOutlineMedicines, HeOutlineMoneyBag, LaMoneyBillWaveSolid, MdTwoToneVaccines, SiAmazon, SiIbm, SiIntel, SiMcdonalds, SiMicrosoft, SiShell, SiStarbucks, SiTesla } from "@kalimahapps/vue-icons";

export const stocksIdInfo = {
  intel: {
    name: "Intel Corporation",
    code: "INTC",
    icon: SiIntel,
    cards: [
      { icon: LaMoneyBillWaveSolid, title: 'Costo Inicial', value: 20.69, class: 'text-green-500' },
      { icon: LaMoneyBillWaveSolid, title: 'Costo Final', value: 21.52, class: 'text-red-500' },
      { icon: CaPortfolio ,title: 'Acciones Compradas', value: 1000, class: 'text-amber-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Inicial', value: 20_690.00, class: 'text-green-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Final', value: 21_520.00, class: 'text-purple-500' },
      { icon: HeOutlineMoneyBag, title: 'Rendimiento Final', value: 830.00, class: 'text-slate-100' }
    ],
    history: [
      { open: 10, low: 10, high: 9.55, close: 9.55, time: 1723627546 },
      { open: 9.55, low: 9.55, high: 9.94, close: 9.94, time: 1724232346 },
      { open: 9.45, low: 9.45, high: 10.94, close: 10.94, time: 1725441946 },
      // { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
      // { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
      // { open: 9.51, high: 10.46, low: 9.1, close: 10.17, time: 1642773476 },
      // { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 },
      // { open: 10.47, high: 11.39, low: 10.4, close: 10.81, time: 1642946276 },
      // { open: 10.81, high: 11.6, low: 10.3, close: 10.75, time: 1643032676 },
      // { open: 10.75, high: 11.6, low: 10.49, close: 10.93, time: 1643119076 },
      // { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 },
    ],
    class: "text-indigo-500"
  },
  pfizer: {
    name: "Pfizer Inc",
    code: "PFE",
    icon: HeOutlineMedicines,
    cards: [
      { icon: LaMoneyBillWaveSolid, title: 'Costo Inicial', value: 28.71, class: 'text-green-500' },
      { icon: LaMoneyBillWaveSolid, title: 'Costo Final', value: 28.30, class: 'text-red-500' },
      { icon: CaPortfolio ,title: 'Acciones Compradas', value: 1480, class: 'text-amber-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Inicial', value: 42_490.80, class: 'text-green-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Final', value: 41_884.00, class: 'text-purple-500' },
      { icon: HeOutlineMoneyBag, title: 'Rendimiento Final', value: -606.80, class: 'text-slate-100' }
    ],
    history: [
      { open: 12, low: 12, high: 19.12, close: 19.12, time: 1723627546 },
      { open: 9.55, low: 9.55, high: 9.94, close: 9.94, time: 1724232346 },
      { open: 19.45, low: 19.45, high: 10.94, close: 10.94, time: 1725441946 },
      // { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
      // { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
      // { open: 9.51, high: 10.46, low: 9.1, close: 10.17, time: 1642773476 },
      // { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 },
      // { open: 10.47, high: 11.39, low: 10.4, close: 10.81, time: 1642946276 },
      // { open: 10.81, high: 11.6, low: 10.3, close: 10.75, time: 1643032676 },
      // { open: 10.75, high: 11.6, low: 10.49, close: 10.93, time: 1643119076 },
      // { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 },
    ],
    class: "text-blue-500"
  },
  shell: {
    name: "Shell Corporation",
    code: "SHEL",
    icon: SiShell,
    cards: [
      { icon: LaMoneyBillWaveSolid, title: 'Costo Inicial', value: 73.17, class: 'text-green-500' },
      { icon: LaMoneyBillWaveSolid, title: 'Costo Final', value: 67.55, class: 'text-red-500' },
      { icon: CaPortfolio ,title: 'Acciones Compradas', value: 430, class: 'text-amber-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Inicial', value: 31_463.10, class: 'text-green-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Final', value: 29_046.50, class: 'text-purple-500' },
      { icon: HeOutlineMoneyBag, title: 'Rendimiento Final', value: -2_416.60, class: 'text-slate-100' }
    ],
    class: "text-yellow-500"
  },
  moderna: {
    name: "Moderna Inc",
    code: "MRNA",
    icon: MdTwoToneVaccines,
    cards: [
      { icon: LaMoneyBillWaveSolid, title: 'Costo Inicial', value: 86.64, class: 'text-green-500' },
      { icon: LaMoneyBillWaveSolid, title: 'Costo Final', value: 54.36, class: 'text-red-500' },
      { icon: CaPortfolio ,title: 'Acciones Compradas', value: 1300, class: 'text-amber-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Inicial', value: 112_632.00, class: 'text-green-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Final', value: 70_668.00, class: 'text-purple-500' },
      { icon: HeOutlineMoneyBag, title: 'Rendimiento Final', value: -41_964.00, class: 'text-slate-100' }
    ],
    class: "text-blue-500"
  },
  ibm: {
    name: "IBM Corporation",
    code: "IBM",
    icon: SiIbm,
    cards: [
      { icon: LaMoneyBillWaveSolid, title: 'Costo Inicial', value: 193.95, class: 'text-green-500' },
      { icon: LaMoneyBillWaveSolid, title: 'Costo Final', value: 206.72, class: 'text-red-500' },
      { icon: CaPortfolio ,title: 'Acciones Compradas', value: 160, class: 'text-amber-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Inicial', value: 31_032.00, class: 'text-green-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Final', value: 33_075.20, class: 'text-purple-500' },
      { icon: HeOutlineMoneyBag, title: 'Rendimiento Final', value: 2_043.20, class: 'text-slate-100' }
    ],
    class: "text-blue-500"
  },
  starbucks: {
    name: "Starbucks",
    code: "SBUX",
    icon: SiStarbucks,
    cards: [
      { icon: LaMoneyBillWaveSolid, title: 'Costo Inicial', value: 94.88, class: 'text-green-500' },
      { icon: LaMoneyBillWaveSolid, title: 'Costo Final', value: 97.70, class: 'text-red-500' },
      { icon: CaPortfolio ,title: 'Acciones Compradas', value: 250, class: 'text-amber-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Inicial', value: 23_720.00, class: 'text-green-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Final', value: 24_425.00, class: 'text-purple-500' },
      { icon: HeOutlineMoneyBag, title: 'Rendimiento Final', value: 705.00, class: 'text-slate-100' }
    ],
    class: "text-green-500"
  },
  nvidia: {
    name: "NVIDIA Corporation",
    code: "NVDA",
    icon: BsNvidia,
    cards: [
      { icon: LaMoneyBillWaveSolid, title: 'Costo Inicial', value: 122.86, class: 'text-green-500' },
      { icon: LaMoneyBillWaveSolid, title: 'Costo Final', value: 132.76, class: 'text-red-500' },
      { icon: CaPortfolio ,title: 'Acciones Compradas', value: 251, class: 'text-amber-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Inicial', value: 30_837.86, class: 'text-green-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Final', value: 33_322.76, class: 'text-purple-500' },
      { icon: HeOutlineMoneyBag, title: 'Rendimiento Final', value: 2_484.90, class: 'text-slate-100' }
    ],
    class: "text-green-500"
  },
  google: {
    name: "Alphabet Inc (Google)",
    code: "GOOGL",
    icon: BsGoogle,
    cards: [
      { icon: LaMoneyBillWaveSolid, title: 'Costo Inicial', value: 161.30, class: 'text-green-500' },
      { icon: LaMoneyBillWaveSolid, title: 'Costo Final', value: 172.69, class: 'text-red-500' },
      { icon: CaPortfolio ,title: 'Acciones Compradas', value: 500, class: 'text-amber-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Inicial', value: 80_650.00, class: 'text-green-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Final', value: 86_345.00, class: 'text-purple-500' },
      { icon: HeOutlineMoneyBag, title: 'Rendimiento Final', value: 5_695.00, class: 'text-slate-100' }
    ],
    class: "text-red-500"
  },
  amazon: {
    name: "Amazon.com Inc",
    code: "AMZN",
    icon: SiAmazon,
    cards: [
      { icon: LaMoneyBillWaveSolid, title: 'Costo Inicial', value: 177.59, class: 'text-green-500' },
      { icon: LaMoneyBillWaveSolid, title: 'Costo Final', value: 186.40, class: 'text-red-500' },
      { icon: CaPortfolio ,title: 'Acciones Compradas', value: 200, class: 'text-amber-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Inicial', value: 35_518.00, class: 'text-green-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Final', value: 37_280.00, class: 'text-purple-500' },
      { icon: HeOutlineMoneyBag, title: 'Rendimiento Final', value: 1_762.00, class: 'text-slate-100' }
    ],
    class: "text-blue-500"
  },
  tesla: {
    name: "Tesla Inc",
    code: "TSLA",
    icon: SiTesla,
    cards: [
      { icon: LaMoneyBillWaveSolid, title: 'Costo Inicial', value: 214.14, class: 'text-green-500' },
      { icon: LaMoneyBillWaveSolid, title: 'Costo Final', value: 249.85, class: 'text-red-500' },
      { icon: CaPortfolio ,title: 'Acciones Compradas', value: 301, class: 'text-amber-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Inicial', value: 64_456.14, class: 'text-green-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Final', value: 75_204.85, class: 'text-purple-500' },
      { icon: HeOutlineMoneyBag, title: 'Rendimiento Final', value: 10_748.71, class: 'text-slate-100' }
    ],
    class: "text-red-500"
  },
  mcdonalds: {
    name: "McDonald's",
    code: "MCD",
    icon: SiMcdonalds,
    cards: [
      { icon: LaMoneyBillWaveSolid, title: 'Costo Inicial', value: 274.87, class: 'text-green-500' },
      { icon: LaMoneyBillWaveSolid, title: 'Costo Final', value: 292.11, class: 'text-red-500' },
      { icon: CaPortfolio ,title: 'Acciones Compradas', value: 200, class: 'text-amber-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Inicial', value: 54_974.00, class: 'text-green-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Final', value: 58_422.00, class: 'text-purple-500' },
      { icon: HeOutlineMoneyBag, title: 'Rendimiento Final', value: 3_448.00, class: 'text-slate-100' }
    ],
    class: "text-yellow-500"
  },
  microsoft: {
    name: "Microsoft Corporation",
    code: "MSFT",
    icon: SiMicrosoft,
    cards: [
      { icon: LaMoneyBillWaveSolid, title: 'Costo Inicial', value: 421.03, class: 'text-green-500' },
      { icon: LaMoneyBillWaveSolid, title: 'Costo Final', value: 292.11, class: 'text-red-500' },
      { icon: CaPortfolio ,title: 'Acciones Compradas', value: 300, class: 'text-amber-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Inicial', value: 126_309.00, class: 'text-green-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Final', value: 87_633.00, class: 'text-purple-500' },
      { icon: HeOutlineMoneyBag, title: 'Rendimiento Final', value: -38_676.00, class: 'text-slate-100' }
    ],
    class: "text-blue-500"
  },
  bitcoin: {
    name: "Bitcoin",
    code: "BTC",
    icon: CoBrandBitcoin,
    cards: [
      { icon: LaMoneyBillWaveSolid, title: 'Costo Inicial', value: 57_534.60, class: 'text-green-500' },
      { icon: LaMoneyBillWaveSolid, title: 'Costo Final', value: 69_325.80, class: 'text-red-500' },
      { icon: CaPortfolio ,title: 'Acciones Compradas', value: 6, class: 'text-amber-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Inicial', value: 345_207.60, class: 'text-green-500' },
      { icon: FlFilledMoneyHand, title: 'Inversión Final', value: 415_954.80, class: 'text-purple-500' },
      { icon: HeOutlineMoneyBag, title: 'Rendimiento Final', value: 70_747.20, class: 'text-slate-100' }
    ],
    class: "text-yellow-500"
  }
};
