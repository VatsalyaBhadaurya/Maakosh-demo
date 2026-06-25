export interface VitalReading {
  time: string;
  value: number;
}

export interface Alert {
  id: string;
  severity: "green" | "yellow" | "orange" | "red";
  message: string;
  timestamp: string;
  patient?: string;
  type: "maternal" | "neonatal";
}

export interface TimelineEvent {
  id: string;
  event: string;
  timestamp: string;
  icon: "device" | "alert" | "doctor" | "intervention" | "discharge";
}

export interface MaternalPatient {
  id: string;
  name: string;
  age: number;
  gestationalWeek: number;
  admissionDate: string;
  status: "Healthy" | "Moderate Risk" | "High Risk";
  riskScore: number;
  temperature: number;
  spo2: number;
  activityTrend: "Active" | "Normal" | "Low";
  deviceConnected: boolean;
  lastUpdated: string;
  medicalHistory: string[];
  temperatureHistory: VitalReading[];
  spo2History: VitalReading[];
}

export interface NeonatalPatient {
  id: string;
  name: string;
  birthDate: string;
  birthWeight: number;
  dayOfLife: number;
  motherName: string;
  status: "Healthy" | "Moderate Risk" | "High Risk";
  riskScore: number;
  temperature: number;
  heartRate: number;
  spo2: number;
  bilirubinTrend: number;
  deviceConnected: boolean;
  lastUpdated: string;
  temperatureHistory: VitalReading[];
  heartRateHistory: VitalReading[];
  spo2History: VitalReading[];
  bilirubinHistory: VitalReading[];
}

function generateVitals(
  baseValue: number,
  variance: number,
  count: number,
  trend: "stable" | "declining" | "rising" = "stable"
): VitalReading[] {
  const readings: VitalReading[] = [];
  const now = new Date();
  for (let i = count - 1; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 30 * 60 * 1000);
    let trendOffset = 0;
    if (trend === "declining") trendOffset = -(count - i) * (variance * 0.15);
    if (trend === "rising") trendOffset = (count - i) * (variance * 0.15);
    const value = +(
      baseValue +
      trendOffset +
      (Math.random() - 0.5) * variance
    ).toFixed(1);
    readings.push({
      time: time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      value,
    });
  }
  return readings;
}

export const maternalPatients: MaternalPatient[] = [
  {
    id: "M001",
    name: "Priya Sharma",
    age: 28,
    gestationalWeek: 36,
    admissionDate: "2024-01-15",
    status: "Healthy",
    riskScore: 12,
    temperature: 36.8,
    spo2: 98,
    activityTrend: "Normal",
    deviceConnected: true,
    lastUpdated: "2 min ago",
    medicalHistory: ["G2P1", "No complications in previous pregnancy"],
    temperatureHistory: generateVitals(36.7, 0.4, 24),
    spo2History: generateVitals(98, 1.5, 24),
  },
  {
    id: "M002",
    name: "Anita Reddy",
    age: 32,
    gestationalWeek: 38,
    admissionDate: "2024-01-12",
    status: "Moderate Risk",
    riskScore: 45,
    temperature: 37.2,
    spo2: 96,
    activityTrend: "Low",
    deviceConnected: true,
    lastUpdated: "1 min ago",
    medicalHistory: [
      "G3P2",
      "Gestational diabetes in previous pregnancy",
      "Mild pre-eclampsia",
    ],
    temperatureHistory: generateVitals(37.1, 0.6, 24, "rising"),
    spo2History: generateVitals(96, 2, 24, "declining"),
  },
  {
    id: "M003",
    name: "Fatima Khan",
    age: 25,
    gestationalWeek: 37,
    admissionDate: "2024-01-18",
    status: "Healthy",
    riskScore: 8,
    temperature: 36.6,
    spo2: 99,
    activityTrend: "Active",
    deviceConnected: true,
    lastUpdated: "5 min ago",
    medicalHistory: ["G1P0", "No prior history"],
    temperatureHistory: generateVitals(36.6, 0.3, 24),
    spo2History: generateVitals(99, 1, 24),
  },
  {
    id: "M004",
    name: "Lakshmi Devi",
    age: 35,
    gestationalWeek: 39,
    admissionDate: "2024-01-10",
    status: "High Risk",
    riskScore: 78,
    temperature: 38.1,
    spo2: 93,
    activityTrend: "Low",
    deviceConnected: true,
    lastUpdated: "30 sec ago",
    medicalHistory: [
      "G4P3",
      "Previous PPH",
      "Chronic hypertension",
      "Anemia",
    ],
    temperatureHistory: generateVitals(37.8, 0.8, 24, "rising"),
    spo2History: generateVitals(94, 2.5, 24, "declining"),
  },
  {
    id: "M005",
    name: "Deepa Nair",
    age: 29,
    gestationalWeek: 35,
    admissionDate: "2024-01-20",
    status: "Healthy",
    riskScore: 15,
    temperature: 36.7,
    spo2: 98,
    activityTrend: "Normal",
    deviceConnected: false,
    lastUpdated: "15 min ago",
    medicalHistory: ["G2P1", "Uncomplicated previous delivery"],
    temperatureHistory: generateVitals(36.7, 0.3, 24),
    spo2History: generateVitals(98, 1, 24),
  },
  {
    id: "M006",
    name: "Sunita Patel",
    age: 30,
    gestationalWeek: 37,
    admissionDate: "2024-01-14",
    status: "Moderate Risk",
    riskScore: 52,
    temperature: 37.4,
    spo2: 95,
    activityTrend: "Low",
    deviceConnected: true,
    lastUpdated: "3 min ago",
    medicalHistory: ["G2P1", "Previous cesarean", "Thyroid disorder"],
    temperatureHistory: generateVitals(37.2, 0.5, 24, "rising"),
    spo2History: generateVitals(95.5, 1.8, 24, "declining"),
  },
];

export const neonatalPatients: NeonatalPatient[] = [
  {
    id: "N001",
    name: "Baby Sharma",
    birthDate: "2024-01-16",
    birthWeight: 3.2,
    dayOfLife: 5,
    motherName: "Priya Sharma",
    status: "Healthy",
    riskScore: 10,
    temperature: 36.8,
    heartRate: 142,
    spo2: 97,
    bilirubinTrend: 5.2,
    deviceConnected: true,
    lastUpdated: "1 min ago",
    temperatureHistory: generateVitals(36.8, 0.3, 24),
    heartRateHistory: generateVitals(140, 15, 24),
    spo2History: generateVitals(97, 1.5, 24),
    bilirubinHistory: generateVitals(5.0, 1.0, 24),
  },
  {
    id: "N002",
    name: "Baby Reddy",
    birthDate: "2024-01-13",
    birthWeight: 2.8,
    dayOfLife: 8,
    motherName: "Anita Reddy",
    status: "Moderate Risk",
    riskScore: 48,
    temperature: 36.2,
    heartRate: 158,
    spo2: 94,
    bilirubinTrend: 12.8,
    deviceConnected: true,
    lastUpdated: "30 sec ago",
    temperatureHistory: generateVitals(36.3, 0.5, 24, "declining"),
    heartRateHistory: generateVitals(155, 20, 24, "rising"),
    spo2History: generateVitals(95, 2, 24, "declining"),
    bilirubinHistory: generateVitals(11.5, 2, 24, "rising"),
  },
  {
    id: "N003",
    name: "Baby Khan",
    birthDate: "2024-01-19",
    birthWeight: 3.5,
    dayOfLife: 2,
    motherName: "Fatima Khan",
    status: "Healthy",
    riskScore: 5,
    temperature: 37.0,
    heartRate: 138,
    spo2: 98,
    bilirubinTrend: 3.1,
    deviceConnected: true,
    lastUpdated: "4 min ago",
    temperatureHistory: generateVitals(37.0, 0.2, 24),
    heartRateHistory: generateVitals(138, 10, 24),
    spo2History: generateVitals(98, 1, 24),
    bilirubinHistory: generateVitals(3.0, 0.8, 24),
  },
  {
    id: "N004",
    name: "Baby Devi",
    birthDate: "2024-01-11",
    birthWeight: 2.1,
    dayOfLife: 10,
    motherName: "Lakshmi Devi",
    status: "High Risk",
    riskScore: 82,
    temperature: 35.6,
    heartRate: 172,
    spo2: 90,
    bilirubinTrend: 18.5,
    deviceConnected: true,
    lastUpdated: "15 sec ago",
    temperatureHistory: generateVitals(35.8, 0.6, 24, "declining"),
    heartRateHistory: generateVitals(168, 20, 24, "rising"),
    spo2History: generateVitals(91, 3, 24, "declining"),
    bilirubinHistory: generateVitals(16.0, 3, 24, "rising"),
  },
  {
    id: "N005",
    name: "Baby Nair",
    birthDate: "2024-01-21",
    birthWeight: 3.0,
    dayOfLife: 1,
    motherName: "Deepa Nair",
    status: "Healthy",
    riskScore: 7,
    temperature: 36.9,
    heartRate: 145,
    spo2: 97,
    bilirubinTrend: 2.5,
    deviceConnected: true,
    lastUpdated: "6 min ago",
    temperatureHistory: generateVitals(36.9, 0.2, 24),
    heartRateHistory: generateVitals(145, 12, 24),
    spo2History: generateVitals(97, 1, 24),
    bilirubinHistory: generateVitals(2.5, 0.5, 24),
  },
  {
    id: "N006",
    name: "Baby Patel",
    birthDate: "2024-01-15",
    birthWeight: 2.5,
    dayOfLife: 6,
    motherName: "Sunita Patel",
    status: "Moderate Risk",
    riskScore: 55,
    temperature: 36.1,
    heartRate: 162,
    spo2: 93,
    bilirubinTrend: 14.2,
    deviceConnected: true,
    lastUpdated: "2 min ago",
    temperatureHistory: generateVitals(36.2, 0.4, 24, "declining"),
    heartRateHistory: generateVitals(160, 18, 24, "rising"),
    spo2History: generateVitals(93.5, 2, 24, "declining"),
    bilirubinHistory: generateVitals(13.0, 2.5, 24, "rising"),
  },
];

export const alerts: Alert[] = [
  {
    id: "A001",
    severity: "red",
    message: "Hypothermia Risk — Temperature 35.6°C",
    timestamp: "2 min ago",
    patient: "Baby Devi",
    type: "neonatal",
  },
  {
    id: "A002",
    severity: "orange",
    message: "Bilirubin Trend Rising — 18.5 mg/dL",
    timestamp: "5 min ago",
    patient: "Baby Devi",
    type: "neonatal",
  },
  {
    id: "A003",
    severity: "red",
    message: "PPH Risk Increasing — SpO₂ 93%, Temp 38.1°C",
    timestamp: "8 min ago",
    patient: "Lakshmi Devi",
    type: "maternal",
  },
  {
    id: "A004",
    severity: "orange",
    message: "Bilirubin Trend Rising — 12.8 mg/dL",
    timestamp: "15 min ago",
    patient: "Baby Reddy",
    type: "neonatal",
  },
  {
    id: "A005",
    severity: "yellow",
    message: "Mild Temperature Variation — 37.2°C",
    timestamp: "20 min ago",
    patient: "Anita Reddy",
    type: "maternal",
  },
  {
    id: "A006",
    severity: "green",
    message: "All vitals stable",
    timestamp: "25 min ago",
    patient: "Baby Sharma",
    type: "neonatal",
  },
  {
    id: "A007",
    severity: "yellow",
    message: "SpO₂ trending down — 95%",
    timestamp: "30 min ago",
    patient: "Sunita Patel",
    type: "maternal",
  },
  {
    id: "A008",
    severity: "orange",
    message: "Low SpO₂ Alert — 90%",
    timestamp: "35 min ago",
    patient: "Baby Devi",
    type: "neonatal",
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: "T001",
    event: "Smart Belly Band applied",
    timestamp: "08:00 AM",
    icon: "device",
  },
  {
    id: "T002",
    event: "Neonatal Patch applied",
    timestamp: "08:15 AM",
    icon: "device",
  },
  {
    id: "T003",
    event: "Mild temperature variation detected",
    timestamp: "10:30 AM",
    icon: "alert",
  },
  {
    id: "T004",
    event: "Dr. Kapoor consulted",
    timestamp: "10:45 AM",
    icon: "doctor",
  },
  {
    id: "T005",
    event: "Bilirubin trend flagged",
    timestamp: "12:00 PM",
    icon: "alert",
  },
  {
    id: "T006",
    event: "Phototherapy initiated",
    timestamp: "12:30 PM",
    icon: "intervention",
  },
  {
    id: "T007",
    event: "Vitals stabilized",
    timestamp: "02:00 PM",
    icon: "intervention",
  },
  {
    id: "T008",
    event: "Follow-up scheduled",
    timestamp: "04:00 PM",
    icon: "doctor",
  },
];

export const hospitalStats = {
  totalMothers: 126,
  totalNewborns: 184,
  highRisk: 8,
  criticalAlerts: 3,
  devicesOnline: 298,
  devicesTotal: 310,
  avgMonitoringHours: 18.4,
  admissionsToday: 12,
};

export const districtData = [
  { district: "Mumbai Urban", highRisk: 45, hypothermia: 12, jaundice: 28, devices: 156 },
  { district: "Pune", highRisk: 32, hypothermia: 8, jaundice: 22, devices: 120 },
  { district: "Nagpur", highRisk: 28, hypothermia: 15, jaundice: 18, devices: 95 },
  { district: "Nashik", highRisk: 22, hypothermia: 10, jaundice: 15, devices: 78 },
  { district: "Aurangabad", highRisk: 35, hypothermia: 18, jaundice: 25, devices: 88 },
  { district: "Thane", highRisk: 38, hypothermia: 14, jaundice: 20, devices: 110 },
  { district: "Kolhapur", highRisk: 18, hypothermia: 7, jaundice: 12, devices: 65 },
  { district: "Solapur", highRisk: 25, hypothermia: 11, jaundice: 16, devices: 72 },
];

export const monthlyTrends = [
  { month: "Aug", highRisk: 42, hypothermia: 18, jaundice: 30, utilization: 72 },
  { month: "Sep", highRisk: 38, hypothermia: 15, jaundice: 28, utilization: 75 },
  { month: "Oct", highRisk: 45, hypothermia: 20, jaundice: 32, utilization: 78 },
  { month: "Nov", highRisk: 35, hypothermia: 12, jaundice: 25, utilization: 82 },
  { month: "Dec", highRisk: 30, hypothermia: 10, jaundice: 22, utilization: 85 },
  { month: "Jan", highRisk: 28, hypothermia: 8, jaundice: 20, utilization: 88 },
];

export const complianceItems = [
  { name: "CDSCO Medical Device Rules 2017", category: "Regulatory", status: "planned" as const },
  { name: "ISO 13485 — Quality Management", category: "Quality", status: "planned" as const },
  { name: "ISO 14971 — Risk Management", category: "Safety", status: "planned" as const },
  { name: "IEC 62304 — Software Lifecycle", category: "Software", status: "planned" as const },
  { name: "IEC 62366 — Usability Engineering", category: "Usability", status: "planned" as const },
  { name: "IEC 60601 — Medical Electrical Equipment", category: "Hardware", status: "planned" as const },
  { name: "ISO 10993 — Biocompatibility", category: "Materials", status: "planned" as const },
  { name: "ISO 27001 — Information Security", category: "Security", status: "planned" as const },
  { name: "IEC 81001-5-1 — Health Software Security", category: "Security", status: "planned" as const },
  { name: "HL7 FHIR — Interoperability", category: "Interoperability", status: "planned" as const },
  { name: "Digital Personal Data Protection Act 2023", category: "Privacy", status: "planned" as const },
];

export const teamMembers = [
  { name: "Dr. Arjun Mehta", role: "Founder & CEO", background: "Biomedical Engineering, IIT Delhi" },
  { name: "Dr. Kavita Rao", role: "Chief Medical Officer", background: "Obstetrics & Gynecology, AIIMS" },
  { name: "Rahul Verma", role: "CTO", background: "IoT & Embedded Systems, IISc Bangalore" },
  { name: "Dr. Sneha Iyer", role: "Head of Neonatology", background: "Neonatal Medicine, CMC Vellore" },
  { name: "Vikram Singh", role: "VP Engineering", background: "Health Informatics, Stanford" },
  { name: "Meera Joshi", role: "Head of Regulatory Affairs", background: "Medical Device Regulation, TUV SUD" },
];
