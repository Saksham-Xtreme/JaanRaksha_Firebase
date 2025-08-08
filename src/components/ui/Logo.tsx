import { Heart, Shield, PawPrint } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon */}
      <div className="relative">
        {/* Main shield background */}
        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-lg">
          {/* Inner heart */}
          <Heart className="h-5 w-5 text-white fill-white" />
        </div>
        {/* Paw print overlay */}
        <div className="absolute -bottom-1 -right-1">
          <PawPrint className="h-4 w-4 text-white bg-green-600 rounded-full p-0.5" />
        </div>
      </div>
      
      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight font-headline text-primary-dark">
            JaanRaksha
          </span>
          <span className="text-xs text-muted-foreground -mt-1">
            Protecting Every Life
          </span>
        </div>
      )}
    </div>
  );
}
