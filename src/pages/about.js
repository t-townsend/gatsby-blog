import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default () => (
  <main>
    <Header />
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-xs-6">
          <h1>About Us</h1>
          <p>
            The abnormal mind is quick to detect and attach itself to this
            quality when it appears in a normal person, and so it came about
            that in college I was unjustly accused of being a politician,
            because I was privy to the secret griefs of wild, unknown men. Most
            of the confidences were unsought—frequently I have feigned sleep,
            preoccupation, or a hostile levity when I realized by some
            unmistakable sign that an intimate revelation was quivering on the
            horizon—for the intimate revelations of young men or at least the
            terms in which they express them are usually plagiaristic and marred
            by obvious suppressions. Reserving judgments is a matter of infinite
            hope.
          </p>
        </div>
      </div>
    </div>
    <Footer fixed="bottom" />
  </main>
)
