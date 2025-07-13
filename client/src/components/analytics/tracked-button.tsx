import { Button } from "@/components/ui/button";
import { trackCTAClick, trackPhoneClick, trackEmailClick } from "@/lib/analytics";
import { ButtonProps } from "@/components/ui/button";

interface TrackedButtonProps extends ButtonProps {
  trackingType: 'cta' | 'phone' | 'email' | 'external';
  trackingData: {
    action: string;
    location: string;
    service?: string;
    url?: string;
    linkText?: string;
  };
  href?: string;
  children: React.ReactNode;
}

export const TrackedButton = ({ 
  trackingType, 
  trackingData, 
  href, 
  onClick, 
  children, 
  ...buttonProps 
}: TrackedButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    // Track the interaction
    switch (trackingType) {
      case 'cta':
        trackCTAClick(trackingData.action, trackingData.location, trackingData.service);
        break;
      case 'phone':
        trackPhoneClick(trackingData.location);
        break;
      case 'email':
        trackEmailClick(trackingData.location);
        break;
    }
    
    // Call original onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  if (href) {
    return (
      <Button {...buttonProps} onClick={handleClick}>
        <a href={href} className="w-full h-full flex items-center justify-center">
          {children}
        </a>
      </Button>
    );
  }

  return (
    <Button {...buttonProps} onClick={handleClick}>
      {children}
    </Button>
  );
};