import { Heart, PawPrint } from "lucide-react";

interface LogoIconProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LogoIcon({ size = "md", className = "" }: LogoIconProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Main shield background */}
      <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-lg">
        {/* Inner heart */}
        <Heart className={`text-white fill-white ${size === "sm" ? "h-3 w-3" : size === "md" ? "h-5 w-5" : "h-7 w-7"}`} />
      </div>
      {/* Paw print overlay */}
      <div className="absolute -bottom-1 -right-1">
        <PawPrint className={`text-white bg-green-600 rounded-full p-0.5 ${size === "sm" ? "h-3 w-3" : size === "md" ? "h-4 w-4" : "h-5 w-5"}`} />
      </div>
    </div>
  );
}
