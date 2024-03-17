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
      {type: 'paragraph', content: 'mais um paragrafo'},
      {type: 'paragraph', content: 'e outro'},
    ],
    publishedAt: new Date('2022-05-03')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'mayk brito',
      role: 'web developeeerrrrr'
    },
    content: [
      {type: 'paragraph', content: 'que loucura aaa'},
      {type: 'paragraph', content: 'mais um paragrafo'},
      {type: 'paragraph', content: 'e outro'},
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
              author ={post.author}
              content ={post.content}
              publishedAt ={post.publishedAt}
            />)
          })}
        </main>
      </div>


    </div>

    // <div>
    //   <Header/>
    
    //   <div className={styles.wrapper}>
    //     <Sidebar />
    //     <main>
    //       <Post 
    //       author="Diego Fernandes" 
    //       content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quibusdam ipsam eveniet autem id optio rem maxime repellat quisquam minus dignissimos soluta vero expedita pariatur labore, asperiores enim perferendis molestias."
    //       />
    //       <Post 
    //         author="Gabriel Buzzi" 
    //         content="um novo post"
    //       />
    //     </main>
    //   </div>
    // </div>
  )
}