
import React from 'react';
import { Copy } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface WalletAddressDisplayProps {
  walletAddress: string;
}

const WalletAddressDisplay: React.FC<WalletAddressDisplayProps> = ({ walletAddress }) => {
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    toast({
      title: "Wallet Address Copied",
      description: "The wallet address has been copied to your clipboard.",
    });
  };

  return (
    <div className="relative">
      <div className="p-2 sm:p-3 bg-gray-100 rounded-md text-xs sm:text-sm break-all pr-8 sm:pr-10 font-mono">
        {walletAddress}
      </div>
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-university-500"
        title="Copy to clipboard"
      >
        <Copy size={16} />
      </button>
    </div>
  );
};

export default WalletAddressDisplay;
