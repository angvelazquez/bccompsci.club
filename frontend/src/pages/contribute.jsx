import React from 'react';
import Head from 'next/head';
import { Link as ScrollLink } from 'react-scroll';

import { Volunteer, OpenSource, HostEvent } from 'components/contribute';
import commonStyles from 'styles/commonStyles.module.scss';
import contributeStyles from 'styles/pages/Contribute.module.scss';
import { SITE_TITLE_BASE } from 'pages/_app';

const Contribute = () => {
  return (
    <>
      <Head>
        <title>Contribute | {SITE_TITLE_BASE}</title>
      </Head>
      <div className={`${commonStyles.styles} ${contributeStyles.contribute}`}>
        <section>
          <h1>Contribute to the Club</h1>
          <p>
            The Brooklyn College Computer Science Club is a community-first,
            student-led organization made possible by a community of passionate
            students and innovative minds. Students from any major or background
            are welcome to learn and grow in our diverse and inclusive
            community.
          </p>

          <p>
            In order to further achieve our goal of being a community-first
            club, we're looking for some of our very own club members that share
            our vision to help shape the future of the Computer Science Club!
          </p>

          <p>
            If you're interested in contributing to the club, here are a few
            ways you can do so:
          </p>
          <ul className={contributeStyles.list}>
            <li>
              <ScrollDownPage to="volunteer">
                Volunteer for the club
              </ScrollDownPage>
            </li>

            <li>
              <ScrollDownPage to="open-source">
                Contribute to the club's open source software
              </ScrollDownPage>
            </li>

            <li>
              <ScrollDownPage to="host-event">
                Host and lead an event at the club
              </ScrollDownPage>
            </li>
          </ul>
        </section>

        {/* Sections of ways to contribute */}
        <Volunteer />
        <OpenSource />
        <HostEvent />
      </div>
    </>
  );
};

// A preset react-scroll link for this page.
const ScrollDownPage = (props) => (
  <ScrollLink
    href={`#${props.to}`}
    to={props.to}
    duration={300}
    offset={-50}
    smooth
  >
    {props.children}
  </ScrollLink>
);

export default Contribute;
