import { Avatar } from './Avatar'
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment( {content, onDeleteComment} ) {
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    function handleDeleteComment() {

        onDeleteComment(content)
    }
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/jonathancs.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jonathan Casagrande</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2024-03-09 19:18:20">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment}title='Deletar Comentário'>
                            <Trash size={20}/>
                        </button>

                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/> 
                        Aplaudir <span>{handleLikeComment}</span>
                    </button>
                </footer>
            </div>
        </div>

    )
}