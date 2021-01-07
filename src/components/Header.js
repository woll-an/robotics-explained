import React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import GitHubButton from 'react-github-btn';
import Link from './link';
import Loadable from 'react-loadable';

import config from '../../config.js';
import LoadingProvider from './mdxComponents/loading';
import { DarkModeSwitch } from './DarkModeSwitch';

import Sidebar from './sidebar';

function myFunction() {
  var x = document.getElementById('navbar');

  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

const StyledBgDiv = styled('div')`
  height: 60px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #f8f8f8;
  position: relative;
  display: none;
  background: ${props => (props.isDarkThemeActive ? '#001932' : undefined)};

  @media (max-width: 767px) {
    display: block;
  }
`;

const Header = ({ location, isDarkThemeActive, toggleActiveTheme }) => {
  const logoImg = require('./images/logo.svg');
  const logoLink = 'todo:logo-link';

  return (
    <div className={'navBarWrapper'}>
      <nav className={'navBarDefault'}>
        <div className={'navBarHeader'}>
          <Link to={logoLink} className={'navBarBrand'}>
            <img
              className={'img-responsive displayInline'}
              src={logoImg}
              alt={'logo'}
            />
          </Link>
          <div
            className={'headerTitle displayInline'}
            dangerouslySetInnerHTML={{ __html: "Robotics Explained" }}
          />
          <DarkModeSwitch
            className={'darkModeSwitch'}
            isDarkThemeActive={isDarkThemeActive}
            toggleActiveTheme={toggleActiveTheme}
          />
        </div>
        <div id="navbar" className={'topnav'}>
          <div className={'visibleMobile'}>
            <Sidebar location={location} />
          </div>
        </div>
      </nav>
      <StyledBgDiv isDarkThemeActive={isDarkThemeActive}>
        <div className={'navBarDefault removePadd'}>
          <span
            onClick={myFunction}
            className={'navBarToggle'}
            onKeyDown={myFunction}
            role="button"
            tabIndex={0}
          >
            <span className={'iconBar'}></span>
            <span className={'iconBar'}></span>
            <span className={'iconBar'}></span>
          </span>
        </div>
      </StyledBgDiv>
    </div>
  )
};

export default Header;
