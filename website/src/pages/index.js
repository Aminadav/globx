import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Lightweight',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        The source-code is just several lines of code. And exposing only one function.
        the <b>newStore</b> function. The store has only 1 function, and one hook.
      </>
    ),
  },
  {
    title: 'Powerful',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        You can access to every part of the state or modify the state in-place everywhere. Just modify the state like and other JSON object, and call the function <b>updateState</b> it will rerender all the components that depended on the change. 
      </>
    ),
  },
  {
    title: 'Good for agilitiy.',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        No boilerplate code. Just call the function <b>newStore</b> with you initial state.
        No selectors, action builders, providers or other things. Just access the store and modify it wherever you need.
      </>
    ),
  },
  {
    title: 'Mutable',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        You can use any JS function directly on the store: Array push, pull, and others. No need for cloning.
      </>
    ),
  },
  {
    title: 'It working fast',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Only the components that should be render are automatically rerender. You can even memoize all your components, they will rerender when needed. GlobX automatically render only once per rendering cycle, so you can <b>updateStore</b> as many times you want.
      </>
    ),
  },
  {
    title: 'Fully support by IDEs',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        You get auto-complete out-of-the-box to all your store, keys and values. No need to create definition files,
        it automatically caclulated from your initial store. All smart language featurs like "Find all references", and "Rename Symbol" are working for all keys in the store, so it's make life easier when refactoring.
       </>
    ),
  },
  {
    title: 'Fast renders.',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        To tell Globx that component is depened on specific path in the store you have to call the function <b>useRerenderIfNeed</b> and give it the path (it auto-completed).
      </>
    ),
  },
  {
    title: 'You already know it',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        That it. Three functions. If you read until here, you know everything about GlobX. Just see the examle todo app how to use it.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Lightweight & powerful state management for Redux. 90% less code to write in compare to Redux/MobX.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
