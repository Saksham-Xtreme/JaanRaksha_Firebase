export interface Animal {
  id: string;
  name: string;
  species: string;
  story: string;
  photos: string[];
  status: 'available_for_adoption' | 'adoption_pending' | 'adopted';
  registeredAt: Date;
}

export interface Shelter {
  id: string;
  name: string;
  description: string;
  animalCount: number;
  fundsRaised: number;
  location: string;
  photo: string;
}

export interface LandPlot {
  id: string;
  ownerName: string;
  location: string;
  address: string;
  photos: string[];
  description: string;
  status: 'pending_verification' | 'available' | 'in_use';
}
