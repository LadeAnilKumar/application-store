import './index.css'

const TabItem = props => {
  const {tabDetails, updateTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const updateTabItem = () => {
    updateTab(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="list-container">
      <button className={tabBtnClassName} type="button" onClick={updateTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem