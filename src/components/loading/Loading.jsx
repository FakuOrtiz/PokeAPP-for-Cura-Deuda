import React from 'react'
import loading from "../../assets/loading.gif"
import styles from "./Loading.module.css"

const Loading = () => {
  return (
    <div className={styles.containerLoading}>
        <img src={loading} alt="Loading gif" />
    </div>
  )
}

export default Loading