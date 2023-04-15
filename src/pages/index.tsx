import { Button } from '@/components/Button/Button'
import { Layout } from '@/layout/Layout'
import Logo from '@/ui/Logo'

export default function Home() {
  return (
    <main>
      <Layout>
        <Logo />
        <h1>Clone IVI</h1>
        <Button label="Оплатить подписку"></Button>
      </Layout>
    </main>
  )
}
