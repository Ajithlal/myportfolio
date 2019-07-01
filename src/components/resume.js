import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import avarar from './ajith_512x512.png';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={avarar}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Ajithlal Parackel</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Self-assured individual offering more than 9 years of experience as a
              Programmer. Highly trained in various technology environments. Flexible
              and poised promoting well-developed skills in Drupal, PHP and
              javascript.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>24 Cliff Street</p>
            <h5>Phone</h5>
            <p>(201) 744-1220</p>
            <h5>Email</h5>
            <p>ajith.parackal@gmail.com</p>
            <h5>Web</h5>
            <p>ajithlal.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2006}
              endYear={2010}
              schoolName="College of Engineering Trivandrum"
              schoolDescription="The College of Engineering, Trivandrum, commonly known as CET, is the first engineering college in the state of Kerala, situated in Thiruvananthapuram, the capital city of Kerala. It was founded in 1939 during the reign of the Travancore King, Chithira Thirunal Balarama Varma."
               />

                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2010}
              endYear={2014}
              jobName="Software Engineer - IGATE"
              jobDescription="Researched, designed and implemented features in TVEverywhere application and MVPD management system for our client who is in Media industry using technologies like PHP, Drupal 7, Zend, jQuery."
              />

              <Experience
                startYear={2014}
                endYear={2019}
                jobName="Lead Programmer - Capgemini"
                jobDescription="Developed Content Management System for the editors of our client which is in Business News Broadcasting industry."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Drupal"
                progress={100}
                />
                <Skills
                  skill="PHP"
                  progress={80}
                  />
                  <Skills
                    skill="MySQL"
                    progress={50}
                    />
                    <Skills
                      skill="Angular"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
