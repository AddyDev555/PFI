import React from "react";
import "./css/Procedure.css";

export default function Procedure() {
  return (
        <div className="content">

            <h3>Activiy 1</h3>
            <ol>
                <li>
                    A list of Indian sea ports and cities is provided. Click on the sea port name and then the matching city to form the right pair.  
                    <img src="https://cdac.olabs.edu.in/userfiles/3/1728994665_fig11.png" alt="Match the pairs" />
                    <strong>Fig. 1: Match the pairs</strong>
                </li>
                <li>
                    The bottom section displays correctly matched pairs.  
                    <img src="https://cdac.olabs.edu.in/userfiles/2/1728994706_fig222.png" alt="Matched pairs" />
                    <strong>Fig. 2: Matched pairs</strong>
                </li>
                <li>Click on 'NEXT' to proceed to part 2 of the lab.</li>
            </ol>

            <h3>Activiy 2</h3>
            <ol>
                <li>
                    A list of some sea ports is provided. Select the correct sea ports by clicking on the corresponding checkboxes.  
                    <img src="https://www.olabs.edu.in/userfiles/1/1705403510_part2.png" alt="Sea port names with checkboxes" />
                    <strong>Fig. 3: Sea port names with checkboxes</strong>
                </li>
                <li>For reference, sea port locations are indicated on the map by a ship symbol.</li>
                <li>Click on "SUBMIT" to get feedback.</li>
                <li>Click on "NEXT" to proceed to part 3 of the lab.</li>
            </ol>

            <h3>Guide</h3>
            <ol>
                <li>Dropdown selection lists are provided at multiple places on the Indian map, along with ship symbols.</li>
                <li>Select the correct sea port name from the list given at the appropriate places.</li>
                <li>Click on the ship symbol to know more about the respective sea port.</li>
                <li>
                    The Indian political map is also provided, which can be used for reference by clicking on the "Indian Political Map" checkbox.  
                    <img src="https://www.olabs.edu.in/userfiles/1/1705403806_part3.png" alt="Political map checkbox" />
                    <strong>Fig. 4: Political map checkbox</strong>
                </li>
                <li>Once all the sea port names are selected, click on "SUBMIT" to get the feedback.</li>
                <li>If some names are selected at the wrong places, click on "TRY AGAIN" to select the correct sea port names.</li>
                <li>If all the sea port names are selected at the correct positions, click on "RESTART" to perform the activity again.</li>
            </ol>
        </div>
  );
}
