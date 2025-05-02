
import { CourseProps } from '@/components/CourseCard';

export const courses: CourseProps[] = [
  {
    id: 'computer-science',
    title: 'Computer Science',
    level: 'Undergraduate',
    duration: '4 years',
    description: 'Dive into the world of algorithms, programming languages, and computational systems. This program prepares you for careers in software development, AI, and more.',
    faculty: 'Science & Technology',
  },
  {
    id: 'business-administration',
    title: 'Business Administration',
    level: 'Undergraduate',
    duration: '3 years',
    description: 'Develop essential business skills in management, marketing, finance, and entrepreneurship to prepare for leadership roles in the corporate world.',
    faculty: 'Business & Economics',
  },
  {
    id: 'psychology',
    title: 'Psychology',
    level: 'Undergraduate',
    duration: '3 years',
    description: 'Understand human behavior and mental processes through scientific research and theoretical perspectives. Prepare for careers in counseling, research, or clinical practice.',
    faculty: 'Social Sciences',
  },
  {
    id: 'data-science',
    title: 'Data Science',
    level: 'Graduate',
    duration: '2 years',
    description: 'Master the skills needed to analyze complex data, build predictive models, and derive actionable insights for businesses and organizations.',
    faculty: 'Science & Technology',
  },
  {
    id: 'international-business',
    title: 'International Business',
    level: 'Graduate',
    duration: '2 years',
    description: 'Gain a global perspective on business practices, international trade, and cross-cultural management to excel in the worldwide marketplace.',
    faculty: 'Business & Economics',
  },
  {
    id: 'clinical-psychology',
    title: 'Clinical Psychology',
    level: 'Graduate',
    duration: '2 years',
    description: 'Develop advanced skills in psychological assessment, therapy, and research to help individuals with mental health challenges.',
    faculty: 'Social Sciences',
  },
  {
    id: 'phd-computer-science',
    title: 'PhD in Computer Science',
    level: 'Postgraduate',
    duration: '4-5 years',
    description: 'Conduct cutting-edge research in specialized areas of computer science, contributing new knowledge to the field and preparing for academic or research careers.',
    faculty: 'Science & Technology',
  },
  {
    id: 'phd-business',
    title: 'PhD in Business',
    level: 'Postgraduate',
    duration: '4-6 years',
    description: 'Engage in advanced research on business theories and practices, developing expertise that shapes the future of commerce and management.',
    faculty: 'Business & Economics',
  },
  {
    id: 'phd-psychology',
    title: 'PhD in Psychology',
    level: 'Postgraduate',
    duration: '5-7 years',
    description: 'Advance psychological science through innovative research methodologies and theoretical frameworks, preparing for roles in academia, research, or clinical leadership.',
    faculty: 'Social Sciences',
  }
];

export const getCourseById = (id: string): CourseProps | undefined => {
  return courses.find(course => course.id === id);
};

export const getCoursesByLevel = (level: string): CourseProps[] => {
  return courses.filter(course => course.level === level);
};
