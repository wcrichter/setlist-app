import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>

        <div>
          <header className="mw9 center ph3-ns bb">
            <div className="cf ph2-ns">
              <div className="fl w-third pa2">
                <a href="link">
                  <p className="dib v-mid"></p>
                </a>
              </div>
              <div className="fl w-third pa2 center tc">
                <p className="dib v-mid">Projects</p>
              </div>
              <div className="fl w-third pa2 tr">
                <a href="link">
                  <p className="dib v-mid">Profile</p>
                </a>
              </div>
            </div>
          </header>
          <section className="mw9 center ph4 pt5 pb1">
            <h1 className="fw1 dib ma0">My Projects</h1>
            <button className="f6 fr bg-white ba b--black dim pointer pv1 black" type="submit">Add Project</button>
          </section>
          <section className="mw9 center ph4 pt4">
            <a href="">
              <div className="pa4 mv3 cf ba br3">
                <div className="dib fl w-20">
                  <img src="http://mrmrs.io/photos/p/2.jpg" className="ba br-100 w-100"/>
                </div>
                <div className="dib fl w-80 pl4">
                  <h1 className="f3 fw1 mt2 mb4">Project Name</h1>
                  <p className="f5 fw1 mv0">Next Gig:</p>
                  <p className="f4 fw1 mt2">10/14/2017 - Fundraiser Gig - Arts Bar and Grill</p>
                </div>
              </div>
            </a>
            <a href="">
              <div className="pa4 mv3 cf ba br3">
                <div className="dib fl w-20">
                  <img src="http://mrmrs.io/photos/p/2.jpg" className="ba br-100 w-100"/>
                </div>
                <div className="dib fl w-80 pl4">
                  <h1 className="f3 fw1 mt2 mb4">Project Name</h1>
                  <p className="f5 fw1 mv0">Next Gig:</p>
                  <p className="f4 fw1 mt2">10/14/2017 - Fundraiser Gig - Arts Bar and Grill</p>
                </div>
              </div>
            </a>
          </section>
        </div>

        <hr className="mt5" />

        <div>
          <header className="mw9 center ph3-ns bb">
            <div className="cf ph2-ns">
              <div className="fl w-third pa2">
                <a href="link">
                  <p className="dib v-mid"><i className="fa fa-chevron-left mr1" />Content</p>
                </a>
              </div>
              <div className="fl w-third pa2 center tc">
                <p className="dib v-mid">Band Name</p>
              </div>
              <div className="fl w-third pa2 tr">
                <a href="link">
                  <p className="dib v-mid">Profile</p>
                </a>
              </div>
            </div>
          </header>
          <section className="mw9 center">
            <div className="cf">
              <div className="fl w-third tc f4">
                <a href="" className="link no-underline black">
                  <p className="dib v-mid">Analytics</p>
                </a>
              </div>
              <div className="fl w-third tc f4 bg-black-30 bl bb">
                <a href="" className="link no-underline black">
                  <p className="dib v-mid">Setlists</p>
                </a>
              </div>
              <div className="fl w-third tc f4 bg-black-30 bl bb">
                <a href="" className="link no-underline black">
                  <p className="dib v-mid">Songs</p>
                </a>
              </div>
            </div>
          </section>
          <section>
            <article className="pa4 mt2 cf">
              <div className="dib v-mid fl w-25">
                <img src="http://mrmrs.io/photos/p/2.jpg" className="ba br-100 w-100"/>
              </div>
              <div className="dib v-mid fl w-75 w-50-ns pl4">
                <h1 className="f3 f2-ns fw1 mb0">Project Name</h1>
                <h2 className="f4 f3-ns fw1 mb0 mt2">Location</h2>
                <h2 className="f6 f5-ns fw1 mb0">Genre</h2>
              </div>
              <div className="dib v-mid fl w-100 w-25-ns">
                <button className="f6 fr bg-white ba b--black dim pointer pv1 black" type="submit">Edit Project</button>
              </div>
            </article>
          </section>
          <section>
            <div className="mw9 center ph3-ns">
              <div className="cf ph2-ns">
                <div className="fl w-100 pa2">
                  <div className="bg-black-10 ba b--black-30 br2 pa3">
                    <div className="mb3">Upcoming Gigs:</div>
                    <div className="f6">10/14/2017 - Fundraiser Gig - Arts Bar and Grill</div>
                  </div>
                </div>
                <div className="fl w-100 w-third-ns pa2">
                  <div className="bg-black-10 ba b--black-30 br2 pa3">
                    <div className="mb3">Total Songs:</div>
                    <div className="f1 fw1">28</div>
                  </div>
                </div>
                <div className="fl w-100 w-third-ns pa2">
                  <div className="bg-black-10 ba b--black-30 br2 pa3">
                    <div className="mb3">Total Gigs:</div>
                    <div className="f1 fw1">8</div>
                  </div>
                </div>
                <div className="fl w-100 w-third-ns pa2">
                  <div className="bg-black-10 ba b--black-30 br2 pa3">
                    <div className="mb3">Total Artists:</div>
                    <div className="f1 fw1">12</div>
                  </div>
                </div>
                <div className="fl w-50 pa2">
                  <div className="bg-black-10 ba b--black-30 br2 pa3">
                    <div className="mb3">Highest Rated Songs:</div>
                    <ol>
                      <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                      <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                      <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                    </ol>
                  </div>
                </div>
                <div className="fl w-50 pa2">
                <div className="bg-black-10 ba b--black-30 br2 pa3">
                  <div className="mb3">Highest Rated Songs:</div>
                    <ol>
                      <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                      <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                      <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                    </ol>
                  </div>
                </div>
                <div className="fl w-100 pa2">
                  <div className="bg-black-10 ba b--black-30 br2 pa3">
                    <div className="mb3">Gig Frequency:</div>
                  </div>
                </div>
                <div className="fl w-100 pa2">
                  <div className="bg-black-10 ba b--black-30 br2 pa3">
                    <div className="mb3">Project Contributors:</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <hr className="mt5" />

        <div>
          <header className="mw9 center ph3-ns bb">
            <div className="cf ph2-ns">
              <div className="fl w-third pa2">
                <a href="link">
                  <p className="dib v-mid"><i className="fa fa-chevron-left mr1" />Projects</p>
                </a>
              </div>
              <div className="fl w-third pa2 center tc">
                <p className="dib v-mid">Band Name</p>
              </div>
              <div className="fl w-third pa2 tr">
                <a href="link">
                  <p className="dib v-mid">Profile</p>
                </a>
              </div>
            </div>
          </header>
          <section className="mw9 center">
            <div className="cf">
              <div className="fl w-third tc f4 bg-black-30 bb">
                <a href="" className="link no-underline black">
                  <p className="dib v-mid">Analytics</p>
                </a>
              </div>
              <div className="fl w-third tc f4 bl ">
                <a href="" className="link no-underline black">
                  <p className="dib v-mid">Setlists</p>
                </a>
              </div>
              <div className="fl w-third tc f4 bg-black-30 bl bb">
                <a href="" className="link no-underline black">
                  <p className="dib v-mid">Songs</p>
                </a>
              </div>
            </div>
          </section>
          <section className="mw9 center pt3 ph3-ns bb">
            <div className="cf ph2-ns">
              <div className="fl w-50 ph2 pv4">
                <span className="f4 fw1">Viewing: All Setlists (9)</span>
              </div>
              <div className="fl w-50 ph2 pv4">
                <button className="f6 fr bg-white ba b--black dim pointer pv1 black" type="submit">Add Setlist</button>
              </div>
            </div>
          </section>
          <section className="mw9 center pt2 ph3-ns bt bw2 b--black-10">
            <ul className="list pl0 center ph3-ns">
              <li className="ba br3 pa3 mb2 cf">
                <div className="fl w-25-ns">Date</div>
                <div className="fl w-50-ns">
                  <p className="ma0">Event Name</p>
                  <p className="ma0 pt2 f6">Location</p>
                </div>
                <div className="fl w-25-ns tr">19 Songs</div>
              </li>
              <li className="ba br3 pa3 mb2 cf">
                <div className="fl w-25-ns">Date</div>
                <div className="fl w-50-ns">
                  <p className="ma0">Event Name</p>
                  <p className="ma0 pt2 f6">Location</p>
                </div>
                <div className="fl w-25-ns tr">19 Songs</div>
              </li>
              <li className="ba br3 pa3 mb2 cf">
                <div className="fl w-25-ns">Date</div>
                <div className="fl w-50-ns">
                  <p className="ma0">Event Name</p>
                  <p className="ma0 pt2 f6">Location</p>
                </div>
                <div className="fl w-25-ns tr">19 Songs</div>
              </li>
              <li className="ba br3 pa3 mb2 cf bg-black-10">
                <div className="fl w-25-ns">Date</div>
                <div className="fl w-50-ns">
                  <p className="ma0">Event Name</p>
                  <p className="ma0 pt2 f6">Location</p>
                </div>
                <div className="fl w-25-ns tr">19 Songs</div>
                <div className="fl w-100 bt pt2 mt3"><i className="fa fa-thumbs-up mr2" aria-hidden="true"/>How was the show? Provide some feedback to help plan your next gig!</div>
              </li>
            </ul>
          </section>
        </div>

        <hr className="mt5" />

        <div>
          <header className="mw9 center ph3-ns bb">
            <div className="cf ph2-ns">
              <div className="fl w-third pa2">
                <a href="link">
                  <p className="dib v-mid"><i className="fa fa-chevron-left mr1" />Projects</p>
                </a>
              </div>
              <div className="fl w-third pa2 center tc">
                <p className="dib v-mid">Band Name</p>
              </div>
              <div className="fl w-third pa2 tr">
                <a href="link">
                  <p className="dib v-mid">Profile</p>
                </a>
              </div>
            </div>
          </header>
          <section className="mw9 center">
            <div className="cf">
              <div className="fl w-third tc f4 bg-black-30 bb">
                <a href="" className="link no-underline black">
                  <p className="dib v-mid">Analytics</p>
                </a>
              </div>
              <div className="fl w-third tc f4 bl ">
                <a href="" className="link no-underline black">
                  <p className="dib v-mid">Setlists</p>
                </a>
              </div>
              <div className="fl w-third tc f4 bg-black-30 bl bb">
                <a href="" className="link no-underline black">
                  <p className="dib v-mid">Songs</p>
                </a>
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
                  <div className="f4 fw1 mb4">Enter some basic information.</div>
                  <form className="black">
                    <div className="mb3">
                      <label for="name" className="f6 b db mb2">Name <span className="normal black-60">(optional)</span></label>
                      <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                      <small id="name-desc" className="f6 black-60 db mb2">Name of the event. (ie. "Kenny's 30'th Birthday Throwdown!")</small>
                    </div>
                    <div className="mb4">
                      <label for="name" className="f6 b db mb2">Venue </label>
                      <select className="ba b--black-20 pa2">
                        <option value="key-a">Select A Venue</option>
                        <option value="key-a">Venue Name 1 Goes Here</option>
                        <option value="key-a">Venue Name 1 Goes Here</option>
                      </select>
                      <button className="f6 ml3 bg-white ba b--black dim pointer pv1 black" type="submit">Add Venue</button>
                    </div>
                    <div className="cf mb3">
                      <div className="fl mr3">
                        <label for="name" className="f6 b db mb2">Date </label>
                        <input type="text" className="input-reset ba b--black-20 pa2 mb2"/>
                        <small id="name-desc" className="f6 black-60 db mb2">YYYY/MM/DD</small>
                      </div>
                      <div className="fl mr3">
                        <label for="name" className="f6 b db mb2">Start Time <span className="normal black-60">(optional)</span></label>
                        <input type="text" className="input-reset ba b--black-20 pa2 mb2"/>
                      </div>
                      <div className="fl mr3">
                        <label for="name" className="f6 b db mb2">End Time <span className="normal black-60">(optional)</span></label>
                        <input type="text" className="input-reset ba b--black-20 pa2 mb2"/>
                      </div>
                    </div>
                    <div className="mb4">
                      <label for="name" className="f6 b db mb2">Event Type </label>
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
                      <label for="name" className="f6 b db mb2">Admission <span className="normal black-60">(optional)</span></label>
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
                      <label for="comment" className="f6 b db mb2">Description <span className="normal black-60">(optional)</span></label>
                      <textarea id="comment" name="comment" className="db border-box hover-black w-100 h3 ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
                      <small id="comment-desc" className="f6 black-60">Helpful information to know about this event. <a href="#" className="link underline black-80 hover-blue">Link to more info.</a></small>
                    </div>
                    <div className="mb3">
                      <label for="comment" className="f6 b db mb2">Tags <span className="normal black-60">(optional)</span></label>
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

        </div>

        <hr className="mt5" />

        <div>
          <header className="mw9 center ph3-ns bb">
            <div className="cf ph2-ns">
              <div className="fl w-third pa2">
                <a href="link">
                  <p className="dib v-mid"><i className="fa fa-chevron-left mr1" />Projects</p>
                </a>
              </div>
              <div className="fl w-third pa2 center tc">
                <p className="dib v-mid">Band Name</p>
              </div>
              <div className="fl w-third pa2 tr">
                <a href="link">
                  <p className="dib v-mid">Profile</p>
                </a>
              </div>
            </div>
          </header>
          <section className="mw9 center">
            <div className="cf">
              <div className="fl w-third tc f4 bg-black-30 bb">
                <a href="" className="link no-underline black">
                  <p className="dib v-mid">Analytics</p>
                </a>
              </div>
              <div className="fl w-third tc f4 bl ">
                <a href="" className="link no-underline black">
                  <p className="dib v-mid">Setlists</p>
                </a>
              </div>
              <div className="fl w-third tc f4 bg-black-30 bl bb">
                <a href="" className="link no-underline black">
                  <p className="dib v-mid">Songs</p>
                </a>
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
                  <div className="f4 fw1 mb4">Enter some basic information.</div>

                </div>
              </div>
              <div className="center tc pv3 bt">
                <button className="f6 mh1 bg-white ba b--black dim pointer black" type="submit">Back</button>
                <button className="f6 mh1 bg-white ba b--black dim pointer black" type="submit">Next</button>
              </div>
            </div>
          </section>

        </div>

        <hr className="mt5" />


      </div>
    );
  }
}

export default App;
