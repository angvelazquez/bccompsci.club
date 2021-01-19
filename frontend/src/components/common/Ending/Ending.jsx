import React from 'react';
import Link from 'next/link';

import styles from './Ending.module.scss';

const Ending = ({ width }) => {
  return (
    <section className={styles.ending}>
      <div className={styles.endingContainer}>
        <EndingText width={width} />
        <Link href="/join">Join the Club</Link>
      </div>
    </section>
  );
};

const EndingText = ({ width }) => {
  if (width < 700) {
    // Vertical phones
    return (
      <h2>
        Unlock your full potential at the Brooklyn College Computer Science
        Club.
      </h2>
    );
  } else {
    // Landscape phones, tablets and desktops
    return (
      // eslint-disable-next-line
      <h2 role="text">
        Unlock your full potential at the
        <br />
        Brooklyn College Computer Science Club.
      </h2>
    );
  }
};

export default Ending;
