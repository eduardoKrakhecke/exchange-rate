import { DailyRateData } from "@app/models/daily-rate-data";

export class DailyRate {
  from: string
  lastUpdatedAt: string
  success: boolean
  to: string
  data: DailyRateData[]
}
