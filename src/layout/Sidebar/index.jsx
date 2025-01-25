import { useState } from 'react'
import styles from './Sidebar.module.css'
import { FaTrashAlt } from "react-icons/fa";

const Sidebar = ({ history, clearDisplay }) => {

  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }


  return (
    <div className={styles.sidebarBtn}>
      <button onClick={toggleSidebar}>{showSidebar ? 'Fechar' : 'Ver histórico'}</button>

      {showSidebar && (
        <div className={styles.sidebar}>
          <div className={styles.sidebar_div1}>
            <h2>Histórico</h2>
            <FaTrashAlt onClick={() => clearDisplay()} style={{ color: '#f5f5f5', fontSize: '2em', cursor: 'pointer' }} />
          </div>

          <div className={styles.sidebar_div2}>
            <ul>
              {history.length > 0 ? (
                history.map((item, index) => {
                  return (
                    <li key={index}>
                      {item}
                    </li>
                  )
                })
              ) : (
                <p>Ainda não há histórico</p>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>

  )
};

export default Sidebar;
