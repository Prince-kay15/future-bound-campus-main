
import React from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CryptoOption } from './CryptoOption';

interface CryptoSelectorProps {
  selectedCrypto: string;
  setSelectedCrypto: (value: string) => void;
  cryptoOptions: CryptoOption[];
}

const CryptoSelector: React.FC<CryptoSelectorProps> = ({ selectedCrypto, setSelectedCrypto, cryptoOptions }) => {
  return (
    <div>
      <Label htmlFor="crypto-select" className="text-sm mb-2 block">Select Cryptocurrency</Label>
      <Select 
        value={selectedCrypto} 
        onValueChange={setSelectedCrypto}
      >
        <SelectTrigger id="crypto-select" className="w-full">
          <SelectValue placeholder="Select a cryptocurrency" />
        </SelectTrigger>
        <SelectContent>
          {cryptoOptions.map((crypto) => (
            <SelectItem key={crypto.id} value={crypto.id}>
              <div className="flex items-center">
                {crypto.icon}
                <span className="ml-2">{crypto.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CryptoSelector;
