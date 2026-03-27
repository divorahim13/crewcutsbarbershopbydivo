// ─── Brand ───────────────────────────────────────────
export const WA_NUMBER = '6281287517711'
export const WA_LINK = `https://wa.me/${WA_NUMBER}`
export const INSTAGRAM_LINK = 'https://www.instagram.com/crewcuts_barbershop/'
export const FACEBOOK_LINK = 'https://www.facebook.com/crewcutsid/'
export const MAPS_LINK =
  'https://maps.google.com/?q=Jl.+Raya+Lapangan+Tembak+No.7,+Cibubur,+Jakarta+Timur'

// ─── Navigation ──────────────────────────────────────
export const NAV_LINKS = [
  { label: 'SERVICES', href: '#services' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'JOURNAL', href: '#journal' },
  { label: 'LOKASI', href: '#location' },
  { label: 'ABOUT', href: '#about' },
]

// ─── Services ────────────────────────────────────────
export const SERVICES = [
  { name: 'REGULAR', subtitle: 'Potongan standar presisi', price: 'Rp 35k' },
  { name: 'CREW CUT', subtitle: 'Gaya militer khas kami', price: 'Rp 40k' },
  { name: 'FADE TAPER', subtitle: 'Gradasi kulit profesional', price: 'Rp 45k' },
  { name: 'CUKUR JENGGOT', subtitle: 'Definisi garis tajam', price: 'Rp 25k' },
  { name: 'CUT + BEARD', subtitle: 'Perawatan lengkap pria', price: 'Rp 65k' },
  { name: 'STYLING', subtitle: 'Hanya produk & finishing', price: 'Rp 20k' },
]

// ─── Gallery ─────────────────────────────────────────
export const GALLERY_IMAGES = [
  {
    src: '/images/thecuts1.webp',
    alt: 'Detail fade haircut',
  },
  {
    src: '/images/thecuts2.webp',
    alt: 'Traditional barber tools',
  },
  {
    src: '/images/thecuts3.webp',
    alt: 'Classic haircut style',
  },
  {
    src: '/images/thecuts4.webp',
    alt: 'Barbershop interior',
  },
]

// ─── Barbers ─────────────────────────────────────────
export const BARBERS = [
  {
    name: 'ADIT',
    role: 'Spesialis Fade',
    img: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80',
  },
  {
    name: 'RAMA',
    role: 'Master Beard Trim',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
  },
  {
    name: 'DIMAS',
    role: 'Classic Cut Expert',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80',
  },
  {
    name: 'EKO',
    role: 'Scissors Specialist',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
]

// ─── Testimonials ─────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: 'ARYA SETIADI',
    text: 'Fade terbaik di Cibubur. Presisinya tidak tertandingi.',
    rating: 5,
  },
  {
    name: 'KEVIN PRATAMA',
    text: 'Tempat bersih, staf profesional. Mereka benar-benar teliti dalam bekerja.',
    rating: 5,
  },
  {
    name: 'ANDI WIJAYA',
    text: 'Akhirnya menemukan barber langganan. Treatment handuk hangatnya luar biasa.',
    rating: 5,
  },
  {
    name: 'REZA HARIANTO',
    text: 'Tempat cukur paling mantap di Cibubur. Detailnya gila, barber-nya juga asik diajak diskusi soal gaya rambut.',
    rating: 5,
  },
  {
    name: 'BUDI SANTOSO',
    text: 'Harga terjangkau tapi hasil tidak pernah mengecewakan. Sudah langganan 2 tahun.',
    rating: 5,
  },
]

// ─── Journal Articles ─────────────────────────────────
export const JOURNAL_ARTICLES = [
  {
    category: 'MAINTENANCE',
    title: 'Cara Merawat Fade Agar Tetap Tajam',
    img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80',
    tips: [
      'Cuci rambut 2–3x seminggu, jangan terlalu sering.',
      'Gunakan pomade ringan agar gradasi tetap terlihat bersih.',
      'Kembali ke barber setiap 2–3 minggu untuk touch-up.',
    ],
  },
  {
    category: 'GROOMING',
    title: 'Minyak Jenggot: Mengapa Anda Membutuhkannya',
    img: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80',
    tips: [
      'Oleskan beard oil setelah mandi saat pori masih terbuka.',
      'Sisir jenggot searah tumbuh rambut untuk bentuk rapi.',
      'Gunakan 2–4 tetes, jangan berlebihan agar tidak berminyak.',
    ],
  },
  {
    category: 'HERITAGE',
    title: 'Gaya Rambut Klasik yang Tidak Pernah Mati',
    img: 'https://images.unsplash.com/photo-1592647420148-bfcc177e2117?w=800&q=80',
    tips: [
      'Side part cocok untuk wajah oval dan persegi.',
      'Pompadour butuh volume — pakai hair dryer + wax medium hold.',
      'Crew cut adalah pilihan paling mudah dirawat sehari-hari.',
    ],
  },
]

// ─── Why Us ───────────────────────────────────────────
export const WHY_US = [
  {
    icon: 'scissors' as const,
    title: 'Barber Berpengalaman',
    text: 'Tim profesional kami memiliki jam terbang tinggi dalam berbagai teknik potongan rambut klasik maupun modern.',
  },
  {
    icon: 'sterile' as const,
    title: 'Peralatan Steril',
    text: 'Kesehatan dan kenyamanan Anda adalah prioritas. Semua peralatan disterilisasi sebelum dan sesudah digunakan.',
  },
  {
    icon: 'chair' as const,
    title: 'Suasana Klasik',
    text: 'Nikmati pengalaman cukur dengan nuansa interior vintage yang maskulin dan menenangkan untuk relaksasi Anda.',
  },
]