export default function PropertyCard({ property }) {
  return (
    <article className="property-card">

      <div
        className="property-image"
        style={{
          backgroundImage: `url(${property.image})`,
        }}
      >

        <span className="badge">
          {property.badge}
        </span>

        <button
          className="heart"
          aria-label="บันทึก"
        >
          ♡
        </button>

      </div>

      <div className="property-body">

        <p className="property-type">
          {property.type}
        </p>

        <h3>{property.name}</h3>

        <p className="location">
          {property.location}
        </p>

        <div className="facts">
          <span>{property.bed} ห้องนอน</span>
          <span>{property.bath} ห้องน้ำ</span>
          <span>{property.size} ตร.ม.</span>
        </div>

        <div className="card-footer">

          <strong>
            ฿{property.price.toLocaleString('th-TH')}
            <small> / เดือน</small>
          </strong>

          <span className="fresh">
            อัปเดตล่าสุด
          </span>

        </div>

      </div>

    </article>
  )
}