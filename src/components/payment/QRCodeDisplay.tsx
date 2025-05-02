
import React from 'react';
import { QrCode } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface QRCodeDisplayProps {
  walletAddress: string;
  cryptoName: string;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ walletAddress, cryptoName }) => {
  const { toast } = useToast();
  
  // Generate a QR code URL using the QR code API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(walletAddress)}`;
  
  const handleQRClick = () => {
    toast({
      title: "QR Code Contains Wallet Address",
      description: "Scan this code with your cryptocurrency wallet app to automatically enter the address.",
    });
  };

  return (
    <div className="mt-2 sm:mt-4">
      <p className="text-xs sm:text-sm text-gray-600 mb-2">
        <QrCode className="inline-block mr-1" size={16} /> Scan QR code to pay with {cryptoName}
      </p>
      <div className="flex justify-center bg-white p-2 sm:p-3 rounded-md border border-gray-100">
        <img 
          src={qrCodeUrl} 
          alt={`QR code for ${cryptoName} address`} 
          className="max-w-full h-auto cursor-pointer"
          onClick={handleQRClick}
          width="150"
          height="150"
        />
      </div>
    </div>
  );
};

export default QRCodeDisplay;
