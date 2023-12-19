chool System Using Express And Prisma DB
Important

Make .env File And Download Packages

Download Packages
$ npm i
Upload schema.prisma To Database
$ npx prisma db push
.env File

DATABASE_URL="mysql://USER_NAME:PASSWORD@IP:PORT/DATABASE_NAME"
Routs To Use All Functions
Class
Path	Methods
/class/get/all	GET
/class/get/with_id/ENTER_CLASS_ID	GET
/class/add/new	POST
How Add New Class with json
{
  "name": "class_1"
}
Student
Path	Methods
/student/get/all	GET
/student/add/new	POST
How Add New Student with json
{
  "username": "STUDENT_NAME",
  "classRoom_id": "CLASS_ID"
}
Teacher
Path	Methods
/student/get/all	GET
/student/add/new	POST
How Add New Teacher with json
{
  "username": "TEACHER_NAME",
  "phone": "TEACHER_PHONE_NUMBER",
  "Specialization": "TEACHER_SPECILICATION",
  "classRoom_id": "CLASS_ID"
}
Note

You Need To Connect With Database And Push Prisma db

# Documentation
Node.Js
Prisma
Azure Studio
Xampp
Postman
