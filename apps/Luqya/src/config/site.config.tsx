import { Metadata } from 'next';
import logoImg from '@public/logo.svg';
import { LAYOUT_OPTIONS } from '@/config/enums';
import logoIconImg from '@public/logo-short.svg';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

enum MODE {
  DARK = 'dark',
  LIGHT = 'light',
}

export const siteConfig = {
  title: 'لقيا | منصة الفعاليات بالدعوات فقط',
  description: `لقيا هي منصة احترافية لتنظيم الفعاليات والمؤتمرات، تعتمد على نظام الدعوات الخاصة. نرسل دعوات مخصصة، ويُمكن للمدعوين القبول أو الرفض حسب الرغبة.`,
  logo: logoImg,
  icon: logoIconImg,
  mode: MODE.LIGHT,
  layout: LAYOUT_OPTIONS.HELIUM,
  // TODO: favicon
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    title: title ? `${title} - لقيا` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - لقيا` : title,
      description,
      url: 'https://isomorphic-furyroad.vercel.app',
      siteName: 'لقيا', // https://developers.google.com/search/docs/appearance/site-names
      images: {
        url: 'https://s3.amazonaws.com/redqteam.com/isomorphic-furyroad/itemdep/isobanner.png',
        width: 1200,
        height: 630,
      },
     locale: 'ar_SA',
      type: 'website',
    },
  };
};
