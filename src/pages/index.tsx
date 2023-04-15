import FooterButton from '@/ui/FooterButton/FooterButton'
import Logo from '@/ui/Logo'
import devicesIcon from './icons/devices-line.svg'
import mailIcon from './icons/mail.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Logo />
      <h1>Clone IVI</h1>
      <FooterButton
        type='square'
        miniInfo='Доступно в'
        text='Google Play'
      >
        <img src='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg' alt='' />
      </FooterButton>

      <FooterButton
        type='square'
        miniInfo='Загрузить'
        text='App Store'
      >
        <img src='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/appleLogo.svg' alt='' />
      </FooterButton>

      <FooterButton
        type='square'
        text='Все устройства'
      >
        <Image width={20} src={devicesIcon} alt='' />
      </FooterButton>

      <FooterButton
        type='circle'
      >
        <img style={{ width: '16px' }} src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_vkontakte.svg" alt="" />
      </FooterButton>

      <FooterButton
        type='circle'
      >
        <img style={{ width: '16px' }} src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_telegram.svg" alt="" />
      </FooterButton>

      <FooterButton
        type='square'
      >
        <Image src={mailIcon} alt=''/>
      </FooterButton>
    </main>
  )
}
