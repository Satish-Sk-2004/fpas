// import React, { useState } from 'react';
// import { Card, CardHeader, CardTitle, CardContent, Input, Table, TableHead, TableBody, TableRow, TableCell } from '@/components/ui';

// const Years3 = () => {
//   const [faculty, setFaculty] = useState({
//     name: 'Ms.S.Santhi',
//     dept: 'IT',
//     designation: 'AP',
//     areaOfSpecialization: 'Data Analytics',
//     teachingExp: 8.2,
//     industryExp: 0,
//     oddCourses: 'Java Programming, Computer Organization and Architecture',
//     evenCourses: 'Big Data Analytics, Operating Systems',
//     ugProjectsGuided: ''
//   });

//   return (
//     <Card className="w-full max-w-4xl">
//       <CardHeader>
//         <CardTitle>Faculty Performance Appraisal System</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label htmlFor="name" className="block font-medium mb-1">
//               Name
//             </label>
//             <Input id="name" value={faculty.name} readOnly />
//           </div>
//           <div>
//             <label htmlFor="dept" className="block font-medium mb-1">
//               Department
//             </label>
//             <Input id="dept" value={faculty.dept} readOnly />
//           </div>
//           <div>
//             <label htmlFor="designation" className="block font-medium mb-1">
//               Designation
//             </label>
//             <Input id="designation" value={faculty.designation} readOnly />
//           </div>
//           <div>
//             <label htmlFor="areaOfSpecialization" className="block font-medium mb-1">
//               Area of Specialization
//             </label>
//             <Input id="areaOfSpecialization" value={faculty.areaOfSpecialization} readOnly />
//           </div>
//           <div>
//             <label htmlFor="teachingExp" className="block font-medium mb-1">
//               Teaching Exp.
//             </label>
//             <Input id="teachingExp" value={faculty.teachingExp} readOnly />
//           </div>
//           <div>
//             <label htmlFor="industryExp" className="block font-medium mb-1">
//               Industry Exp.
//             </label>
//             <Input id="industryExp" value={faculty.industryExp} readOnly />
//           </div>
//         </div>

//         <Table className="mt-6">
//           <TableHead>
//             <TableRow>
//               <TableCell>Courses Taught (T&L)</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <TableRow>
//               <TableCell>ODD: {faculty.oddCourses}</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>EVEN: {faculty.evenCourses}</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>UG Projects Guided: {faculty.ugProjectsGuided}</TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </CardContent>
//     </Card>
//   );
// };

// export default Years3;