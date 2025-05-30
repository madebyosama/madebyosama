import styles from './Problem.module.css';

export default function Problem() {
  return (
    <div className={styles.problem} id='Problem'>
      <div className={styles.problemDetails}>
        <div className={styles.problemAwareness}>
          <h3>I HAVE A WEBSITE, BUT</h3>
          <ul>
            <li>❌ No one knows it exists</li>
            <li>❌ It’s a nightmare on mobile</li>
            <li>❌ It loads slower than monday mornings</li>
            <li>❌ It looks like it’s from 2012</li>
          </ul>
          <p>If that sounds familiar, it’s time for a fix.</p>
        </div>
        <div className={styles.problemSolution}>
          <p>Most developers picks a pre-build website templates.</p>
          <p>
            Pre-build website templates come with a lot of clutter and can slow
            down your website.
          </p>
          <p>What you need is a custom solution.</p>
          <p>A website build from scratch just for you.</p>
          <p>A website that is fast, responsive and easy to edit & maintain.</p>
        </div>
      </div>
      <button className={styles.book}>Book a call</button>
    </div>
  );
}
