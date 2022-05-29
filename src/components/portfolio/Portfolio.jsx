import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Portfolio = () => {
  // for popup video
  // const [isOpen, setOpen] = useState(false);
  // const [isOpen2, setOpen2] = useState(false);

  // for modal
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  
  function toggleModalOne() {
    setIsOpen1(!isOpen1);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }

  return (
    <div className="know_tm_main_section">
      <SimpleReactLightbox>
        <div className="know_tm_portfolio">
          <div className="know_tm_main_title">
            <span>Resume</span>
            <h3>My works that I did for clients</h3>
          </div>

          <Tabs>
            <TabList className="portfolio_filter">
              <Tab>All List</Tab>
              {/* All */}
            </TabList>
            {/* END TABLIST */}

            <div className="portfolio_list">
              <TabPanel>
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="100">
                      <div className="list_inner">
                        <div className="image" onClick={toggleModalOne}>
                          <img src="/img/portfolio/BombCrypto/Screenshot_56.png" alt="Details" />
                        </div>
                        <div className="overlay"></div>
                        <span className="icon-text svg"></span>
                        <div className="details">
                          <span> Details</span>
                          <h3>BombCrypto</h3>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li data-aos="fade-right" data-aos-delay="100">
                      <div className="list_inner">
                        <div className="image" onClick={toggleModalTwo}>
                          <img src="/img/portfolio/zedxion/zedxion.png" alt="Details" />
                        </div>
                        <div className="overlay"></div>
                        <span className="icon-text svg"></span>
                        <div className="details">
                          <span> Details</span>
                          <h3>ZEDXION</h3>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalThree}>
                        <img src="/img/portfolio/Sloto Game/Screenshot_56.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>Crypto Gambling Site</h3>
                      </div>
                    </div>
                  </li>
                  {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="200">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalFour}>
                        <img src="/img/portfolio/NFT Minting/Screenshot_21.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>NFT Minting</h3>
                      </div>
                    </div>
                  </li>
                  {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="100">
                      <div className="list_inner">
                        <div className="image" onClick={toggleModalFive}>
                          <img src="/img/portfolio/nft_marketplace/Screenshot_32.png" alt="Details" />
                        </div>
                        <div className="overlay"></div>
                        <span className="icon-text svg"></span>
                        <div className="details">
                          <span> Details</span>
                          <h3>NFT Marketplace</h3>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li data-aos="fade-right" data-aos-delay="100">
                      <div className="list_inner">
                        <div className="image" onClick={toggleModalSix}>
                          <img src="/img/portfolio/Casino/Screenshot_24.png" alt="Details" />
                        </div>
                        <div className="overlay"></div>
                        <span className="icon-text svg"></span>
                        <div className="details">
                          <span> Details</span>
                          <h3>Casino</h3>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                </ul>
                {/* END DETAILS GALLERY */}
              </TabPanel>
              {/* END Details Gallery */}
            </div>
            {/* END LIST WRAPPER */}
          </Tabs>
        </div>
      </SimpleReactLightbox>

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
          isOpen={isOpen1}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                  <div className="top_image">
                    <img src="img/thumbs/1-1.jpg" alt="thumbs" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: "url(/img/portfolio/BombCrypto/Screenshot_57.png)",
                      }}
                    ></div>
                  </div>
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>Bomb Crypto</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
                          <p>
                            NFT P2E Game & NFT Staking
                          </p>
                          <span>
                            <a href="https://bombcrypto.io" target="toggle"> https://bombcrypto.io </a>
                          </span>
                        </div>
                        {/* <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Client</span>
                              <span>Alvaro Morata</span>
                            </li>
                            <li>
                              <span className="first">Category</span>
                              <span>
                                <a href="#">Detail</a>
                              </span>
                            </li>
                            <li>
                              <span className="first">Date</span>
                              <span>March 07, 2021</span>
                            </li>
                          </ul>
                        </div> */}
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/thumbs/4-2.jpg" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(/img/portfolio/BombCrypto/Screenshot_58.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/thumbs/4-2.jpg" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(/img/portfolio/BombCrypto/Screenshot_59.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/thumbs/4-2.jpg" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(/img/portfolio/BombCrypto/Screenshot_60.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/thumbs/4-2.jpg" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(/img/portfolio/BombCrypto/Screenshot_61.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/thumbs/4-2.jpg" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(/img/portfolio/BombCrypto/Screenshot_62.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR PORTFOLIO DETAILS */}

        {/* START MODAL FOR PORTFOLIO DETAILS */}
        <Modal
          isOpen={isOpen2}
          onRequestClose={toggleModalTwo}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalTwo}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                  <div className="top_image">
                    <img src="img/thumbs/1-1.jpg" alt="thumbs" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: "url(/img/portfolio/zedxion/zedxion.png)",
                      }}
                    ></div>
                  </div>
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>ZEDXION</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
                          <p>
                            DEX platform
                            <br />
                            ZEDXION Token & Liquidity Pool & Token Exchange
                          </p>
                          <p>
                            <a href="https://zedxion.io">https://zedxion.io</a>
                          </p>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/thumbs/4-2.jpg" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(/img/portfolio/zedxion/zedxion.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
                <div className="top_image">
                  <img src="img/thumbs/1-1.jpg" alt="thumbs" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/Sloto Game/Screenshot_56.png",
                    }}
                  ></div>
                </div>
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>Cryto Gambling Site</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                          Coin Flip  & Roll Dice
                        </p>
                        <span>
                          <a href="https://sloto.netlify.app" target="toggle"> https://sloto.netlify.app </a>
                        </span>
                      </div>
                      {/* <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Client</span>
                            <span>Alvaro Morata</span>
                          </li>
                          <li>
                            <span className="first">Category</span>
                            <span>
                              <a href="#">Detail</a>
                            </span>
                          </li>
                          <li>
                            <span className="first">Date</span>
                            <span>March 07, 2021</span>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/Sloto Game/Screenshot_57.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/Sloto Game/Screenshot_58.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/Sloto Game/Screenshot_56.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
                <div className="top_image">
                  <img src="img/thumbs/1-1.jpg" alt="thumbs" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/NFT Minting/Screenshot_21.png)",
                    }}
                  ></div>
                </div>
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>NFT Minting</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                          ERC721, ERC721A, ERC1155 Smart Contract & Web3 integration
                        </p>
                        <p>
                          <a href="https://metabountyhunters.io">https://metabountyhunters.io</a>
                        </p>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        {/* <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/Mymoononline/Three_Learning.jpg)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li> */}
                        {/* <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/2.jpg)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li> */}
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/NFT Minting/Screenshot_22.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/NFT Minting/Screenshot_24.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/NFT Minting/Screenshot_29.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/NFT Minting/Screenshot_62.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen5}
        onRequestClose={toggleModalFive}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFive}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
                <div className="top_image">
                  <img src="img/thumbs/1-1.jpg" alt="thumbs" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/nft_marketplace/Screenshot_32.png)",
                    }}
                  ></div>
                </div>
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>NFT Marketplace</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                          NFT Marketplace
                          <br />
                          Smart Contract, Live Auction & Offer, Buy & Sell
                        </p>
                        <p>
                          <a href="https://zedxion.marketplace">https://zedxion.marketplace</a>
                        </p>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        {/* <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/Mymoononline/Three_Learning.jpg)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li> */}
                        {/* <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/2.jpg)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li> */}
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/nft_marketplace/Screenshot_33.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/nft_marketplace/Screenshot_34.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/nft_marketplace/Screenshot_31.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen6}
        onRequestClose={toggleModalSix}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSix}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
                <div className="top_image">
                  <img src="img/thumbs/1-1.jpg" alt="thumbs" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/Casino/Screenshot_24.png)",
                    }}
                  ></div>
                </div>
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>Casino</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                          Crypto Gambling Site & Casino
                        </p>
                        <p>
                          <a href="https://bitcasino.com">https://bitcasino.com</a>
                        </p>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/Casino/Screenshot_25.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/Casino/Screenshot_30.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/Casino/Screenshot_31.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/Casino/Screenshot_32.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </div>
  );
};

export default Portfolio;
