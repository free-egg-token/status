export type ServiceGroupId = 'api' | 'billing' | 'platform'

export type ServiceId =
  | 'chat'
  | 'streaming'
  | 'models'
  | 'anthropic'
  | 'billing'
  | 'eggs'
  | 'website'
  | 'github'

export interface UptimeDay {
  date: string
  uptime: number
}

export interface Service {
  id: ServiceId
  group: ServiceGroupId
  endpoint: string
  days: UptimeDay[]
  uptime: number
}

export interface ModelInfo {
  id: string
  context: string
  noteKey: string
}

export interface Incident {
  id: 'egg-oversupply' | 'model-consistency' | 'billing-precision'
  date: string
  durationMinutes: number
  serviceId: ServiceId
}

/**
 * Everything below is hardcoded on purpose: this status page is a parody and
 * performs no health checks. The fixed window keeps server and client output
 * identical during hydration.
 */
export const STATUS_WINDOW_END = '2026-11-12'
export const STATUS_WINDOW_DAYS = 90
export const LAST_CHECKED = '2026-11-12 14:00 UTC'

const INCIDENT_DIPS: Partial<Record<ServiceId, string[]>> = {
  eggs: ['2026-10-27'],
  models: ['2026-09-14'],
  billing: ['2026-10-07'],
}

function buildUptimeDays(serviceId: ServiceId): UptimeDay[] {
  const end = Date.parse(`${STATUS_WINDOW_END}T00:00:00Z`)
  const dips = INCIDENT_DIPS[serviceId] ?? []

  return Array.from({ length: STATUS_WINDOW_DAYS }, (_, index) => {
    const date = new Date(end - (STATUS_WINDOW_DAYS - 1 - index) * 86_400_000)
      .toISOString()
      .slice(0, 10)

    return { date, uptime: dips.includes(date) ? 99.8 : 100 }
  })
}

function buildService(
  id: ServiceId,
  group: ServiceGroupId,
  endpoint: string,
): Service {
  const days = buildUptimeDays(id)
  const uptime = days.reduce((sum, day) => sum + day.uptime, 0) / days.length

  return { id, group, endpoint, days, uptime }
}

export const SERVICES: Service[] = [
  buildService('chat', 'api', '/v1/chat/completions'),
  buildService('streaming', 'api', '/v1/chat/completions · stream'),
  buildService('models', 'api', '/v1/models'),
  buildService('anthropic', 'api', '/anthropic/v1/messages'),
  buildService('billing', 'billing', '/dashboard/billing'),
  buildService('eggs', 'platform', 'free-egg-1'),
  buildService('website', 'platform', 'free-egg.pages.dev'),
  buildService('github', 'platform', 'github.com/free-egg-token'),
]

export const SERVICE_GROUPS: { id: ServiceGroupId; services: Service[] }[] = [
  {
    id: 'api',
    services: SERVICES.filter((service) => service.group === 'api'),
  },
  {
    id: 'billing',
    services: SERVICES.filter((service) => service.group === 'billing'),
  },
  {
    id: 'platform',
    services: SERVICES.filter((service) => service.group === 'platform'),
  },
]

export const METRIC_IDS = [
  'uptime90',
  'incidents',
  'models',
  'credit',
] as const

export type MetricId = (typeof METRIC_IDS)[number]

export const MODELS: ModelInfo[] = [
  { id: 'gpt-4o', context: '128k', noteKey: 'flagship' },
  { id: 'gpt-4o-mini', context: '128k', noteKey: 'fast' },
  { id: 'gpt-4.1-mini', context: '1M', noteKey: 'priceQuality' },
  { id: 'o3-mini', context: '200k', noteKey: 'reasoning' },
  { id: 'deepseek-chat', context: '64k', noteKey: 'chat' },
  { id: 'deepseek-reasoner', context: '64k', noteKey: 'cot' },
  { id: 'claude-3-5-sonnet-20241022', context: '200k', noteKey: 'longContext' },
  { id: 'gemini-2.0-flash', context: '1M', noteKey: 'lowLatency' },
  { id: 'free-egg-1', context: '∞', noteKey: 'inHouse' },
]

export const INCIDENTS: Incident[] = [
  {
    id: 'egg-oversupply',
    date: '2026-10-27',
    durationMinutes: 12,
    serviceId: 'eggs',
  },
  {
    id: 'model-consistency',
    date: '2026-09-14',
    durationMinutes: 8,
    serviceId: 'models',
  },
  {
    id: 'billing-precision',
    date: '2026-10-07',
    durationMinutes: 4,
    serviceId: 'billing',
  },
]
