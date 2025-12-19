import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { RunEntry } from "@/types/run"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
  data: RunEntry[]
  maxRows?: number
}

export default function CSVPreview({ data, maxRows = 5 }: Props) {
  if (data.length === 0) return null

  const previewData = data.slice(0, maxRows)

  return (
    <Card>
      <CardHeader>
        <CardTitle>CSV Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Person</TableHead>
              <TableHead>Miles</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {previewData.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.person}</TableCell>
                <TableCell>{row.miles}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {data.length > maxRows && (
          <p className="text-xs text-muted-foreground mt-2">
            Showing first {maxRows} of {data.length} rows
          </p>
        )}
      </CardContent>
    </Card>
  )
}

