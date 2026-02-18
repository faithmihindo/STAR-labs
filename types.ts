
// Fix: Import React to resolve missing 'React' namespace error for React.ReactNode.
import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceData {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface LabResult {
  title: string;
  concept: string;
  feasibility: number;
  roadmap: string[];
}

export interface MetricPoint {
  name: string;
  innovation: number;
  impact: number;
}
