import styles from './Calculator.module.css'

const Calculator = () => {
  return (
    <div className={styles.calc_container}>

      <div className={styles.calculator}>

        <input className={styles.result} type="text" value='0' disabled />

        <div className={styles.btn_container}>
          <button className={styles.btns}>7</button>
          <button className={styles.btns}>8</button>
          <button className={styles.btns}>9</button>
          <button className={`${styles.btns} ${styles.orangeColor}`}>/</button>

          <button className={styles.btns}>4</button>
          <button className={styles.btns}>5</button>
          <button className={styles.btns}>6</button>
          <button className={`${styles.btns} ${styles.orangeColor}`}>*</button>

          <button className={styles.btns}>1</button>
          <button className={styles.btns}>2</button>
          <button className={styles.btns}>3</button>
          <button className={`${styles.btns} ${styles.orangeColor}`}>-</button>

          <button className={styles.btns}>0</button>
          <button className={styles.btns}>.</button>
          <button className={styles.btns}>C</button>
          <button className={`${styles.btns} ${styles.orangeColor}`}>+</button>

          <button className={styles.btns}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator;
