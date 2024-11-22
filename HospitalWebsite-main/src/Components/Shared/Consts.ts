import neurology from '@/assets/Images/Icons/Neurology.png';
import cardiology from '@/assets/Images/Icons/Cardiology.png';
import orthopedics from '@/assets/Images/Icons/Orthopoedics.png';
import surgery from '@/assets/Images/Icons/Surgery.png';
import dentistry from '@/assets/Images/Icons/Dentistry.png';
import radiology from '@/assets/Images/Icons/Radiology.png';
import urology from '@/assets/Images/Icons/Urology.png';
import medicine from '@/assets/Images/Icons/Medicine.png';
import seeMoreImage from '@/assets/Images/Icons/seeMoreImage.png';

import Banner1 from '@/assets/Images/Banner1.png';
import Banner2 from '@/assets/Images/Banner2.png';

import doc1 from '@/assets/Images/Doctors/doc1.png';
import doc2 from '@/assets/Images/Doctors/doc2.png';
import doc3 from '@/assets/Images/Doctors/doc3.png';
import doc4 from '@/assets/Images/Doctors/doc4.png';

import user1 from '@/assets/Images/users/user1.jpg';
import user2 from '@/assets/Images/users/user2.jpg';
import user3 from '@/assets/Images/users/user3.jpg';

import logo from '@/assets/Images/logo.png';

export const links = ['Home', 'Doctors', 'Services', 'Testimonials'];

export const descNums = [
  {
    num: '200+',
    text: 'Expert Doctors',
  },
  {
    num: '50k+',
    text: 'Satisfied Patients',
  },
  {
    num: '24/7',
    text: 'Emergency Services',
  },
  {
    num: '120+',
    text: 'Modern Facilities',
  },
  {
    num: '500+',
    text: 'Hospital Beds',
  },
];

export const ServicesData = [
  {
    img: neurology,
    title: 'Neurology',
    id: 'neurology',
    heading: 'Neurology Department',
    texts: [
      'Expert neurological consultations',
      'Treatment for epilepsy and seizures',
      'Stroke care and prevention',
      'Pediatric neurology services',
      'Advanced neuroimaging technologies',
      'Headache and migraine management',
      'Care for memory and cognitive disorders',
    ],
  },
  {
    img: cardiology,
    title: 'Cardiology',
    id: 'cardiology',
    heading: 'Cardiology Department',
    texts: [
      'Heart health check-ups',
      'Angioplasty and stenting',
      'Echocardiography services',
      '24-hour Holter monitoring',
      'Stress test (TMT)',
      'Heart rhythm management',
      'Post-cardiac surgery care',
    ],
  },
  {
    img: orthopedics,
    title: 'Orthopedics',
    id: 'orthopedics',
    heading: 'Orthopedics Department',
    texts: [
      'Joint replacement surgeries',
      'Sports injury treatment',
      'Arthritis and back pain care',
      'Rehabilitation programs',
      'Fracture and trauma management',
      'Pediatric orthopedics',
      'Advanced orthopedic consultations',
    ],
  },
  {
    img: surgery,
    title: 'Surgery',
    id: 'surgery',
    heading: 'Surgery Department',
    texts: [
      'Minimal invasive surgeries',
      'Cancer treatment surgeries',
      'Post-operative recovery services',
      'Advanced laparoscopic techniques',
      'Surgical trauma care',
      'Emergency surgical services',
      'Day care surgeries',
    ],
  },
  {
    img: dentistry,
    title: 'Dentistry',
    id: 'dentistry',
    heading: 'Dentistry Department',
    texts: [
      'Root canal treatment',
      'Smile designing and braces',
      'Pediatric dental care',
      'Tooth whitening services',
      'Dental implants and crowns',
      'Oral hygiene consultations',
      'Gum disease treatments',
    ],
  },
  {
    img: radiology,
    title: 'Radiology',
    id: 'radiology',
    heading: 'Radiology Department',
    texts: [
      'MRI and CT scans',
      'X-ray and ultrasound imaging',
      'Mammography and body scans',
      'Interventional radiology',
      'Diagnostic imaging consultations',
      'Digital radiology technologies',
      'Specialized body imaging',
    ],
  },
  {
    img: urology,
    title: 'Urology',
    id: 'urology',
    heading: 'Urology Department',
    texts: [
      'Kidney stone removal',
      'Prostate health management',
      'Urinary tract evaluations',
      'Incontinence treatments',
      'Urological surgery',
      'Pediatric urology care',
      'Bladder cancer treatment',
    ],
  },
  {
    img: medicine,
    title: 'General Medicine',
    id: 'medicine',
    heading: 'Medicine Department',
    texts: [
      'Comprehensive health check-ups',
      'Diabetes and hypertension care',
      'Geriatric healthcare solutions',
      'Vaccinations and immunizations',
      'Lifestyle management programs',
      'Seasonal illness treatments',
      'Pediatric care and consultations',
    ],
  },
  {
    img: seeMoreImage,
    title: 'Explore More',
    id: 'seemore',
    heading: 'Explore Our Services',
    texts: [
      'Specialized healthcare facilities',
      'Advanced treatment options',
      'Personalized healthcare plans',
      '24/7 emergency care',
      'Multidisciplinary care teams',
      'Medical second opinions',
      'Beyond expectations healthcare',
    ],
  },
];

export const Banner1Data = {
  heading: 'Providing Quality Healthcare for Every Indian',
  texts: [
    'Seamless appointment bookings',
    'Top-tier medical professionals',
    'Emergency services around the clock',
    'Affordable medical treatments',
    'Comprehensive care under one roof',
  ],
  img: Banner1,
};

export const DoctorsData = {
  heading: 'Meet Our Experts',
  doctors: [
    {
      img: doc1,
      name: 'Dr. Arjun Sharma',
      job: 'Cardiologist',
    },
    {
      img: doc2,
      name: 'Dr. Priya Singh',
      job: 'Dentist',
    },
    {
      img: doc3,
      name: 'Dr. Ravi Kumar',
      job: 'Surgeon',
    },
    {
      img: doc4,
      name: 'Dr. Meera Nair',
      job: 'Neurologist',
    },
  ],
  heading2: 'Who Are We?',
  desc: 'Our hospital is committed to providing affordable, world-class healthcare solutions to every Indian, leveraging cutting-edge technologies and an empathetic approach to patient care.',
  img: Banner2,
};

export const FeedbackData = {
  heading: 'Patient Testimonials',
  feedbacks: [
    {
      img: user1,
      name: 'Ankit Verma',
      job: 'Entrepreneur',
      desc: 'I received excellent treatment at this hospital. The doctors are highly skilled and patient-centric!',
    },
    {
      img: user2,
      name: 'Suman Rao',
      job: 'Software Engineer',
      desc: 'The facilities are top-notch, and the staff ensures that every patient gets the care they need promptly.',
    },
    {
      img: user3,
      name: 'Neha Patel',
      job: 'Teacher',
      desc: 'I was impressed with the hospital’s cleanliness and the professionalism of the healthcare team.',
    },
  ],
};

export const FooterData = {
  logo: logo,
  addresses: ['123 MG Road', 'Bengaluru, Karnataka - 560001'],
  phone: '+91 9876543210',
  departments: [
    'Cardiology',
    'Dentistry',
    'Neurology',
    'Orthopedics',
    'Surgery',
    'Explore More',
  ],
  links: links,
};
