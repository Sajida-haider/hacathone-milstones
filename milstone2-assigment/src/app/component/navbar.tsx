import Link from "next/link";

        export default function Navbar() {
            return (
              <div className="navbar-container">
                <nav>
                  <ul className="navbar">
                    <li className="nav-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            );
          }
          