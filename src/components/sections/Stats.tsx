'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { PawPrint, Heart, Home } from "lucide-react";

const chartData = [
  { month: "January", rescued: 186, adopted: 80 },
  { month: "February", rescued: 305, adopted: 200 },
  { month: "March", rescued: 237, adopted: 120 },
  { month: "April", rescued: 73, adopted: 190 },
  { month: "May", rescued: 209, adopted: 130 },
  { month: "June", rescued: 214, adopted: 140 },
];

const chartConfig = {
  rescued: {
    label: "Rescued",
    color: "hsl(var(--primary))",
  },
  adopted: {
    label: "Adopted",
    color: "hsl(var(--secondary-foreground))",
  },
} satisfies ChartConfig;

export function Stats() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Impact By the Numbers</h2>
          <p className="max-w-2xl mt-4 text-muted-foreground">
            Every number tells a story of a life changed. See how our community's support makes a difference.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <Card className="flex flex-col items-center text-center p-6 shadow-lg transform transition-transform hover:-translate-y-2">
            <PawPrint className="h-12 w-12 text-primary mb-4" />
            <p className="text-4xl font-bold">1,224</p>
            <p className="text-muted-foreground">Animals Rescued</p>
          </Card>
          <Card className="flex flex-col items-center text-center p-6 shadow-lg transform transition-transform hover:-translate-y-2">
            <Heart className="h-12 w-12 text-primary mb-4" />
            <p className="text-4xl font-bold">978</p>
            <p className="text-muted-foreground">Lives Adopted</p>
          </Card>
          <Card className="flex flex-col items-center text-center p-6 shadow-lg transform transition-transform hover:-translate-y-2">
            <Home className="h-12 w-12 text-primary mb-4" />
            <p className="text-4xl font-bold">82</p>
            <p className="text-muted-foreground">Shelters Supported</p>
          </Card>
        </div>
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline">Monthly Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="rescued" fill="var(--color-rescued)" radius={4} />
                    <Bar dataKey="adopted" fill="var(--color-adopted)" radius={4} />
                  </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
