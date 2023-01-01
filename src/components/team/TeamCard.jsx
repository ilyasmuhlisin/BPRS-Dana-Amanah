import React from "react";
import { team } from "../../dummydata";

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div>
          <article class="card">
            <header class="card__thumb">
              <img alt="" src={val.cover} />
            </header>
            <div class="card__body">
              <h2 class="card__title">
                <h2>{val.name}</h2>
              </h2>
              <div class="card__subtitle">
                <h3>{val.work}</h3>
              </div>
              <p class="card__description">
                <p>
                  <h3>Riwayat Pendidikan</h3>
                  {val.riwayatPend1} <br />
                  {val.riwayatPend2} <br />
                  {val.riwayatPend3} <br />
                  {val.riwayatPend4}
                </p>

                <h3>Riwayat Pekerjaan</h3>
                {val.riwayatPek.map((pek) => (
                  <>
                    <p>
                      <h4>{pek.subRiw}</h4>
                      {pek.sub} <br />
                      {pek.sub2} <br />
                      {pek.sub3} <br />
                      {pek.sub4}
                    </p>
                  </>
                ))}
              </p>
            </div>
          </article>
        </div>
        // <div className='items shadow'>
        //   <div className='img'>
        //     <img src={val.cover} alt='' />
        //     <div className='overlay'>
        //       <i className='fab fa-facebook-f icon'></i>
        //       <i className='fab fa-twitter icon'></i>
        //       <i className='fab fa-instagram icon'></i>
        //       <i className='fab fa-tiktok icon'></i>
        //     </div>
        //   </div>
        //   <div className='details'>
        //     <h2>{val.name}</h2>
        //     <p>{val.work}</p>
        //   </div>
        // </div>
      ))}
    </>
  );
};

export default TeamCard;
