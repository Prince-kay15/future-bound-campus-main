
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ApplicationForm from '@/components/ApplicationForm';
import { getCourseById } from '@/utils/courses';

const Apply = () => {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get('course');
  const level = searchParams.get('level');
  
  const selectedCourse = courseId ? getCourseById(courseId)?.id : undefined;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gray-100 py-10 sm:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="page-title text-2xl sm:text-3xl md:text-4xl">Apply to Future Bound Campus</h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Complete the application form below to begin your journey with us. Our admissions 
              team will review your application and respond within 24 hours.
            </p>
          </div>
        </section>
        
        {/* Application Form Section */}
        <section className="py-8 sm:py-12 px-4">
          <div className="container mx-auto">
            <ApplicationForm selectedCourse={selectedCourse} selectedLevel={level || undefined} />
          </div>
        </section>
        
        {/* Application Process Section */}
        <section className="py-10 sm:py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="section-title text-center mb-8 sm:mb-12 text-xl sm:text-2xl">Application Process</h2>
            
            <div className="max-w-4xl mx-auto px-2 sm:px-4">
              <div className="relative">
                {/* Timeline connector */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-university-200"></div>
                
                <div className="space-y-8 sm:space-y-12">
                  {/* Step 1 */}
                  <div className="relative flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 mb-3 md:mb-0 text-center md:text-right">
                      <h3 className="text-lg sm:text-xl font-bold text-university-700 mb-1 sm:mb-2">Submit Your Application</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Complete the application form with your personal information, academic background, 
                        and course preferences. Pay the application fee to finalize your submission.
                      </p>
                    </div>
                    <div className="z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-university-500 flex items-center justify-center my-2 md:my-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="relative flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 mb-3 md:mb-0 text-center md:text-right md:hidden">
                      <h3 className="text-lg sm:text-xl font-bold text-university-700 mb-1 sm:mb-2">Application Review</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Our admissions team will carefully review your application within 24 hours, 
                        assessing your academic qualifications and suitability for your chosen program.
                      </p>
                    </div>
                    <div className="z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-university-500 flex items-center justify-center my-2 md:my-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div className="md:w-1/2 md:pl-8 text-center md:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-university-700 mb-1 sm:mb-2 hidden md:block">Application Review</h3>
                      <p className="text-sm sm:text-base text-gray-600 hidden md:block">
                        Our admissions team will carefully review your application within 24 hours, 
                        assessing your academic qualifications and suitability for your chosen program.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="relative flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 mb-3 md:mb-0 text-center md:text-right">
                      <h3 className="text-lg sm:text-xl font-bold text-university-700 mb-1 sm:mb-2">Admission Decision</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        You will receive an admission letter via email informing you of our decision. 
                        If accepted, the letter will include important information about next steps.
                      </p>
                    </div>
                    <div className="z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-university-500 flex items-center justify-center my-2 md:my-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="relative flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 mb-3 md:mb-0 text-center md:text-right md:hidden">
                      <h3 className="text-lg sm:text-xl font-bold text-university-700 mb-1 sm:mb-2">Enrollment</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Upon acceptance, follow the instructions in your admission letter to complete 
                        your enrollment, including any required deposits or additional documentation.
                      </p>
                    </div>
                    <div className="z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-university-500 flex items-center justify-center my-2 md:my-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div className="md:w-1/2 md:pl-8 text-center md:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-university-700 mb-1 sm:mb-2 hidden md:block">Enrollment</h3>
                      <p className="text-sm sm:text-base text-gray-600 hidden md:block">
                        Upon acceptance, follow the instructions in your admission letter to complete 
                        your enrollment, including any required deposits or additional documentation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-10 sm:py-16 px-4">
          <div className="container mx-auto">
            <h2 className="section-title text-center mb-8 sm:mb-12 text-xl sm:text-2xl">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-university-700 mb-1 sm:mb-2">What documents do I need for my application?</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  For a complete application, you'll need your academic transcripts, identification 
                  documents, and program-specific requirements. Some programs may require additional 
                  materials like portfolios or test scores.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-university-700 mb-1 sm:mb-2">What is the application fee?</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  The standard application fee is $50 USD, payable online during the application 
                  submission process. This fee is non-refundable and covers the cost of processing 
                  your application.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-university-700 mb-1 sm:mb-2">Can I apply for multiple programs?</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Yes, you can apply for up to three programs with a single application fee. 
                  Please indicate your program preferences in order of priority within your application.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-university-700 mb-1 sm:mb-2">Are scholarships available?</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Yes, Future Bound Campus offers a variety of scholarships based on academic 
                  merit, financial need, and specific talents. You'll be automatically considered 
                  for scholarships upon acceptance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Apply;
