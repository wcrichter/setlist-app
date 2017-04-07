import React from 'react'

const DetailsGig = () => {
  return (
    <div>
      <section className="mw9 center pt4 ph4-ns">
        <div className="ba">
          <div className="cf ph3 bb">
            <div className="fl w-75 ph2 pv4">
              <span className="f3 fw1">Carolina Childrens Charity</span>
            </div>
            <div className="fl w-25 ph2 pv4">
              <button className="f6 fr bg-white ba b--black dim pointer pv1 black" type="submit">Cancel</button>
            </div>
          </div>
          <div className="cf ph3">
            <div className="fl w-40 ph2 pv4 br">
              <div className="f4 fw1">
                Gig Information
                <ul className="list pl0">
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

export default DetailsGig
