import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './style.css'


export default function Footer() {
  return (
    <div className="content-wrapper">
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="google" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                 
                  EduNode
                </h6>
                <p>
                Learn Web3 and Blockchain skills and reach your developing goals.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <a href='/courses' className='text-reset'>
                    Courses
                  </a>
                </p>
                <p>
                  <a href='/challenges' className='text-reset'>
                    Challenges
                  </a>
                </p>
                <p>
                  <a href='/feed' className='text-reset'>
                    Posts
                  </a>
                </p>
                <p>
                  <a href='/blog' className='text-reset'>
                    Blogs
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='/terms' className='text-reset'>
                  Terms and Conditions
                  </a>
                </p>
                <p>
                  <a href='/privacy' className='text-reset'>
                  Privacy Policy
                  </a>
                </p>
                <p>
                  <a href='/resources' className='text-reset'>
                  Resources
                  </a>
                </p>
                <p>
                  <a href='/about' className='text-reset'>
                  About
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Liechtensteinstraße 111/115, 1090 Wien
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  hi@edunode.org
                </p>
               {/** <p>
                  <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                </p>*/} 
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © {new Date().getFullYear()} Copyright:
          <a className='text-reset fw-bold' href='https://edunode.org/'>
           EduNode.org
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
