import { Testimonial } from "../types";
import user1 from '../assets/images/1.jpeg';
import user2 from '../assets/images/2.jpeg';


export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Akhil Shankar",
    role: "Adventure Enthusiast",
    quote: "Very good views, take a trip through the lap of nature here is the place you are looking for….",
    avatar: user1,
    rating: 5
  },
  {
    id: "2",
    name: "Nithin R",
    role: "Adventure Enthusiast",
    quote: "An unique watersports center in entire kerala",
    avatar: user2,
    rating: 5
  }
  // {
  //   id: "3",
  //   name: "Michael Johnson",
  //   role: "Travel Blogger",
  //   quote: "Kayaking through Kerala's backwaters was a serene and unforgettable experience. The equipment was top-notch, and the guides were knowledgeable.",
  //   avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   rating: 4
  // },
  // {
  //   id: "4",
  //   name: "Aisha Khan",
  //   role: "Solo Traveler",
  //   quote: "The jet skiing experience was the highlight of my trip to Kerala! The instructors ensured I was comfortable before letting me take control.",
  //   avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   rating: 5
  // }
];