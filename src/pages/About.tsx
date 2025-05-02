
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="page-title">About Future Bound Campus</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Committed to academic excellence, innovation, and student success since our founding.
            </p>
          </div>
        </section>
        
        {/* Mission & Vision Section */}
        <section className="university-section">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  At Future Bound Campus, our mission is to provide transformative educational experiences 
                  that empower students to become innovative thinkers, ethical leaders, and engaged citizens 
                  who contribute meaningfully to society and excel in their chosen fields.
                </p>
                <p className="text-gray-600">
                  We are dedicated to fostering a diverse and inclusive community where intellectual curiosity 
                  thrives, and where research, scholarship, and creative expression are valued and supported.
                </p>
              </div>
              
              <div>
                <h2 className="section-title">Our Vision</h2>
                <p className="text-gray-600 mb-6">
                  To be a globally recognized institution that sets the standard for excellence in education, 
                  research, and innovation, while preparing students to address the complex challenges of 
                  our rapidly changing world.
                </p>
                <p className="text-gray-600">
                  We envision a future where our graduates are distinguished by their intellectual depth, 
                  creative problem-solving abilities, ethical leadership, and commitment to making a 
                  positive impact on society.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* History Section */}
        <section className="university-section bg-gray-50">
          <div className="container mx-auto">
            <h2 className="section-title text-center mb-12">Our History</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex justify-center md:justify-end">
                  <div className="w-24 h-24 bg-university-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1985
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-university-700 mb-2">Founding</h3>
                  <p className="text-gray-600">
                    Future Bound Campus was established as a small college with just three departments: 
                    Business, Engineering, and Liberal Arts. Founded by Dr. Elizabeth Thornton, the institution 
                    was built on the principles of academic excellence and practical education.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex justify-center md:justify-end">
                  <div className="w-24 h-24 bg-university-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1997
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-university-700 mb-2">University Status</h3>
                  <p className="text-gray-600">
                    After a decade of growth and academic achievements, the college was granted university 
                    status. This milestone allowed for expanded graduate programs and research opportunities, 
                    marking a new chapter in our institution's development.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex justify-center md:justify-end">
                  <div className="w-24 h-24 bg-university-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2008
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-university-700 mb-2">Innovation Center</h3>
                  <p className="text-gray-600">
                    The opening of our flagship Innovation Center revolutionized our approach to education. 
                    This state-of-the-art facility brought together students, faculty, and industry partners 
                    to collaborate on cutting-edge research and entrepreneurial ventures.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex justify-center md:justify-end">
                  <div className="w-24 h-24 bg-university-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    Today
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-university-700 mb-2">Global Leadership</h3>
                  <p className="text-gray-600">
                    Today, Future Bound Campus stands as a leader in higher education with over 20,000 students 
                    from more than 100 countries. Our commitment to innovation, research excellence, and 
                    providing a transformative educational experience remains unwavering as we continue 
                    to shape the next generation of global leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="university-section">
          <div className="container mx-auto">
            <h2 className="section-title text-center mb-12">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-university-100 text-university-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-university-700 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in all aspects of our academic and institutional endeavors, 
                  challenging ourselves to achieve the highest standards.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-university-100 text-university-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-university-700 mb-2">Diversity & Inclusion</h3>
                <p className="text-gray-600">
                  We celebrate diversity and are committed to creating an inclusive environment where 
                  all individuals are valued and respected.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-university-100 text-university-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-university-700 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We foster a culture of innovation and creative thinking, encouraging our community to 
                  explore new ideas and approaches.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-university-100 text-university-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-university-700 mb-2">Global Perspective</h3>
                <p className="text-gray-600">
                  We embrace a global perspective, preparing students to thrive in an interconnected world 
                  and address international challenges.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="university-section bg-university-800 text-white">
          <div className="container mx-auto text-center">
            <h2 className="section-title text-white">Join Our Academic Community</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Take the first step toward becoming part of our diverse community of scholars, 
              innovators, and future leaders.
            </p>
            <div className="space-x-4">
              <a href="/apply" className="bg-white text-university-700 hover:bg-gray-100 px-6 py-2 rounded-md transition duration-300">
                Apply Today
              </a>
              <a href="/courses" className="border-2 border-white text-white hover:bg-white/10 px-6 py-2 rounded-md transition duration-300">
                Explore Programs
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
