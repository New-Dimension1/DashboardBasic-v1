'use client';

import Image from 'next/image';
import Confetti from 'react-confetti';
import congratulationsImg from '@public/hat-confetti.png';
import { useElementSize } from '@core/hooks/use-element-size';

export default function Congratulations() {
  const [ref, { width, height }] = useElementSize();

  return (
    <div ref={ref} className="col-span-full grid place-content-center">
      <figure className="relative mx-auto grid place-content-center text-center">
        <Image
          src={congratulationsImg}
          alt="صورة تهنئة"
          priority
          className="mx-auto object-contain"
        />
        <figcaption className="mx-auto max-w-lg">
          <h2 className="text-2xl @7xl:text-3xl @[113rem]:text-4xl font-bold">
            تم إرسال الدعوات بنجاح!
          </h2>
          <p className="mt-6 text-base text-gray-600">
            شكرًا لك! لقد تم إرسال الدعوات عبر الواتساب بنجاح. نتمنى لك فعالية ناجحة
            مليئة بالتفاعل والحضور المميز.
          </p>
        </figcaption>
      </figure>
      <Confetti className="!fixed mx-auto" width={width} height={height} />
    </div>
  );
}
