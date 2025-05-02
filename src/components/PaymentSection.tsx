
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Wallet } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { cryptoOptions } from './payment/CryptoOption';
import WalletAddressDisplay from './payment/WalletAddressDisplay';
import PaymentSuccess from './payment/PaymentSuccess';
import CryptoSelector from './payment/CryptoSelector';
import TransactionForm from './payment/TransactionForm';
import QRCodeDisplay from './payment/QRCodeDisplay';

interface PaymentSectionProps {
  onPaymentSuccess: () => void;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ onPaymentSuccess }) => {
  const { toast } = useToast();
  const [transactionId, setTransactionId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState('btc');

  const applicationFee = 50;
  
  const selectedWalletAddress = cryptoOptions.find(crypto => crypto.id === selectedCrypto)?.walletAddress || '';
  const selectedCryptoName = cryptoOptions.find(crypto => crypto.id === selectedCrypto)?.name || 'cryptocurrency';

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!transactionId) {
      toast({
        title: "Missing Information",
        description: "Please enter your transaction ID",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate payment processing
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentComplete(true);
      onPaymentSuccess();
      toast({
        title: "Payment Verified",
        description: "Your crypto payment has been processed successfully.",
      });
    }, 2000);
  };

  if (paymentComplete) {
    return <PaymentSuccess />;
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="mb-2 sm:mb-4">
        <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">Application Fee</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-4">
          There is a non-refundable application fee of ${applicationFee} USD equivalent in cryptocurrency.
        </p>
      </div>
      
      <Card>
        <CardContent className="pt-4 sm:pt-6 px-3 sm:px-6">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <div className="flex items-center">
              <Wallet className="mr-1 sm:mr-2 text-university-500" size={18} />
              <span className="text-sm sm:text-base font-medium">Cryptocurrency Payment</span>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <CryptoSelector 
              selectedCrypto={selectedCrypto}
              setSelectedCrypto={setSelectedCrypto}
              cryptoOptions={cryptoOptions}
            />
            
            <div>
              <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
                Send ${applicationFee} USD equivalent in {selectedCryptoName} to the wallet address below:
              </p>
              
              <WalletAddressDisplay walletAddress={selectedWalletAddress} />
              
              {/* Add QR Code Display */}
              <QRCodeDisplay 
                walletAddress={selectedWalletAddress} 
                cryptoName={selectedCryptoName}
              />
              
              <div className="mt-1 sm:mt-2">
                <p className="text-xs sm:text-sm text-gray-600">
                  After sending payment, enter your transaction ID below.
                </p>
              </div>
            </div>
            
            <TransactionForm
              transactionId={transactionId}
              setTransactionId={setTransactionId}
              onSubmit={handleSubmit}
              isProcessing={isProcessing}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSection;
