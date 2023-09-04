import ForumBreadcrumb from '@/components/forum/forum-breadcrumb'
import SearchPost from '@/components/forum/search-post'
import ChatRoom from '@/components/forum/chat-room'
import Category from '@/components/forum/category'
import ForumButtonHeader from '@/components/forum/forum-button-header'
import ForumPostHeader from '@/components/forum/forum-post-header'
import ForumPost from '@/components/forum/forum_post'
import Exchange from '@/components/forum/exchange'
import { useEffect, useState, useContext } from 'react'
import { useAuthJWT } from '../../hooks/use-auth-jwt'
import Link from 'next/link'
import axios from 'axios'
// import { Link } from 'react-router-dom'
export default function Index() {
  const [post, setPost] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const itemsPerPage = 6
  const [page, setPage] = useState(1) // 当前页数，默认为第一页
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }
  console.log('width', windowSize.width)
  console.log('height', windowSize.height)
  useEffect(() => {
    // 添加窗口大小变化事件监听器
    window.addEventListener('resize', handleResize)

    // 组件卸载时清理事件监听器
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      <div className='container'>
        <div className='row'>
          {/* 導覽路徑 */}
          <ForumBreadcrumb />
          <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12'>
            <div className='d-flex flex-column h-100 px-2'>
              {/* 交流版 */}
              <Exchange />
              {/* 搜尋功能 */}
              <SearchPost setPost={setPost} />
              {/* 分類按鈕 */}
              <Category setPost={setPost} post={post} />
            </div>
          </div>
          <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-0 d-none d-md-block'>
            {/* 聊天室 */}
            <ChatRoom />
          </div>
        </div>
        <div className='row'>
          {/* 文章按鈕功能 */}
          <ForumButtonHeader />
          <div className='d-flex flex-column'>
            {/* 文章header */}
            <ForumPostHeader />
            {/* 文章內容 */}
            <div className='my-4 position-relative'>
              <ForumPost
                setPost={setPost}
                post={post}
                setTotalCount={setTotalCount}
              />
            </div>
          </div>
          <nav
            className='d-flex justify-content-center mb-5'
            aria-label='Page navigation'
          >
            <ul className={`pagination justify-content-center`}>
              {Array.from({ length: Math.ceil(totalCount / itemsPerPage) }).map(
                /* 佔位符號 _ 因為沒有被使用到 */
                (_, index) => (
                  <li className='page-item mx-2 pixel-box--white-s text-white'>
                    <Link
                      key={index}
                      href={`/forum?page=${index + 1}`}
                      type='button'
                      className={`mx-2 my-1 ${
                        index + 1 === page ? 'active' : ''
                      }`}
                    >
                      {index + 1}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 576px) {
          .container {
            flex-direction: column;
          }
        }
        @media (max-width: 576px) {
          .container {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  )
}
