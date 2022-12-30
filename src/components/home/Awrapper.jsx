import React from "react"
import { awrapper } from "../../dummydata"
import "./Hmitra.css"

const Awrapper = () => {
  return (
    <>
      <section className="awrapper">
        <div className="text-wrapper">
          <p>
            Bank Syariah, BPRS DANA AMANAH terdaftar dan diawasi oleh Otoritas
            Jasa Keuangan. BPRS DANA AMANAH merupakan peserta Penjamin LPS.
          </p>
        </div>
        <div className="container grid">
          {awrapper.map((val) => {
            return (
              <div key={val.id} className="box flex">
                <img src={val.cover} alt="" />
              </div>
            );
          })}
        </div>
      </section>
      
    </>
  );
}

export default Awrapper
