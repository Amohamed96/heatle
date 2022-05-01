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
const styles = {
  button: {
   width: 300,
   height: 300,
   color: "white",
   backgroundColor: " rgb(185 28 28)",
   borderRadius: 12,
   margin: '10px auto',

  },
  text: {
    margin: '5px auto',
    color: "white",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
} as const;
 const linkBox = {
  display: "flex",
  width: "10rem", 
  backgroundColor: "rgb(45 212 191)",
  borderRadius: 10, 
  marginTop: "1rem",
  marginBottom: "1rem", 
  justifyContent: "center"
  }
 const linkBoxUL = {
  display: "flex",
  width: "10rem", 
  backgroundColor: "rgb(250 204 21)",
  borderRadius: 10, 
  marginTop: "1rem",
  marginBottom: "1rem", 
  justifyContent: "center",
  marginRight: "1rem"
  }
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
      <div style={styles.container}>

     <Link style={linkBoxUL} to="/unlimited">
        <button>UNLIMITED</button>
      </Link>
       <Link style={linkBox} to="/">
        <button>DAILY</button>
      </Link>
      </div>
    </BaseModal>
  )
}
