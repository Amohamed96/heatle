import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'
import {
  HARD_MODE_DESCRIPTION,
  HIGH_CONTRAST_MODE_DESCRIPTION,
} from '../../constants/strings'
import { Link } from "react-router-dom";

type Props = {
  isOpen: boolean
  handleClose: () => void
  isHardMode: boolean
  handleHardMode: Function
  isDarkMode: boolean
  handleDarkMode: Function
  isHighContrastMode: boolean
  handleHighContrastMode: Function
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  isHardMode,
  handleHardMode,
  isDarkMode,
  handleDarkMode,
  isHighContrastMode,
  handleHighContrastMode,
}: Props) => {
  const linkBox = {
  width: "5rem", 
  backgroundColor: "blue",
  borderRadius: 10, 
  marginTop: "1rem",
  marginBottom: "1rem"
  }
 const linkBoxUL = {
  width: "8rem", 
  backgroundColor: "red",
  borderRadius: 10, 
  marginTop: "1rem",
  marginBottom: "1rem"
  }
  const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white', 
};
  const linkStyleUL = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white', 
};
  return (
    <BaseModal title="Settings" isOpen={isOpen} handleClose={handleClose}>
      <div className="flex flex-col mt-2 divide-y">
        <SettingsToggle
          settingName="Hard Mode"
          flag={isHardMode}
          handleFlag={handleHardMode}
          description={HARD_MODE_DESCRIPTION}
        />
        <SettingsToggle
          settingName="Dark Mode"
          flag={isDarkMode}
          handleFlag={handleDarkMode}
        />
        <SettingsToggle
          settingName="High Contrast Mode"
          flag={isHighContrastMode}
          handleFlag={handleHighContrastMode}
          description={HIGH_CONTRAST_MODE_DESCRIPTION}
        />
      </div>
      <div style={linkBoxUL}>      
        <Link style={linkStyleUL} to="/unlimited">
        <button>UNLIMITED</button>
      </Link>
      </div>
     <div style={linkBox}>  
       <Link style={linkStyle} to="/">
        <button>HOME</button>
      </Link>
    </div>
    </BaseModal>
  )
}
