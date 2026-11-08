import bmwImage from '@assets/images/1.webp'
import mercedesImage from '@assets/images/2.webp'
import audiImage from '@assets/images/3.webp'
import toyotaImage from '@assets/images/4.webp'
import hyundaiImage from '@assets/images/5.webp'
import kiaImage from '@assets/images/6.webp'
import lexusImage from '@assets/images/7.webp'
import porscheImage from '@assets/images/8.webp'
import volkswagenImage from '@assets/images/9.webp'
import nissanImage from '@assets/images/10.webp'
import type { Car } from '@app-types/car.type'

export const carData: Car[] = [
  {
    id: 1,
    brand: 'BMW',
    model: '530i',
    description:
      'بی‌ام‌و 530i یک سدان با طراحی اسپرت و ظاهری متمایز است. کابین آن فضایی مناسب برای رفت‌وآمد روزانه و سفرهای جاده‌ای فراهم می‌کند. ترکیب طراحی پویا و فضای داخلی این خودرو می‌تواند برای علاقه‌مندان به سدان‌های لوکس جذاب باشد.',
    image: bmwImage,
    year: 2018,
    mileage: 68000,
    price: 8500000000,
    accidentHistory: 'بدون تصادف',
  },
  {
    id: 2,
    brand: 'Mercedes-Benz',
    model: 'C200',
    description:
      'مرسدس بنز C200 سدانی با طراحی کلاسیک و ظاهری چشم‌نواز است. فضای داخلی آن برای رفت‌وآمد روزانه و سفرهای خارج از شهر مناسب است. این خودرو گزینه‌ای برای علاقه‌مندان به طراحی مرسدس بنز در ابعاد یک سدان شهری محسوب می‌شود.',
    image: mercedesImage,
    year: 2017,
    mileage: 74000,
    price: 7900000000,
    accidentHistory: 'بدون تصادف',
  },
  {
    id: 3,
    brand: 'Audi',
    model: 'A6',
    description:
      'آئودی A6 یک سدان با خطوط مدرن و ظاهری رسمی است. فضای کابین آن امکان استفاده در مسیرهای روزمره و سفرهای خانوادگی را فراهم می‌کند. طراحی بیرونی و داخلی این خودرو برای کسانی که به سدان‌های لوکس علاقه دارند، قابل توجه است.',
    image: audiImage,
    year: 2018,
    mileage: 62000,
    price: 8200000000,
    accidentHistory: 'رنگ‌شدگی جزئی',
  },
  {
    id: 4,
    brand: 'Toyota',
    model: 'Camry',
    description:
      'تویوتا کمری سدانی خانوادگی با طراحی ساده و کاربردی است. کابین جادار آن برای رفت‌وآمد روزانه و همراهی خانواده در سفر مناسب است. ظاهر متعادل و فضای داخلی این مدل آن را به گزینه‌ای قابل بررسی برای استفاده شهری و جاده‌ای تبدیل می‌کند.',
    image: toyotaImage,
    year: 2018,
    mileage: 85000,
    price: 5200000000,
    accidentHistory: 'بدون تصادف',
  },
  {
    id: 5,
    brand: 'Hyundai',
    model: 'Tucson',
    description:
      'هیوندای توسان شاسی‌بلندی شهری با طراحی امروزی است. فضای کابین آن برای استفاده روزمره خانواده و سفرهای آخر هفته مناسب است. این خودرو برای کسانی که به دنبال خودرویی با ظاهر شاسی‌بلند و ابعاد مناسب شهر هستند، قابل بررسی است.',
    image: hyundaiImage,
    year: 2017,
    mileage: 92000,
    price: 4100000000,
    accidentHistory: 'رنگ‌شدگی جزئی',
  },
  {
    id: 6,
    brand: 'Kia',
    model: 'Sportage',
    description:
      'کیا اسپورتیج شاسی‌بلندی با طراحی پویا و ظاهری متمایز است. فضای داخلی آن برای رفت‌وآمد شهری و سفرهای خانوادگی در نظر گرفته شده است. این مدل می‌تواند انتخابی برای علاقه‌مندان به ترکیب طراحی اسپرت و کاربری روزمره باشد.',
    image: kiaImage,
    year: 2018,
    mileage: 78000,
    price: 4400000000,
    accidentHistory: 'بدون تصادف',
  },
  {
    id: 7,
    brand: 'Lexus',
    model: 'RX 350',
    description:
      'لکسوس RX 350 شاسی‌بلندی با طراحی متمایز و کابینی جادار است. فضای داخلی آن برای همراهی خانواده در مسیرهای روزمره و سفرهای طولانی مناسب است. این مدل برای کسانی که به دنبال خودرویی خانوادگی با ظاهری لوکس هستند، قابل بررسی است.',
    image: lexusImage,
    year: 2017,
    mileage: 65000,
    price: 10500000000,
    accidentHistory: 'بدون تصادف',
  },
  {
    id: 8,
    brand: 'Porsche',
    model: 'Macan',
    description:
      'پورشه ماکان شاسی‌بلندی با طراحی اسپرت و ابعادی مناسب رانندگی شهری است. فرم بدنه و فضای داخلی آن حال‌وهوایی متفاوت از خودروهای خانوادگی معمول دارد. این مدل برای استفاده روزمره و سفر، در کنار علاقه به طراحی پورشه، گزینه‌ای قابل بررسی است.',
    image: porscheImage,
    year: 2017,
    mileage: 57000,
    price: 12500000000,
    accidentHistory: 'رنگ‌شدگی جزئی',
  },
  {
    id: 9,
    brand: 'Volkswagen',
    model: 'Tiguan',
    description:
      'فولکس‌واگن تیگوان شاسی‌بلندی خانوادگی با طراحی ساده و متعادل است. فضای کاربردی کابین آن برای رفت‌وآمد روزانه و سفرهای آخر هفته مناسب است. این خودرو می‌تواند برای کسانی که خودرویی شهری با فضای بیشتر می‌خواهند، جذاب باشد.',
    image: volkswagenImage,
    year: 2018,
    mileage: 71000,
    price: 4900000000,
    accidentHistory: 'بدون تصادف',
  },
  {
    id: 10,
    brand: 'Nissan',
    model: 'X-Trail',
    description:
      'نیسان ایکس‌تریل شاسی‌بلندی خانوادگی با کابینی جادار و طراحی کاربردی است. فضای داخلی آن برای استفاده روزمره و همراهی خانواده در سفر مناسب است. ظاهر شاسی‌بلند و فضای کابین این مدل برای افرادی که به خودرویی خانوادگی علاقه دارند، قابل توجه است.',
    image: nissanImage,
    year: 2018,
    mileage: 88000,
    price: 4600000000,
    accidentHistory: 'بدون تصادف',
  },
]
