const Header = () => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          listStyle: "none",
          gap: "10px",
        }}
      >
        <li>
          {" "}
          <a href="">Home</a>{" "}
        </li>
        <li>
          {" "}
          <a href="">About</a>{" "}
        </li>
        <li>
          {" "}
          <a href="">Blog</a>{" "}
        </li>
        <li>
          {" "}
          <a href="">Contact</a>{" "}
        </li>
      </nav>
    </div>
  );
};

export default Header;
