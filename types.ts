
import React from 'react';

export interface Connector {
  name: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  // Added React import to fix namespace error for React.ReactNode
  icon: React.ReactNode;
  color: string;
}
