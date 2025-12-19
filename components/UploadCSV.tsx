"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { parseAndValidateCSV } from "@/lib/csvParser"
import { RunEntry } from "@/types/run"

type Props = {
  onDataLoaded: (data: RunEntry[]) => void
}

export default function UploadCSV({ onDataLoaded }: Props) {
  const [error, setError] = useState<string | null>(null)
  const [fileName, setFileName] = useState("No file selected")
  const fileRef = useRef<HTMLInputElement>(null)

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setFileName(file.name)

    const result = await parseAndValidateCSV(file)

    if (result.error) {
      setError(result.error)
      onDataLoaded([])
    } else {
      setError(null)
      onDataLoaded(result.data)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <input
          ref={fileRef}
          type="file"
          accept=".csv"
          onChange={handleFile}
          className="hidden"
        />

        <Button
          type="button"
          onClick={() => fileRef.current?.click()}
        >
          Upload CSV
        </Button>

        <span className="text-sm text-muted-foreground">
          {fileName}
        </span>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}
