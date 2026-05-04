const indianImages = [
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
  "https://images.unsplash.com/photo-1583341612074-ccea5cd64f6a?w=800&q=80",
  "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?w=800&q=80",
  "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=800&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
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
};
