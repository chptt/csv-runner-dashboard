"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {
  people: string[]
  value: string
  onChange: (v: string) => void
}

export default function PersonSelector({ people, value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-60">
        <SelectValue placeholder="Select person" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ALL">All</SelectItem>
        {people.map(p => (
          <SelectItem key={p} value={p}>
            {p}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
