import { MenuItem } from '../types';

export const menuItems: Record<'en' | 'ar', MenuItem[]> = {
  en: [
    {
      id: '1',
      name: 'Signature Nachos',
      description: 'Crispy tortilla chips layered with melted cheese, jalapenos, and our secret spiced meat blend.',
      price: 3.500,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '2',
      name: 'Traditional Hummus',
      description: 'Creamy blend of chickpeas, tahini, lemon, and olive oil, served with fresh bread.',
      price: 1.250,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1637949385162-e416fb15b2ce?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '3',
      name: 'Machboos Chicken',
      description: 'The national dish of Kuwait. Spiced rice with tender chicken, infused with loomi and saffron.',
      price: 4.500,
      category: 'main',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '4',
      name: 'Mutabbaq Zubaidi',
      description: 'Fried Zubaidi fish served over spiced rice with a side of daqqus tomato sauce.',
      price: 6.750,
      category: 'main',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '5',
      name: 'Lamb Tashreeb',
      description: 'Hearty stew with tender lamb and vegetables soaked into layers of ragag bread.',
      price: 3.750,
      category: 'main',
      image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '6',
      name: 'Exotic Fruit Salad',
      description: 'A refreshing medley of seasonal tropical fruits, drizzled with rose water syrup.',
      price: 2.750,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '7',
      name: 'Luqaimat',
      description: 'Sweet fried dumplings drizzled with date syrup and sesame seeds.',
      price: 1.500,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '8',
      name: 'Arabic Coffee',
      description: 'Traditional Kuwaiti coffee with cardamom and saffron, served with dates.',
      price: 2.000,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b5c73311?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '9',
      name: 'Fresh Lemon Mint',
      description: 'Icy refreshing blend of fresh lemon juice and mint leaves.',
      price: 1.750,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop'
    }
  ],
  ar: [
    {
      id: '1',
      name: 'ناتشوز التوقيع',
      description: 'رقائق التورتيلا المقرمشة مع الجبن الذائب، الهالابينو، ومزيج اللحوم المتبل الخاص بنا.',
      price: 3.500,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '2',
      name: 'حمص تقليدي',
      description: 'مزيج كريمي من الحمص، الطحينة، الليمون، وزيت الزيتون، يقدم مع الخبز الطازج.',
      price: 1.250,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1637949385162-e416fb15b2ce?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '3',
      name: 'مجبوس دجاج',
      description: 'الطبق الوطني الكويتي. أرز متبل مع دجاج طري، منكه باللومي والزعفران.',
      price: 4.500,
      category: 'main',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '4',
      name: 'مطبق زبيدي',
      description: 'سمك زبيدي مقلي يقدم فوق أرز متبل مع صلصة الدقوس.',
      price: 6.750,
      category: 'main',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '5',
      name: 'تشريب لحم',
      description: 'يخنة غنية باللحم الطري والخضروات، مسكوبة فوق طبقات من خبز الرقاق.',
      price: 3.750,
      category: 'main',
      image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '6',
      name: 'سلطة فواكه استوائية',
      description: 'مزيج منعش من الفواكه الاستوائية الموسمية مع شراب ماء الورد.',
      price: 2.750,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '7',
      name: 'لقيمات',
      description: 'كرات عجين مقلية حلوة مغطاة بدبس التمر والسمسم.',
      price: 1.500,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '8',
      name: 'قهوة عربية',
      description: 'قهوة كويتية تقليدية مع الهيل والزعفران، تقدم مع التمر.',
      price: 2.000,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b5c73311?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '9',
      name: 'ليمون نعناع طازج',
      description: 'مزيج مثلج ومنعش من عصير الليمون الطازج وأوراق النعناع.',
      price: 1.750,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop'
    }
  ]
};

export const translations = {
  en: {
    // Navbar
    home: 'Home',
    menu: 'Menu',
    reviews: 'Reviews',
    contact: 'Contact',
    bookTable: 'Book a Table',
    
    // Hero
    welcome: 'Welcome to',
    restaurantName: 'Al Ahmadi Restaurant',
    tagline: 'Experience Authentic Hospitality in the Heart of Kuwait',
    viewMenu: 'View Our Menu',
    
    // About
    aboutUs: 'About Us',
    jewelTitle: 'A Culinary Jewel in',
    locationName: 'Al Farwaniyah',
    aboutText: 'Nestled in the bustling Habeeb Munawer Street, Al Ahmadi Restaurant stands as a beacon of traditional flavors and warm Kuwaiti hospitality. With a stellar 4.9-star rating from over 1,300 cherished guests, we pride ourselves on serving more than just food — we serve memories.',
    dineIn: 'Dine-in',
    takeaway: 'Takeaway',
    delivery: 'Delivery',
    openUntil: 'Open until 11:00 PM',
    
    // Menu
    ourMenu: 'Our Menu',
    authenticFlavors: 'Authentic Flavors',
    appetizers: 'Appetizers',
    mainCourses: 'Main Courses',
    desserts: 'Desserts',
    beverages: 'Beverages',
    addToCart: 'Add to Cart',
    kd: 'KD',
    
    // Cart
    yourCart: 'Your Cart',
    emptyCart: 'Your cart is empty',
    subtotal: 'Subtotal',
    deliveryFee: 'Delivery Fee',
    total: 'Total',
    checkout: 'Checkout',
    orderType: 'Order Type',
    customerInfo: 'Customer Info',
    fullName: 'Full Name',
    phone: 'Phone Number',
    address: 'Address',
    placeOrder: 'Place Order',
    
    // Reservation
    reservationTitle: 'Book a Table',
    reservationDesc: 'Reserve your spot for an unforgettable dining experience.',
    guests: 'Number of Guests',
    date: 'Date',
    time: 'Time',
    specialRequests: 'Special Requests',
    confirmBooking: 'Confirm Booking',
    bookingSuccess: 'Booking Confirmed!',
    bookingMessage: 'We look forward to welcoming you.',
    
    // Popular Times
    planVisit: 'Plan Your Visit',
    busyDesc: 'We are busiest during the evenings. To experience our most vibrant atmosphere, visit us after 6 PM.',
    
    // Reviews
    lovedByLocals: 'Loved by Locals',
    ratingText: '4.9 Rating (1,394 Reviews)',
    
    // Contact
    visitUs: 'Visit Us',
    contactInfo: 'Contact Info',
    callNow: 'Call Now',
    
    // Footer
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    rightsReserved: 'All rights reserved.',
    designedWith: 'Designed with Kuwaiti Pride',

    // AI
    aiTitle: 'Concierge AI',
    aiSubtitle: 'Ask about our food & culture',
    aiPlaceholder: 'Type a message...',
  },
  ar: {
    // Navbar
    home: 'الرئيسية',
    menu: 'القائمة',
    reviews: 'الآراء',
    contact: 'اتصل بنا',
    bookTable: 'احجز طاولة',
    
    // Hero
    welcome: 'أهلاً بكم في',
    restaurantName: 'مطعم الأحمدي',
    tagline: 'استمتع بالضيافة الأصيلة في قلب الكويت',
    viewMenu: 'تصفح القائمة',
    
    // About
    aboutUs: 'من نحن',
    jewelTitle: 'جوهرة الطهي في',
    locationName: 'الفروانية',
    aboutText: 'يقع مطعم الأحمدي في شارع حبيب مناور النابض بالحياة، ويقف كمنارة للنكهات التقليدية والضيافة الكويتية الدافئة. مع تصنيف رائع 4.9 نجوم من أكثر من 1300 ضيف، نحن نفخر بتقديم أكثر من مجرد طعام - نحن نقدم ذكريات.',
    dineIn: 'تناول في المطعم',
    takeaway: 'استلام',
    delivery: 'توصيل',
    openUntil: 'مفتوح حتى 11:00 م',
    
    // Menu
    ourMenu: 'قائمتنا',
    authenticFlavors: 'نكهات أصيلة',
    appetizers: 'مقبلات',
    mainCourses: 'أطباق رئيسية',
    desserts: 'حلويات',
    beverages: 'مشروبات',
    addToCart: 'أضف للسلة',
    kd: 'د.ك',
    
    // Cart
    yourCart: 'سلة المشتريات',
    emptyCart: 'سلتك فارغة',
    subtotal: 'المجموع الفرعي',
    deliveryFee: 'رسوم التوصيل',
    total: 'الإجمالي',
    checkout: 'إتمام الطلب',
    orderType: 'نوع الطلب',
    customerInfo: 'معلومات العميل',
    fullName: 'الاسم الكامل',
    phone: 'رقم الهاتف',
    address: 'العنوان',
    placeOrder: 'تأكيد الطلب',
    
    // Reservation
    reservationTitle: 'احجز طاولة',
    reservationDesc: 'احجز مكانك لتجربة طعام لا تنسى.',
    guests: 'عدد الضيوف',
    date: 'التاريخ',
    time: 'الوقت',
    specialRequests: 'طلبات خاصة',
    confirmBooking: 'تأكيد الحجز',
    bookingSuccess: 'تم تأكيد الحجز!',
    bookingMessage: 'نتطلع للترحيب بكم.',
    
    // Popular Times
    planVisit: 'خطط لزيارتك',
    busyDesc: 'نحن أكثر ازدحامًا في المساء. لتجربة أجوائنا الأكثر حيوية، قم بزيارتنا بعد الساعة 6 مساءً.',
    
    // Reviews
    lovedByLocals: 'محبوب من الجميع',
    ratingText: 'تقييم 4.9 (1,394 مراجعة)',
    
    // Contact
    visitUs: 'زورونا',
    contactInfo: 'معلومات الاتصال',
    callNow: 'اتصل الآن',
    
    // Footer
    quickLinks: 'روابط سريعة',
    followUs: 'تابعونا',
    rightsReserved: 'جميع الحقوق محفوظة.',
    designedWith: 'صمم بفخر كويتي',
    
    // AI
    aiTitle: 'المساعد الذكي',
    aiSubtitle: 'اسأل عن طعامنا وثقافتنا',
    aiPlaceholder: 'اكتب رسالة...',
  }
};
