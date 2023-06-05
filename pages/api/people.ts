const faker = require('faker');
import type { NextApiRequest, NextApiResponse } from "next";



type User = {
  name: string;
  email: string;
  title: string;
  role: string;
};



const generateUsers = (count: number): User[] => {
  return Array.from({ length: count }, () => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    title: faker.name.jobTitle(),
    role: faker.name.jobType(),
  }));

};




export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  
  const { page = 1, count = "10" } = req.query;
  const pageNum = parseInt(page as string, 10);
  const countNum = parseInt(count as string, 10);

  const startIndex = (pageNum - 1) * 10;
  const endIndex = startIndex + 10;

  const users = generateUsers(countNum);
  users.sort((a, b) => a.name.localeCompare(b.name));
  const paginatedUsers = users.slice(startIndex, endIndex);

  res.status(200).json(paginatedUsers);
}