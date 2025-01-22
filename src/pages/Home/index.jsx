import styles from './Home.module.css'
import useCalculator from '../../hooks/useCalculator'
import Sidebar from "../../layout/Sidebar"


const Home = () => {

  const { displayValue,
    handleDigit,
    handleOperator,
    handleDecimal,
    handleEqual,
    clearDisplay } = useCalculator()


  return (
    <div className={styles.calc_container}>
      <div className={styles.calculator}>

      <Sidebar />

        <input className={styles.result} type="text" value={displayValue} disabled />

        <div className={styles.btn_container}>
          <button onClick={() => handleDigit('7')} className={styles.btns}>7</button>
          <button onClick={() => handleDigit('8')} className={styles.btns}>8</button>
          <button onClick={() => handleDigit('9')} className={styles.btns}>9</button>
          <button onClick={() => handleOperator('/')} className={`${styles.btns} ${styles.orangeColor}`}>/</button>

          <button onClick={() => handleDigit('4')} className={styles.btns}>4</button>
          <button onClick={() => handleDigit('5')} className={styles.btns}>5</button>
          <button onClick={() => handleDigit('6')} className={styles.btns}>6</button>
          <button onClick={() => handleOperator('*')} className={`${styles.btns} ${styles.orangeColor}`}>*</button>

          <button onClick={() => handleDigit('1')} className={styles.btns}>1</button>
          <button onClick={() => handleDigit('2')} className={styles.btns}>2</button>
          <button onClick={() => handleDigit('3')} className={styles.btns}>3</button>
          <button onClick={() => handleOperator('-')} className={`${styles.btns} ${styles.orangeColor}`}>-</button>

          <button className={styles.btns}>0</button>
          <button onClick={() => handleDecimal('.')} className={styles.btns}>.</button>
          <button onClick={() => clearDisplay()} className={styles.btns}>C</button>
          <button onClick={() => handleOperator('+')} className={`${styles.btns} ${styles.orangeColor}`}>+</button>

          <button onClick={() => handleEqual()} className={`${styles.btns} ${styles.equalBtn} ${styles.orangeColor}`}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Home;
