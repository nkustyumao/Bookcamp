import React, { useEffect, useState } from 'react'
import styles from './front-page-language2.module.css'
import CommodityPage from '@/components/share/commodity/commodity-page'
import GenreBtnGroup2 from '@/components/share/genre-btn-group2'
import Link from 'next/link'
export default function FrontPageLanguageEn(props) {
  const pageSpacing = {
    marginTop: '10vh',
  }

  return (
    <>
      <div className='row' style={pageSpacing} id={props.id}>
        <div className='d-none d-md-block header-height-S'></div>
        <div className='col col-xl-1'></div>
        <div className='col-12 col-xl-10'>
          {/* 手機板title */}
          <div className='d-flex d-xxl-none position-relative'>
            <div className='neon-border py-3 text-white fw-bold mx-auto'>
              <div className={`${styles.moreBtnPosition} more-btn`}>
                <button className='fw-bold'>
                  查看更多<i className='fa-solid fa-arrow-right ms-2'></i>
                </button>
              </div>
              <h5 className='d-flex align-items-center justify-content-center pixel-font-chinese'>
                <i className='fa-solid fa-book me-2'></i>
                <span>英文書類</span>
              </h5>
            </div>
          </div>
          <div
            className={`${styles.languageBlock} row m-bg-purple boder-pixel-w`}
          >
            <div className='col d-none d-md-flex'>
              <div className={styles.decorateSide}>
                <span className='d-flex plus-shape'></span>
                <span
                  className={`${styles.yellowSame} d-flex plus-shape plus-shape-yellow`}
                ></span>
                <span className='d-flex plus-shape'></span>
                <span
                  className={`${styles.yellowSame} d-flex plus-shape plus-shape-yellow`}
                ></span>
                <span className='d-flex plus-shape'></span>
                <span
                  className={`${styles.yellowSame} d-flex plus-shape plus-shape-yellow`}
                ></span>
                <span className='d-flex plus-shape'></span>
                <span
                  className={`${styles.yellowSame} d-flex plus-shape plus-shape-yellow`}
                ></span>
                <span className='d-flex plus-shape'></span>
              </div>
              <div className={`${styles.sideDecorativeBlock}`}>
                <div className='shape1'></div>
                <div className='d-flex mt-auto'>
                  <div className='shape2 bg-black me-3'></div>
                  <div className='shape3 bg-black'></div>
                </div>
              </div>
            </div>
            <div className='d-flex flex-column col-12 col-md-9 position-relative'>
              <Link className={`${styles.languageAd}`} href='#'>
                <img
                  className='d-block d-xxl-none'
                  src='/img/test/800x300_ad_3.jpg'
                />
              </Link>
              <div className='d-flex justify-content-end'>
                <div className='col-12 col-xxl-10'>
                  <GenreBtnGroup2
                    genreBtnGroupRef={React.createRef()}
                    category={props.category}
                    categoryData={props.categoryData}
                  />
                </div>
              </div>
              <div className='col-12'>
                <div className='d-flex mb-4 mb-xxl-3 position-relative'>
                  <div className='col-2 d-none d-xxl-block'>
                    <div className='d-flex flex-column pe-3 h-100 position-relative'>
                      <div className='neon-border py-3 text-white fw-bold me-2'>
                        <div className={`${styles.moreBtnPositionL} more-btn`}>
                          <button className='fw-bold'>
                            查看更多
                            <i className='fa-solid fa-arrow-right ms-2'></i>
                          </button>
                        </div>
                        <h5 className='pixel-font-chinese d-flex align-items-center justify-content-center'>
                          <i className='fa-solid fa-book-bookmark me-2'></i>
                          英文書類
                        </h5>
                      </div>
                      <Link className={`${styles.languageAd}`} href='#'>
                        <img src='/img/test/200x600_ad_3.jpg' />
                      </Link>
                    </div>
                  </div>
                  {/* 活動商品區 */}
                  <div
                    className={`${styles.commodityArea} col-12 col-xxl-10 d-bg-purple p-2`}
                  >
                    <div className='d-flex flex-wrap w-100'>
                      {props.EN.map((item) => {
                        return (
                          <CommodityPage
                            rwd='col-6 col-md-4 col-xl-3'
                            item={item}
                            book_id={item.book_id}
                            b_title={item.b_title}
                            book_price={item.book_price}
                            book_img_id={item.book_img_id}
                            key={item.book_id}
                          />
                        )
                      })}
                    </div>
                    <Link
                      href='/newbook?book_language=2'
                      className={`${styles.longMoreBtn} d-none d-xxl-flex boder-pixel`}
                    >
                      <div className={styles.classMoreBtn}>
                        <i className='fa-solid fa-caret-right'></i>
                        看更多
                        <i className='fa-solid fa-caret-right'></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col d-none d-md-flex'>
              <div className={`${styles.sideDecorativeBlock} w-100`}>
                <div className='shape4 bg-white mb-3'></div>
                <div className='shape4 bg-white mb-3'></div>
                <div className='shape4 bg-white'></div>
                <div className='shape5 line-br-pink mt-auto'></div>
              </div>
              <div className={`${styles.decorateSide} w-auto`}>
                <span className='d-flex plus-shape'></span>
                <span
                  className={`${styles.yellowSame} d-flex plus-shape plus-shape-yellow`}
                ></span>
                <span className='d-flex plus-shape'></span>
                <span
                  className={`${styles.yellowSame} d-flex plus-shape plus-shape-yellow`}
                ></span>
                <span className='d-flex plus-shape'></span>
                <span
                  className={`${styles.yellowSame} d-flex plus-shape plus-shape-yellow`}
                ></span>
                <span className='d-flex plus-shape'></span>
                <span
                  className={`${styles.yellowSame} d-flex plus-shape plus-shape-yellow`}
                ></span>
                <span className='d-flex plus-shape'></span>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.classBtnBlock} col-9 d-flex d-xxl-none mt-2`}>
          <button
            className={`${styles.classMoreBtn} m-bg-purple boder-pixel-w`}
          >
            <i className='fa-solid fa-caret-down me-2'></i>
            看更多
            <i className='fa-solid fa-caret-down ms-2'></i>
          </button>
        </div>
        <div className='col col-xl-1'></div>
      </div>
    </>
  )
}
