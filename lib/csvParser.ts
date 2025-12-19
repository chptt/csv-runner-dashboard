import Papa from "papaparse"
import { RunEntry } from "@/types/run"

const REQUIRED_HEADERS = ["date", "person", "miles"]

export function parseAndValidateCSV(
  file: File
): Promise<{ data: RunEntry[]; error?: string }> {
  return new Promise((resolve) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const headers = results.meta.fields || []

        // Header validation
        for (const h of REQUIRED_HEADERS) {
          if (!headers.includes(h)) {
            resolve({ data: [], error: `Missing required column: ${h}` })
            return
          }
        }

        const parsed: RunEntry[] = []

        for (let i = 0; i < results.data.length; i++) {
          const row: any = results.data[i]

          const miles = Number(row.miles)
          if (!row.date || !row.person || isNaN(miles) || miles <= 0) {
            resolve({
              data: [],
              error: `Invalid data at row ${i + 2}`,
            })
            return
          }

          parsed.push({
            date: row.date,
            person: row.person,
            miles,
          })
        }

        resolve({ data: parsed })
      },
    })
  })
}
