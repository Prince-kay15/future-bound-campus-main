
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/utils/courses';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('level') || 'All');
  
  useEffect(() => {
    const level = searchParams.get('level');
    if (level) {
      setActiveTab(level);
    }
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === 'All') {
      searchParams.delete('level');
    } else {
      searchParams.set('level', value);
    }
    setSearchParams(searchParams);
  };

  const filteredCourses = activeTab === 'All' 
    ? courses 
    : courses.filter(course => course.level === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gray-100 py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="page-title">Our Courses</h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of undergraduate, graduate, and postgraduate 
              programs designed to help you achieve your academic and career goals.
            </p>
          </div>
        </section>
        
        {/* Courses Section */}
        <section className="university-section">
          <div className="container mx-auto">
            {/* Filter Tabs */}
            <Tabs
              defaultValue={activeTab}
              value={activeTab}
              onValueChange={handleTabChange}
              className="mb-4 sm:mb-6 md:mb-8"
            >
              <div className="flex justify-center">
                <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2 p-1 mb-6 sm:mb-8 w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg bg-muted shadow-sm">
                  <TabsTrigger 
                    value="All" 
                    className="rounded-md text-xs sm:text-sm px-3 py-2 transition-all data-[state=active]:bg-university-500 data-[state=active]:text-white font-medium"
                  >
                    All Courses
                  </TabsTrigger>
                  <TabsTrigger 
                    value="Undergraduate" 
                    className="rounded-md text-xs sm:text-sm px-3 py-2 transition-all data-[state=active]:bg-university-500 data-[state=active]:text-white font-medium"
                  >
                    Undergraduate
                  </TabsTrigger>
                  <TabsTrigger 
                    value="Graduate" 
                    className="rounded-md text-xs sm:text-sm px-3 py-2 transition-all data-[state=active]:bg-university-500 data-[state=active]:text-white font-medium"
                  >
                    Graduate
                  </TabsTrigger>
                  <TabsTrigger 
                    value="Postgraduate" 
                    className="rounded-md text-xs sm:text-sm px-3 py-2 transition-all data-[state=active]:bg-university-500 data-[state=active]:text-white font-medium"
                  >
                    Postgraduate
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value={activeTab}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map(course => (
                      <CourseCard key={course.id} course={course} />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-6 sm:py-8">
                      <p className="text-gray-500">No courses found for this level.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
