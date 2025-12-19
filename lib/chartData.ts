import { RunEntry } from "@/types/run"

export function totalMilesPerPerson(data: RunEntry[]) {
  const map: Record<string, number> = {}

  data.forEach(d => {
    map[d.person] = (map[d.person] || 0) + d.miles
  })

  return Object.entries(map).map(([person, miles]) => ({
    person,
    miles,
  }))
}

export function milesByDate(data: RunEntry[]) {
  return data.map(d => ({
    date: d.date,
    miles: d.miles,
  }))
}
