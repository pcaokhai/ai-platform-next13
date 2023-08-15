'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('5e8fb6f1-65ba-4c90-89ab-a33d2a01f516');
  }, []);

  return null;
};
