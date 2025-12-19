import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
  title: string
  average: number
  min: number
  max: number
}

export default function MetricsCard({ title, average, min, max }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-sm text-muted-foreground">Average</p>
          <p className="text-xl font-semibold">{average}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Min</p>
          <p className="text-xl font-semibold">{min}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Max</p>
          <p className="text-xl font-semibold">{max}</p>
        </div>
      </CardContent>
    </Card>
  )
}
