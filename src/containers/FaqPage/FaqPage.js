import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,

} from '../../components';

import css from './FaqPage.css';

const FaqPage = () => {
  

  // prettier-ignore
  return (
    <StaticPage
      title="FAQ | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'FaqPage',
        description: 'Frequently Asked Questions',
        name: 'FaqPage',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

    <LayoutWrapperMain className={css.staticPageWrapper}>
      <div className={css.sectionContent}>
      
      <a href="/pet-owner-faq"> 
       <div className={css.faqBg} id="faqBg">
        <div className={css.spanContainer} id="spanContainer">
         <span>Pet <span className={css.spanMain}>Owners</span> Corner</span>
        </div>
       </div>
      </a>

      <a href="/pet-sitter-faq"> 
       <div className={css.faqBg2} id="faqBg2">
        <div className={css.spanContainer} id="spanContainer2">
         <span>Pet <span className={css.spanMain}>Sitter</span> Corner</span>
        </div>
       </div>
      </a>

      <a href="/pet-services-faq"> 
       <div className={css.faqBg3} id="faqBg3">
        <div className={css.spanContainer} id="spanContainer3">
         <span>Pet <span className={css.spanMain}>Services</span> Corner</span>
        </div>
       </div>
      </a>
       
       </div>
      </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FaqPage;
