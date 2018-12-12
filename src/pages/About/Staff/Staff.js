import React from 'react'
import { Route } from 'react-router-dom';
import classNames from 'classnames';

// components
import Aux from '../../../hoc/Aux';

// import sub pages here

// styles
import styles from './Staff.module.css'

const staff = (props) => {
    return (    
        <Aux>
            <h1>Administrative Staff</h1> 
            <div className={classNames(styles.grid)}>
                <div>
                    <p> <b>David Skelly</b>
                        <br/>Director, Yale Peabody Museum of Natural History
                        <br/>(203) 432-3752
                        <br/>Fax (203) 432-3758
                        <br/>peabody.director@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>David Heiser</b>
                        <br/>Director of Student Programs
                        <br/>(203) 432-9545
                        <br/>Fax (203) 432-9816
                        <br/>david.heiser@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Tim White</b>
                        <br/>Director of Collections and Research
                        <br/>(203) 432-3767
                        <br/>Fax (203) 432-9816
                        <br/>tim.white@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Jonathan Rohner</b>
                        <br/>Director of Finance and Administration
                        <br/>(203) 432-3757
                        <br/>Fax (203) 432-9816
                        <br/>jonathan.rohner@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Monty Shepardson</b>
                        <br/>Director of Development
                        <br/>(203) 432-6567
                        <br/>Fax (203) 432-0175
                        <br/>monty.shepardson@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Susan Rodrigues</b>
                        <br/>Chief of Staff
                        <br/>(203) 432-3753
                        <br/>Fax (203) 432-9816
                        <br/>susan.rodrigues@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Carol DeNatale</b>
                        <br/>Project Director
                        <br/>(203) 432-9856
                        <br/>Fax (203) 432-6575
                        <br/>carol.denatale@yale.edu
                    </p>
                </div>
            </div>
            <br/> 
            <h1>Curatorial Staff</h1>
            <div className={classNames(styles.grid)}>
                <div>
                    <p> <b>Michael Anderson</b>
                        <br/>Preparator, Exhibitions
                        <br/>(203) 432-9848
                        <br/>michael.anderson@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Rich Boardman</b>
                        <br/>Operations Manager
                        <br/>(203) 432-3782
                        <br/>richard.boardman@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Walter Brenckle</b>
                        <br/>Museum Technician
                        <br/>(203) 432-3792
                        <br/>walter.brenckle@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Melanie Brigockas</b>
                        <br/>Public Relations and Marketing Manager
                        <br/>(203) 432-5099
                        <br/>melanie.brigockas@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Robert Charlesworth</b>
                        <br/>Museum Technician
                        <br/>(203) 432-3792
                        <br/>robert.charlesworth@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Dean Corcoran</b>
                        <br/>Materials Assistant
                        <br/>(203) 919-6852
                        <br/>dean.corcoran@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Luiz Cordeiro</b>
                        <br/>Financial Assistant
                        <br/>(203) 432-3762
                        <br/>luiz.cordeiro@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Danka Dadic</b>
                        <br/>Security Attendant
                        <br/>(203) 432-3738
                        <br/>danka.dadic@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Maishe Dickman</b>
                        <br/>Museum Technician
                        <br/>((203) 432-3792
                        <br/>maishe.dickman@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Shannon Giacobbe</b>
                        <br/>Publication Assistant
                        <br/>(203) 432-3154
                        <br/>shannon.giacobbe@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Adrienne Gottlieb</b>
                        <br/>Assistant Manager, Museum Store
                        <br/>(203) 432-3740
                        <br/>adrienne.gottlieb@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Erin Gredell</b>
                        <br/>Registrar
                        <br/>(203) 737-4695
                        <br/>erin.gredell@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Christine Hanks</b>
                        <br/>Sponsored Projects Administrator
                        <br/>(203) 436-8499
                        <br/>christine.hanks@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>TBD</b>
                        <br/>Volunteer Coordinator
                        <br/>(203) 432-3731
                        <br/>TBD
                    </p>
                </div>
                <div>
                    <p> <b>Ken Kuester</b>
                        <br/>Materials Assistant
                        <br/>(203) 432-3759
                        <br/>kenneth.kuester@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Alana Ladson</b>
                        <br/>After School Program Operations Assistant
                        <br/>(203) 436-4862
                        <br/>alana.ladson@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Bonnie Mahmood</b>
                        <br/>Senior Administrative Assistant, Director's Office
                        <br/>(203) 432-3752
                        <br/>bonnie.mahmood@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Mark Masi</b>
                        <br/>Security Attendant
                        <br/>(203) 432-3738
                        <br/>mark.masi@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Andy Melien</b>
                        <br/>Digital Media Specialist
                        <br/>(203) 436-9428
                        <br/>andrew.melien@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Hannah Meyer</b>
                        <br/>Assistant Director, Visitor Experience and Special Events
                        <br/>(203) 432-3065
                        <br/>hannah.meyer@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Armand Morgan</b>
                        <br/>Senior Instructor, Public Education
                        <br/>(203) 432-3297	
                        <br/>armand.morgan@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Sarah Morrill</b>
                        <br/>Assistant Director, Grants Management
                        <br/>(203) 432-3452	
                        <br/>sarah.morrill@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Andrea Motto</b>
                        <br/>Manager, Public and Youth Engagement
                        <br/>Afterschool Program Director
                        <br/>andrea.motto@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Nicole Palffy-Muhoray</b>
                        <br/>Assistant Director, Student Programs
                        <br/>(203) 432-6115	 
                        <br/>nicole.palffy-muhoray@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Sally Pallatto</b>
                        <br/>Graphic Designer, Exhibits and Graphics	
                        <br/>(203) 432-5004	
                        <br/>sally.pallatto@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Tom Parlapiano</b>
                        <br/>Manager,Student and Teacher Engagement
                        <br/>(203) 432-0944
                        <br/>thomas.parlapiano@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Apple Pham</b>
                        <br/>Sci.CORPS Coordinator
                        <br/>(203) 432-9589	
                        <br/>hang.pham@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Chris Renton</b>
                        <br/>Assistant Director of Development	
                        <br/>(203) 432-8837	
                        <br/>christopher.renton@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Nelson Rios</b>
                        <br/>Head, Biodiversity Informatics and Data Science
                        <br/>(203) 432-1844	
                        <br/>nelson.rios@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>LaToya Sealy Cotto</b>
                        <br/>Manager of Finance and Administration
                        <br/>(203) 432-9857
                        <br/>latoya.sealycotto@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Catherine Sease</b>
                        <br/>Senior Conservator		
                        <br/>(203) 432-3965
                        <br/>catherine.sease@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>James Sirch</b>
                        <br/>Coordinator, Public Education
                        <br/>(203) 432-6919	
                        <br/>james.sirch@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Elizabeth Steele</b>
                        <br/>Scheduler, School Programs and Birthday Parties
                        <br/>(203) 432-3775 (8:30 - 1:30)
                        <br/>elizabeth.steele@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Rosemary Volpe</b>
                        <br/>Publications Manager	
                        <br/>(203) 432-9804	
                        <br/>rosemary.volpe@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Darnell Walker</b>
                        <br/>Security Attendant
                        <br/>(203) 432-3738	
                        <br/>darnell.walker@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Stephanie Wratten</b>
                        <br/>Student Programs Educator
                        <br/>(203) 432-6115	
                        <br/>stephanie.wratten@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Sung H. Yun</b>
                        <br/>Development Coordinator	
                        <br/>(203) 432-6844
                        <br/>sung.yun@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Kimberley Zolvik</b>
                        <br/>Graphic Designer, Exhibits and Graphics
                        <br/>(203) 432-9897	
                        <br/>kimberley.zolvik@yale.edu
                    </p>
                </div>
            </div>  
        </Aux>
    )
}

export default staff;