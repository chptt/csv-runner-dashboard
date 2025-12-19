"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"
import { RunEntry } from "@/types/run"
import { totalMilesPerPerson, milesByDate } from "@/lib/chartData"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
  data: RunEntry[]
}

export default function Charts({ data }: Props) {
  if (data.length === 0) return null
  const perPersonData = totalMilesPerPerson(data)
  const byDateData = milesByDate(data)

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Miles Over Time</CardTitle>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={byDateData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="miles" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Miles per Person</CardTitle>
        </CardHeader>
        <CardContent className="h-64 min-h-[256px]">
            <ResponsiveContainer width="100%" aspect={2}>

            <BarChart data={perPersonData}>
              <XAxis dataKey="person" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="miles" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
