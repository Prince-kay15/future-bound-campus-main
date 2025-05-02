
import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface TransactionFormProps {
  transactionId: string;
  setTransactionId: (value: string) => void;
  onSubmit: (e: React.MouseEvent) => void;
  isProcessing: boolean;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ 
  transactionId, 
  setTransactionId, 
  onSubmit, 
  isProcessing 
}) => {
  return (
    <div>
      <div className="space-y-1 sm:space-y-2">
        <Label htmlFor="transactionId" className="text-sm">Transaction ID</Label>
        <Input 
          id="transactionId"
          placeholder="Enter your transaction ID"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          className="text-sm"
        />
      </div>
      
      <div className="mt-4 sm:mt-6">
        <button 
          onClick={onSubmit}
          disabled={isProcessing}
          className={`w-full university-btn py-2 sm:py-3 text-xs sm:text-sm ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isProcessing ? 'Verifying...' : 'Verify Payment'}
        </button>
      </div>
    </div>
  );
};

export default TransactionForm;
