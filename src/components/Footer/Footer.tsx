import Link from 'next/link';
import { FC, useState } from 'react';

import HomeIcon from '@/assets/images/common/HomeIcon';

import styles from './Footer.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import CatalogIcon from '@/assets/images/common/CatalogIcon';
import SearchIcon from '@/assets/images/common/SearchIcon';
import MoreIcon from '@/assets/images/common/MoreIcon';

export const Footer: FC = () => {
    const [activeButton, setActiveButton] = useState<string | null>('btn1');

    const handleClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <>
            <footer className={styles.footer}>
                <hr />
                <div className={styles.footerContent}>
                    <div className={styles.footerColumn}>
                        <p className={styles.footerColumnTitle}>О нас</p>
                        <ul className={styles.footerLinkList}>
                            <li className={styles.footerLinkItem}>
                                <Link href="#">О компании</Link>
                            </li>
                            <li className={styles.footerLinkItem}>
                                <Link href="#">Вакансии</Link>
                            </li>
                            <li className={styles.footerLinkItem}>
                                <Link href="#">Программа бета-тестирования</Link>
                            </li>
                            <li className={styles.footerLinkItem}>
                                <Link href="#">Информация для партнёров</Link>
                            </li>
                            <li className={styles.footerLinkItem}>
                                <Link href="#">Размещение рекламы</Link>
                            </li>
                            <li className={styles.footerLinkItem}>
                                <Link href="#">Пользовательское соглашение</Link>
                            </li>
                            <li className={styles.footerLinkItem}>
                                <Link href="#">Политика конфиденциальности</Link>
                            </li>
                            <li className={styles.footerLinkItem}>
                                <Link href="#">Комплаенс</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerColumn}>
                        <p className={styles.footerColumnTitle}>Разделы</p>
                        <ul className={styles.footerLinkList}>
                            <li className={styles.footerLinkItem}>
                                <Link href="#">Мой Иви</Link>
                            </li>
                            <li className={styles.footerLinkItem}>
                                <Link href="#">Что нового</Link>
                            </li>
                            <li className={styles.footerLinkItem}>
                                <Link href="#">Фильмы</Link>
                            </li>
                            <li className={styles.footerLinkItem}>
                                <Link href="#">Сериалы</Link>
                            </li>
                            <li className={styles.footerLinkItem}>
                                <Link href="#">Мультфильмы</Link>
                            </li>
                            <li className={styles.footerLinkItem}>
                                <Link href="#">ТВ-каналы</Link>
                            </li>
                            <li className={styles.footerLinkItem}>
                                <Link href="#">Что посмотреть</Link>
                            </li>
                            <li className={styles.footerLinkItem}>
                                <Link className={styles.certificationLink} href="#">Активация сертификата</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerColumn}>
                        <p className={styles.footerColumnTitle}>Служба поддержки</p>
                        <div className={styles.footerColumnDescription}>
                            <span>Мы всегда готовы вам помочь.</span>
                            <span>Наши операторы онлайн 24/7</span>
                        </div>
                        <div className={styles.footerSupport}>
                            <button>Написать в чате</button>
                            <div className={styles.footerSupportButtons}>
                                <button>M</button>
                                <button>P</button>
                            </div>
                            <div className={styles.footerQuestions}>
                                <a href="#">ask.ivi.ru</a>
                                <p>Ответы на вопросы</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerColumn}>
                        <div className={styles.footerWidget}>
                            <div className={styles.footerWidgetIcon}>

                            </div>
                            <div className={styles.footerWidgetText}>
                                Смотрите фильмы, сериалы и мультфильмы без рекламы
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles.footerContentBottom}>
                    <div className={styles.footerColumn}>
                        <div className={styles.footerStores}>
                            <button>App Store</button>
                            <button>Play Store</button>
                            <button>Smart Tv</button>
                            <button>Все Устройства</button>
                        </div>
                        <div className={styles.footerCopyrights}>
                            <p>© 2023 ООО «Иви.ру»</p>
                            <p>HBO ® and related service marks are the property of Home Box Office, Inc</p>
                        </div>
                    </div>
                    <div className={styles.footerColumn}>
                        <div className={styles.footerComunity}>
                            <button>
                                <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg" alt="" />
                            </button>
                            <button>
                                <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg" alt="" />
                            </button>
                            <button>
                                <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg" alt="" />
                            </button>
                            <button>
                                <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg" alt="" />
                            </button>
                            <button>
                                <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className={styles.mobileFooter}>
                <div className={styles.tabBar}>
                    <Link
                        onClick={() => handleClick('btn1')}
                        className={cn(styles.tabBarItem, { [styles.active]: activeButton === 'btn1' })}
                        href={'/'}
                    >
                        <div className={styles.light}></div>
                        <div className={styles.tabBarIcon}>
                            <HomeIcon fill={activeButton === 'btn1' ? 'white' : 'gray'} />
                        </div>
                        <p className={styles.tabBarText}>Мой Иви</p>
                    </Link>
                    <Link
                        onClick={() => handleClick('btn2')}
                        className={cn(styles.tabBarItem, { [styles.active]: activeButton === 'btn2' })}
                        href={'/'}
                    >
                        <div className={styles.light}></div>
                        <div className={styles.tabBarIcon}>
                            <CatalogIcon fill={activeButton === 'btn2' ? 'white' : 'gray'} />
                        </div>
                        <p className={styles.tabBarText}>Мой Иви</p>
                    </Link>
                    <Link
                        onClick={() => handleClick('btn3')}
                        className={cn(styles.tabBarItem, { [styles.active]: activeButton === 'btn3' })}
                        href={'/'}
                    >
                        <div className={styles.light}></div>
                        <div className={styles.tabBarIcon}>
                            <SearchIcon fill={activeButton === 'btn3' ? 'white' : 'gray'} />
                        </div>
                        <p className={styles.tabBarText}>Мой Иви</p>
                    </Link>
                    <Link
                        onClick={() => handleClick('btn4')}
                        className={cn(styles.tabBarItem, { [styles.active]: activeButton === 'btn4' })}
                        href={'/'}
                    >
                        <div className={styles.light}></div>
                        <div className={styles.tabBarIcon}>
                            <HomeIcon fill={activeButton === 'btn4' ? 'white' : 'gray'} />
                        </div>
                        <p className={styles.tabBarText}>Мой Иви</p>
                    </Link>
                    <Link
                        onClick={() => handleClick('btn5')}
                        className={cn(styles.tabBarItem, { [styles.active]: activeButton === 'btn5' })}
                        href={'/'}
                    >
                        <div className={styles.light}></div>
                        <div className={styles.tabBarIcon}>
                            <MoreIcon fill={activeButton === 'btn5' ? 'white' : 'gray'} />
                        </div>
                        <p className={styles.tabBarText}>Мой Иви</p>
                    </Link>
                </div>
            </footer>
        </>
    );
};
