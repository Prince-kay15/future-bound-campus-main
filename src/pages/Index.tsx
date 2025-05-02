
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Card, CardContent } from "@/components/ui/card";
import CourseCard from '@/components/CourseCard';
import { courses } from '@/utils/courses';

const Index = () => {
  // Get one sample course from each level
  const undergraduateCourse = courses.find(course => course.level === 'Undergraduate');
  const graduateCourse = courses.find(course => course.level === 'Graduate');
  const postgraduateCourse = courses.find(course => course.level === 'Postgraduate');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Programs Section */}
        <section className="university-section bg-gray-50">
          <div className="container mx-auto">
            <h2 className="section-title text-center">Our Programs</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Future Bound Campus offers a wide range of undergraduate, graduate, and postgraduate 
              programs designed to prepare you for success in your chosen field.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Undergraduate</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive bachelor's degree programs providing a solid foundation in your chosen field.
                  </p>
                  <Link to="/courses?level=Undergraduate" className="text-university-500 hover:text-university-600 font-medium">
                    View Programs →
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Graduate</h3>
                  <p className="text-gray-600 mb-4">
                    Advanced master's programs to deepen your expertise and enhance your career prospects.
                  </p>
                  <Link to="/courses?level=Graduate" className="text-university-500 hover:text-university-600 font-medium">
                    View Programs →
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Postgraduate</h3>
                  <p className="text-gray-600 mb-4">
                    Rigorous doctoral programs for those pursuing academic excellence and research innovation.
                  </p>
                  <Link to="/courses?level=Postgraduate" className="text-university-500 hover:text-university-600 font-medium">
                    View Programs →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Featured Courses Section */}
        <section className="university-section">
          <div className="container mx-auto">
            <h2 className="section-title text-center">Featured Courses</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Explore some of our most popular programs across all levels of study.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {undergraduateCourse && <CourseCard course={undergraduateCourse} />}
              {graduateCourse && <CourseCard course={graduateCourse} />}
              {postgraduateCourse && <CourseCard course={postgraduateCourse} />}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/courses" className="university-btn-outline">
                View All Courses
              </Link>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="university-section bg-university-800 text-white">
          <div className="container mx-auto">
            <h2 className="section-title text-white text-center">Why Choose Future Bound Campus</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
                <p className="text-gray-300">
                  Rigorous programs taught by industry leaders and renowned researchers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Career Support</h3>
                <p className="text-gray-300">
                  Dedicated career services and industry connections for job placement.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5V17m0 0v2.5M12 17h2.5M12 17h-2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Network</h3>
                <p className="text-gray-300">
                  Join a diverse community of students and alumni from around the world.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
                <p className="text-gray-300">
                  State-of-the-art campus with cutting-edge research facilities.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="university-section">
          <div className="container mx-auto text-center">
            <h2 className="section-title">Ready to Begin Your Journey?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Take the first step toward your future by applying to Future Bound Campus today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/apply" className="university-btn text-lg">
                Apply Now
              </Link>
              <Link to="/courses" className="university-btn-outline text-lg">
                Explore Programs
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
