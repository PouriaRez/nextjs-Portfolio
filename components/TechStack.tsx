import Image from 'next/image';

const TechStack = () => {
  return (
    <div>
      <Image
        src={'/icons/typescript.svg'}
        alt="typescript"
        height={50}
        width={50}
      />
    </div>
  );
};

export default TechStack;
