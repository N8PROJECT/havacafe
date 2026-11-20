export const instagram = "https://www.instagram.com/havamampang/";
export const whatsapp = "https://wa.me/628118622755";
export const menuArchive = "https://wisatarakyat.com/daftar-menu-dan-harga-hava-restaurant-and-cafe-mampang/";

export const navigation = [
  { label: "Our story", id: "story" },
  { label: "The menu", id: "menu" },
  { label: "Find us", id: "visit" }
];

export const menu = [
  {
    label: "From the rice pot",
    image: "/images/maqluba.webp",
    alt: "Illustration of Palestinian Maqluba with roasted meat and herbs",
    dishes: [
      { name: "Chicken Mandi Rice", description: "Fragrant mandi rice with a quarter chicken.", price: 75000 },
      { name: "Kambing Mandi Rice", description: "Mandi rice served with lamb.", price: 120000 },
      { name: "Chicken Qidrah Rice", description: "Palestinian spiced rice with a quarter chicken.", price: 80000 },
      { name: "Palestinian Maqluba", description: "An upside-down rice dish layered with vegetables and chicken. Serves two.", price: 180000 }
    ]
  },
  {
    label: "From the grill",
    image: "/images/grill.webp",
    alt: "Illustration of Middle Eastern grilled meat and skewers",
    dishes: [
      { name: "Shish Tawook", description: "Two skewers of grilled chicken.", price: 125000 },
      { name: "Lamb Kebab Pistachios", description: "Two lamb kebab skewers with pistachios.", price: 195000 },
      { name: "Lamb Rack", description: "Two pieces of grilled lamb rack.", price: 310000 },
      { name: "Hava Ultimate Grill Mix", description: "A mixed grill for four to six people.", price: 950000 }
    ]
  },
  {
    label: "Pizza & pide",
    image: "/images/pide.webp",
    alt: "Illustration of Turkish pide and pizza",
    dishes: [
      { name: "Hava Pizza", description: "A 30 cm house pizza with a choice of crust.", price: 165000 },
      { name: "Quattro Formaggi", description: "A 30 cm Italian-style four-cheese pizza.", price: 140000 },
      { name: "Beef Spinach Pide", description: "Turkish pide with beef and spinach.", price: 125000 },
      { name: "Cheese & Za’atar Pide", description: "Turkish pide with cheese and za’atar.", price: 85000 }
    ]
  },
  {
    label: "Something sweet",
    image: "/images/kunafa.webp",
    alt: "Illustration of golden kunafa with pistachios",
    dishes: [
      { name: "Kunafa", description: "Golden kadaif pastry and warm cheese. Medium portion.", price: 110000 },
      { name: "Kunafa with Ice Cream", description: "Medium kunafa served with ice cream.", price: 125000 },
      { name: "Um Ali", description: "A warm Middle Eastern dessert.", price: 60000 },
      { name: "Adani Tea", description: "Spiced milk tea to linger over. Serves four to six.", price: 70000 }
    ]
  }
];

export const locations = [
  { name: "Mampang", region: "Jakarta Selatan", address: "Jl. Buncit Raya No. 1, Kalibata, Pancoran, Jakarta Selatan 12950", hours: "Daily, 09.00–23.00 WIB", phone: "+62 811-8622-755", contact: whatsapp, map: "https://maps.app.goo.gl/Uh6PR2xxY7Q1n3GUA" },
  { name: "Bintaro", region: "Tangerang Selatan", address: "Jl. Raya Parigi Lama, RT 01/RW 04, Parigi, Pondok Aren, Tangerang Selatan 15227", phone: "+62 877-7810-0101", contact: "https://wa.me/6287778100101", map: "https://www.google.com/maps/search/?api=1&query=Hava+Restaurant+and+Cafe+Bintaro+Parigi+Lama" },
  { name: "Gading Serpong", region: "Kabupaten Tangerang", address: "Hampton Square, Level 1, Paramount Gading Serpong, Kabupaten Tangerang", map: "https://www.google.com/maps/search/?api=1&query=Hava+Restaurant+and+Cafe+Hampton+Square+Gading+Serpong" }
];
