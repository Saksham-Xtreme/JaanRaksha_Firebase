import type { Animal, Shelter, LandPlot } from './types';

export const animals: Animal[] = [
  {
    id: 'a1',
    name: 'Buddy',
    species: 'Dog',
    story: 'Buddy was found wandering alone near a highway, scared and hungry. A kind traveler stopped and brought him to safety. Despite his rough start, Buddy is an incredibly loving and trusting soul. He loves long walks in the park, playing fetch for hours, and ending the day with a good cuddle on the sofa. He is great with kids and other dogs, making him a perfect family pet. He just needs a patient home to help him build his confidence.',
 photos: [
      'https://images.unsplash.com/photo-1583337130417-dafd2fc97930?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 'https://images.unsplash.com/photo-1561176519-f259916f1d88?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 'https://images.unsplash.com/photo-1583511657558-4cb89ae17833?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 ],
    status: 'available_for_adoption',
    registeredAt: new Date('2023-01-15'),
 ranking: 5,
  },
  {
 id: 'a7',
 name: 'Gauri',
 species: 'Cow',
 story: 'Gauri is a gentle and peaceful cow rescued from difficult conditions. She loves grazing in open fields and enjoys human company. She is looking for a loving home where she can live out her days peacefully.',
 photos: [
 'https://images.unsplash.com/photo-1528494625654-1b6c3a169e24?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 ],
    status: 'available_for_adoption',
    registeredAt: new Date('2023-07-01'),
 ranking: 3,
  },
  {
    id: 'a2',
    name: 'Whiskers',
    species: 'Cat',
    story: 'Whiskers was part of a litter born in a backyard. The homeowner couldn\'t care for them and brought them to our shelter. Whiskers is a curious and playful kitten who loves chasing laser pointers and batting at feathery toys. She has a gentle purr that can be heard from a mile away, especially when she\'s being petted. She is a little shy at first but warms up quickly with a bit of love and a few treats.',
 photos: [
 'https://images.unsplash.com/photo-1519052537078-if4ec9fa6e27?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 ],
    status: 'available_for_adoption',
    registeredAt: new Date('2023-02-20'),
 ranking: 4,
  },
  {
    id: 'a3',
    name: 'Rocky',
    species: 'Dog',
    story: 'Rocky is an energetic and smart Border Collie mix who was surrendered by his owner due to a change in living situation. He knows several commands like sit, stay, and paw. He thrives on activity and would be a great companion for someone who loves hiking, running, or agility training. Rocky is looking for an active owner who can keep up with his zest for life and give him the mental and physical stimulation he needs.',
 photos: [
 'https://images.unsplash.com/photo-1568572816165-f98aa9cf8198?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 ],
    status: 'adoption_pending',
    registeredAt: new Date('2023-03-10'),
 ranking: 7,
  },
  {
    id: 'a4',
    name: 'Luna',
    species: 'Cat',
    story: 'Luna is a graceful and serene Siamese cat who enjoys the quieter side of life. She was found in a quiet neighborhood, well-cared for but without a microchip. She prefers a calm environment where she can lounge in sunny spots and observe the world from a comfortable window perch. Luna would be happiest in a home without young children or loud dogs. She is the epitome of elegance and will bring a tranquil presence to her new home.',
 photos: [
 'https://images.unsplash.com/photo-151481430-8755916f8519?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 'https://images.unsplash.com/photo-1482562363807-f368834f931e?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 ],
    status: 'adopted',
    registeredAt: new Date('2023-04-05'),
 ranking: 9,
  },
   {
    id: 'a5',
    name: 'Max',
    species: 'Dog',
    story: 'Max is a goofy and lovable Golden Retriever who was rescued from an overcrowded shelter. He has a heart of gold and a tail that never stops wagging. His favorite things include swimming, chasing squirrels, and getting belly rubs. He is a gentle giant who gets along with everyone he meets, including other pets. Max\'s joyful spirit is contagious, and he\'s ready to share it with a loving family.',
 photos: [
 'https://images.unsplash.com/photo-1612072381372-0931034b30ef?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 ],
    status: 'available_for_adoption',
    registeredAt: new Date('2023-05-21'),
 ranking: 6,
  },
  {
    id: 'a6',
    name: 'Cleo',
    species: 'Cat',
    story: 'Cleo is a sleek black cat with mesmerizing green eyes. She was left at our doorstep in a box with a note saying her family had to move and couldn\'t take her. She is a master of stealth and loves to play hide-and-seek. Cleo is an independent cat who appreciates her own space but will seek you out for affection on her own terms. A warm lap and a string to chase are all she needs to be happy.',
 photos: [
 'https://images.unsplash.com/photo-1548802673-380cd8cfef3c?q=80&w=2830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 ],
    status: 'available_for_adoption',
    registeredAt: new Date('2023-06-11'),
 ranking: 8,
  }
];

export const shelters: Shelter[] = [
  {
    id: 's1',
    name: 'Happy Paws Sanctuary',
    description: 'A safe haven for dogs and cats, providing medical care and rehabilitation.',
    animalCount: 45,
    fundsRaised: 12500,
    location: 'Chennai, India',
    photo: 'https://placehold.co/600x400'
  },
  {
    id: 's2',
    name: 'The Furry Friends Refuge',
    description: 'Dedicated to rescuing, caring for, and rehoming animals of all kinds.',
    animalCount: 72,
    fundsRaised: 34200,
    location: 'Mumbai, India',
    photo: 'https://placehold.co/600x400'
  },
  {
    id: 's3',
    name: 'Whisker Woods',
    description: 'A specialized shelter for cats, focusing on those with special needs.',
    animalCount: 25,
    fundsRaised: 8900,
    location: 'Greenfield, TX',
 photo: 'https://placehold.co/600x400'
  },
];

export const landPlots: LandPlot[] = [
  {
    id: 'lp1',
    ownerName: 'Jane Doe',
    location: 'Bangalore, India',
    address: '123 Meadow Lane, Bangalore, India',
 photos: ['https://images.unsplash.com/photo-1534351450161-bf101375b870?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    description: '5 acres of fenced, open land with a small barn. Perfect for a new dog shelter.',
    status: 'available',
  },
  {
    id: 'lp2',
    ownerName: 'Priya Sharma',
    location: 'Delhi, India',
    address: '456 Forest Road, Delhi, India',
 photos: ['https://images.unsplash.com/photo-1524813508317-254811549484?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1569083194510-f7a0817d315c?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    description: '10 acres of wooded land with running water and existing outbuildings. Ideal for a large-scale sanctuary.',
    status: 'available',
  },
  {
    id: 'lp3',
    ownerName: 'Emily White',
    location: 'Stonewall, VA',
    address: '789 Mountain View, Stonewall, VA',
 photos: ['https://placehold.co/600x400'],
    description: 'A 2-acre plot with a modern facility, previously used as a vet clinic. Awaiting verification.',
    status: 'pending_verification',
  },
];
