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
      image: `https://i.pravatar.cc/600?img=${(id % 70) + 1}`, // placeholder random faces
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
