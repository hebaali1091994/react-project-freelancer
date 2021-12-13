import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer col left-icon">
            {/* <h5></h5> */}
            <ul >
              <svg
                width="42"
                height="42"
                viewBox="0 0 62 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.582 0l3.662 5.136L53.772 0M12.33 39.99l10.024-9.8-6.033-6.474M30.064 0l-5.358 4.83 9.012.337M9.239 0l1.921 3.943 10.607.66m-6.852 15.845L22.75 5.834 0 4.604m15.827 16.77l7.4 7.948 8.163-8L33.923 6.42l-9.947-.51"
                  fill="#FFF"
                  fill-rule="evenodd"
                />
              </svg>
              <li>
                <i className="fas fa-globe"></i>
                <Link to="#">English - US (International)</Link>
              </li>
              <li>
                <i className="far fa-question-circle"></i>
                <Link to="#">Help & Support</Link>
              </li>
            </ul>
          </div>
          <div className="footer col">
            <h5>Freelancer</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#">Categories</Link>
              </li>
              <li>
                <Link to="#">Projects</Link>
              </li>
              <li>
                <Link to="#">Contests</Link>
              </li>
              <li>
                <Link to="#">Freelancers</Link>
              </li>
              <li>
                <Link to="#">Enterprise</Link>
              </li>
              <li>
                <Link to="#">Preferred Freelancer Program</Link>
              </li>
              <li>
                <Link to="#">Project Management</Link>
              </li>
              <li>
                <Link to="#">Local Jobs</Link>
              </li>
              <li>
                <Link to="#">Photo Anywhere</Link>
              </li>
              <li>
                <Link to="#">Showcase</Link>
              </li>
              <li>
                <Link to="#">API for Developers</Link>
              </li>
            </ul>
          </div>
          <div className="footer col">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>
                <Link  to="#">About us</Link>
              </li>
              <li>
                <Link to="#">How it Works</Link>
              </li>
              <li>
                <Link to="#">Security</Link>
              </li>
              <li>
                <Link to="#">Investor</Link>
              </li>
              <li>
                <Link to="#">Sitemap</Link>
              </li>
              <li>
                <Link to="#">Quotes</Link>
              </li>
              <li>
                <Link to="#">News</Link>
              </li>
            </ul>
          </div>
          <div className="footer col">
            <h5>Terms</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="#">Copyright Policy</Link>
              </li>
              <li>
                <Link to="#">Code of Conduct</Link>
              </li>
              <li>
                <Link to="#">Fees and Charges</Link>
              </li>
            </ul>
          </div>
          <div className="footer col">
            <h5>Apps</h5>
            <div className="apps">
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 135 40"
              >
                
                <path
                  className="st0"
                  d="M130.2 0H4.7C2.1 0 0 2.1 0 4.7v30.5C0 37.9 2.1 40 4.7 40h125.5c2.6 0 4.7-2.1 4.7-4.7V4.7c0-2.6-2.1-4.7-4.7-4.7zm0 39.1H4.7c-2.1 0-3.8-1.7-3.8-3.8V4.7C.9 2.6 2.6.9 4.7.9h125.5c2.1 0 3.8 1.7 3.8 3.8v30.5c0 2.2-1.7 3.9-3.8 3.9z"
                />
                <path
                  className="st0"
                  d="M30.1 19.8c0-3.2 2.6-4.8 2.8-4.9-1.5-2.2-3.9-2.5-4.7-2.5-2-.2-3.9 1.2-4.9 1.2-1 0-2.6-1.2-4.2-1.1-2.1 0-4.1 1.3-5.2 3.2-2.3 3.9-.6 9.7 1.6 12.9 1.1 1.6 2.4 3.3 4 3.2 1.6-.1 2.2-1 4.2-1 1.9 0 2.5 1 4.2 1 1.7 0 2.8-1.6 3.9-3.1 1.3-1.8 1.8-3.5 1.8-3.6-.1-.2-3.4-1.5-3.5-5.3zm-3.2-9.5c.9-1.1 1.5-2.6 1.3-4.1-1.3.1-2.8.9-3.8 1.9-.8.9-1.5 2.5-1.3 3.9 1.5.2 2.9-.6 3.8-1.7zm26.8 21.2h-2.3l-1.2-3.9h-4.3l-1.2 3.9h-2.2l4.3-13.3h2.6l4.3 13.3zM49.8 26l-1.1-3.5c-.1-.4-.3-1.2-.7-2.5-.1.6-.3 1.4-.6 2.5L46.2 26h3.6zm14.9.6c0 1.6-.4 2.9-1.3 3.9-.8.8-1.8 1.3-3 1.3-1.3 0-2.2-.5-2.7-1.4v5h-2.1V25.1c0-1 0-2.1-.1-3.2h1.9l.1 1.5c.7-1.1 1.8-1.7 3.2-1.7 1.1 0 2.1.4 2.8 1.3.8.9 1.2 2.1 1.2 3.6zm-2.2.1c0-.9-.2-1.7-.6-2.3-.5-.6-1.1-.9-1.9-.9-.5 0-1 .2-1.4.5-.4.4-.7.8-.8 1.4-.1.3-.1.5-.1.6v1.6c0 .7.2 1.3.6 1.8.4.5 1 .7 1.7.7.8 0 1.4-.3 1.9-.9.4-.7.6-1.5.6-2.5zm13.2-.1c0 1.6-.4 2.9-1.3 3.9-.8.8-1.8 1.3-3 1.3-1.3 0-2.2-.5-2.7-1.4v5h-2.1V25.1c0-1 0-2.1-.1-3.2h1.9l.1 1.5c.7-1.1 1.8-1.7 3.2-1.7 1.1 0 2.1.4 2.8 1.3.8.9 1.2 2.1 1.2 3.6zm-2.2.1c0-.9-.2-1.7-.6-2.3-.5-.6-1.1-.9-1.9-.9-.5 0-1 .2-1.4.5-.4.4-.7.8-.8 1.4-.1.3-.1.5-.1.6v1.6c0 .7.2 1.3.6 1.8.4.5 1 .7 1.7.7.8 0 1.4-.3 1.9-.9.4-.7.6-1.5.6-2.5zM88 27.8c0 1.1-.4 2.1-1.2 2.8-.9.8-2.1 1.2-3.6 1.2-1.4 0-2.6-.3-3.4-.8l.5-1.8c.9.6 2 .8 3.1.8.8 0 1.4-.2 1.9-.5.4-.4.7-.8.7-1.5 0-.5-.2-1-.6-1.4-.4-.4-1-.7-1.8-1-2.3-.9-3.5-2.1-3.5-3.8 0-1.1.4-2 1.2-2.7.8-.7 1.9-1 3.3-1 1.2 0 2.2.2 3 .6l-.6 1.7c-.8-.4-1.6-.6-2.6-.6-.8 0-1.3.2-1.8.6-.4.3-.5.7-.5 1.2s.2 1 .6 1.3c.4.3 1 .7 1.9 1 1.1.5 2 1 2.5 1.6.7.6.9 1.4.9 2.3zm7.1-4.3h-2.3v4.7c0 1.2.4 1.8 1.2 1.8.4 0 .7 0 .9-.1l.1 1.6c-.4.2-1 .2-1.7.2-.8 0-1.5-.3-2-.8s-.7-1.4-.7-2.6v-4.8h-1.4v-1.6h1.4v-1.8l2.1-.6v2.4H95c.1 0 .1 1.6.1 1.6zm10.6 3.1c0 1.5-.4 2.7-1.3 3.6-.9 1-2.1 1.5-3.5 1.5s-2.5-.5-3.4-1.4c-.8-.9-1.3-2.1-1.3-3.5 0-1.5.4-2.7 1.3-3.7.9-.9 2-1.4 3.5-1.4 1.4 0 2.5.5 3.4 1.4.9.9 1.3 2.1 1.3 3.5zm-2.2.1c0-.9-.2-1.6-.6-2.3-.4-.8-1.1-1.1-1.9-1.1-.9 0-1.5.4-2 1.1-.4.6-.6 1.4-.6 2.3 0 .9.2 1.6.6 2.3.5.8 1.1 1.1 1.9 1.1.8 0 1.5-.4 1.9-1.2.5-.6.7-1.3.7-2.2zm9.1-2.9c-.2 0-.4-.1-.7-.1-.8 0-1.3.3-1.7.9-.4.5-.5 1.1-.5 1.9v5h-2.1v-6.6c0-1.1 0-2.1-.1-3h1.9l.1 1.8h.1c.2-.6.6-1.1 1.1-1.5.5-.3 1-.5 1.5-.5h.5l-.1 2.1zm9.6 2.5c0 .4 0 .7-.1 1h-6.4c0 .9.3 1.7.9 2.2.5.4 1.2.7 2.1.7.9 0 1.8-.1 2.6-.5l.3 1.5c-.9.4-2 .6-3.2.6-1.5 0-2.7-.4-3.5-1.3-.8-.9-1.3-2.1-1.3-3.5s.4-2.7 1.2-3.6c.8-1 1.9-1.5 3.4-1.5 1.4 0 2.4.5 3.1 1.5.6.6.9 1.7.9 2.9zm-2.1-.6c0-.6-.1-1.2-.4-1.6-.4-.6-.9-.9-1.7-.9-.7 0-1.3.3-1.7.9-.4.5-.6 1-.6 1.7l4.4-.1zM48.7 13.4h-1.1l-.6-1.9h-2.1l-.6 1.9h-1.1l2.1-6.5h1.3l2.1 6.5zm-1.9-2.7L46.3 9c-.1-.2-.2-.6-.3-1.2-.1.2-.2.7-.4 1.2l-.5 1.7h1.7zm7.2-2l-1.8 4.7h-1l-1.7-4.7h1.1l.8 2.5c.1.4.3.8.3 1.2.1-.3.2-.7.3-1.2l.8-2.5H54zm3.8 4.7l-.1-.5c-.3.4-.8.6-1.4.6-.8 0-1.4-.6-1.4-1.4 0-1.2 1-1.8 2.8-1.8v-.1c0-.6-.3-.9-1-.9-.5 0-.9.1-1.2.4l-.3-.7c.4-.3 1-.4 1.6-.4 1.2 0 1.9.6 1.9 2v1.7c0 .5 0 .8.1 1.1h-1zm-.1-2.3c-1.2 0-1.7.3-1.7 1 0 .5.3.7.7.7.5 0 1-.4 1-1v-.7zM61 7.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6c.4 0 .7.3.6.6.1.4-.2.6-.6.6zm.6 5.5h-1V8.7h1v4.7zm2.9 0h-1V6.6h1v6.8zm4.4 0l-.1-.5c-.3.4-.8.6-1.4.6-.8 0-1.4-.6-1.4-1.4 0-1.2 1-1.8 2.8-1.8v-.1c0-.6-.3-.9-1-.9-.5 0-.9.1-1.2.4l-.3-.7c.4-.3 1-.4 1.6-.4 1.2 0 1.9.6 1.9 2v1.7c0 .5 0 .8.1 1.1h-1zm-.1-2.3c-1.2 0-1.7.3-1.7 1 0 .5.3.7.7.7.5 0 1-.4 1-1v-.7zm5.3 2.4c-.7 0-1.2-.3-1.5-.8l-.1.7h-.9V6.6h1v2.9c.3-.5.8-.8 1.5-.8 1.1 0 1.9 1 1.9 2.4.1 1.4-.7 2.4-1.9 2.4zm-.3-4.1c-.6 0-1.2.5-1.2 1.3v.8c0 .6.5 1.2 1.1 1.2.8 0 1.3-.6 1.3-1.7.1-.9-.4-1.6-1.2-1.6zm4.9 4h-1V6.6h1v6.8zm5.7-2.1h-3.1c0 .9.6 1.4 1.5 1.4.5 0 .9-.1 1.3-.2l.2.7c-.4.2-1 .3-1.6.3-1.5 0-2.3-.9-2.3-2.4 0-1.4.9-2.5 2.2-2.5 1.2 0 2 .9 2 2.2-.1.2-.1.4-.2.5zm-.9-.7c0-.7-.4-1.2-1-1.2s-1.1.5-1.1 1.2h2.1zm7.3 2.9c-1.4 0-2.3-1-2.3-2.4 0-1.5.9-2.5 2.3-2.5s2.3 1 2.3 2.4c0 1.5-.9 2.5-2.3 2.5zm0-4.1c-.8 0-1.2.7-1.2 1.7s.5 1.7 1.2 1.7S92 12 92 11.1c.1-1-.4-1.7-1.2-1.7zm8 4h-1v-2.7c0-.8-.3-1.3-1-1.3-.6 0-1 .5-1 1.2v2.8h-1V8.7h.9v.7c.3-.5.9-.8 1.5-.8 1 0 1.6.8 1.6 2v2.8zm6.8-3.9h-1.2v2.3c0 .6.2.9.6.9h.5v.8c-.2.1-.5.1-.8.1-.8 0-1.3-.5-1.3-1.6V9.5h-.7v-.8h.7v-.8l1-.3v1.2h1.2v.7zm5.6 3.9h-1v-2.7c0-.8-.3-1.3-1-1.3-.5 0-1 .4-1 1.1v2.8h-1V6.6h1v2.8c.3-.5.8-.8 1.4-.8 1 0 1.6.8 1.6 2v2.8zm5.3-2.1h-3.1c0 .9.6 1.4 1.5 1.4.5 0 .9-.1 1.3-.2l.2.7c-.4.2-1 .3-1.6.3-1.5 0-2.3-.9-2.3-2.4 0-1.4.9-2.5 2.2-2.5 1.2 0 2 .9 2 2.2-.1.2-.1.4-.2.5zm-.9-.7c0-.7-.4-1.2-1-1.2s-1.1.5-1.1 1.2h2.1z"
                />
              </svg>
              <svg
                id="svg2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 135.7 40"
              >
               
                <path
                  id="path16"
                  className="st0"
                  d="M130.5 1.1c2.3 0 4.2 1.9 4.2 4.2V35c0 2.3-1.9 4.2-4.2 4.2H5.2C2.9 39.1 1 37.3 1 35V5.3C1 3 2.9 1.1 5.2 1.1h125.3m0-.8H5.2c-2.8 0-5 2.2-5 5V35c0 2.7 2.3 5 5 5h125.3c2.8 0 5-2.2 5-5V5.3c.1-2.8-2.2-5-5-5z"
                />
                <g id="g18">
                  <path
                    id="path20"
                    className="st1"
                    d="M47.8 10.5c0 .8-.3 1.5-.7 2-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2c.6-.6 1.3-.9 2.2-.9.4 0 .8.1 1.2.3.4.2.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.7-.7-.6 0-1.2.2-1.6.7-.5.4-.7 1-.7 1.7s.2 1.3.7 1.7c.5.4 1 .7 1.6.7.7 0 1.2-.2 1.7-.7.3-.3.5-.7.5-1.2h-2.2V10h2.9c0 .2.1.3.1.5z"
                  />
                </g>
                <g id="g22">
                  <path
                    id="path24"
                    className="st1"
                    d="M52.4 8h-2.7v1.9h2.5v.7h-2.5v1.9h2.7v.7h-3.5V7.3h3.5V8z"
                  />
                </g>
                <g id="g26">
                  <path
                    id="path28"
                    className="st1"
                    d="M55.6 13.2h-.8V8h-1.7v-.7h4.1V8h-1.7v5.2z"
                  />
                </g>
                <g id="g30">
                  <path
                    id="path32"
                    className="st1"
                    d="M60.3 13.2V7.3h.8v5.9h-.8z"
                  />
                </g>
                <g id="g34">
                  <path
                    id="path36"
                    className="st1"
                    d="M64.5 13.2h-.8V8H62v-.7h4.1V8h-1.7c.1 0 .1 5.2.1 5.2z"
                  />
                </g>
                <g id="g38">
                  <path
                    id="path40"
                    className="st1"
                    d="M74 12.4c-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2 0-.9.3-1.6.9-2.2.6-.6 1.3-.9 2.2-.9.9 0 1.6.3 2.2.9.6.6.9 1.3.9 2.2 0 .9-.3 1.6-.9 2.2zm-3.8-.5c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.4-1-.7-1.6-.7-.6 0-1.2.2-1.6.7-.4.4-.7 1-.7 1.7s.2 1.3.7 1.7z"
                  />
                </g>
                <g id="g42">
                  <path
                    id="path44"
                    className="st1"
                    d="M76 13.2V7.3h.9l2.9 4.6V7.3h.8v5.9h-.8l-3.1-4.8v4.8H76z"
                  />
                </g>
                <path
                  id="path46"
                  className="st0"
                  d="M68.5 21.9c-2.4 0-4.3 1.8-4.3 4.2 0 2.4 1.9 4.2 4.3 4.2s4.3-1.8 4.3-4.2c0-2.5-1.9-4.2-4.3-4.2zm0 6.7c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6s-1.1 2.6-2.4 2.6zm-9.3-6.7c-2.4 0-4.3 1.8-4.3 4.2 0 2.4 1.9 4.2 4.3 4.2s4.3-1.8 4.3-4.2c0-2.5-1.9-4.2-4.3-4.2zm0 6.7c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6s-1.1 2.6-2.4 2.6zm-11.1-5.4V25h4.3c-.1 1-.5 1.7-1 2.2-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8s2.1-4.8 4.7-4.8c1.4 0 2.5.6 3.3 1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8-3.7 0-6.7 2.9-6.7 6.5s3.1 6.5 6.7 6.5c2 0 3.5-.6 4.6-1.8 1.2-1.2 1.6-2.8 1.6-4.2 0-.4 0-.8-.1-1.1-.1.2-6.2.2-6.2.2zm45.4 1.3c-.4-.9-1.4-2.7-3.7-2.7-2.2 0-4 1.7-4 4.2 0 2.4 1.8 4.2 4.2 4.2 2 0 3.1-1.2 3.6-1.9l-1.5-1c-.5.7-1.1 1.2-2.1 1.2-.9 0-1.6-.4-2.1-1.3l5.7-2.3c.1.1-.1-.4-.1-.4zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9 0 .1-3.8 1.6-3.8 1.6zM83.1 30H85V17.7h-1.9V30zM80 22.8c-.5-.5-1.3-.9-2.3-.9-2.1 0-4.1 1.9-4.1 4.2 0 2.4 2 4.2 4.1 4.2 1 0 1.8-.4 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4.1-1.3 4.1-4.4v-7.6H80v.7zm-2.2 5.8c-1.3 0-2.4-1.1-2.4-2.5 0-1.5 1.1-2.6 2.4-2.6 1.3 0 2.3 1.1 2.3 2.6s-1 2.5-2.3 2.5zm24.5-10.9h-4.5V30h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.8 0-2.4-2.1-3.8-4.1-3.8zm0 5.9h-2.7v-4.2h2.7c1.4 0 2.2 1.1 2.2 2.1s-.8 2.1-2.2 2.1zm11.6-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 2 .6 2 1.6v.1c-.3-.2-1.1-.5-2-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.7 3.1 2.7 1.3 0 2-.6 2.4-1.2h.1v1h1.8v-4.8c-.1-2.1-1.8-3.4-3.9-3.4zm-.2 6.8c-.6 0-1.5-.3-1.5-1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.2 1.1-1.2 1.9-2.2 1.9zm10.6-6.5l-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.5-1.9 4.2h2l5.1-11.7h-2.1zM107.4 30h1.9V17.7h-1.9V30z"
                />
                <g id="g48">
                  <linearGradient
                    id="path64_1_"
                    gradientUnits="userSpaceOnUse"
                    x1="31.252"
                    y1="-147.153"
                    x2="14.47"
                    y2="-130.371"
                    gradientTransform="matrix(1.0024 0 0 -.9907 -9.248 -114.474)"
                  >
                    <stop offset="0" stop-color="#00A0FF" />
                    <stop offset=".007" stop-color="#00A1FF" />
                    <stop offset=".26" stop-color="#00BEFF" />
                    <stop offset=".512" stop-color="#00D2FF" />
                    <stop offset=".76" stop-color="#00DFFF" />
                    <stop offset="1" stop-color="#00E3FF" />
                  </linearGradient>
                  <path
                    id="path64"
                    className="st2"
                    d="M10.7 7.8c-.3.3-.5.8-.5 1.4v21.9c0 .6.2 1.1.5 1.4l.1.1 12.4-12.3V20L10.7 7.8z"
                  />
                </g>
                <g id="g66">
                  <linearGradient
                    id="path78_1_"
                    gradientUnits="userSpaceOnUse"
                    x1="43.288"
                    y1="-135.862"
                    x2="19.091"
                    y2="-135.862"
                    gradientTransform="matrix(1.0024 0 0 -.9907 -9.248 -114.474)"
                  >
                    <stop offset="0" stop-color="#FFE000" />
                    <stop offset=".409" stop-color="#FFBD00" />
                    <stop offset=".775" stop-color="#FFA500" />
                    <stop offset="1" stop-color="#FF9C00" />
                  </linearGradient>
                  <path
                    id="path78"
                    className="st3"
                    d="M27.3 24.4l-4.1-4.1V20l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7c.1-.1 0 0 0 0z"
                  />
                </g>
                <g id="g80">
                  <linearGradient
                    id="path88_1_"
                    gradientUnits="userSpaceOnUse"
                    x1="25.936"
                    y1="-141.911"
                    x2="3.178"
                    y2="-119.152"
                    gradientTransform="matrix(1.0024 0 0 -.9907 -9.248 -114.474)"
                  >
                    <stop offset="0" stop-color="#FF3A44" />
                    <stop offset="1" stop-color="#C31162" />
                  </linearGradient>
                  <path
                    id="path88"
                    className="st4"
                    d="M27.4 24.3l-4.2-4.2-12.5 12.4c.5.5 1.2.5 2.1.1l14.6-8.3"
                  />
                </g>
                <g id="g90">
                  <linearGradient
                    id="path104_1_"
                    gradientUnits="userSpaceOnUse"
                    x1="8.409"
                    y1="-147.344"
                    x2="18.571"
                    y2="-137.181"
                    gradientTransform="matrix(1.0024 0 0 -.9907 -9.248 -114.474)"
                  >
                    <stop offset="0" stop-color="#32A071" />
                    <stop offset=".069" stop-color="#2DA771" />
                    <stop offset=".476" stop-color="#15CF74" />
                    <stop offset=".801" stop-color="#06E775" />
                    <stop offset="1" stop-color="#00F076" />
                  </linearGradient>
                  <path
                    id="path104"
                    className="st5"
                    d="M27.4 15.9L12.8 7.7c-.9-.5-1.6-.4-2.1.1l12.5 12.3 4.2-4.2z"
                  />
                </g>
              </svg>
            </div>
            <div className="social-as">
              <Link to="#">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-github"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className=" border-bottom bg-secondary"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="footer-s col-3">
            <h4>55,741,680</h4>
            <span>Registered Users</span>
          </div>
          <div className="footer-s col-3">
            <h4>20,654,152</h4>
            <span>Total Jobs Posted</span>
          </div>
          <div className="footer-s col-6">
            <p>
              Freelancer ® is Link registered Trademark of Freelancer Technology
              Pty Limited (ACN 142 189 759)
            </p>
            <p>
              Copyright © 2021 Freelancer Technology Pty Limited (ACN 142 189
              759)
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          padding: 30px 15px;
          background-color: #161e2c;
        }

        .footer .left-icon Link {
          padding-left: 10px;
          color: #f7f7f7;
          font-weight: 700;
        }

        .footer .left-icon i {
          padding-top: 20px;
          color: #f7f7f7;
          font-size: 18px;
        }

        .footer .apps #Layer_1 {
          width: 150px;
          margin-top: 13px;
        }

        .footer .apps #svg2 {
          width: 150px;
          margin-top: 15px;
        }

        .footer .social-as i {
          color: #f7f7f7;
          font-size: 20px;
          margin-top: 25px;
          padding-left: 7px;
        }

        .footer h5 {
          font-family: "Roboto", sans-serif;
          font-weight: 700;
          color: #f7f7f7;
          font-size: 19px;
        }

        .footer Link {
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          color: #f7f7f7bd;
          font-size: 13px;
          text-decoration: none;
        }

        .footer Link:hover {
          color: #f7f7f7;
          border-bottom: 1px solid #f7f7f7;
        }

        .footer-s h4 {
          margin-top: 15px;
          color: #f7f7f7;
          font-family: "Roboto", sans-serif;
          font-size: 15px;
        }

        .footer-s span {
          color: #f7f7f7;
          font-family: "Roboto", sans-serif;
          font-size: 15px;
        }

        .footer-s p {
          margin-top: 15px;
          color: #f7f7f7;
          font-size: 13px;
        }
        /*# sourceMappingURL=style.css.map */
        .st0,
.st1 {
  fill: #fff;
}
.st1 {
  stroke: #fff;
  stroke-width: 0.16;
  stroke-miterlimit: 10;
}
.st2 {
  fill: url(#path64_1_);
}
.st3 {
  fill: url(#path78_1_);
}
.st4 {
  fill: url(#path88_1_);
}
.st5 {
  fill: url(#path104_1_);
}

.st0 {
  fill: #fff;
}
      `}</style>
    </footer>
  );
}
export default Footer;
