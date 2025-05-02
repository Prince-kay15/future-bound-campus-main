
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface CourseProps {
  id: string;
  title: string;
  level: 'Undergraduate' | 'Graduate' | 'Postgraduate';
  duration: string;
  description: string;
  faculty: string;
}

const CourseCard = ({ course }: { course: CourseProps }) => {
  const levelColor = {
    Undergraduate: 'bg-blue-100 text-blue-800',
    Graduate: 'bg-green-100 text-green-800',
    Postgraduate: 'bg-purple-100 text-purple-800'
  }[course.level];

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <CardHeader className="pb-2 md:pb-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
          <CardTitle className="text-base md:text-lg font-serif text-university-700 mb-1 sm:mb-0 pr-2">{course.title}</CardTitle>
          <Badge className={`${levelColor} text-xs whitespace-nowrap self-start sm:self-auto`}>{course.level}</Badge>
        </div>
        <CardDescription className="text-xs md:text-sm text-gray-500 mt-1">
          {course.faculty} • {course.duration}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pb-2 md:pb-4">
        <p className="text-xs md:text-sm text-gray-700">{course.description}</p>
      </CardContent>
      <CardFooter className="pt-1 pb-3 md:pb-4">
        <Link 
          to={`/apply?course=${encodeURIComponent(course.id)}&level=${encodeURIComponent(course.level)}`}
          className="university-btn w-full text-center py-1.5"
        >
          Apply Now
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
