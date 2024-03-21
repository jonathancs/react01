import { Avatar } from './Avatar'
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
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

                        <button title='Deletar Comentário'>
                            <Trash size={20}/>
                        </button>

                    </header>

                    <p>Muito bom Devon, parabénss</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/> 
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>

    )
}