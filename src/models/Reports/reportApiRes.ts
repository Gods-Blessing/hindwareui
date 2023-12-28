export type ReportDataInter = Root2[]

export interface Root2 {
  agent_name: string
  agent_tone: string
  call_score?: number
  customer_location: string
  customer_name: string
  customer_tone: string
  date_of_conversation?: string
  filename: string
  identified_defective_part?: string
  model_name?: string
  pin_code: string
  problem_details: string
  problem_type: string
  proposed_resolution?: string
  root_cause_analysis?: string
  sku_name?: string
  suggestion_to_agent_by_system?: string
  suggestions_by_agent?: string
  suggestions_to_rnd_team?: string
}