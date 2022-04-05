import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close the letter was to the correct letter for that given spot. 
      </p>
<div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="P"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="R"
          status="correct"
        />        
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="I"
          status="correct"
        />        
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="N"
          status="correct"
        />               
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="correct"
        />
      </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                Green means all the letters are correct      
            </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="F"
          status="far1"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="far2"
        />               
         <Cell
          isRevealing={true}
          isCompleted={true}
          value="I"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="N"
          status="correct"
        />               
         <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="correct"
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Blue indicates you are very far from the correct letter (F is 10 letters away from P)</p>
      <p className="text-sm text-gray-500 dark:text-gray-300"> Light Blue: Warmer (L is 6 letters away from R)</p>
      
      <div className="flex justify-center mb-1 mt-4">

        <Cell
          isRevealing={true}
          isCompleted={true}
          value="P"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="R"
          status="correct"
        />        
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="I"
          status="correct"
        />        
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="O"
          status="close1"
        />               
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="R"
          status="close2"
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Dark Red: indicates are one letter away from the correct letter (O is one letter away from N)</p>
      <p className="text-sm text-gray-500 dark:text-gray-300"> Red: Very Warm (R is 2 letters away from T)</p>

            <div className="flex justify-center mb-1 mt-4">

        <Cell
          isRevealing={true}
          isCompleted={true}
          value="1"
          status="close1"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="2"
          status="close2"
        />        
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="3"
          status="close3"
        />        
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="4"
          status="close4"
        />   
              <Cell
          isRevealing={true}
          isCompleted={true}
          value="5"
          status="close4"
        />              
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="6"
          status="far2"
        />
         <Cell
          isRevealing={true}
          isCompleted={true}
          value="7"
          status="far2"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="8"
          status="far2"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="9"
          status="far2"
        />
         <Cell
          isRevealing={true}
          isCompleted={true}
          value="10˖"
          status="far1"
        />
      </div>
    </BaseModal>
  )
}
