'use client';

import { useState } from "react";
import { animals } from "@/lib/data";
import { AnimalCard } from "@/components/shared/AnimalCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export function AnimalListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("all");

  const filteredAnimals = animals.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecies = speciesFilter === 'all' || animal.species.toLowerCase() === speciesFilter;
    return matchesSearch && matchesSpecies;
  });

  const availableSpecies = [...new Set(animals.map(a => a.species))];

  return (
    <div>
      <div className="mb-8 p-4 bg-secondary/50 rounded-lg shadow-sm">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
             <Input 
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
             />
          </div>
          <Select value={speciesFilter} onValueChange={setSpeciesFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by species" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Species</SelectItem>
              {availableSpecies.map(species => (
                <SelectItem key={species} value={species.toLowerCase()}>{species}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {filteredAnimals.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAnimals.map(animal => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-2xl font-headline font-semibold">No Animals Found</h3>
          <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
