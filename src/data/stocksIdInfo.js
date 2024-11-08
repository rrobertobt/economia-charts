import {
  BsGoogle,
  BsNvidia,
  CaPortfolio,
  CoBrandBitcoin,
  FlFilledMoneyHand,
  HeOutlineMedicines,
  HeOutlineMoneyBag,
  LaMoneyBillWaveSolid,
  MdTwoToneVaccines,
  SiAmazon,
  SiIbm,
  SiIntel,
  SiMcdonalds,
  SiMicrosoft,
  SiShell,
  SiStarbucks,
  SiTesla,
} from "@kalimahapps/vue-icons";

export const stocksIdInfo = {
  intel: {
    name: "Intel Corporation",
    code: "INTC",
    icon: SiIntel,
    cards: [
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Inicial",
        value: 20.69,
        class: "text-green-500",
      },
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Final",
        value: 21.52,
        class: "text-red-500",
      },
      {
        icon: CaPortfolio,
        title: "Acciones Compradas",
        value: 1000,
        class: "text-amber-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Inicial",
        value: 20_690.0,
        class: "text-green-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Final",
        value: 21_520.0,
        class: "text-purple-500",
      },
      {
        icon: HeOutlineMoneyBag,
        title: "Rendimiento Final",
        value: 830.0,
        class: "text-slate-100",
      },
    ],
    history: [
      { open: 20.69, low: 20.69, high: 20.10, close: 20.10, time: 1723686030 },
      { open: 20.10, low: 20.10, high: 20.13, close: 20.13, time: 1724290830 },
      { open: 20.13, low: 20.13, high: 19.40, close: 19.40, time: 1724895630 },
      { open: 19.40, low: 19.40, high: 19.36, close: 19.36, time: 1725500430 },
      { open: 19.36, low: 19.36, high: 21.14, close: 21.14, time: 1726105230 },
      { open: 21.14, low: 21.14, high: 23.92, close: 23.92, time: 1726710030 },
      { open: 23.92, low: 23.92, high: 22.26, close: 22.26, time: 1727314830 },
      { open: 22.26, low: 22.26, high: 23.22, close: 23.22, time: 1727919630 },
      { open: 23.22, low: 23.22, high: 22.44, close: 22.44, time: 1728524430 },
      { open: 22.44, low: 22.44, high: 22.34, close: 22.34, time: 1729129230 },
      { open: 22.34, low: 22.34, high: 21.52, close: 21.52, time: 1729734030 },
      { open: 21.52, low: 21.52, high: 21.52, close: 21.52, time: 1730338830 }
    ]
    ,
    class: "text-indigo-500",
    description:
      "Intel es una de las compañías líderes en la fabricación de chips, conocidos especialmente por sus procesadores para computadoras de escritorio, portátiles y servidores. Con el lanzamiento próximo de una nueva generación de productos, se espera un aumento en la demanda de sus acciones a corto plazo. La empresa también ha invertido en tecnologías emergentes, como inteligencia artificial y fabricación de semiconductores avanzados, lo que le permite diversificar su negocio. Estos esfuerzos, junto con mejoras en la eficiencia de producción, pueden impulsar sus ingresos y el valor de sus acciones. Por estas razones, Intel es una opción estratégica para aprovechar el crecimiento en el sector tecnológico.",
  },
  pfizer: {
    name: "Pfizer Inc",
    code: "PFE",
    icon: HeOutlineMedicines,
    cards: [
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Inicial",
        value: 28.71,
        class: "text-green-500",
      },
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Final",
        value: 28.3,
        class: "text-red-500",
      },
      {
        icon: CaPortfolio,
        title: "Acciones Compradas",
        value: 1480,
        class: "text-amber-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Inicial",
        value: 42_490.8,
        class: "text-green-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Final",
        value: 41_884.0,
        class: "text-purple-500",
      },
      {
        icon: HeOutlineMoneyBag,
        title: "Rendimiento Final",
        value: -606.8,
        class: "text-slate-100",
      },
    ],
    history: [
      { open: 28.71, low: 28.71, high: 28.78, close: 28.78, time: 1723686030 },
      { open: 28.78, low: 28.78, high: 28.72, close: 28.72, time: 1724290830 },
      { open: 28.72, low: 28.72, high: 28.51, close: 28.51, time: 1724895630 },
      { open: 28.51, low: 28.51, high: 29.16, close: 29.16, time: 1725500430 },
      { open: 29.16, low: 29.16, high: 29.66, close: 29.66, time: 1726105230 },
      { open: 29.66, low: 29.66, high: 28.97, close: 28.97, time: 1726710030 },
      { open: 28.97, low: 28.97, high: 28.34, close: 28.34, time: 1727314830 },
      { open: 28.34, low: 28.34, high: 29.34, close: 29.34, time: 1727919630 },
      { open: 29.34, low: 29.34, high: 29.27, close: 29.27, time: 1728524430 },
      { open: 29.27, low: 29.27, high: 28.64, close: 28.64, time: 1729129230 },
      { open: 28.64, low: 28.64, high: 28.30, close: 28.30, time: 1729734030 },
      { open: 28.30, low: 28.30, high: 28.30, close: 28.30, time: 1730338830 }
    ],
    class: "text-blue-500",
    description:
      "Pfizer es una de las empresas que desarrolló exitosamente una vacuna contra el COVID-19, demostrando su capacidad para responder rápidamente a emergencias sanitarias. Con su experiencia en el desarrollo de nuevas vacunas, es posible que sus acciones aumenten en el corto plazo si logra avanzar en una vacuna para combatir la viruela del mono, que ha mostrado signos de expansión recientemente.",
  },
  shell: {
    name: "Shell Corporation",
    code: "SHEL",
    icon: SiShell,
    cards: [
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Inicial",
        value: 73.17,
        class: "text-green-500",
      },
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Final",
        value: 67.55,
        class: "text-red-500",
      },
      {
        icon: CaPortfolio,
        title: "Acciones Compradas",
        value: 430,
        class: "text-amber-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Inicial",
        value: 31_463.1,
        class: "text-green-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Final",
        value: 29_046.5,
        class: "text-purple-500",
      },
      {
        icon: HeOutlineMoneyBag,
        title: "Rendimiento Final",
        value: -2_416.6,
        class: "text-slate-100",
      },
    ],
    history: [
      { open: 73.17, low: 73.17, high: 71.45, close: 71.45, time: 1723686030 },
      { open: 71.45, low: 71.45, high: 72.52, close: 72.52, time: 1724290830 },
      { open: 72.52, low: 72.52, high: 68.12, close: 68.12, time: 1724895630 },
      { open: 68.12, low: 68.12, high: 66.98, close: 66.98, time: 1725500430 },
      { open: 66.98, low: 66.98, high: 69.17, close: 69.17, time: 1726105230 },
      { open: 69.17, low: 69.17, high: 65.34, close: 65.34, time: 1726710030 },
      { open: 65.34, low: 65.34, high: 68.46, close: 68.46, time: 1727314830 },
      { open: 68.46, low: 68.46, high: 68.84, close: 68.84, time: 1727919630 },
      { open: 68.84, low: 68.84, high: 67.34, close: 67.34, time: 1728524430 },
      { open: 67.34, low: 67.34, high: 66.41, close: 66.41, time: 1729129230 },
      { open: 66.41, low: 66.41, high: 67.55, close: 67.55, time: 1729734030 },
      { open: 67.55, low: 67.55, high: 67.55, close: 67.55, time: 1730338830 }
    ],    
    class: "text-yellow-500",
    description:
      "Shell es una empresa líder en la refinación de petróleo y distribución de combustibles a nivel mundial. Su extensa infraestructura y presencia en el mercado le permiten mantener una posición competitiva en la industria energética. A corto plazo, es probable que continúe generando beneficios, especialmente con la demanda sostenida de combustibles fósiles y productos derivados del petróleo.",
  },
  moderna: {
    name: "Moderna Inc",
    code: "MRNA",
    icon: MdTwoToneVaccines,
    cards: [
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Inicial",
        value: 86.64,
        class: "text-green-500",
      },
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Final",
        value: 54.36,
        class: "text-red-500",
      },
      {
        icon: CaPortfolio,
        title: "Acciones Compradas",
        value: 1300,
        class: "text-amber-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Inicial",
        value: 112_632.0,
        class: "text-green-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Final",
        value: 70_668.0,
        class: "text-purple-500",
      },
      {
        icon: HeOutlineMoneyBag,
        title: "Rendimiento Final",
        value: -41_964.0,
        class: "text-slate-100",
      },
    ],
    history: [
      { open: 86.64, low: 86.64, high: 81.04, close: 81.04, time: 1723686030 },
      { open: 81.04, low: 81.04, high: 77.60, close: 77.60, time: 1724290830 },
      { open: 77.60, low: 77.60, high: 73.44, close: 73.44, time: 1724895630 },
      { open: 73.44, low: 73.44, high: 69.68, close: 69.68, time: 1725500430 },
      { open: 69.68, low: 69.68, high: 68.02, close: 68.02, time: 1726105230 },
      { open: 68.02, low: 68.02, high: 63.93, close: 63.93, time: 1726710030 },
      { open: 63.93, low: 63.93, high: 61.07, close: 61.07, time: 1727314830 },
      { open: 61.07, low: 61.07, high: 56.83, close: 56.83, time: 1727919630 },
      { open: 56.83, low: 56.83, high: 54.82, close: 54.82, time: 1728524430 },
      { open: 54.82, low: 54.82, high: 52.80, close: 52.80, time: 1729129230 },
      { open: 52.80, low: 52.80, high: 54.36, close: 54.36, time: 1729734030 },
      { open: 54.36, low: 54.36, high: 54.36, close: 54.36, time: 1730338830 }
    ],
    class: "text-blue-500",
    description:
      "Moderna es una empresa biotecnológica que logró desarrollar una vacuna efectiva contra el COVID-19, demostrando su capacidad de innovación y adaptación rápida en el campo de la medicina. Su experiencia en el desarrollo de vacunas basadas en tecnología de ARN mensajero (ARNm) la posiciona favorablemente para abordar nuevas amenazas de salud pública. En el corto plazo, las acciones de Moderna podrían beneficiarse si la empresa logra avanzar en la creación de una vacuna contra la viruela del mono, una enfermedad que ha mostrado signos de expansión en distintas regiones",
  },
  ibm: {
    name: "IBM Corporation",
    code: "IBM",
    icon: SiIbm,
    cards: [
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Inicial",
        value: 193.95,
        class: "text-green-500",
      },
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Final",
        value: 206.72,
        class: "text-red-500",
      },
      {
        icon: CaPortfolio,
        title: "Acciones Compradas",
        value: 160,
        class: "text-amber-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Inicial",
        value: 31_032.0,
        class: "text-green-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Final",
        value: 33_075.2,
        class: "text-purple-500",
      },
      {
        icon: HeOutlineMoneyBag,
        title: "Rendimiento Final",
        value: 2_043.2,
        class: "text-slate-100",
      },
    ],
    history: [
      {
        open: 193.95,
        low: 193.95,
        high: 195.96,
        close: 195.96,
        time: 1723686030,
      },
      {
        open: 195.96,
        low: 195.96,
        high: 198.9,
        close: 198.9,
        time: 1724290830,
      },
      {
        open: 198.9,
        low: 198.9,
        high: 202.59,
        close: 202.59,
        time: 1724895630,
      },
      {
        open: 202.59,
        low: 202.59,
        high: 211.61,
        close: 211.61,
        time: 1725500430,
      },
      {
        open: 211.61,
        low: 211.61,
        high: 213.89,
        close: 213.89,
        time: 1726105230,
      },
      {
        open: 213.89,
        low: 213.89,
        high: 223.43,
        close: 223.43,
        time: 1726710030,
      },
      {
        open: 223.43,
        low: 223.43,
        high: 222.72,
        close: 222.72,
        time: 1727314830,
      },
      {
        open: 222.72,
        low: 222.72,
        high: 233.02,
        close: 233.02,
        time: 1727919630,
      },
      {
        open: 233.02,
        low: 233.02,
        high: 232.88,
        close: 232.88,
        time: 1728524430,
      },
      {
        open: 232.88,
        low: 232.88,
        high: 218.39,
        close: 218.39,
        time: 1729129230,
      },
      {
        open: 218.39,
        low: 218.39,
        high: 206.72,
        close: 206.72,
        time: 1729734030,
      },
      {
        open: 206.72,
        low: 206.72,
        high: 206.72,
        close: 206.72,
        time: 1730338830,
      },
    ],
    class: "text-blue-500",
    description:
      "IBM es una empresa tecnológica que en el pasado lideró el mercado de computadoras personales, compitiendo de cerca con Apple. Actualmente, está invirtiendo fuertemente en la computación cuántica, una tecnología emergente con el potencial de transformar áreas como la criptografía y la inteligencia artificial. A medida que esta tecnología se desarrolla y encuentra aplicaciones comerciales, las inversiones de IBM podrían traducirse en importantes beneficios a largo plazo, lo que hace de sus acciones una opción prometedora para el futuro.",
  },
  starbucks: {
    name: "Starbucks",
    code: "SBUX",
    icon: SiStarbucks,
    cards: [
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Inicial",
        value: 94.88,
        class: "text-green-500",
      },
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Final",
        value: 97.7,
        class: "text-red-500",
      },
      {
        icon: CaPortfolio,
        title: "Acciones Compradas",
        value: 250,
        class: "text-amber-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Inicial",
        value: 23_720.0,
        class: "text-green-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Final",
        value: 24_425.0,
        class: "text-purple-500",
      },
      {
        icon: HeOutlineMoneyBag,
        title: "Rendimiento Final",
        value: 705.0,
        class: "text-slate-100",
      },
    ],
    history: [
      { open: 94.88, low: 94.88, high: 92.43, close: 92.43, time: 1723686030 },
      { open: 92.43, low: 92.43, high: 94.86, close: 94.86, time: 1724290830 },
      { open: 94.86, low: 94.86, high: 91.56, close: 91.56, time: 1724895630 },
      { open: 91.56, low: 91.56, high: 99.28, close: 99.28, time: 1725500430 },
      { open: 99.28, low: 99.28, high: 96.9, close: 96.9, time: 1726105230 },
      { open: 96.9, low: 96.9, high: 97.47, close: 97.47, time: 1726710030 },
      { open: 97.47, low: 97.47, high: 95.56, close: 95.56, time: 1727314830 },
      { open: 95.56, low: 95.56, high: 93.88, close: 93.88, time: 1727919630 },
      { open: 93.88, low: 93.88, high: 95.27, close: 95.27, time: 1728524430 },
      { open: 95.27, low: 95.27, high: 97.15, close: 97.15, time: 1729129230 },
      { open: 97.15, low: 97.15, high: 97.7, close: 97.7, time: 1729734030 },
      { open: 97.7, low: 97.7, high: 97.7, close: 97.7, time: 1730338830 },
    ],
    class: "text-green-500",
    description:
      "Starbucks es una empresa que ha experimentado una rápida expansión, abriendo cada vez más sucursales en diferentes mercados. Gracias a su fuerte presencia global y al creciente consumo de productos premium, su popularidad sigue aumentando. La tendencia hacia un mayor gasto en experiencias y productos de alta calidad en el sector alimentario respalda el potencial de crecimiento continuo de Starbucks, lo que podría impulsar sus beneficios a medida que amplía su alcance.",
  },
  nvidia: {
    name: "NVIDIA Corporation",
    code: "NVDA",
    icon: BsNvidia,
    cards: [
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Inicial",
        value: 122.86,
        class: "text-green-500",
      },
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Final",
        value: 132.76,
        class: "text-red-500",
      },
      {
        icon: CaPortfolio,
        title: "Acciones Compradas",
        value: 251,
        class: "text-amber-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Inicial",
        value: 30_837.86,
        class: "text-green-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Final",
        value: 33_322.76,
        class: "text-purple-500",
      },
      {
        icon: HeOutlineMoneyBag,
        title: "Rendimiento Final",
        value: 2_484.9,
        class: "text-slate-100",
      },
    ],
    history: [
      {
        open: 122.86,
        low: 122.86,
        high: 123.74,
        close: 123.74,
        time: 1723686030,
      },
      {
        open: 123.74,
        low: 123.74,
        high: 117.59,
        close: 117.59,
        time: 1724290830,
      },
      {
        open: 117.59,
        low: 117.59,
        high: 107.21,
        close: 107.21,
        time: 1724895630,
      },
      {
        open: 107.21,
        low: 107.21,
        high: 119.14,
        close: 119.14,
        time: 1725500430,
      },
      {
        open: 119.14,
        low: 119.14,
        high: 117.87,
        close: 117.87,
        time: 1726105230,
      },
      {
        open: 117.87,
        low: 117.87,
        high: 124.04,
        close: 124.04,
        time: 1726710030,
      },
      {
        open: 124.04,
        low: 124.04,
        high: 122.85,
        close: 122.85,
        time: 1727314830,
      },
      {
        open: 122.85,
        low: 122.85,
        high: 134.81,
        close: 134.81,
        time: 1727919630,
      },
      {
        open: 134.81,
        low: 134.81,
        high: 136.93,
        close: 136.93,
        time: 1728524430,
      },
      {
        open: 136.93,
        low: 136.93,
        high: 140.41,
        close: 140.41,
        time: 1729129230,
      },
      {
        open: 140.41,
        low: 140.41,
        high: 132.76,
        close: 132.76,
        time: 1729734030,
      },
      {
        open: 132.76,
        low: 132.76,
        high: 132.76,
        close: 132.76,
        time: 1730338830,
      },
    ],
    class: "text-green-500",
    description:
      "NVIDIA es líder en la industria de tecnología gráfica y procesamiento de datos, especialmente conocida por sus GPUs, fundamentales en aplicaciones de gaming, inteligencia artificial y computación en la nube. A medida que la demanda de IA y machine learning crece, NVIDIA está bien posicionada para capitalizar esta tendencia gracias a su innovación constante en hardware de alto rendimiento. Además, su reciente incursión en plataformas de procesamiento para el metaverso y vehículos autónomos ofrece una oportunidad de crecimiento. Estas ventajas competitivas hacen que NVIDIA sea una opción sólida para el crecimiento a largo plazo.",
  },
  google: {
    name: "Alphabet Inc (Google)",
    code: "GOOGL",
    icon: BsGoogle,
    cards: [
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Inicial",
        value: 161.3,
        class: "text-green-500",
      },
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Final",
        value: 172.69,
        class: "text-red-500",
      },
      {
        icon: CaPortfolio,
        title: "Acciones Compradas",
        value: 500,
        class: "text-amber-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Inicial",
        value: 80_650.0,
        class: "text-green-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Final",
        value: 86_345.0,
        class: "text-purple-500",
      },
      {
        icon: HeOutlineMoneyBag,
        title: "Rendimiento Final",
        value: 5_695.0,
        class: "text-slate-100",
      },
    ],
    history: [
      { open: 161.3, low: 161.3, high: 163.8, close: 163.8, time: 1723686030 },
      {
        open: 163.8,
        low: 163.8,
        high: 161.78,
        close: 161.78,
        time: 1724290830,
      },
      {
        open: 161.78,
        low: 161.78,
        high: 157.24,
        close: 157.24,
        time: 1724895630,
      },
      {
        open: 157.24,
        low: 157.24,
        high: 154.69,
        close: 154.69,
        time: 1725500430,
      },
      {
        open: 154.69,
        low: 154.69,
        high: 162.14,
        close: 162.14,
        time: 1726105230,
      },
      {
        open: 162.14,
        low: 162.14,
        high: 162.73,
        close: 162.73,
        time: 1726710030,
      },
      {
        open: 162.73,
        low: 162.73,
        high: 165.86,
        close: 165.86,
        time: 1727314830,
      },
      {
        open: 165.86,
        low: 165.86,
        high: 162.08,
        close: 162.08,
        time: 1727919630,
      },
      {
        open: 162.08,
        low: 162.08,
        high: 162.93,
        close: 162.93,
        time: 1728524430,
      },
      {
        open: 162.93,
        low: 162.93,
        high: 162.62,
        close: 162.62,
        time: 1729129230,
      },
      {
        open: 162.62,
        low: 162.62,
        high: 172.69,
        close: 172.69,
        time: 1729734030,
      },
      {
        open: 172.69,
        low: 172.69,
        high: 172.69,
        close: 172.69,
        time: 1730338830,
      },
    ],
    class: "text-red-500",
    description:
      "Alphabet, la empresa matriz de Google, domina el mercado de búsqueda en internet y publicidad digital, siendo una pieza clave en el ecosistema tecnológico global. Su diversificación hacia la computación en la nube, inteligencia artificial y vehículos autónomos refuerza su capacidad para expandirse en sectores emergentes. Además, Google sigue aumentando sus ingresos con productos como YouTube y Google Cloud. Estos factores, junto con su estrategia de innovación, hacen que invertir en Alphabet sea una decisión estratégica para quienes buscan exposición en tecnología avanzada y publicidad digital.",
  },
  amazon: {
    name: "Amazon.com Inc",
    code: "AMZN",
    icon: SiAmazon,
    cards: [
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Inicial",
        value: 177.59,
        class: "text-green-500",
      },
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Final",
        value: 186.4,
        class: "text-red-500",
      },
      {
        icon: CaPortfolio,
        title: "Acciones Compradas",
        value: 200,
        class: "text-amber-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Inicial",
        value: 35_518.0,
        class: "text-green-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Final",
        value: 37_280.0,
        class: "text-purple-500",
      },
      {
        icon: HeOutlineMoneyBag,
        title: "Rendimiento Final",
        value: 1_762.0,
        class: "text-slate-100",
      },
    ],
    history: [
      {
        open: 177.59,
        low: 177.59,
        high: 176.13,
        close: 176.13,
        time: 1723686030,
      },
      {
        open: 176.13,
        low: 176.13,
        high: 172.12,
        close: 172.12,
        time: 1724290830,
      },
      {
        open: 172.12,
        low: 172.12,
        high: 177.89,
        close: 177.89,
        time: 1724895630,
      },
      { open: 177.89, low: 177.89, high: 187, close: 187, time: 1725500430 },
      { open: 187, low: 187, high: 189.87, close: 189.87, time: 1726105230 },
      {
        open: 189.87,
        low: 189.87,
        high: 191.16,
        close: 191.16,
        time: 1726710030,
      },
      {
        open: 191.16,
        low: 191.16,
        high: 181.96,
        close: 181.96,
        time: 1727314830,
      },
      {
        open: 181.96,
        low: 181.96,
        high: 185.65,
        close: 185.65,
        time: 1727919630,
      },
      {
        open: 185.65,
        low: 185.65,
        high: 187.53,
        close: 187.53,
        time: 1728524430,
      },
      {
        open: 187.53,
        low: 187.53,
        high: 186.38,
        close: 186.38,
        time: 1729129230,
      },
      {
        open: 186.38,
        low: 186.38,
        high: 186.4,
        close: 186.4,
        time: 1729734030,
      },
      { open: 186.4, low: 186.4, high: 186.4, close: 186.4, time: 1730338830 },
    ],
    class: "text-blue-500",
    description:
      "Amazon es una de las empresas de comercio electrónico más grandes del mundo, conocida por su constante innovación en la logística y su servicio de suscripción, Amazon Prime. Su negocio de computación en la nube, Amazon Web Services (AWS), sigue siendo uno de los segmentos de más rápido crecimiento, generando ingresos significativos. Con una sólida base de clientes y su incursión en mercados como inteligencia artificial y servicios de entretenimiento, Amazon tiene un enorme potencial de expansión a largo plazo, lo que la convierte en una excelente opción de inversión.",
  },
  tesla: {
    name: "Tesla Inc",
    code: "TSLA",
    icon: SiTesla,
    cards: [
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Inicial",
        value: 214.14,
        class: "text-green-500",
      },
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Final",
        value: 249.85,
        class: "text-red-500",
      },
      {
        icon: CaPortfolio,
        title: "Acciones Compradas",
        value: 301,
        class: "text-amber-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Inicial",
        value: 64_456.14,
        class: "text-green-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Final",
        value: 75_204.85,
        class: "text-purple-500",
      },
      {
        icon: HeOutlineMoneyBag,
        title: "Rendimiento Final",
        value: 10_748.71,
        class: "text-slate-100",
      },
    ],
    history: [
      {
        open: 214.14,
        low: 214.14,
        high: 210.66,
        close: 210.66,
        time: 1723686030,
      },
      {
        open: 210.66,
        low: 210.66,
        high: 206.28,
        close: 206.28,
        time: 1724290830,
      },
      {
        open: 206.28,
        low: 206.28,
        high: 230.17,
        close: 230.17,
        time: 1724895630,
      },
      {
        open: 230.17,
        low: 230.17,
        high: 229.81,
        close: 229.81,
        time: 1725500430,
      },
      {
        open: 229.81,
        low: 229.81,
        high: 243.92,
        close: 243.92,
        time: 1726105230,
      },
      {
        open: 243.92,
        low: 243.92,
        high: 254.22,
        close: 254.22,
        time: 1726710030,
      },
      {
        open: 254.22,
        low: 254.22,
        high: 240.66,
        close: 240.66,
        time: 1727314830,
      },
      {
        open: 240.66,
        low: 240.66,
        high: 238.77,
        close: 238.77,
        time: 1727919630,
      },
      {
        open: 238.77,
        low: 238.77,
        high: 220.89,
        close: 220.89,
        time: 1728524430,
      },
      {
        open: 220.89,
        low: 220.89,
        high: 260.48,
        close: 260.48,
        time: 1729129230,
      },
      {
        open: 260.48,
        low: 260.48,
        high: 249.85,
        close: 249.85,
        time: 1729734030,
      },
      {
        open: 249.85,
        low: 249.85,
        high: 249.85,
        close: 249.85,
        time: 1730338830,
      },
    ],
    class: "text-red-500",
    description:
      "Tesla es líder en el sector de vehículos eléctricos, respaldado por su enfoque innovador en baterías, tecnología de conducción autónoma y una infraestructura de carga de rápida expansión. Con la creciente demanda global de vehículos eléctricos y energías renovables, Tesla está bien posicionada para beneficiarse del cambio hacia la sostenibilidad. Además, su expansión en mercados emergentes y la continua mejora en su producción hacen que sus acciones sean una opción atractiva para aquellos interesados en el sector de tecnología y energías renovable",
  },
  mcdonalds: {
    name: "McDonald's",
    code: "MCD",
    icon: SiMcdonalds,
    cards: [
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Inicial",
        value: 274.87,
        class: "text-green-500",
      },
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Final",
        value: 292.11,
        class: "text-red-500",
      },
      {
        icon: CaPortfolio,
        title: "Acciones Compradas",
        value: 200,
        class: "text-amber-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Inicial",
        value: 54_974.0,
        class: "text-green-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Final",
        value: 58_422.0,
        class: "text-purple-500",
      },
      {
        icon: HeOutlineMoneyBag,
        title: "Rendimiento Final",
        value: 3_448.0,
        class: "text-slate-100",
      },
    ],
    history: [
      {
        open: 274.87,
        low: 274.87,
        high: 289.21,
        close: 289.21,
        time: 1723686030,
      },
      {
        open: 289.21,
        low: 289.21,
        high: 287.86,
        close: 287.86,
        time: 1724290830,
      },
      {
        open: 287.86,
        low: 287.86,
        high: 287.97,
        close: 287.97,
        time: 1724895630,
      },
      {
        open: 287.97,
        low: 287.97,
        high: 292.35,
        close: 292.35,
        time: 1725500430,
      },
      {
        open: 292.35,
        low: 292.35,
        high: 293.85,
        close: 293.85,
        time: 1726105230,
      },
      {
        open: 293.85,
        low: 293.85,
        high: 303.65,
        close: 303.65,
        time: 1726710030,
      },
      {
        open: 303.65,
        low: 303.65,
        high: 303.45,
        close: 303.45,
        time: 1727314830,
      },
      {
        open: 303.45,
        low: 303.45,
        high: 304.04,
        close: 304.04,
        time: 1727919630,
      },
      {
        open: 304.04,
        low: 304.04,
        high: 314.7,
        close: 314.7,
        time: 1728524430,
      },
      {
        open: 314.7,
        low: 314.7,
        high: 301.58,
        close: 301.58,
        time: 1729129230,
      },
      {
        open: 301.58,
        low: 301.58,
        high: 292.11,
        close: 292.11,
        time: 1729734030,
      },
      {
        open: 292.11,
        low: 292.11,
        high: 292.11,
        close: 292.11,
        time: 1730338830,
      },
    ],
    class: "text-yellow-500",
    description:
      "McDonald's es una de las franquicias de comida rápida más reconocidas del mundo, con una presencia en más de 100 países. Su modelo de negocio basado en franquicias, junto con sus constantes innovaciones en el menú y su enfoque en la digitalización, le permite mantenerse competitiva en la industria de alimentos y bebidas. En el corto plazo, su estrategia de expansión y optimización en el servicio digital puede impulsar el valor de sus acciones, especialmente a medida que las economías globales se recuperan y aumentan el consumo fuera del hogar.",
  },
  microsoft: {
    name: "Microsoft Corporation",
    code: "MSFT",
    icon: SiMicrosoft,
    cards: [
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Inicial",
        value: 421.03,
        class: "text-green-500",
      },
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Final",
        value: 406.35,
        class: "text-red-500",
      },
      {
        icon: CaPortfolio,
        title: "Acciones Compradas",
        value: 300,
        class: "text-amber-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Inicial",
        value: 126_309.0,
        class: "text-green-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Final",
        value: 121_905.0,
        class: "text-purple-500",
      },
      {
        icon: HeOutlineMoneyBag,
        title: "Rendimiento Final",
        value: 121_905 - 126_309,
        class: "text-slate-100",
      },
    ],
    history: [
      {
        open: 421.03,
        low: 421.03,
        high: 415.55,
        close: 415.55,
        time: 1723686030,
      },
      {
        open: 415.55,
        low: 415.55,
        high: 413.12,
        close: 413.12,
        time: 1724290830,
      },
      {
        open: 413.12,
        low: 413.12,
        high: 408.39,
        close: 408.39,
        time: 1724895630,
      },
      {
        open: 408.39,
        low: 408.39,
        high: 427.0,
        close: 427.0,
        time: 1725500430,
      },
      {
        open: 427.0,
        low: 427.0,
        high: 438.69,
        close: 438.69,
        time: 1726105230,
      },
      {
        open: 438.69,
        low: 438.69,
        high: 431.31,
        close: 431.31,
        time: 1726710030,
      },
      {
        open: 431.31,
        low: 431.31,
        high: 416.54,
        close: 416.54,
        time: 1727314830,
      },
      {
        open: 416.54,
        low: 416.54,
        high: 415.84,
        close: 415.84,
        time: 1727919630,
      },
      {
        open: 415.84,
        low: 415.84,
        high: 416.72,
        close: 416.72,
        time: 1728524430,
      },
      {
        open: 416.72,
        low: 416.72,
        high: 424.73,
        close: 424.73,
        time: 1729129230,
      },
      {
        open: 424.73,
        low: 424.73,
        high: 406.35,
        close: 406.35,
        time: 1729734030,
      },
      {
        open: 406.35,
        low: 406.35,
        high: 406.35,
        close: 406.35,
        time: 1730338830,
      },
    ],
    class: "text-blue-500",
    description:
      "Microsoft es una de las empresas de software más grandes del mundo, conocida por productos como Windows, Office y Azure, su plataforma de computación en la nube. La compañía ha diversificado su oferta en áreas como inteligencia artificial, videojuegos y computación en la nube, lo que refuerza su posición en el mercado. Con la creciente dependencia global de servicios en la nube y software, Microsoft se encuentra en una posición privilegiada para un crecimiento sostenido a largo plazo, convirtiéndola en una inversión estratégica para quienes buscan estabilidad y crecimiento en tecnología.",
  },
  bitcoin: {
    name: "Bitcoin",
    code: "BTC",
    icon: CoBrandBitcoin,
    cards: [
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Inicial",
        value: 57_534.6,
        class: "text-green-500",
      },
      {
        icon: LaMoneyBillWaveSolid,
        title: "Costo Final",
        value: 69_325.8,
        class: "text-red-500",
      },
      {
        icon: CaPortfolio,
        title: "Acciones Compradas",
        value: 6,
        class: "text-amber-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Inicial",
        value: 345_207.6,
        class: "text-green-500",
      },
      {
        icon: FlFilledMoneyHand,
        title: "Inversión Final",
        value: 415_954.8,
        class: "text-purple-500",
      },
      {
        icon: HeOutlineMoneyBag,
        title: "Rendimiento Final",
        value: 70_747.2,
        class: "text-slate-100",
      },
    ],
    history: [
      {
        open: 57534.6,
        low: 57534.6,
        high: 60372.2,
        close: 60372.2,
        time: 1723686030,
      },
      {
        open: 60372.2,
        low: 60372.2,
        high: 59373.5,
        close: 59373.5,
        time: 1724290830,
      },
      {
        open: 59373.5,
        low: 59373.5,
        high: 56183.2,
        close: 56183.2,
        time: 1724895630,
      },
      {
        open: 56183.2,
        low: 56183.2,
        high: 58134.5,
        close: 58134.5,
        time: 1725500430,
      },
      {
        open: 58134.5,
        low: 58134.5,
        high: 62938.6,
        close: 62938.6,
        time: 1726105230,
      },
      {
        open: 62938.6,
        low: 62938.6,
        high: 65175.7,
        close: 65175.7,
        time: 1726710030,
      },
      {
        open: 65175.7,
        low: 65175.7,
        high: 60751.2,
        close: 60751.2,
        time: 1727314830,
      },
      {
        open: 60751.2,
        low: 60751.2,
        high: 60316.2,
        close: 60316.2,
        time: 1727919630,
      },
      {
        open: 60316.2,
        low: 60316.2,
        high: 67418.4,
        close: 67418.4,
        time: 1728524430,
      },
      {
        open: 67418.4,
        low: 67418.4,
        high: 68191.5,
        close: 68191.5,
        time: 1729129230,
      },
      {
        open: 68191.5,
        low: 68191.5,
        high: 69325.8,
        close: 69325.8,
        time: 1729734030,
      },
      {
        open: 69325.8,
        low: 69325.8,
        high: 69325.8,
        close: 69325.8,
        time: 1730338830,
      },
    ],
    class: "text-yellow-500",
    description:
      "Bitcoin, la primera criptomoneda, se ha consolidado como una reserva de valor y un activo digital alternativo, atrayendo a inversionistas institucionales y minoristas. Con una oferta limitada y la creciente adopción de criptomonedas como parte del sistema financiero, Bitcoin ofrece una oportunidad de inversión única en un mercado en expansión. A pesar de la volatilidad, el interés por parte de empresas y fondos de inversión en activos digitales podría continuar impulsando su valor a largo plazo.",
  },
};
