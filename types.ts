// Added import React to fix "Cannot find namespace 'React'" error
import React from 'react';

export type Language = 'en' | 'ar';

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // Stored as number for calculations, formatted for display
  category: 'appetizers' | 'main' | 'desserts' | 'beverages';
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  requests: string;
}
