import { Header } from './components/Header.jsx'
import { Post } from './components/Post.jsx'
import { Sidebar } from './components/Sidebar.jsx'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jonathancs.png',
      name: 'jonathan casagrande',
      role: 'web developeeerrrrr'
    },
    content: [
      {type: 'paragraph', content: 'que loucura aaa'},
      {type: 'paragraph', content: 'do meiooooo'},
      {type: 'paragraph', content: 'mais um paragrafo'},
      {type: 'link', content: 'e outro'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/jonathancs.png',
      name: 'mayk brito',
      role: 'web developeeerrrrr'
    },
    content: [
      {type: 'paragraph', content: 'que loucura aaa'},
      {type: 'paragraph', content: 'do meio'},
      {type: 'paragraph', content: 'mais um paragrafo'},
      {type: 'link', content: 'e outro'},
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  }

]

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          })}
        </main>
      </div>
    </div>
  )
}