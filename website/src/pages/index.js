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
    imageUrl: 'img/father.svg',
    description: (
      <>
        The source-code is just several lines of code. And exposing only one function.
        the <b>newStore</b> function. The store has only 1 function and one hook.
      </>
    ),
  },
  {
    title: 'Powerful',
    imageUrl: 'img/car.svg',
    description: (
      <>
        You can access every part of the state or modify the state like and other JSON object. After you change the state call the function  <b>updateStore</b> and GlobX automatically will render the nessecery React components.        
      </>
    ),
  },
  { 
    title: 'Good for Agile development',
    imageUrl: 'img/agility.svg',
    description: (
      <>
        No boilerplate code. Just call the function <b>newStore</b> with you initial state.
        No selectors, no action builders, no providers or other things, easy to refactor. Just access the store and modify it wherever you need. 
      </>
    ),
  },
  {
    title: 'Mutable',
    imageUrl: 'img/mutable.svg',
    description: (
      <>
        You can use any JS function directly on the store like Array push, pull. No need for cloning even the increment operator (var++) is working. You also not required to normalize your store.
      </>
    ),
  },
  {
    title: 'It working fast',
    imageUrl: 'img/speed.svg',
    description: (
      <>
        Only the components that should render are automatically rerend. GlobX automatically render only once per rendering cycle, so you can <b>updateStore</b> as many times you want.
      </>
    ),
  },
  {
    title: 'Fully support by IDEs',
    imageUrl: 'img/ide.svg',
    description: (
      <>
        You get auto-complete out of the box to all your store, keys and values. No need to create definition files, it automatically calculated from your initial store. All smart language features like "Find all references", and "Rename Symbol" are working, so it's make life easier when refactoring.
       </>
    ),
  },
  {
    title: 'Fast renders',
    imageUrl: 'img/render.svg',
    description: (
      <>
        To tell Globx that component is depened on specific path in the store you have to call the function <b>useRerenderIfNeed</b> and give it the path (don't worry the IDE will auto complete it for you).
      </>
    ),
  },
  {
    title: 'Async/Await and promises',
    imageUrl: 'img/parallel.svg',
    description: (
      <>
        You gonna love it. You can update the state wherever you want. It's working inside promises and intervals. No need to extensions or addons.
      </>
    ),
  },
  {
    title: 'You already know it',
    imageUrl: 'img/know.svg',
    description: (
      <>
        That it. Three functions. newStore, updateStore and useRerenderIfNeed. If you read until here, you know everything about GlobX. Just see the example todo app how to use it.
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
