import React from 'react'

import Layout from '../components/Layout'

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar'
import config from '../../config'
import jobs from '../../jobs'
import professional_experience from '../../build_funcs'
import { element } from 'prop-types'
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className='container-fluid p-0'>
      <section
        className='resume-section p-3 p-lg-5 d-flex align-items-center'
        id='about'
      >
        <div className='w-100'>
          <h1 className='mb-0'>
            {config.firstName}
            <span className='text-primary'>{config.lastName}</span>
          </h1>
          <div className='subheading mb-5'>
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className='lead mb-5'>
          I am an analyst at Wayfair, Inc., working within the Forecasting
          Analytics team within the larger Workforce Management group. In the
          past I've worked as an independent researcher with both the Stella
          Riparian and Stream Ecology and Yanai Forest Ecosystem Science
          laboratories, as well as the Beaver Impact Assessment intern for
          the New York State Department of Environmental Conservation. In
          all of these roles I've worked to apply data science techniques to
          large-scale challenges, frequently serving as the statistical and
          technical expert within my team.
          </p>
          <p className='lead mb-5'>
          My past projects have included assessing the landscape-level
          impacts of ecosystem engineers within New York's Adirondack State
          Park, as well as investigating the impact of fertilization on beech
          bark disease within the White Mountains of New Hampshire. I've also
          written a primer on how to use R for data exploration and analysis
          in both scientific and business contexts.
          </p>
          <p className='lead mb-5'>
            I post updates to my projects on <a href="/blog">my blog</a>, as 
            well as cool visualization and tech things I stumble across in my
            day-to-day work.
          </p>
          <div className='social-icons'>
            {config.socialLinks.map(social => {
              const { icon, url } = social
              return (
                <a key={url} href={url}>
                  <i className={`${icon}`}></i>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <hr className='m-0' />

      <section
        className='resume-section p-3 p-lg-5 d-flex justify-content-center'
        id='experience'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Experience</h2>
            
            {jobs.wayfair_detail.map(item => {
              const { title, team, when, where, bullets } = item
              return (
                <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
                <div className='resume-content'>
                <h3 className='mb-0'>{title}</h3>
                <div className='subheading mb-3'>{team}</div>
                
                {bullets.map(elements => {
                  return(
                    <li>
                      {elements}
                    </li>
                  )
                })
                }
                </div>
                <br></br>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>{when}</span>
              <br></br>
              <span className='text-primary'>{where}</span>
            </div>
          </div>
              )
            })}
            <br></br>

            {jobs.stella_lab.map(item => {
              const { title, team, when, where, bullets } = item
              return (
                <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
                <div className='resume-content'>
                <h3 className='mb-0'>{title}</h3>
                <div className='subheading mb-3'>{team}</div>
                
                {bullets.map(elements => {
                  return(
                    <li>
                      {elements}
                    </li>
                  )
                })
                }
                </div>
                <br></br>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>{when}</span>
              <br></br>
              <span className='text-primary'>{where}</span>
            </div>
          </div>
              )
            })}
            <br></br>

            {jobs.yanai_lab.map(item => {
              const { title, team, when, where, bullets } = item
              return (
                <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
                <div className='resume-content'>
                <h3 className='mb-0'>{title}</h3>
                <div className='subheading mb-3'>{team}</div>
                
                {bullets.map(elements => {
                  return(
                    <li>
                      {elements}
                    </li>
                  )
                })
                }
                </div>
                <br></br>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>{when}</span>
              <br></br>
              <span className='text-primary'>{where}</span>
            </div>
          </div>
              )
            })}
            <br></br>

            {jobs.beaver_intern.map(item => {
              const { title, team, when, where, bullets } = item
              return (
                <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
                <div className='resume-content'>
                <h3 className='mb-0'>{title}</h3>
                <div className='subheading mb-3'>{team}</div>
                
                {bullets.map(elements => {
                  return(
                    <li>
                      {elements}
                    </li>
                  )
                })
                }
                </div>
                <br></br>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>{when}</span>
              <br></br>
              <span className='text-primary'>{where}</span>
            </div>
          </div>
              )
            })}
            <br></br>

            {jobs.cfb.map(item => {
              const { title, team, when, where, bullets } = item
              return (
                <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
                <div className='resume-content'>
                <h3 className='mb-0'>{title}</h3>
                <div className='subheading mb-3'>{team}</div>
                
                {bullets.map(elements => {
                  return(
                    <li>
                      {elements}
                    </li>
                  )
                })
                }
                </div>
                <br></br>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>{when}</span>
              <br></br>
              <span className='text-primary'>{where}</span>
            </div>
          </div>
              )
            })}
            <br></br>
        </div>
      </section>

      <hr className='m-0' />

      <section
        className='resume-section p-3 p-lg-5 d-flex align-items-center'
        id='education'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Education</h2>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
            <div className='resume-content'>
              <h3 className='mb-0'>State University of New York College of Environmental Science and Forestry</h3>
              <div className='subheading mb-3'>Bachelor of Science</div>
              <div>Forest Ecosystem Science</div>
              <p>GPA: 3.72</p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>August 2015 - December 2018</span>
            </div>
          </div>

        </div>
      </section>

      <hr className='m-0' />

      <section
        className='resume-section p-3 p-lg-5 d-flex align-items-center'
        id='skills'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Skills</h2>

          <div className='subheading mb-3'>
            Programming Languages &amp; Tools
          </div>
          <ul className='list-inline dev-icons'>
            <li className='list-inline-item'>
              <i className='fab fa-r-project'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fas fa-database'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-python'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-docker'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-git'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-linux'></i>
            </li>
          </ul>

          <div className='subheading mb-3'>Sample Projects</div>
          <ul className='fa-ul mb-0'>
            <li>
              <a href='https://github.com/mikemahoney218/spacey'>spacey:</a> Geospatial data access and manipulation for use with rayshader mapping.
            </li>
            <br></br>
            <li>
              <a href='https://github.com/mikemahoney218/heddlr'>heddlr:</a> Functional programming tools for R Markdown document generation.
            </li>
          </ul>
        </div>
      </section>

      <hr className='m-0' />

      <section
        className='resume-section p-3 p-lg-5 d-flex align-items-center'
        id='awards'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Awards</h2>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
            <div className='resume-content'>
              <p>
                <span className='text-primary'>December 2018: </span>
                <span>Robin Hood Oak Award for Academic Excellence</span>
              </p>
              <p>
                <span className='text-primary'>December 2018: </span>
                <span>Robert M. Hicks Award for Academic Achievement</span>
              </p>
              <p>
                <span className='text-primary'>May 2018: </span>
                <span>SUNY-ESF Career Fellowship</span>
              </p>
              <p>
                <span className='text-primary'>August 2017: </span>
                <span>Outstanding Student Award for Accomplishments in Field Ecology and Dendrology</span>
              </p>
            </div>
          </div>

        </div>
      </section>

      <hr className='m-0' />

      <hr className='m-0' />

    </div>
  </Layout>
)

export default IndexPage