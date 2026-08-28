export default function SearchBox() {
  return (
    <div className="search-card">

      <div className="search-tabs">
        <button className="tab active">
          เช่า
        </button>

        <button className="tab">
          ซื้อ
        </button>

        <button className="tab">
          โครงการใหม่
        </button>
      </div>

      <div className="search-row">

        <div className="search-input-wrap">
          <span className="search-icon">
            ⌕
          </span>

          <input
            type="text"
            placeholder="ค้นหาคอนโด ทำเล BTS/MRT หรือชื่อโครงการ"
          />
        </div>

        <button className="search-button">
          ค้นหา
        </button>

      </div>

      <div className="quick-filters">
        <button>คอนโด</button>
        <button>ไม่เกิน ฿20,000</button>
        <button>ใกล้ BTS/MRT</button>
        <button>พร้อมอยู่</button>
      </div>

    </div>
  )
}