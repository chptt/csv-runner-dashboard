"use client"

import { useMemo, useState } from "react"
import UploadCSV from "@/components/UploadCSV"
import MetricsCard from "@/components/MetricsCard"
import { RunEntry } from "@/types/run"
import { calculateMetrics, groupByPerson } from "@/lib/metrics"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Charts from "@/components/Charts"
import PersonSelector from "@/components/PersonSelector"
import CSVPreview from "@/components/CSVPreview"

export default function Home() {
  const [data, setData] = useState<RunEntry[]>([])

  const overallMetrics = useMemo(
    () => calculateMetrics(data),
    [data]
  )

  const perPerson = useMemo(
    () => groupByPerson(data),
    [data]
  )
  const [selectedPerson, setSelectedPerson] = useState("ALL")

const people = Object.keys(perPerson)

const filteredData =
  selectedPerson === "ALL"
    ? data
    : data.filter(d => d.person === selectedPerson)

  return (
    <main className="p-6 max-w-5xl mx-auto space-y-6">
      <Card>
        <CardHeader>
            <CardTitle>CSV Runner Dashboard</CardTitle>
            <p className="text-sm text-muted-foreground">
              Upload a CSV file to analyze running activity
            </p>
        </CardHeader>

        <CardContent>
          <UploadCSV onDataLoaded={setData} />
        </CardContent>
      </Card>
      {data.length > 0 && (
  <>
    <CSVPreview data={data} />

    <MetricsCard
      title="Overall Metrics"
      {...overallMetrics}
    />
  </>
)}

      {data.length > 0 && (
        <>
          <MetricsCard
            title="Overall Metrics"
            {...overallMetrics}
          />

          {Object.entries(perPerson).map(([person, runs]) => (
            <MetricsCard
              key={person}
              title={`${person} Metrics`}
              {...calculateMetrics(runs)}
            />
            
          ))}
           <PersonSelector
      people={people}
      value={selectedPerson}
      onChange={setSelectedPerson}
    />

    <Charts data={filteredData} />
        </>
        
      )}
    </main>
  )
}
