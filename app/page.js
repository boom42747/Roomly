import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import PropertyCard from '../components/PropertyCard'

const properties = [
  {
    name: 'The Esse Asoke',
    location: 'อโศก · MRT สุขุมวิท',
    type: 'คอนโดให้เช่า',
    bed: 1,
    bath: 1,
    size: 37,
    price: 27000,
    badge: 'แนะนำ',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Life Asoke Rama 9',
    location: 'พระราม 9 · MRT พระราม 9',
    type: 'คอนโดให้เช่า',
    bed: 1,
    bath: 1,
    size: 32,
    price: 18500,
    badge: 'ใหม่',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Ideo Q Sukhumvit 36',
    location: 'ทองหล่อ · BTS ทองหล่อ',
    type: 'คอนโดให้เช่า',
    bed: 1,
    bath: 1,
    size: 34,
    price: 24000,
    badge: 'ว่าง',
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Rhythm Sukhumvit 50',
    location: 'อ่อนนุช · BTS อ่อนนุช',
    type: 'คอนโดให้เช่า',
    bed: 1,
    bath: 1,
    size: 35,
    price: 16500,
    badge: 'ราคาดี',
    image:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
  },
]

const locations = [
  {
    name: 'อโศก',
    count: '1,248 ที่พัก',
    image:
      'https://images.unsplash.com/photo-1563492065-8a7f7afcddf4?auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'ทองหล่อ',
    count: '986 ที่พัก',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'พระราม 9',
    count: '874 ที่พัก',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'อ่อนนุช',
    count: '722 ที่พัก',
    image:
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1000&q=80',
  },
]

export default function HomePage() {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="hero-shade" />

        <div className="container hero-content">
          <span className="hero-pill">ROOMLY · FIND YOUR PLACE</span>

          <h1>
            หาที่อยู่ที่ใช่
            <br />
            ง่ายกว่าที่เคย
          </h1>

          <p className="hero-copy">
            ค้นหาคอนโด บ้าน และที่พักในกรุงเทพฯ
            จากประกาศที่ดูง่ายและพร้อมติดต่อ
          </p>

          <SearchBox />

          <div className="hero-stats">
            <div>
              <strong>12,000+</strong>
              <span>ประกาศ</span>
            </div>

            <div>
              <strong>450+</strong>
              <span>โครงการ</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>ค้นหาได้ทุกเวลา</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FEATURED HOMES</p>
            <h2>ที่พักแนะนำสำหรับคุณ</h2>
            <p className="section-subtitle">
              ตัวอย่างทรัพย์เด่นในทำเลยอดนิยม
            </p>
          </div>

          <a className="text-link" href="#">
            ดูทั้งหมด →
          </a>
        </div>

        <div className="property-grid">
          {properties.map((property) => (
            <PropertyCard
              key={property.name}
              property={property}
            />
          ))}
        </div>
      </section>

      <section className="section location-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">POPULAR LOCATIONS</p>
              <h2>เลือกจากทำเลที่คุณชอบ</h2>
              <p className="section-subtitle">
                เริ่มจากย่านที่เดินทางสะดวกและมีตัวเลือกเยอะ
              </p>
            </div>
          </div>

          <div className="location-grid">
            {locations.map((location) => (
              <a
                className="location-card"
                href="#"
                key={location.name}
                style={{
                  backgroundImage: `url(${location.image})`,
                }}
              >
                <div className="location-overlay" />

                <div className="location-content">
                  <strong>{location.name}</strong>
                  <span>{location.count}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section container discovery-grid">
        <div className="discovery-copy">
          <p className="eyebrow">SEARCH SMARTER</p>

          <h2>
            ค้นหาตามชีวิตจริง
            <br />
            ไม่ใช่แค่ชื่อโครงการ
          </h2>

          <p>
            Roomly ออกแบบให้คนหาที่พักตัดสินใจได้ง่ายขึ้น
            ตั้งแต่งบประมาณ ทำเล ไปจนถึงการเดินทาง
          </p>

          <div className="feature-list">
            <div>
              <span>01</span>
              <p>
                <strong>ค้นหาตาม BTS / MRT</strong>
                <br />
                เจอที่พักใกล้เส้นทางที่ใช้จริง
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                <strong>เปรียบเทียบได้ง่าย</strong>
                <br />
                ราคา ขนาด และข้อมูลสำคัญอยู่ในรูปแบบเดียวกัน
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                <strong>ติดต่อได้ทันที</strong>
                <br />
                ลดขั้นตอนจากการค้นหาจนถึงนัดดูห้อง
              </p>
            </div>
          </div>
        </div>

        <div className="discovery-visual">
          <div className="phone-mockup">
            <div className="mock-header">
              <span>Roomly</span>
              <span>♡</span>
            </div>

            <div className="mock-image" />

            <div className="mock-body">
              <small>คอนโดให้เช่า · อโศก</small>

              <h3>The Esse Asoke</h3>

              <strong>
                ฿27,000 <small>/ เดือน</small>
              </strong>

              <div className="mock-tags">
                <span>1 ห้องนอน</span>
                <span>37 ตร.ม.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="owner-banner-wrap">
        <div className="container owner-banner">
          <div>
            <p className="eyebrow">FOR OWNERS & AGENTS</p>
            <h2>มีทรัพย์ให้เช่าหรือขาย?</h2>
            <p>
              เริ่มลงประกาศกับ Roomly
              และจัดการทรัพย์ของคุณได้ในที่เดียว
            </p>
          </div>

          <button className="white-button">
            ลงประกาศฟรี
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand">
              Roomly
            </div>
            <p>ค้นหาที่อยู่ที่เข้ากับชีวิตคุณ</p>
          </div>

          <div>
            <strong>ค้นหา</strong>
            <a href="#">เช่า</a>
            <a href="#">ซื้อ</a>
            <a href="#">โครงการใหม่</a>
          </div>

          <div>
            <strong>สำหรับผู้ลงประกาศ</strong>
            <a href="#">ลงประกาศ</a>
            <a href="#">สำหรับเอเจนต์</a>
            <a href="#">ศูนย์ช่วยเหลือ</a>
          </div>

          <div>
            <strong>Roomly</strong>
            <a href="#">เกี่ยวกับเรา</a>
            <a href="#">ติดต่อ</a>
            <a href="#">ข้อกำหนด</a>
          </div>
        </div>
      </footer>
    </main>
  )
}