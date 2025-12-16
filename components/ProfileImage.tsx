import React, { useState } from 'react';

interface ProfileImageProps {
  className?: string;
  alt?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ 
  className = "w-full h-full object-cover", 
  alt = "Profile" 
}) => {
  // List of paths to try in order
  const paths = [
    '/images/profile.jpg',
    '/images/profile.jpeg',
    '/images/profile.png',
    'profile.jpg', // Root fallback
  ];

  // Fallback URL (Unsplash professional portrait)
  const fallbackUrl = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80';

  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState(paths[0]);

  const handleError = () => {
    if (currentPathIndex < paths.length - 1) {
      // Try next local path
      const nextIndex = currentPathIndex + 1;
      setCurrentPathIndex(nextIndex);
      setImgSrc(paths[nextIndex]);
    } else {
      // All local paths failed, use remote fallback
      setImgSrc(fallbackUrl);
    }
  };

  return (
    <img 
      src={imgSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      onError={handleError}
    />
  );
};

export default ProfileImage;