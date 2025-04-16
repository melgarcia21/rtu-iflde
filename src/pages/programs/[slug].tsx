import { GetStaticPaths, GetStaticProps } from 'next';
import programs from '../../data/programs/programs.json';
import { useRouter } from 'next/router';

type Program = {
  title: string;
  content: string;
  link: string;
};

type ProgramProps = {
  program: Program;
};

const ProgramPage = ({ program }: ProgramProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <section className="program-details">
      <h1 className="program-details-title">{program.title}</h1>
      <p className="program-details-content">{program.content}</p>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = programs.map((program) => ({
    params: { slug: program.link.split('/').pop() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const program = programs.find((program) => program.link.split('/').pop() === params?.slug);

  return { props: { program } };
};

export default ProgramPage;