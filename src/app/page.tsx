import Flex from '@/components/ui/Flex';

export default function Home() {
  return (
    <Flex
      className="h-screen w-full"
      direction={'column'}
      justify={'center'}
      gap={3}
    >
      Hi There! This template has:
      <ul>
        <li>React Query</li>
        <li>Axios</li>
        <li>Shadcn/ui</li>
        <li>Ramda</li>
        <li>TailwindCSS</li>
        <li>Heroicons</li>
        <li>CVA</li>
        <li>Playwright</li>
        <li>Storybook</li>
        <li>Jest</li>
      </ul>
    </Flex>
  );
}
