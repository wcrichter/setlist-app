import React from 'react'
import { Link } from 'react-router-dom'
import ButtonBasic from './button-basic'
import ButtonCTA from './button-cta'

const FormGig = (props) => {
  return (
    <div>
      <section className="mw9 center pt4 ph4-ns">
        <div className="ba">
          <div className="cf ph3 bb">
            <div className="fl w-75 ph2 pv4">
              <span className="f3 fw1">New Event</span>
            </div>
            <div className="fr tr w-25 ph2 pv4">
              <Link to="/project/gigs">
                <ButtonBasic text="Cancel" />
              </Link>
            </div>
          </div>
          <div className="cf ph3">
            <div className="fl w-100 ph2 pv4">
              <div className="f4 fw1 mb4">Enter some basic information.</div>
              <form className="black">
                <div className="mb3">
                  <label htmlFor="name" className="f6 b db mb2">Name <span className="normal black-60">(optional)</span></label>
                  <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                  <small id="name-desc" className="f6 black-60 db mb2">Name of the event. (ie. "Kenny's 30'th Birthday Throwdown!")</small>
                </div>
                <div className="mb4">
                  <label htmlFor="name" className="f6 b db mb2">Venue </label>
                  <select className="ba b--black-20 pa2">
                    <option value="key-a">Select A Venue</option>
                    <option value="key-a">Venue Name 1 Goes Here</option>
                    <option value="key-a">Venue Name 1 Goes Here</option>
                  </select>
                  <button className="f6 ml3 bg-white ba b--black dim pointer pv1 black" type="submit">Add Venue</button>
                </div>
                <div className="cf mb3">
                  <div className="fl mr3">
                    <label htmlFor="name" className="f6 b db mb2">Date </label>
                    <input type="text" className="input-reset ba b--black-20 pa2 mb2"/>
                    <small id="name-desc" className="f6 black-60 db mb2">YYYY/MM/DD</small>
                  </div>
                  <div className="fl mr3">
                    <label htmlFor="name" className="f6 b db mb2">Start Time <span className="normal black-60">(optional)</span></label>
                    <input type="text" className="input-reset ba b--black-20 pa2 mb2"/>
                  </div>
                  <div className="fl mr3">
                    <label htmlFor="name" className="f6 b db mb2">End Time <span className="normal black-60">(optional)</span></label>
                    <input type="text" className="input-reset ba b--black-20 pa2 mb2"/>
                  </div>
                </div>
                <div className="mb4">
                  <label htmlFor="name" className="f6 b db mb2">Event Type </label>
                  <select className="ba b--black-20 pa2">
                    <option value="key-a">Select A Venue</option>
                    <option value="key-a">Rehearsal</option>
                    <option value="key-a">Bar</option>
                    <option value="key-a">Private</option>
                    <option value="key-a">Concert</option>
                    <option value="key-a">Festival</option>
                    <option value="key-a">Fundraiser</option>
                    <option value="key-a">Other</option>
                  </select>
                </div>
                <div className="mb4">
                  <label htmlFor="name" className="f6 b db mb2">Admission <span className="normal black-60">(optional)</span></label>
                  <div className="cf mb2">
                    <div className="fl mr2 pa2 ba tc br1 pointer" value="american">
                      <span className="dn db-ns">All Ages</span>
                    </div>
                    <div className="fl mr2 pa2 ba tc br1 pointer" value="american">
                      <span className="dn db-ns">18+</span>
                    </div>
                    <div className="fl mr2 pa2 ba tc br1 pointer" value="american">
                      <span className="dn db-ns">21+</span>
                    </div>
                  </div>
                  <small id="name-desc" className="f6 black-60 db mb2">What kind of crowd to expect.</small>
                </div>
                <div className="mb3">
                  <label htmlFor="comment" className="f6 b db mb2">Description <span className="normal black-60">(optional)</span></label>
                  <textarea id="comment" name="comment" className="db border-box hover-black w-100 h3 ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
                  <small id="comment-desc" className="f6 black-60">Helpful information to know about this event. <a href="#" className="link underline black-80 hover-blue">Link to more info.</a></small>
                </div>
                <div className="mb3">
                  <label htmlFor="comment" className="f6 b db mb2">Tags <span className="normal black-60">(optional)</span></label>
                  <textarea id="comment" name="comment" className="db border-box hover-black w-100 h2 ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
                  <small id="comment-desc" className="f6 black-60">Keywords to help us pick the best songs for your setlist.</small>
                </div>
              </form>
            </div>
          </div>
          <div className="center tc pv3 bt">
            <button className="f6 mh1 bg-white ba b--black dim pointer black" type="submit">Back</button>
            <button className="f6 mh1 bg-white ba b--black dim pointer black" type="submit">Next</button>
          </div>
        </div>
      </section>

      <section className="mw9 center pt4 ph4-ns">
        <div className="ba">
          <div className="cf ph3 bb">
            <div className="fl w-75 ph2 pv4">
              <span className="f3 fw1">New Event</span>
            </div>
            <div className="fl w-25 ph2 pv4">
              <button className="f6 fr bg-white ba b--black dim pointer pv1 black" type="submit">Cancel</button>
            </div>
          </div>
          
          <div className="center tc pv3 bt">
            <button className="f6 mh1 bg-white ba b--black dim pointer black" type="submit">Back</button>
            <button className="f6 mh1 bg-white ba b--black dim pointer black" type="submit">Next</button>
          </div>
        </div>
      </section>
      <section className="mw9 center pt4 ph4-ns">
        <div className="ba">
          <div className="cf ph3 bb">
            <div className="fl w-75 ph2 pv4">
              <span className="f3 fw1">New Event</span>
            </div>
            <div className="fl w-25 ph2 pv4">
              <button className="f6 fr bg-white ba b--black dim pointer pv1 black" type="submit">Cancel</button>
            </div>
          </div>
          <div className="cf ph3">
            <div className="fl w-100 ph2 pv4">
              <div className="f4 fw1">
                Select / edit available songs.
              </div>
            </div>
          </div>
          <div className="mw9 center bb">
            <div className="cf ph2-ns">
              <div className="fl w-75 ph3 pb4">
                <span className="f4 fw1 mr3">Selected Songs: 3 of 29</span>
                <button className="f6 bg-white ba b--black dim pointer pv1 black" type="submit">View Selected</button>
              </div>
              <div className="fl w-25 ph3 pb4">
                {/*}
                <button className="f6 fr bg-white ba b--black dim pointer pv1 black" type="submit">Add Setlist</button>
                */}
              </div>
            </div>
          </div>
          <div className="mw9 center pt2 ph3-ns bt bw2 b--black-10">
            <ul className="list pl0 center ph2-ns">
              <li className="ba br3 pa3 mb2 cf">
                <div className="fl w-25-ns">Artist</div>
                <div className="fl w-50-ns">
                  <p className="ma0">Song Title</p>
                </div>
                <div className="fl w-25-ns tr">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
              </li>
              <li className="ba br3 pa3 mb2 cf">
                <div className="fl w-25-ns">Artist</div>
                <div className="fl w-50-ns">
                  <p className="ma0">Song Title</p>
                </div>
                <div className="fl w-25-ns tr">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
              </li>
              <li className="ba br3 pa3 mb2 cf">
                <div className="fl w-25-ns">Artist</div>
                <div className="fl w-50-ns">
                  <p className="ma0">Song Title</p>
                </div>
                <div className="fl w-25-ns tr">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
              </li>
            </ul>
          </div>
          <div className="center tc pv3 bt">
            <button className="f6 mh1 bg-white ba b--black dim pointer black" type="submit">Back</button>
            <button className="f6 mh1 bg-white ba b--black dim pointer black" type="submit">Next</button>
          </div>
        </div>
      </section>
      <section className="mw9 center pt4 ph4-ns">
        <div className="ba">
          <div className="cf ph3 bb">
            <div className="fl w-75 ph2 pv4">
              <span className="f3 fw1">New Event</span>
            </div>
            <div className="fl w-25 ph2 pv4">
              <button className="f6 fr bg-white ba b--black dim pointer pv1 black" type="submit">Cancel</button>
            </div>
          </div>
          <div className="cf ph3">
            {/*<div className="fl w-100 ph2 pv4">
              <div className="f4 fw1">
                Select / edit available songs.
              </div>
            </div>
            */}
            <div className="fl w-40 ph2 pv4 br">
              <div className="f4 fw1">
                Gig Information
                <ul className="list pl0">
                  <li className="pb1 mb2">
                    <label className="f6 fw6">Event</label><br />
                    <span className="f5">Carolina Childrens Charity</span>
                  </li>
                  <li className="pb1 mb2">
                    <label className="f6 fw6">When</label><br />
                    <span className="f5">10/12/2017, {`9pm-10pm`}</span>
                  </li>
                  <li className="pb1 mb2">
                    <label className="f6 fw6">Event Type</label><br />
                    <span className="f5">Funraiser</span>
                  </li>
                  <li className="pb1 mb2">
                    <label className="f6 fw6">Venue</label><br />
                    <span className="f5">Wild Wing Cafe</span><br />
                    <span className="f6">Street Address</span><br />
                    <span className="f6">City, ST</span>
                  </li>
                  <li className="pb1 mb2">
                    <label className="f6 fw6">Addmision</label><br />
                    <span className="f5">All Ages</span>
                  </li>
                  <li className="pb1 mb2">
                    <label className="f6 fw6">Notes</label><br />
                    <span className="f6">Hopped up on catnip. Lay on arms while youre using the keyboard wake up wander around the house.</span>
                  </li>
                  <li className="pb1 mb2">
                    <label className="f6 fw6">Tags</label><br />
                    <span className="f6">family, outdoor, fun, dance</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="fl w-60 ph4 pv4">
              <div className="f4 fw1">
                Setlist
                <ul className="list pl0">
                  <li className="pb1 mb2 bb b--black-10">
                    <span className="f5">Song Name</span><br />
                    <span className="f6">Artist</span>
                  </li>
                  <li className="pb1 mb2 bb b--black-10">
                    <span className="f5">Song Name</span><br />
                    <span className="f6">Artist</span>
                  </li>
                  <li className="pb1 mb2 bb b--black-10">
                    <span className="f5">Song Name</span><br />
                    <span className="f6">Artist</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="center tc pv3 bt">
            <button className="f6 mh1 bg-white ba b--black dim pointer black" type="submit">Back</button>
            <button className="f6 mh1 bg-white ba b--black dim pointer black" type="submit">Next</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormGig
