export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">

        <a className="brand" href="/">
          Roomly
        </a>

        <nav className="main-nav">
          <a href="#">เช่า</a>
          <a href="#">ซื้อ</a>
          <a href="#">โครงการใหม่</a>
          <a href="#">ค้นหาตามทำเล</a>
        </nav>

        <div className="nav-actions">
          <button className="ghost-button">
            เข้าสู่ระบบ
          </button>

          <button className="primary-button">
            + ลงประกาศ
          </button>
        </div>

      </div>
    </header>
  )
}