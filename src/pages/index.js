import React from "react"
import { Link } from "gatsby"
import Header from "../components/header.js"

export default function Home() {
  return (
    <div style={{ color: `purple`}}>
      <Link to="/about/">About</Link>
      <Link to="/contact">Contact</Link>
      <Header headerText="Milk of Blossoms" />
      <p>Welcome to my gallery.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}
