const indianImages = [
  "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80",
  "https://images.unsplash.com/photo-1512361436605-a484fc560c4c?w=800&q=80",
  "https://images.unsplash.com/photo-1555529733-0e670560f4e1?w=800&q=80",
  "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=800&q=80",
  "https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=800&q=80",
  "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?w=800&q=80",
  "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=800&q=80",
  "https://images.unsplash.com/photo-1583341612074-ccea5cd64f6a?w=800&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80"
];

export const generateIndianProfiles = (count = 10, offset = 0) => {
  const names = ['Priya', 'Aisha', 'Rohan', 'Karan', 'Neha', 'Rahul', 'Anjali', 'Vikram', 'Sneha', 'Aditya', 'Meera', 'Arjun', 'Simran', 'Riya', 'Siddharth'];
  const data = [];

  for (let i = 0; i < count; i++) {
    const id = i + offset;
    data.push({
      id: id.toString(),
      name: names[id % names.length],
      age: Math.floor(Math.random() * (35 - 18 + 1)) + 18,
      distance: Math.floor(Math.random() * 20) + 1,
      image: indianImages[id % indianImages.length],
      bio: "Just looking for someone to grab coffee with."
    });
  }
  return data;
};

export const mainSwipeProfiles = generateIndianProfiles(10, 0);
export const communityProfiles = {
  'Serious Daters': generateIndianProfiles(10, 10),
  'Long-term partner': generateIndianProfiles(10, 20),
  'Free To-night': generateIndianProfiles(10, 30),
  'Looking for friends': generateIndianProfiles(10, 40),
  'Casual dating': generateIndianProfiles(10, 50),
};
