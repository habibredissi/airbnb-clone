import React from "react";
import "./Footer.css";
import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";
function Footer() {
  return (
    // <div className="footer">
    //   <p>© 2020 Airbnb clone. No rights reserved.</p>
    //   <p>Privacy · Terms · Sitemap · Company Details</p>
    // </div>

    <div className="footer">
      <footer className="wrapper">
        <section className="footer__main">
          <div className="footer__main__item">
            <Select
              labelId="select__language"
              id="select__language"
              value={10}
              label="Age"
              variant="outlined"
            >
              <MenuItem value={10}>English</MenuItem>
              <MenuItem value={20}>French</MenuItem>
              <MenuItem value={30}>Arabic</MenuItem>
            </Select>
            <Select
              labelId="select__currency"
              id="select__currency"
              value={10}
              label="Age"
              variant="outlined"
            >
              <MenuItem value={10}>Euro</MenuItem>
              <MenuItem value={20}>Dollars</MenuItem>
            </Select>
          </div>
          <div className="footer__main__item">
            <h2 className="footer__title">Airbnb</h2>
            <ul>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Press</a>
              </li>
              <li>
                <a href="/">Policies</a>
              </li>
              <li>
                <a href="/">Help</a>
              </li>
              <li>
                <a href="/">Divertisity & Belonging</a>
              </li>
            </ul>
          </div>
          <div className="footer__main__item">
            <h2 className="footer__title">Discover</h2>
            <ul>
              <li>
                <a href="/">Trust & Safety</a>
              </li>
              <li>
                <a href="/">Travel Credit</a>
              </li>
              <li>
                <a href="/">Gift Cards</a>
              </li>
              <li>
                <a href="/">Airbnb Citizen</a>
              </li>
              <li>
                <a href="/">Business Travel</a>
              </li>
              <li>
                <a href="/">Guidebooks</a>
              </li>
              <li>
                <a href="/">Airbnblag</a>
              </li>
            </ul>
          </div>
          <div className="footer__main__item">
            <h2 className="footer__title">Hosting</h2>
            <ul>
              <li>
                <a href="/">Why Host</a>
              </li>
              <li>
                <a href="/">Hospitality</a>
              </li>
              <li>
                <a href="/">Responsible Hosting</a>
              </li>
              <li>
                <a href="/">Community Center</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="footer__seperator">
          <hr />
        </section>

        <section className="footer__legal">
          <ul className="footer__legal__list">
            <li className="footer__legal__list__1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.998"
                height="23"
                viewBox="0 0 22.998 23"
              >
                <path
                  id="Shape_Copy_47"
                  data-name="Shape Copy 47"
                  d="M14.805,19.96a6,6,0,0,1-2.155-.68A11.188,11.188,0,0,1,9.978,17.2,10.778,10.778,0,0,1,7.307,19.28a6.007,6.007,0,0,1-2.155.68,5.337,5.337,0,0,1-.56.04,4.721,4.721,0,0,1-1.746-.32,4.322,4.322,0,0,1-2.8-3.323A4.2,4.2,0,0,1,.3,14.194c.108-.26.215-.5.323-.721.173-.36.345-.7.5-1.021l.022-.04c1.487-3,3.1-6.046,4.762-9.049l.065-.12q.265-.468.517-.941a6.913,6.913,0,0,1,.776-1.1A3.734,3.734,0,0,1,10.022,0a3.584,3.584,0,0,1,2.736,1.241,5.761,5.761,0,0,1,.776,1.1q.251.474.517.941l.065.121c1.681,3,3.275,6.045,4.762,9.049l.022.02c.15.32.323.661.5,1.021.107.22.215.481.323.721a3.543,3.543,0,0,1,.2,2.142,4.316,4.316,0,0,1-2.8,3.323,4.633,4.633,0,0,1-1.745.32A5.336,5.336,0,0,1,14.805,19.96Z"
                  transform="translate(1.498 1.5)"
                  fill="none"
                  stroke="#707070"
                  strokeWidth="3"
                />
              </svg>{" "}
              <a href="/">Airbnb, Inc.</a>
            </li>

            <li>
              <p>Privacy · Terms · Sitemap · Company</p>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
