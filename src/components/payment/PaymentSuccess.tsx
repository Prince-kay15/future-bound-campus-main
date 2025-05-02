
import React from 'react';
import { Check } from 'lucide-react';

const PaymentSuccess: React.FC = () => {
  return (
    <div className="text-center py-4 sm:py-6">
      <div className="mb-3 sm:mb-4 mx-auto w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
        <Check size={20} />
      </div>
      <h3 className="text-lg sm:text-xl font-medium text-green-600 mb-1 sm:mb-2">Payment Successful!</h3>
      <p className="text-sm sm:text-base text-gray-600">Your crypto payment has been verified.</p>
      <p className="text-sm sm:text-base text-gray-600">You can now submit your application.</p>
    </div>
  );
};

export default PaymentSuccess;
