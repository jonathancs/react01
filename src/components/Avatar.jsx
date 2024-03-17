import styles from './Avatar.module.css'

export function Avatar ({hasBorder = true, src}) {

    const hasBorder = props.hasBorder =! false

    return (
        <img className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} src={props.src}/>
    )
}