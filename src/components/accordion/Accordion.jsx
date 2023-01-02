import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./accordion.css";

const dataCollection = [
  {
    title: "Simpanan",
    subT1: "Tabungan",
    subT2: "Deposito",
    sub1: "iB Hebat Wadiah",
    sub2: "iB Hebat Mudharabah",
    sub3: "iB Hebat Berhadiah",
    sub4: "iB Hebat Simple",
    sub5: "iB Hebat Asuh",
    sub6: "iB Hebat Rencana Multi",
    sub7: "iB Hebat Rencana Ibadah",
    sub8: "iB Hebat Rencana Pendidikan",
    sub9: "iB Hebat Rencana Pensiun",
  },
  {
    title: "Pembiayaan",
    subTitle1: "Sergur Hebat",
    subTitle2: "Developer Hebat",
    subTitle3: "Aset Refinancing",
    subTitle4: "Hebat Syariah",
    subTitle5: "Porsi Haji",
    subTitle6: "Umroh Hebat",
    subTitle7: "Kepemilikan Emas",
  },
];

function Accordion() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }

  return (
    <>
      <div className="container-acc">
          {/* <span className="accordion__title">Produk</span> */}
          <h1>Daftar Produk</h1>
        <div className="accordion__faq">
          {dataCollection.map((item, index) => (
            <div className="accordion__box" key={index}>
              <div className="accordion__faq-heading">
                <h3
                  className={accordion === index ? "active" : ""}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                </h3>
                <div>
                  {accordion === index ? (
                    <span
                      className="verticle"
                      onClick={() => toggleAccordion(index)}
                    >
                      -
                    </span>
                  ) : (
                    <span
                      className="horizental"
                      onClick={() => toggleAccordion(index)}
                    >
                      +
                    </span>
                  )}
                </div>
              </div>
              <div>
                <p className={accordion === index ? "active" : "inactive"}>
                  <div className="accordion__faq-sub">
                    <div className="sub-item1">
                      <h3>{item.subT1}</h3>
                      <p>
                        <ul>
                          <li>
                            <Link to="/sergur">{item.subTitle1}</Link>
                          </li>
                          <li>
                            <Link to="/develop">{item.subTitle2}</Link>
                          </li>
                          <li>
                            <Link to="/aset">{item.subTitle3}</Link>
                          </li>
                          <li>
                            <Link to="/syariah">{item.subTitle4}</Link>
                          </li>
                          <li>
                            <Link to="/haji">{item.subTitle5}</Link>
                          </li>
                          <li>
                            <Link to="/umroh">{item.subTitle6}</Link>
                          </li>
                          <li>
                            <Link to="/emas">{item.subTitle7}</Link>
                          </li>
                        </ul>
                      </p>
                      <p>
                        <ul>
                          <li>
                            <Link to="/wadiah">{item.sub1}</Link>
                          </li>
                          <li>
                            <Link to="/mudharabah">{item.sub2}</Link>
                          </li>
                          <li>
                            <Link to="/berhadiah">{item.sub3}</Link>
                          </li>
                          <li>
                            <Link to="/simple">{item.sub4}</Link>
                          </li>
                          <li>
                            <Link to="/asuh">{item.sub5}</Link>
                          </li>
                          <li>
                            <Link to="/multi">{item.sub6}</Link>
                          </li>
                          <li>
                            <Link to="/ibadah">{item.sub7}</Link>
                          </li>
                          <li>
                            <Link to="/pendidikan">{item.sub8}</Link>
                          </li>
                          <li>
                            <Link to="/pensiun">{item.sub9}</Link>
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div className="sub-item2">
                      <Link to="/deposito">
                        <h3>{item.subT2}</h3>
                      </Link>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          ))}
          <div className="accordion__box">
            <div className="accordion__faq-heading">
              <Link to="/jasa">
                <h3 className="">Jasa Lainnya</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
