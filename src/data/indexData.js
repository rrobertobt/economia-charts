import { CaMoney, FlReceiptMoney, HeOutlineMoneyBag, McPigMoneyLine } from "@kalimahapps/vue-icons";
import {
  AkDashboard,
  AkInfo,
  BsGoogle,
  BsNvidia,
  CoBrandBitcoin,
  HeOutlineMedicines,
  MdTwoToneVaccines,
  SiAmazon,
  SiIbm,
  SiIntel,
  SiMcdonalds,
  SiMicrosoft,
  SiShell,
  SiStarbucks,
  SiTesla
} from "@kalimahapps/vue-icons";


export const indexData = {
  topCards: [
    {
      icon: McPigMoneyLine,
      title: 'Capital Inicial',
      value: 1_000_000,
      class: 'text-green-500',
    },
    {
      icon: CaMoney,
      title: 'Capital Utilizado',
      value: 999_980.50,
      class: 'text-red-500',
    },
    {
      icon: HeOutlineMoneyBag,
      title: 'Capital Restante',
      value: 19.50,
      class: 'text-amber-500',
    },
    {
      icon: FlReceiptMoney,
      title: 'Rendimiento Total',
      value: 14_800.61 + 19.50,
      class: 'text-green-500',
    },
  ]
}

export const menuItems = [
  {
    name: "General",
    separator: true,
    icon: null,
    class: "!text-indigo-500 !bg-indigo-950",
  },
  {
    name: "Vista General",
    path: "/",
    icon: AkDashboard,
    class: "!text-indigo-500 !bg-indigo-950",
  },
  {
    name: "Empresas",
    separator: true,
    icon: null,
    class: "!text-indigo-500 !bg-indigo-950",
  },
  {
    name: "Intel Corp",
    path: "/stock/intel",
    icon: SiIntel,
    class: "!text-indigo-500 !bg-indigo-950",
  },
  {
    name: "Pfizer Inc",
    path: "/stock/pfizer",
    icon: HeOutlineMedicines,
    class: "!text-indigo-500 !bg-indigo-950",
  },
  {
    name: "Shell Corp",
    path: "/stock/shell",
    icon: SiShell,
    class: "!text-yellow-500 !bg-yellow-950",
  },
  {
    name: "Moderna Inc",
    path: "/stock/moderna",
    icon: MdTwoToneVaccines,
    class: "!text-blue-500 !bg-blue-950",
  },
  {
    name: "IBM Corp",
    path: "/stock/ibm",
    icon: SiIbm,
    class: "!text-blue-500 !bg-blue-950",
  },
  {
    name: "Starbucks",
    path: "/stock/starbucks",
    icon: SiStarbucks,
    class: "!text-green-500 !bg-green-950",
  },
  {
    name: "NVIDIA Corp",
    path: "/stock/nvidia",
    icon: BsNvidia,
    class: "!text-green-500 !bg-green-950",
  },
  {
    name: "Alphabet (Google)",
    path: "/stock/google",
    icon: BsGoogle,
    class: "!text-red-500 !bg-red-950",
  },
  {
    name: "Amazon Inc",
    path: "/stock/amazon",
    icon: SiAmazon,
    class: "!text-amber-500 !bg-amber-950",
  },
  {
    name: "Tesla Inc",
    path: "/stock/tesla",
    icon: SiTesla,
    class: "!text-red-500 !bg-red-950",
  },
  {
    name: "McDonald's",
    path: "/stock/mcdonalds",
    icon: SiMcdonalds,
    class: "!text-yellow-500 !bg-yellow-950",
  },
  {
    name: "Microsoft Corp",
    path: "/stock/microsoft",
    icon: SiMicrosoft,
    class: "!text-slate-500 !bg-slate-950",
  },
  {
    name: "Bitcoin",
    path: "/stock/bitcoin",
    icon: CoBrandBitcoin,
    class: "!text-yellow-500 !bg-yellow-950",
  },
  {
    name: "Extras",
    separator: true,
    icon: null,
    class: "!text-indigo-500 !bg-indigo-950",
  },
  {
    name: "Acerca de",
    path: "/about",
    icon: AkInfo,
    class: "!text-indigo-500 !bg-indigo-950",
  },
];