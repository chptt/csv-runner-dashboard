import { RunEntry } from "@/types/run"

export function calculateMetrics(data: RunEntry[]) {
  if (data.length === 0) {
    return { average: 0, min: 0, max: 0 }
  }

  const miles = data.map(d => d.miles)

  const total = miles.reduce((a, b) => a + b, 0)

  return {
    average: +(total / miles.length).toFixed(2),
    min: Math.min(...miles),
    max: Math.max(...miles),
  }
}

export function groupByPerson(data: RunEntry[]) {
  return data.reduce((acc, curr) => {
    if (!acc[curr.person]) acc[curr.person] = []
    acc[curr.person].push(curr)
    return acc
  }, {} as Record<string, RunEntry[]>)
}
