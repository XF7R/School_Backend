import express, { Request, Response } from "express";
import { connectDB, prisma } from "./conflig/db";
import { ClassRoom, Student, Teacher } from "@prisma/client";

const app = express();
app.use(express.json());
const port = 3000;

connectDB();

app.post("/getallteacher", async (req: Request, res: Response) => {
  const newuser = req.body as Teacher;

  await prisma.teacher.create({
    data: newuser,
  });
  return res.json("Teacher added");
});

//class room

//create class room

app.post("/createclassroom", async (req: Request, res: Response) => {
  const createclassroom = req.body as ClassRoom;
  await prisma.classRoom.create({
    data: createclassroom,
  });
  res.json("classroom created");
});

//get all classroom

app.get("/getallclassroom", async (req: Request, res: Response) => {
  const getallclassroom = await prisma.classRoom.findMany();
  res.json(getallclassroom);
});

//get classroom by id

app.get("/getclassroom/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const getclassroomwithID = await prisma.classRoom.findFirst({
    where: { id: id },
  });
  res.json(getclassroomwithID);
});

//student

//create student
app.post("/createstudent", async (req: Request, res: Response) => {
  const createstudent = req.body as Student;
  await prisma.student.create({
    data: createstudent,
  });
  res.json("Teacher created");
});

//get all student

app.get("/createstudent", async (req: Request, res: Response) => {
  const createstudent = await prisma.student.findMany();
  res.json("students created");
});

//teacher

//create teacher
app.post("/createteacher", async (req: Request, res: Response) => {
  const createteacher = req.body as Teacher;
  await prisma.teacher.create({
    data: createteacher,
  });
  res.json("Teacher created");
});
// get all teacher`

app.get("/createteacher", async (req: Request, res: Response) => {
  const createteacher = await prisma.teacher.findMany();
  res.json("Teacher created");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
