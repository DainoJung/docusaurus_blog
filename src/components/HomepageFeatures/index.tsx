import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Joyful Make',
    Svg: () => (
      <img src="https://em-content.zobj.net/source/apple/391/technologist-light-skin-tone_1f9d1-1f3fb-200d-1f4bb.png" width="160" height="160" />
    ),
    description: (
      <>
        새로운 창조물을 만드는것에 희열을 느낍니다.
      </>
    ),
  },
  {
    title: 'Love of Pain',
    Svg: () => (
      <img src="https://em-content.zobj.net/source/apple/391/puzzle-piece_1f9e9.png" width="160" height="160" />
    ),
    description: (
      <>
        어려움을 마주했을떄 가장 성장하는것을 알기에,<br/> 계속해서 어려움을 찾아다닙니다.
      </>
    ),
  },
  {
    title: 'United Grit',
    Svg: () => (
      <img src="https://em-content.zobj.net/source/apple/391/crossed-swords_2694-fe0f.png" width="160" height="160" />
    ),
    description: (
      <>
        한번 시작하면 끝을 봅니다.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
