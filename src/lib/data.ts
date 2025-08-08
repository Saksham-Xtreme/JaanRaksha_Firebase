import type { Animal, Shelter, LandPlot } from './types';

export const animals: Animal[] = [
  {
    id: 'a1',
    name: 'Raja',
    species: 'Indian Street Dog',
    story: 'Raja was found wandering alone near a highway in Mumbai, scared and hungry. A kind traveler stopped and brought him to safety. Despite his rough start, Raja is an incredibly loving and trusting soul. He loves long walks in the park, playing fetch for hours, and ending the day with a good cuddle on the sofa. He is great with kids and other dogs, making him a perfect family pet. He just needs a patient home to help him build his confidence.',
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
    id: 'a2',
    name: 'Gauri',
    species: 'Indian Cow',
    story: 'Gauri is a gentle and peaceful cow rescued from difficult conditions in rural Maharashtra. She loves grazing in open fields and enjoys human company. She is looking for a loving home where she can live out her days peacefully.',
    photos: [
      'https://images.unsplash.com/photo-1528494625654-1b6c3a169e24?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    status: 'available_for_adoption',
    registeredAt: new Date('2023-07-01'),
    ranking: 3,
  },
  {
    id: 'a3',
    name: 'Mithi',
    species: 'Indian Cat',
    story: 'Mithi was part of a litter born in a backyard in Delhi. The homeowner couldn\'t care for them and brought them to our shelter. Mithi is a curious and playful kitten who loves chasing laser pointers and batting at feathery toys. She has a gentle purr that can be heard from a mile away, especially when she\'s being petted. She is a little shy at first but warms up quickly with a bit of love and a few treats.',
    photos: [
      'https://images.unsplash.com/photo-1519052537078-if4ec9fa6e27?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    status: 'available_for_adoption',
    registeredAt: new Date('2023-02-20'),
    ranking: 4,
  },
  {
    id: 'a4',
    name: 'Sheru',
    species: 'Indian Pariah Dog',
    story: 'Sheru is an energetic and smart Indian Pariah Dog who was surrendered by his owner due to a change in living situation. He knows several commands like sit, stay, and paw. He thrives on activity and would be a great companion for someone who loves hiking, running, or agility training. Sheru is looking for an active owner who can keep up with his zest for life and give him the mental and physical stimulation he needs.',
    photos: [
      'https://images.unsplash.com/photo-1568572816165-f98aa9cf8198?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    status: 'adoption_pending',
    registeredAt: new Date('2023-03-10'),
    ranking: 7,
  },
  {
    id: 'a5',
    name: 'Lakshmi',
    species: 'Indian Cat',
    story: 'Lakshmi is a graceful and serene Indian cat who enjoys the quieter side of life. She was found in a quiet neighborhood in Bangalore, well-cared for but without a microchip. She prefers a calm environment where she can lounge in sunny spots and observe the world from a comfortable window perch. Lakshmi would be happiest in a home without young children or loud dogs. She is the epitome of elegance and will bring a tranquil presence to her new home.',
    photos: [
      'https://images.unsplash.com/photo-151481430-8755916f8519?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1482562363807-f368834f931e?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    status: 'adopted',
    registeredAt: new Date('2023-04-05'),
    ranking: 9,
  },
  {
    id: 'a6',
    name: 'Bholu',
    species: 'Indian Street Dog',
    story: 'Bholu is a goofy and lovable Indian street dog who was rescued from an overcrowded shelter in Chennai. He has a heart of gold and a tail that never stops wagging. His favorite things include swimming, chasing squirrels, and getting belly rubs. He is a gentle giant who gets along with everyone he meets, including other pets. Bholu\'s joyful spirit is contagious, and he\'s ready to share it with a loving family.',
    photos: [
      'https://images.unsplash.com/photo-1612072381372-0931034b30ef?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    status: 'available_for_adoption',
    registeredAt: new Date('2023-05-21'),
    ranking: 6,
  },
  {
    id: 'a7',
    name: 'Kali',
    species: 'Indian Cat',
    story: 'Kali is a sleek black cat with mesmerizing green eyes. She was left at our doorstep in Kolkata in a box with a note saying her family had to move and couldn\'t take her. She is a master of stealth and loves to play hide-and-seek. Kali is an independent cat who appreciates her own space but will seek you out for affection on her own terms. A warm lap and a string to chase are all she needs to be happy.',
    photos: [
      'https://images.unsplash.com/photo-1548802673-380cd8cfef3c?q=80&w=2830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    status: 'available_for_adoption',
    registeredAt: new Date('2023-06-11'),
    ranking: 8,
  },
  {
    id: 'a8',
    name: 'Motu',
    species: 'Indian Pariah Dog',
    story: 'Motu is a friendly and loyal Indian Pariah Dog rescued from the streets of Hyderabad. He has a gentle temperament and loves to play with children. Motu is very protective of his family and would make an excellent guard dog. He enjoys long walks and is always ready for a game of fetch.',
    photos: [
      'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    status: 'available_for_adoption',
    registeredAt: new Date('2023-08-15'),
    ranking: 2,
  },
  {
    id: 'a9',
    name: 'Chintu',
    species: 'Indian Cat',
    story: 'Chintu is a playful orange tabby cat found in a garden in Pune. He loves to climb trees and chase butterflies. Chintu is very affectionate and loves to sit on laps while being stroked. He gets along well with other cats and would be perfect for a family with children.',
    photos: [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    status: 'available_for_adoption',
    registeredAt: new Date('2023-09-10'),
    ranking: 1,
  },
  {
    id: 'a10',
    name: 'Nandi',
    species: 'Indian Bull',
    story: 'Nandi is a majestic Indian bull rescued from a dairy farm in Gujarat. He is gentle and loves to be brushed and cared for. Nandi enjoys grazing in open fields and would be perfect for a farm or sanctuary setting.',
    photos: [
      'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    status: 'available_for_adoption',
    registeredAt: new Date('2023-10-05'),
    ranking: 10,
  },
  {
    id: 'a11',
    name: 'Bakri',
    species: 'Indian Goat',
    story: 'Bakri is a friendly goat rescued from a market in Rajasthan. She loves climbing on rocks and eating fresh grass. Bakri is very social and gets along well with other farm animals.',
    photos: [
      'https://images.unsplash.com/photo-1524813508317-254811549484?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    status: 'available_for_adoption',
    registeredAt: new Date('2023-11-12'),
    ranking: 11,
  },
  {
    id: 'a12',
    name: 'Murga',
    species: 'Indian Rooster',
    story: 'Murga is a beautiful Indian rooster rescued from a poultry farm. He has vibrant feathers and loves to roam freely. Murga would be perfect for a farm or rural setting where he can live naturally.',
    photos: [
      'https://images.unsplash.com/photo-1569083194510-f7a0817d315c?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    status: 'available_for_adoption',
    registeredAt: new Date('2023-12-01'),
    ranking: 12,
  },
  {
    id: 'a13',
    name: 'Bandar',
    species: 'Indian Monkey',
    story: 'Bandar is a rescued monkey found injured in a forest near Bangalore. He is now healthy and loves climbing trees and playing with enrichment toys. Bandar needs a specialized sanctuary environment.',
    photos: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    status: 'available_for_adoption',
    registeredAt: new Date('2024-01-15'),
    ranking: 13,
  },
  {
    id: 'a14',
    name: 'Hathi',
    species: 'Indian Elephant',
    story: 'Hathi is a gentle elephant rescued from a circus in Kerala. He loves bathing in rivers and eating fresh fruits. Hathi needs a large sanctuary with proper elephant care facilities.',
    photos: [
      'https://images.unsplash.com/photo-1534351450161-bf101375b870?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    status: 'available_for_adoption',
    registeredAt: new Date('2024-02-20'),
    ranking: 14,
  },
  {
    id: 'a15',
    name: 'Sher',
    species: 'Indian Tiger',
    story: 'Sher is a rescued tiger cub found abandoned in a forest in Madhya Pradesh. He is now healthy and needs a specialized wildlife sanctuary with proper tiger care facilities.',
    photos: [
      'https://images.unsplash.com/photo-1568572816165-f98aa9cf8198?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    status: 'available_for_adoption',
    registeredAt: new Date('2024-03-10'),
    ranking: 15,
  },
  {
    id: 'a16',
    name: 'Mittu',
    species: 'Indian Cat',
    story: 'Mittu is a beautiful Indian cat with distinctive markings found in a temple in Varanasi. She is very spiritual and loves sitting in sunny spots. Mittu would be perfect for a peaceful home environment.',
    photos: [
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    status: 'available_for_adoption',
    registeredAt: new Date('2024-04-01'),
    ranking: 16,
  },
  {
    id: 'a17',
    name: 'Pari',
    species: 'Indian Cat',
    story: 'Pari is an elegant white cat rescued from the streets of Jaipur. She has a gentle nature and loves being pampered. Pari would be perfect for someone looking for a calm and loving companion.',
    photos: [
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    status: 'available_for_adoption',
    registeredAt: new Date('2024-04-15'),
    ranking: 17,
  },
  {
    id: 'a18',
    name: 'Rani',
    species: 'Indian Cat',
    story: 'Rani is a regal Indian cat with a beautiful coat found in a palace garden in Udaipur. She has a dignified personality and loves attention. Rani would be perfect for a family that appreciates elegance.',
    photos: [
      'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    status: 'available_for_adoption',
    registeredAt: new Date('2024-05-01'),
    ranking: 18,
  }
];

export const shelters: Shelter[] = [
  {
    id: 's1',
    name: 'Jeev Daya Ashram',
    description: 'A safe haven for dogs and cats, providing medical care and rehabilitation in the heart of Mumbai.',
    animalCount: 45,
    fundsRaised: 12500,
    location: 'Mumbai, Maharashtra',
    photo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 's2',
    name: 'Pashu Seva Kendra',
    description: 'Dedicated to rescuing, caring for, and rehoming animals of all kinds in Delhi.',
    animalCount: 72,
    fundsRaised: 34200,
    location: 'Delhi, India',
    photo: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 's3',
    name: 'Gau Seva Trust',
    description: 'A specialized shelter for cows and other farm animals, focusing on those with special needs.',
    animalCount: 25,
    fundsRaised: 8900,
    location: 'Ahmedabad, Gujarat',
    photo: 'https://images.unsplash.com/photo-1524813508317-254811549484?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 's4',
    name: 'Prani Mitra Foundation',
    description: 'Comprehensive animal welfare center providing shelter, medical care, and adoption services.',
    animalCount: 38,
    fundsRaised: 15600,
    location: 'Bangalore, Karnataka',
    photo: 'https://images.unsplash.com/photo-1569083194510-f7a0817d315c?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 's5',
    name: 'Van Vihar Wildlife Sanctuary',
    description: 'Specialized sanctuary for rescued wildlife including tigers, elephants, and monkeys.',
    animalCount: 15,
    fundsRaised: 25000,
    location: 'Bhopal, Madhya Pradesh',
    photo: 'https://images.unsplash.com/photo-1534351450161-bf101375b870?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export const landPlots: LandPlot[] = [
  {
    id: 'lp1',
    ownerName: 'Rajesh Kumar',
    location: 'Bangalore, Karnataka',
    address: '123 Green Meadows, Whitefield, Bangalore, Karnataka',
    photos: ['https://images.unsplash.com/photo-1534351450161-bf101375b870?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    description: '5 acres of fenced, open land with a small barn. Perfect for a new dog shelter with plenty of space for animals to roam.',
    status: 'available',
  },
  {
    id: 'lp2',
    ownerName: 'Priya Sharma',
    location: 'Delhi, India',
    address: '456 Forest Road, Mehrauli, Delhi, India',
    photos: ['https://images.unsplash.com/photo-1524813508317-254811549484?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1569083194510-f7a0817d315c?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    description: '10 acres of wooded land with running water and existing outbuildings. Ideal for a large-scale sanctuary with natural habitat.',
    status: 'available',
  },
  {
    id: 'lp3',
    ownerName: 'Amit Patel',
    location: 'Mumbai, Maharashtra',
    address: '789 Coastal View, Bandra West, Mumbai, Maharashtra',
    photos: ['https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    description: 'A 2-acre plot with a modern facility, previously used as a veterinary clinic. Awaiting verification for animal shelter use.',
    status: 'pending_verification',
  },
  {
    id: 'lp4',
    ownerName: 'Sunita Devi',
    location: 'Chennai, Tamil Nadu',
    address: '321 Farm Road, OMR, Chennai, Tamil Nadu',
    photos: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    description: '8 acres of agricultural land with irrigation facilities. Perfect for a farm animal sanctuary with grazing areas.',
    status: 'available',
  },
  {
    id: 'lp5',
    ownerName: 'Vikram Singh',
    location: 'Rajasthan, India',
    address: '789 Desert Farm, Jaisalmer, Rajasthan',
    photos: ['https://images.unsplash.com/photo-1524813508317-254811549484?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    description: '15 acres of desert land with natural water sources. Ideal for wildlife sanctuary and camel rescue.',
    status: 'available',
  }
];
